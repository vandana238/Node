var express=require('express')
var app=express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const std=[
    { id:1010,
        name:"vandhana",
        department:"development"
    },
    {    id:1020,
        name:"nadini",
        department:"recruitment"
    }]
app.put('/put/:id',(req,res)=>
{
var details=[
        {
    id:req.params.id,
    name:req.body.name,
    department:req.body.department,
        }
    ]
// per=req.params['id']
details.push(std)
res.send(std)
})
.listen(7382,()=>{
    console.log("server is running")

})
