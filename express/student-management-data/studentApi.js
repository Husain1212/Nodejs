const fs = require("fs");
let students = JSON.parse(fs.readFileSync("students.json", "utf-8"));

const getallStudentDetails = (req,res)=>{
    let response = {
        status : "Sucess",
        data : {
            students,
        }
    }
    res.status(200).json(response)
}

const createStudent = (req,res)=>{
    const body = req.body
    let id = students[students.length - 1].id+1
    let obj = Object.assign({id:id},body)
    console.log(obj,body);
    students.push(obj)
    fs.writeFileSync("students.json",JSON.stringify(students),"utf-8")
    res.send("created new student data")
}

const createStudentBulk = (req,res)=>{
let studentbody = req.body
for(let student of studentbody){
    let id = students[students.length-1].id + 1
    let obj = Object.assign({id:id},student)
    students.push(obj)
}
fs.writeFileSync("students.json",JSON.stringify(students),"utf-8")
res.send("Done")
}

const getStudentbyid = (req,res)=>{
    // console.log(req.params)
    let id = +req.params.id
    // console.log(id)
    let data = students.filter((student)=>{
        return student.id=== id
    })
    res.send(data)
}

const updateStudentbyId = (req,res)=>{
    let id = +req.params.id
    let index= students.findIndex((student)=>{
        return student.id=== id
    })
    students[index] = Object.assign({},req.body)
    fs.writeFileSync("students.json",JSON.stringify(students),"utf-8")
    console.log(req.body);
res.send("updated")   
}

const deleteStudentbyId = (req,res)=>{
    let id = req.params.id
    let index = students.findIndex((student)=>{
        return student.id === id;
    })
    students.splice(index,1)
    fs.writeFileSync("students.json",JSON.stringify(students),"utf-8")
    res.send("Delete data")

}

module.exports = {
    getallStudentDetails,
    createStudent,
    createStudentBulk,
    getStudentbyid,
    updateStudentbyId,
    deleteStudentbyId
}