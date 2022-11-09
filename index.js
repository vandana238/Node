var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('nodee'));
app.get('/first.html', function (req, res) {

}).listen(4778)


app.post('/post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      Name: req.body.ename,
      Pass: req.body.pass
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

console.log('server running http://127.0.0.1:4778');