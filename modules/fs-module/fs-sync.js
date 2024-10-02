// sync events work step by step and it doesn't go to next step until the current step completed
// async events don't wait to go next step

const fs = require("fs");

const first = fs.readFileSync("./first.txt", "utf8");
const second = fs.readFileSync("./second.txt", "utf8");

console.log(first, second);

fs.writeFileSync(
  "./sync-result.txt",
  `sync-result text file\nif it doesn't exist, new file will be created in this directory, ${first}-${second}`
);
