var express = require('express');
const MongoClient = require('mongodb').MongoClient;

var server = express();



server.get('/items' , function(req,res){



  //console.log("request object" , req.query);
  MongoClient.connect('mongodb://localhost:27017', function(err, client) {
    //assert.equal(null, err);
    console.log("Connected successfully to mongo server");
   
    const db = client.db('harshit');
    db.collection('items').find().toArray(function(err,data){
      if(err){
        res.send("Error" , err)
      }
      console.log("data from items" , data);
      res.send(data);


    })
  
  
   
    client.close();
  });



  
})



server.get('/harshit',function(req,res){

  console.log(">>>ewrhegwrhgewrg");

  res.send("Hello Harshit");
})


server.get('/getItems' , function(req,res){



})

server.listen(5000,function(){

console.log("Server is running and bound to response back");

})