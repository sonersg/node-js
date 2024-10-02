// sync events work step by step and it doesn't go to next step until the current step completed
// async events don't wait to go next step

const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
  console.log("middle");

  writeFile("./async-result.txt", `async-result text file ${data}`, (err) =>
    console.log(err)
  );
});

console.log("end");
