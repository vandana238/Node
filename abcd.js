var express = require('express')
var app = express()
app.listen(9019,() => {
    console.log("server is running")
})
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const employe = [
    {   empid: 1010,
        ename: "vandhana",
        department: "development"
    },
    {
        empid: 1020,
        ename: "pravlika",
        department: "recruitment"
    },
    {
        empid: 1030,
        ename: "divya",
        department: "human_resource"
    },
    {
        empid: 1040,
        ename: "sruthi",
        department: "human_resource"
    },
    {
        empid: 1050,
        ename: "bhavani",
        department: "devlopment"
    },
    {
        empid: 1060,
        ename: "rupa",
        department: "sales"
    },
    {
        empid: 1070,
        ename: "bindhu",
        department: "devlopment"
    },
    {
        empid: 1080,
        ename: "chelluri",
        department: "IT"
    },
    {
        empid: 1090,
        ename: "pandu",
        department: "IT"
    },
    {
        empid: 2000,
        ename: "pinky",
        department: "managment"
    },

]

app.get('/employe/:empid',(req, res) => {
    var uid=req.params.empid;
    var index= employe.findIndex(u_id=>{
    return (u_id.empid == uid)
    })
    console.log(index)
    if(index >= 0){
    req.send({data:employe[index],status:true,message:"sucesssfully"})
    console.log(employe[index])
   }
    else{
        res.status(200).send({data:"error",status:false,message:"user not found"})
    }
    // res.send(employe)
    // console.log(employe)
})
// app.put('/put/:empid',(req, res) => {
//     var details = [
//         {
//             empid: req.params.empid,
//             ename: req.body.ename,
//             department: req.body.department
//         }
//     ]
//     details.push(employe)
//     res.send(details)
//     var index =employe.findIndex((elements) => {
//         return (elements.empid == uid)
//         })
     
//         if (index >= 0) {
//         const employe =employe[index]
//         console.log(employe.ename)
//         employe.ename =ename;
     
//         employe[index] = employe;
//         res.send({ status: true, data:employe, Message: "Details Updated" })
//         console.log(employe)
//         }
//         else {
//         res.status(200).send({ status: false, data: "error", message: "Details Not Updated" })
//         }
//     })  

