require("dotenv").config();
const path = require("node:path");
class Config {
  static HOST = process.env.HOST || "localhost";
  static PORT = process.env.PORT || 3001;
  static filepathTeacher = path.join(__dirname, "./data/teachers.json");
  static filepathStudents = path.join(__dirname, "./data/students.json");
  static filepathCousrses = path.join(__dirname, "./data/courses.json");
  static token = process.env.SECRET_KEY;
}

module.exports = Config;
