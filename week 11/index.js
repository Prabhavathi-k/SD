const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/students', studentRoutes); // Secured student routes

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
