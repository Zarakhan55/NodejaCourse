// Allow frontend (React/HTML) to talk with backend (Express).
import express from 'express';
import cors from 'cors';

const app = express();

// enable CORS
app.use(cors());

// middleware to read JSON
app.use(express.json());

// test route
app.get('/test', (req, res) => {
  res.send("CORS Working");
});

// home route
app.get('/', (req, res) => {
  res.send("Server Running");
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
