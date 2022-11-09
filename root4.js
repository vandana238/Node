const express = require('express')
const app = express()
app.get('/first.html', (req, res) => {
    res.send("running")
    console.log('Hellooooooooooooooooo!')
  })
.listen(4778)
app.get('/get',function(req,res){
    Name=req.query.ename;
    pass=req.query.pass;
    result={name:Name,pass:pass}

    console.log(result);
    res.end(JSON.stringify(result));

})
console.log('server running http://127.0.0.1:4778');