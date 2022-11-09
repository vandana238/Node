var express=require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.json());
app.get('/',function(req,res){
res.send("hello");
})
var students =[
{
id:1,
name:"vandhana"
},
{
id:2,
name:"chelluri"
}
]
app.get('/students',function(req,res){
res.json(students)
})
app.use(bodyParser.urlencoded({extended:false}));
app.post('/students1',(req,res)=>
{
const adduser1=req.body
students.push(adduser1);
res.json(students);
console.log(students)
}).listen(9011)
console.log("127.0.0.1:9011");

//post create