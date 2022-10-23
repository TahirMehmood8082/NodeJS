const path = require('path');
const file1 = path.basename('C:\\temp\\myfile.html');
const file2 = path.dirname('C:\\temp\\myfile.html');
// console.log(file1)
// console.log(file2)
const file3 = path.extname(__filename)
console.log(__filename, file3)