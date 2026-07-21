const fs = require("fs");
const allcontect = fs.readdirSync(".", {recursive: true});
console.log(allcontect);
