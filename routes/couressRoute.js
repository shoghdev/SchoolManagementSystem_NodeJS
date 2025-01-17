const express = require("express");
const {
  getAllCourses,
  addEnrollments,
} = require("../controllers/coursesController");
const router = express.Router();

router.get("/", getAllCourses);
router.post("/", addEnrollments);

module.exports = router;
