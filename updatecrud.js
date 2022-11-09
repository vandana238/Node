var express=require('express');
var app = express();
var bodyParser = require('body-parser');
const { Router } = require('express');
const router = express.Router();
app.use(express.json());
app.get('/',function(req,res){
res.send("hello");
})
var students =[
{id:1,name:"vandhana"},
{id:2,name:"chelluri"}
]
app.get('/students',(req,res)=>{
res.json(students)
})
// // router.patch('/:id',async (req,res,next)=>{
// //     const id=req.params.id;
// //     const updates=req.body;
// //     const option={new:true}
// //     const result=await students.findByIdAndUpdate();
// })
 app.put('/update/:id',(req,res)=>{
     const{id,name}=req.body.name;
 //  const id=req.params.id;
     console.log(id,name)
     res.json(students)
     return res.send("data sucessfully updated!!");
 }).listen(3050,()=>{
    console.log("127.0.0.1:3050");
    })
