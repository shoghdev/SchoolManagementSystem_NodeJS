const jwt = require("jsonwebtoken");
const config = require("../config");

const verifyUser = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    res.status(400).json({ message: "Unauthorized user..." });
  }
  const verifiedToken = jwt.verify(token, config.token);
  if (!verifiedToken) {
    res.status(400).json({ message: "Token expired" });
  }

  req.userId = verifiedToken.userId;
  next();
};
