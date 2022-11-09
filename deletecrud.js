var express=require('express');
var app = express();
app.use(express.json());
 students={
   "user1": { id:1,Name:"vandhana",m1:89,m2:85,m3:98,m4:98},
   "user2": { id:2,Name:"chelluri",m1:89,m2:85,m3:98,m4:98},
   "user3": { id:3,Name:"pinky",m1:89,m2:85,m3:98,m4:98},
   "user4": { id:4,Name:"chinna",m1:89,m2:85,m3:98,m4:98},
   "user5": { id:5,Name:"tinki",m1:89,m2:85,m3:98,m4:98},
   "user6": { id:6,Name:"harily",m1:89,m2:85,m3:98,m4:98}}
// app.get('/students',function(req,res){
// res.json(students)
//  })
var bodyParser=require('body-Parser');
var urlencodedParser=bodyParser.urlencoded(
{
    extended:true
}
)
app.get('/:user',(req,res)=>{
uid=req.params['user'];
console.log(uid)
delete students[uid]
res.send(students)
})

.listen(8086,()=>{
   console.log("127.0.0.1:9018");
   })

