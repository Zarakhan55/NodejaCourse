import express from 'express';
const app = express();
app.use(express.json());
app.post('/register',(req,res)=>{
    const {name,email,password} = req.body;
    if(name && email && password){
        return res.json({
            success: true,
            message: 'Registration successful',
        });
    }
    return res.status(400).json({
        success: false,
        message: 'Missing required fields',
    });
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});