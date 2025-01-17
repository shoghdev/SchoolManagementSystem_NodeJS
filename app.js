const express = require("express");
const app = express();
const config = require("./config");
const studentRouter = require("./routes/studenRoutes");
const teacherRouter = require("./routes/teacherRoutes");
const coursesRouter = require("./routes/couressRoute");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/students", studentRouter);
app.use("/enrollments", coursesRouter);
app.use("/teachers", teacherRouter);
app.use("/courses", coursesRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running ${config.HOST}:${config.PORT}`);
});
