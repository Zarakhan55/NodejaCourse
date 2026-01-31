import express from 'express';

const app = express();
app.use(express.json());

app.get('/calc/:num1/:num2/:op', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const op = req.params.op;

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      error: "Please provide valid numbers"
    });
  }

  let result;

  if (op === 'add') {
    result = num1 + num2;
  } 
  else if (op === 'sub') {
    result = num1 - num2;
  } 
  else if (op === 'mul') {
    result = num1 * num2;
  } 
  else if (op === 'div') {
    if (num2 === 0) {
      return res.status(400).json({
        error: "Cannot divide by zero"
      });
    }
    result = num1 / num2;
  } 
  else {
    return res.status(400).json({
      error: "Invalid operation"
    });
  }

  res.json({
    num1,
    num2,
    operation: op,
    result
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
