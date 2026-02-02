import express from 'express';

const app = express();
app.use(express.json());

// Fake database (array)
let students = [
  { id: 1, name: "Ali", course: "Node.js" },
  { id: 2, name: "Ahmed", course: "React.js" },
  { id: 3, name: "Aisha", course: "Vue.js" }
];


// =====================
// GET → Read students
// =====================
app.get('/students', (req, res) => {
  res.status(200).json({
    success: true,
    data: students
  });
});


// =====================
// POST → Create student
// =====================
app.post('/students', (req, res) => {
  const student = req.body;

  if (!student.id || !student.name || !student.course) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  students.push(student);

  res.status(201).json({
    success: true,
    message: "Student created",
    data: student
  });
});


// =====================
// PUT → Update student
// =====================
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  student.name = req.body.name || student.name;
  student.course = req.body.course || student.course;

  res.json({
    success: true,
    message: "Student updated",
    data: student
  });
});


// =====================
// DELETE → Remove student
// =====================
app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  students.splice(index, 1);

  res.json({
    success: true,
    message: "Student deleted"
  });
});


// =====================
// Server Start
// =====================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
