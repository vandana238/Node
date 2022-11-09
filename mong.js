const express = require('express');
const { MongoRuntimeError } = require('mongodb');
const app=express();

var MongoClient = require('mongodb').MongoClient;
const port=8081
var server=app.listen(port,function(){
    console.log("listening 127.0.0.1:",port);
})
const uri="mongodb+srv://vandana:vandana23@cluster0.sbgc1y5.mongodb.net/datanew?retryWrites=true&w=majority"
const client = new MongoClient(uri);
async function run(){
    try{
        const database= client.db("datanew");
        power =database.collection("userorders")
    }
    finally{
        await client.close();
    }
}
run()




