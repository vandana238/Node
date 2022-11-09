var express = require('express')
var app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const employe = [
    {

        empid: 1010,
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

app.get('/employe', (req, res) => {
    res.send(employe)
    console.log(employe)
})
app.post('/post', (req, res) => {
    var details = [
        {
            empid: req.body.empid,
            ename: req.body.ename,
            department: req.body.department
        }
    ]

    details.push(employe)
    res.send(details)
})
app.put('/put/:empid', (req, res) => {
    var details = [
        {
            empid: req.params.empid,
            ename: req.body.ename,
            department: req.body.department
        }

    ]
    details.push(employe)
    res.send(details)
})
// app.put('/delt/:empid',(res,req)=>{
//     delete employe[empid]
//     delete employe[ename]
//     delete employe[department]
// })
// details.push(employe)
//     res.send(details)

app.listen(8082, () => {
    console.log("server is running")

})