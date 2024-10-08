// global object instead of window object
console.log(global);

// commonJS modules instead of ES6 modules
const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("./math");
// require("./math");

console.log(add(23, 7));

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

// missing some JS APIs like fetch
