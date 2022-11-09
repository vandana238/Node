var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var a=app.listen(8085,()=>{
console.log("running")
})
var students=[{"id":1,"user":"swetha"},{"id":2,"user":"vandhana"}]
app.use(bodyParser.json())
app.put("/Update/:id",(req,res)=>
{
var uid=req.params['id'];
console.log(uid)
var upname={name:req.body.user};
console.log(upname.name)
var update_name=upname.name

var index=students.findIndex((elements)=>//check wheather given is matched or not
{
return (elements.id==uid)
//if matched get into the loop
})
if(index>=0)
{
const updated_details=students[index]
//assign std up details to std index
updated_details.user=update_name;
//upd in userdetails
students[index]=(updated_details)
res.json(students)
console.log(students)
}
else{
res.status(404)
}

}).listen(8058)
