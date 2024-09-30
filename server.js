// global object instead of window object
console.log(global);
// commonJS modules instead of ES6 modules
const os = require("os");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
