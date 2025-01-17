const { readFromFile, writeFile } = require("../helpers/utiles");
const config = require("../config");

const addNewStudent = (req, res) => {
  const { name, email } = req.body;
  const pattern = "/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/";
  const studentFile = config.filepathStudents;
  const students = readFromFile(studentFile);
  if (!name || !email) {
    res.status(400).send({ message: "Fill all the fields" });
  }

  if (name.lenght < 6) {
    res.status(400).send({ message: "Name lenght must be more that 6 chars" });
  }

  //    if(!pattern.match(email)) {
  //     res.status(400).send({message:"Email format is not correct: test@example.com"})
  //    }

  const newStudent = {
    id: Date.now(),
    name,
    email,
  };

  students.push(newStudent);
  writeFile(config.filepathStudents, students);
  res.status(200).json({
    name: newStudent.name,
    email: newStudent.email,
  });
};

const getAllStudents = (req, res) => {
  const students = readFromFile(config.filepathStudents);
  res.status(200).json(students);
};

const getStudentsProgress = (req, res) => {
  const id = req.params.id;
  const courses = readFromFile(config.filepathCousrses);
  const progress = courses.filter((course) =>
    course.students.find((item) => item == id),
  );
  const courseTitle = progress.map((item) => item.name);

  res.status(200).json(courseTitle);
};

module.exports = { addNewStudent, getAllStudents, getStudentsProgress };
