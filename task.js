var express=require('express');
var app = express();
app.use(express.json());
app.get('/',function(req,res){
res.send("hello");
})
const students=[{
    id:1,
    Name:"vandhana",
    m1:89,
    m2:85,
    m3:98,
    m4:98,
    m5:78,
   } ,
 {
        id:2,
        Name:"chelluri",
        m1:65,
        m2:38,
        m3:98,
        m4:75,
        m5:78,
        },
    {
        id:3,
        Name:"vandhu",
        m1:68,
        m2:45,
        m3:78,
        m4:34,
        m5:78,
        }]

   app.get('/students',(req,res)=>{
   for(i=0;i<students.length;i++){
   totalmarks=students[i].m1+students[i].m2+students[i].m3+students[i].m4+students[i].m5
   average=totalmarks/5
   percentage= average/5;
   students[i]['percentage']=percentage;
   if(students[i].m1<35 && students[i].m2<35 && students[i].m3<35 && students[i].m4<35 && students[i].m5<35){
    students[i]['grade']="fail"
   }
   else
   {
   if(students.percentage>=81 && students.percentage<=100)
   {
   students[i]['grade']="A"
   }
   else if(students.percentage>=51 && students.percentage<=80)
   {
   students[i] ['grade']="B"
   }
   else if(students.percentage>50 && students.percentage<=35)
   {
   students[i]['grade']="c"
   }
   else{
    students[i]['grade']="fail"
   }
}}
   res.json(students)
    }).listen(9011,()=>{
   console.log("127.0.0.1:9011");
   })



   //get method