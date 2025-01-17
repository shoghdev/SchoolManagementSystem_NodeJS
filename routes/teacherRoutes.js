const express = require("express");
const {
  addNewTeacher,
  getAllTeachers,
} = require("../controllers/teacherController");
const router = express.Router();

router.post("/", addNewTeacher);
router.get("/", getAllTeachers);

module.exports = router;
