var express=require('express');
var app = express();
var bodyParser = require('body-parser');

    
app.use(express.json());
app.get('/',function(req,res){
res.send("hello");
})
const students={
    id:1,
    Name:"vandhana",
    m1:89,
    m2:85,
    m3:98,
    m4:98,
    m5:78,
   }
// {
//     id:2,
//     Name:"chelluri",
//     m1:65,
//     m2:38,
//     m3:98,
//     m4:75,
//     m5:78,
//     },
// {
//     id:3,
//     Name:"vandhu",
//     m1:68,
//     m2:45,
//     m3:78,
//     m4:34,
//     m5:78,
//     }]

app.get('/students',(req,res)=>{
 var totalmarks=students.m1+students.m2+students.m3+students.m4+students.m5
 var percentage=students.totalmarks/500;
   students["percentage"]=percentage;
students["totalmarks"]=totalmarks;
    if(percentage>=80)
   console.log("A") 
    if(percentage>=60)
   console.log("B")
    if(percentage>=40&&35)
    console.log("c")
    if(percentage<=34)
    console.log("f")
    else 
   console.log("not qualified")
   
  
}).listen(3050,()=>{
    console.log("127.0.0.1:3050");
    
    })

app.get('/students',function(req,res){
res.json(students)
})
app.get('/students/:id',function(req, res){
var newData = students.filter(item=>item.id.toString() === req.params.id);
return res.send(newData);
})
app.use(bodyParser.urlencoded({extended:false}));
app.post('/students1',(req,res)=>
{
const addstudents=req.body
students.push(addstudents);
res.json(students);
console.log(students)
})

