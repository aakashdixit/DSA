// CHILD PROCESS 

let cp = require("child_process");

cp.execSync("calc");
console.log("opening chrome")
cp.execSync("start chrome https:\\www.pepcoding.com");

console.log("Pepcoding site opened")

let output = cp.execSync("node abc.js")

console.log("Output : " + output)


