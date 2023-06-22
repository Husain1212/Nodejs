### <!-- Api to register a student -->

```
URL : www.wecodeacademy.in/api/v1/student
Method Type : POST
Request Param : No
Path Param : No
Request Body : Yes
Request Headers : Yes
Response Headers :Content Type : application/json

Request Body :
{ name : "Taiyab Husain",
Father Name : "Mohd farid"
mobile : 8290063838,
age : 29;,
email: "taiyabhusain@gmail.com",
address : "Jaipur",
pincode : 302012
batchName : ["Nodejs", "Js"] }

Response Body {
Status : True,
message : "Your details are Succesfully added",
}
Response Body {
errrorMessage : "Not Found",
statusCode : 404
}
Response Body{
errrorMessage : "Erro while retrieving data",
statusCode : 500
}
```

### <!-- Api to get all student details -->

```
URL : www.wecodeacademy.in/api/v1/student
Method Type : GET
Request Param : No
Path Param : No
Request Body : NO
Request Headers : NO
Response Headers :Content Type : application/json

Response Body : {
Data : [
{ name : "Husain",
mobile : 657877788,
email: "husain@gmail.com",
age : 24,
Father Name : "ISamil"
pincode : 302012
address : "Jaipur",
batchName : ["Js","Nodejs"] } ,

    { name : "Adil khan",
    mobile : 9787767888,
    email: "Adil@gmail.com",
    age : 22,
    Father Name : "khan",
    pincode : 341500,
    address : "Nagour",
    batchName : ["Js"] } ,

    { name : "Khalil Ahemad",
    mobile : 8777767658,
    email: "Khalil@gmail.com",
    age : 27,
    Father Name : "Moin khan",
    address : "Merta City",
    pincode : 341510,
    batchName : ["Nodejs"] } ,

    { name : "Ahemad",
    mobile : 8777767658,
    email: "Ahemad@gmail.com",
    age : 29,
    Father Name : "sayed",
    address : "Ajmer",
    pincode : 305001,
    batchName : ["HTML","CSS","Js","Nodejs"] }
    ]

}

Response Body {
statusCode : 200
message : "Succesfully",
}
Response Body {
statusCode : 404
errrorMessage : "Not Found"
}
Response Body{
statusCode : 500
errrorMessage : "Erro while retrieving data"
}
```

### <!-- Api to get student detail by id -->

```
URL : www.wecodeacademy.in/api/v1/student/002
Method Type : GET
Request Param : No
Path Param : Yes
Request Body : NO
Request Headers : NO
Response Headers :Content Type : application/json

Response Body :
{
name : "Husain",
id : 002
mobile : 657877788,
email: "husain@gmail.com",
age : 24,
Father Name : "ISmail",
pincode : 302012
address : "Jaipur",
batchName : ["Js","Nodejs"]
}

Response Body {
statusCode : 200
message : "Details show Succesfully",
}
Response Body {
statusCode : 404
errrorMessage : "Not Found"
}
Response Body{
statusCode : 500
errrorMessage : "Erro while retrieving data"
}
```

### <!-- Api to get student detail by id, by name, by age -->

```
URL : www.wecodeacademy.in/api/v1/student/003?name=Adil&age=22
Method Type : GET
Request Param : Yes
Path Param : NO
Request Body : NO
Request Headers : NO
Response Headers :Content Type : application/json

Response Body :
{
name : "Adil",
id : 003
mobile : 9787767888,
email: "Adil@gmail.com",
age : 22,
Father Name : "khan",
pincode : 341500,
address : "Nagour",
batchName : ["Js"]
}

Response Body {
statusCode : 200
message : "Details show Succesfully",
}
Response Body {
statusCode : 404
errrorMessage : "Not Found"
}
Response Body{
statusCode : 500
errrorMessage : "Erro while retrieving data"
}
```

### <!-- Api to get student detail by id, by name, by age, by mobile, by email, by fathername, by address, by pincode -->

```
URL : www.wecodeacademy.in/api/v1/student/003?name=Adil&age=22&mobile=9787767888&email="Adil@gmail.com"&Father%20%20Name=khan&address=Nagour&pincode=341500
Method Type : GET
Request Param : Yes
Path Param : NO
Request Body : NO
Request Headers : NO
Response Headers :Content Type : application/json

Response Body {
statusCode : 200
message : "Details show Succesfully",
}
Response Body {
statusCode : 404
errrorMessage : "Not Found"
}
Response Body{
statusCode : 500
errrorMessage : "Erro while retrieving data"
}
```

### <!-- Api to get all teacher details -->

```
URL : www.wecodeacademy.in/api/v1/teacher

Method Type : GET
Request Param : No
Path Param : No
Request Body : NO
Request Headers : NO
Response Headers :Content Type : application/json

Response Body : {
Data : [
{
name : "Sajid",
proffesiom = "teacher",
Salary : 50000,
mobile : 7878781786,
email: "Sajid@gmail.com",
age : 32,
Father Name : "sehjad_Ali"
pincode : 302012
address : "Jaipur",
TeacherExpert : ["Js","Nodejs"] } ,

    { name : "Sharukh",
    proffesiom = "teacher",
    Salary : 35000,
    mobile : 6787899900,
    email: "Sharukh@gmail.com",
    age : 25,
    Father Name : "Sahil",
    address : "Ajmer",
    pincode : 305001,
    TeacherExpert : ["HTML","CSS","Reactjs","ReactNetive"] }
    ]

}

Response Body {
statusCode : 200
message : "Succesfully Run",
}
Response Body {
statusCode : 404
errrorMessage : "Not Found"
}
Response Body{
statusCode : 500
errrorMessage : "Erro while retrieving data"
}
```

### <!-- Api to get teacher details by id  -->

```
URL : www.wecodeacademy.in/api/v1/teacher/T001

Method Type : GET
Request Param : No
Path Param : YES
Request Body : NO
Request Headers : NO
Response Headers :Content Type : application/json

Response Body : {
Data : [
{
name : "Sajid",
id = T001
proffesiom = "teacher",
mobile : 7878781786,
email: "Sajid@gmail.com",
age : 32,
Father Name : "sehjad_Ali"
pincode : 302012
address : "Jaipur",
TeacherExpert : ["Js","Nodejs"] } ]
}
```

### <!-- Api to get teacher details by name  -->

```
URL : www.wecodeacademy.in/api/v1/teacher/?name="Sajid

Method Type : GET
Request Param : YES
Path Param : NO
Request Body : NO
Request Headers : NO
Response Headers :Content Type : application/json
```

### <!-- Api to get all batch details  -->

```
URL : www.wecodeacademy.in/api/v1/batch

Method Type : GET
Request Param : NO
Path Param : NO
Request Body : NO
Request Headers : NO
Response Headers :Content Type : application/json
```

### <!-- Api to get batch details by batchName -->

```
URL : www.wecodeacademy.in/api/v1/batchName?batchname=["HTML","CSS","Js","Nodejs"]

Method Type : GET
Request Param : YES
Path Param : NO
Request Boby : No
Request Headers : No
Response Headers :Content Type : application/json
```

### Api to update student Data

### Api to add teacher salary

### Api to add a new teacher

### Api to update batch details

### Api to delete batch

### Api to delete student

### Api to delete teacher
