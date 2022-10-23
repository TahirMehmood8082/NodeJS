const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })

//node intentialy block file by sync
// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

// fs.writeFile('file2.txt', "This is 2nd file data", ()=>{
//     console.log("written to the file")
// })

s_file = fs.writeFileSync('file2.txt', "This is 2nd file Sync data")
console.log(s_file)




console.log("Finished reading file")