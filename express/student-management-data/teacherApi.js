const fs = require("fs");
let teachers = JSON.parse(fs.readFileSync("teachers.json", "utf-8"));

const getTeacherDetails = (req, res) => {
  let response = {
    status: "Sucess",
    data: {
      teachers,
    }
  }
  res.status(200).json(response)
}




const createTeacher = (req, res) => {
  let body = req.body;
  let id = teachers[teachers.length - 1].id + 1;
  console.log(id)
  let obj = Object.assign({ id: id }, body)
  console.log(obj, body)
  teachers.push(obj)
  fs.writeFileSync("teachers.json", JSON.stringify(teachers), "utf-8")
  res.send("New teacher Data has created")
}

const createTeacherBulk = (req, res) => {
  const teacherBody = req.body;
  for (let teacher of teacherBody) {
    const id = teachers[teachers.length - 1].id + 1;
    let obj = Object.assign({ id: id }, teacher);
    teachers.push(obj);
  }
  fs.writeFileSync("teacher.json", JSON.stringify(teachers), "utf-8");
  res.status(200).send(`created ${JSON.stringify(teacherBody)}`);
};

const getTeacherById = (req, res) => {
  let id = parseInt(req.params.id);
  let teacher = teachers.filter((teacher) => teacher.id === id);
  console.log(id);
  console.log(teacher)
  if (!teacher || teacher.length === 0) {
    res.status(404).send({
      status: "failure",
      message: "Teacher not found with the given id",
      data: {},
    });
  }
  res.status(200).send({
    status: "success",
    data: {
      Teacher: teacher[0],
    },
  });
};

const updateTeacherById = (req, res) => {
  let id = parseInt(req.params.id);
  let index = teachers.findIndex((teacher) => teacher.id === id);
  teachers[index] = Object.assign({}, req.body);
  fs.writeFileSync("teacher.json", JSON.stringify(teachers), "utf-8");
  res.send("Updated ");
};

const deleteTeacherById = (req, res) => {
  let id = parseInt(req.params.id);
  let index = teachers.findIndex((teacher) => teacher.id === id);
  teachers.splice(index, 1);
  fs.writeFileSync("teacher.json", JSON.stringify(teachers), "utf-8");
  res.send("Deleted");
};


module.exports = {
  getTeacherDetails,
  createTeacher,
  createTeacherBulk,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById
}