const express = require('express')
const app = express()
var bodyParser = require('body-parser');
 app.use(express.json)
 app.get('/',(req,res)=>{
    res.send("hello")
})
const students=[{
    id:1,
    Name:"vandhana",
    m1:89,
    m2:85,
    m3:98,
    m4:98,
    m5:78,
    total: " ",
    percentage:" "
},
{
    id:2,
    Name:"chelluri",
    m1:65,
    m2:38,
    m3:98,
    m4:75,
    m5:78,
    total: " ",
    percentage:" "

},
{
    id:3,
    Name:"vandhu",
    m1:68,
    m2:45,
    m3:78,
    m4:34,
    m5:78,
    total: " ",
    percentage:" "
}]
app.get('/students',(req,res)=>{
    res.json(students)
})
app.get('/students/:id',(res,req)=>{
    const newData=students.Filter(item=>item.id.tostring===req.params.id)
    return res.json(newData);
})
app.get('/students/',(req,res)=>{
    totalmarks=m1+m2+m3+m4+m5;
   percentage=(totalmarks/500)*100;
    if(marks>=80)
    console.log("A") 
    if(marks>=60)
    console.log("B")
    if(marks>=40&&35)
    console.log("c")
    if(marks<=34)
    console.log("f")
    else 
    console.log("not qualified")
})
app.post('/addstudents',(req,res)=>{
  const{id,Name}=req.body;
  console.log(id,Name);
  return res.send('data stored')
})
app.use(bodyParser.urlencoded({extended:false}));
app.post('/adduser',(req,res)=>
{
    
    const addstudents=req.body
    students.push(addstudents);
    res.json(students);
    console.log(students)
    })
.listen(4778,()=>{
    console.log("127.0.0.1:4778")
})
