var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var a=app.listen(8085,()=>{
console.log("running")
})
var User_details=[{

"username":"swetha",
"id":101,
"mail":"s@gmail.com"
},

{
"username":"vandhana",
"id":102,
"mail":"v@gmail.com"
},

{
"username":"roja",
"id":103,
"mail":"r@gmail.com"
}
]
app.use(bodyParser.json())
app.put("/Update/:id",(req,res)=>
{
var uid=req.params['id'];
console.log(uid)
var upname={name:req.body.username};
console.log(upname.name)
var update_name=upname.name

var index=User_details.findIndex((elements)=>
{
return (elements.id==uid)
})

if(index>=0)
{
const updated_details=User_details[index]

updated_details.username=update_name;
// console.log(updated_details)
User_details[index]=(updated_details)
res.json(User_details)
console.log(User_details)
}
else{
res.status(404)
}

}).listen(8057)
