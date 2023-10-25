const mongoose = require("mongoose");

// Define the schema for Employee data
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  contacts: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
