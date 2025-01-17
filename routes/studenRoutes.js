const express = require("express");
const {
  addNewStudent,
  getAllStudents,
  getStudentsProgress,
} = require("../controllers/studentController");
const router = express.Router();
const verifyUser = require("../middlewares/authMiddleware");

router.post("/", addNewStudent);
router.get("/", getAllStudents);
router.get("/:id/progress", verifyUser, getStudentsProgress);

module.exports = router;
