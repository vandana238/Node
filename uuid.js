import crypto from crypto;

if(crypto){
    let id;
    if('randomUUID' in crypto)
    console.log('randomUUID')
    id=crypto.randomUUID();
}
else{
    console.log('randomvalues')
}
var express=require('express');
var app = express();
app.use(express.json());
const uuid =require('uuid')
const uniqueid=uuid.v4
console.log(uuid);


