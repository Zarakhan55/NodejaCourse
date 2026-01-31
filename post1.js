import express from 'express';

const app = express();
// Converts incoming JSON data into JavaScript object
app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
    // Takes data sent from Postman / frontend
  const user = req.body;
  users.push(user);
  res.json({
    message: "User created",
    user
  });
});
let products = [];
app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.json({
    message: "Product received",
    product
  });
});


app.get('/products', (req, res) => {
  res.json(products);
});
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
