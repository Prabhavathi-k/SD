const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access token is missing' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' });
    req.user = user; // Attach user data to request
    next();
  });
}

module.exports = authenticateToken;
