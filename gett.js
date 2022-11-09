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
    }]
    app.get('/:empid',(req, res) => {
        var uid=req.params.empid;
        var index= employe.findIndex(u_id=>{
        return (u_id.empid == uid)
        })
        console.log(index)
        if(index >= 0){
            res.status(200).send({data:employe[index],status:true,message:"succesfully"})
        console.log(employe[index])
       }
        else{
            res.status(200).send({data:"error",status:false,message:"user not found"})
        }
        res.send(employe)
        
    })
// app.put('/put/:empid', (req, res) => {
//     var details = [
//         {
//             empid: req.params.empid,
//             ename: req.body.ename,
//             department: req.body.department
//         }
//     ]
    
//     var uid=req.params['empid'];
//     console.log(uid)
//     var upname={name:req.body.ename};
//     console.log(upname.name)//yuva
//     var update_name=upname.name
    
//     var index=employe.findIndex((elements)=>
//     {
//     return (elements.empid==uid)
//     })
//     //console.log(index)
//     if(index>=0)
//     {
//     const details=empid[index]
//     // console.log(updated_details.username) //swetha
//     updated_details.username=update_name;
//     // console.log(updated_details)
//     details[index]=(details)
//     res.json(details)
//     console.log(details)
//     res.send(employe)
//     console.log(employe)
//     }
//     else{
//     res.status(404)
//     }
    



// }).listen(8080);
console.log('Server running at http://127.0.0.1:8080');