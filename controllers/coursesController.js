const { readFromFile, writeFile } = require("../helpers/utiles");
const config = require("../config");

const getAllCourses = (req, res) => {
  const courses = readFromFile(config.filepathCousrses);
  res.status(200).json(courses);
};

const addEnrollments = (req, res) => {
  const { course_id, student_id } = req.body;
  const courses = readFromFile(config.filepathCousrses);
  const currentCourse = courses.find((cu) => cu.id === course_id);
  const updated = currentCourse.students.push(student_id);

  courses.map((item) => (item.id === updated.id ? (item = updated) : updated));
  writeFile(config.filepathCousrses, courses);
  res.status(200).json(courses);
};

module.exports = { getAllCourses, addEnrollments };
