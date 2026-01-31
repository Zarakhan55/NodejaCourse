import express from 'express';

const app = express();
app.use(express.json());

// Fake database (array)
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 30000 }
];


// =====================
// GET → Read products
// =====================
app.get('/products', (req, res) => {
  res.status(200).json({
    success: true,
    data: products
  });
});


// =====================
// POST → Create product
// =====================
app.post('/products', (req, res) => {
  const product = req.body;

  if (!product.id || !product.name || !product.price) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  products.push(product);

  res.status(201).json({
    success: true,
    message: "Product created",
    data: product
  });
});


// =====================
// PUT → Update product
// =====================
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;

  res.json({
    success: true,
    message: "Product updated",
    data: product
  });
});


// =====================
// DELETE → Remove product
// =====================
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  products.splice(index, 1);

  res.json({
    success: true,
    message: "Product deleted"
  });
});


// =====================
// Server start
// =====================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
