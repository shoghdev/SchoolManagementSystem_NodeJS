const { readFromFile, writeFile } = require("../helpers/utiles");
const config = require("../config");

const addNewTeacher = (req, res) => {
  const { name, subject } = req.body;
  console.log(name, subject);
  const teacherFile = config.teacherFile;
  const teachers = readFromFile(teacherFile);
  if (!name || !subject) {
    res.status(400).send({ message: "Fill all the fields" });
  }

  if (!name.lenght < 6) {
    res.status(400).send({ message: "Name lenght must be more that 6 chars" });
  }

  const newTeacher = {
    id: Date.now(),
    name,
    subject,
  };

  teachers.push(newTeacher);
  writeFile(config.filepathTeacher, teachers);
  res.status(200).json({
    name: newTeacher.name,
    subject: newTeacher.subject,
  });
};

const getAllTeachers = (req, res) => {
  const teachers = readFromFile(config.filepathTeacher);
  res.status(200).json(teachers);
};

module.exports = { addNewTeacher, getAllTeachers };
