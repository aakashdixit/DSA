// Files --> Create Read Update Delete

 let fs = require("fs");

// let buffer = fs.readFileSync("abc.js")
//  console.log("Buffer :" + buffer)

 //fs.openSync("abc.text", "w")

//  fs.writeFileSync("abc.text", "I am learning JAvascript from pepcoding")

//  fs.appendFileSync("abc.text", " I am enjoying it")

//Make folder
//fs.mkdirSync("dir_frm_code")

//fs.writeFileSync("dir_frm_code/merifile.txt", "Mera Content")

//Read Content of directory
//let content = fs.readdirSync("Lecture-${i}")
// console.log(content)

//Remove content of directory Iteratively
// for (let i=0; i< content.length; i++){
//     console.log("file " , content[i], "is removed")
//     fs.unlinkSync("Lecture-${i}/" + content[i])
// }

// Remove Directory
 //fs.unlinkSync("Lecture -$(i)" + readme.md)
 //fs.rmdirSync("Lecture-${i}")

//fs.existsSync --> if a file exist at a path
// fs.lstatSync --> to check if it is a file or a directory


// Create 10 directories with files in them

for(let i=1; i<=10; i++){
    let dirPathToMAke = `Lecture -${i}`;
   // fs.mkdirSync(dirPathToMAke)
    fs.writeFileSync(dirPathToMAke + "\\" + "readme.md", `#readme for ${dirPathToMake}`)
}