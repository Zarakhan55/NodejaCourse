
// Q: What is JWT?
// A: A secure token used for authentication between client and server.
// npm install jsonwebtoken
    // jwt.sign() means/ “Create a digital key for this use

import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

const SECRET = "mysecretkey";

app.post('/login', (req, res) => {
  const { username } = req.body;

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

  res.json({ token });
});

app.listen(3000);
