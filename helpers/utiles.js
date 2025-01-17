const fs = require("node:fs");

function readFromFile(filepath) {
  const data = fs.readFileSync(filepath);
  return JSON.parse(data);
}

function writeFile(filepath, data) {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

module.exports = { readFromFile, writeFile };
