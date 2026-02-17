import express from 'express';
const app = express();
app.use(express.json());

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
    const{ username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);{
        return res.json({
            success: true,
            message: 'Login successful',
        });
    }
    return res.status(401).json({
        success: false,
        message: 'Invalid username or password',
    });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});