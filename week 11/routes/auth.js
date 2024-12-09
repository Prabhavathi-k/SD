const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const SECRET_KEY = 'your-secret-key';
const dataPath = path.join(__dirname, '../data/users.json');

// Helper functions to manage users
function getUserData() {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
}

function saveUserData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const users = getUserData();
  const existingUser = users.find(user => user.username === username);

  if (existingUser) return res.status(409).json({ message: 'Username already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);
  saveUserData(users);
  res.status(201).json({ message: 'User registered successfully' });
});

// Login a user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = getUserData();
  const user = users.find(user => user.username === username);

  if (!user) return res.status(404).json({ message: 'User not found' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.status(200).json({ token });
});

module.exports = router;
