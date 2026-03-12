import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

const SECRET = "mysecretkey";

// Login route → create token
app.post('/login', (req, res) => {

   const { user } = req.body;

   const token = jwt.sign({ user }, SECRET, { expiresIn: '1h' });

   res.json({ token });

});


// Middleware to verify token
const verifyToken = (req, res, next) => {

   const authHeader = req.headers['authorization'];

   const token = authHeader && authHeader.split(' ')[1];

   if (!token) {
      return res.status(401).json({
         error: 'Access denied. No token provided.'
      });
   }

   jwt.verify(token, SECRET, (err, decoded) => {

      if (err) {
         return res.status(403).json({
            error: 'Invalid token.'
         });
      }

      req.user = decoded.user;

      next();

   });
};


// Protected route
app.get('/profile', verifyToken, (req, res) => {

   res.json({
      message: "Welcome to your profile",
      user: req.user
   });

});


// Start server
app.listen(3000, () => {
   console.log("Server running on http://localhost:3000");
});