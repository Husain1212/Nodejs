const fs = require("fs")
const path = require("path")
const { isError } = require("util")
let folderName = "Whatsapp"
const innerFolders = ["user","android","media","image","send"]
let isErr = false;

for(let value of innerFolders){
  if (!isErr) {
    try{
       fs.mkdirSync(folderName)
       folderName = path.join(folderName,value)
       console.log(folderName)
    } catch (err){
      isErr = true;
      console.log(err);
    }
 } else{
  break;
 }
}

for (let i = 1; i <= 5; i++) {
  const fileName = fs.writeFileSync(folderName + "/" + `file${i}.txt`)
}
console.log(folderName)
