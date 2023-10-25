const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


app.post('/employee', async (req, res) => {
  try {
    const empdata = req.body; // Assuming you have middleware to parse the request body
    const newEmployee = new Employee(empdata);
    await newEmployee.save(); // Save the new employee to the database
    res.status(201).json(newEmployee); // Respond with the saved employee data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving data.' });
  }
});

app.listen(3001, () => {
  console.log('Server is Running');
});
