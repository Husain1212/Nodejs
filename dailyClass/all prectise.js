// const fs = require("fs");
// const data = fs.readFileSync("input.txt", { encoding: "utf-8" });
// fs.writeFile("outputs.txt", data, (err) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log("Success");
// });

// console.log("hello worlds")

// const fs = require("fs");
// fs.readFile("other.js", { encoding: "utf-8" }, (err, data2) => {
//   if (err) throw err;
//   console.log("data2", data2);
//   fs.writeFile("output.txt", data2, (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//     console.log("Success");
//   });
// });
// console.log("Hello...........");


// const fs = require("fs");
// const data = fs.readFileSync("input.txt", { encoding: "utf-8" });
// fs.writeFileSync("output.txt", data);
// console.log("Hello");

// const fs = require("fs");
// const data = fs.readFileSync("input.txt", { encoding: "utf-8" });
// // console.log(data);
// fs.writeFileSync("output.txt",data)
// console.log(data)

// const fs = require("fs/promises");
// async function writeFileFn(data) {
//   try {
//     await fs.writeFile("output.txt", data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// const data = fs.readFile("input.txt", { encoding: "utf-8" }, (err, data2) => {
//   if (err) throw err;
//   console.log("data2", data2)})
// writeFileFn(data);



const fs = require('fs')
const data = fs.readFile('input.txt',(err,data)=>{
  if(err) throw err;
  console.log(data.toString())
})

fs.writeFile("output.txt",data ,function(err,data){
  console.log(data)
  console.log(err)
})