const express = require('express')
const app = express()
app.get('/',function (req,res){
  res.send("running")
})

app.get('/retrive', function (req, res) {
  res.send('Hello World')
})
// app.post('/create', (req, res) => {
//   res.send("its working")
//   console.log('Hellooooooooooooooooo!')
// })

app.listen(4778)
console.log('server running http://127.0.0.1:4778');