const express = require("express");
let app = express();

app.use(express.json());
app.listen(4000, "localhost", () => {
  console.log("Server started");
});





const  {
    getallStudentDetails,
    createStudent,
    createStudentBulk,
    getStudentbyid,
    updateStudentbyId,
    deleteStudentbyId
} = require('./studentApi.js')

const {
    getTeacherDetails,
    createTeacher,
    createTeacherBulk,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById
} = require('./teacherApi.js')


app.get('/students', getallStudentDetails)
app.post('/student', createStudent)
app.post('/students',createStudentBulk)
app.get('/student/:id',getStudentbyid)
app.put('/student/:id',updateStudentbyId)
app.delete('/student/:id',deleteStudentbyId)

app.get('/teachers', getTeacherDetails)
app.post('/teacher', createTeacher)
app.post("/teachers", createTeacherBulk);
app.get("/teacher/:id", getTeacherById);
app.put("/teacher/:id", updateTeacherById);
app.delete("/teacher/:id", deleteTeacherById);


