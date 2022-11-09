const express = require('express');
const app = express();
const uuid = require('uuid')
const uniqueid = uuid.v4
var MongoClient = require('mongodb').MongoClient;
const port = 6087
var server = app.listen(port, function () {
    console.log("listening 127.0.0.1:", port);
})
const uri = "mongodb+srv://vandana:vandana23@cluster0.sbgc1y5.mongodb.net/datanew?retryWrites=true&w=majority"

if (uri) { console.log("connected") }
else { console.log("not connected") }
const employe = [{ empid: uuid.v4(), ename: "chelluri", department: "IT" },
{ empid: uuid.v4(), ename: "pandu", department: "IT" },
{ empid: uuid.v4(), ename: "pinky", department: "managment" }]
console.log(employe)
app.get('/:empid', (req, res) => {
    var uid = req.params.empid;
    var index = employe.findIndex(u_id => {
        return (u_id.empid == uid)
    })
    console.log(index)
    if (index >= 0) {
        res.status(200).send({ data: employe[index], status: true, message: "succesfully" })
        console.log(employe[index])
    }
    else {
        res.status(200).send({ data: "error", status: false, message: "user not found" })
    }
    res.send(employe)
})
app.post('/post', (req, res) => {
    var details = [
        {
            empid: req.body.empid,
            ename: req.body.ename,
            department: req.body.department
        }
    ]
    st = details.push(employe)
    res.send(details)
    if (st) {
        res.status(200).send({ data: employe, status: true, message: "succesfully" })
    }
    else {
        res.status(200).send({ data: "error", status: false, message: "user not found" })
    }
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
app.delete('/rmv/:empid', (req, res) => {
    console.log(employe)
    empid = req.params['empid'];
    for (i = 0; i < employe.length; i++) {
        if (employe[i].empid == empid) {
            sn = employe.splice(employe[i], 1)
        }
    }
    res.send(details)
    res.json(employe)

})


