var express = require('express');  
var app = express();  
var bodyParser= require('body-parser');
var Ankit = require('./data.js');
// const MongoClient = require('mongodb').MongoClient

const accountsid="AC9e4b32a2901c9038e0db2d6a65f7d9c9";
const authtoken="639f5e1ae7e18a82d3e17f7ad85ae926";

const client=require('twilio')(accountsid,authtoken);



const mongoose = require('mongoose');



mongoose.connect('mongodb://ankit:ankit123@ds241737.mlab.com:41737/ankit');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
      console.log("Connected To MongoLab Cloud Database :p");
});




// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {  
   res.sendfile('./first.html'); 
});

app.post('/',function(req,res){
	var n= req.body.n1;
	var p= req.body.p1;
	
	var x = new Ankit({
		name: n,
		value: p

	})

	x.save((function (err,res) {
		if(err)
			throw err;
		console.log(res);

		client.messages.create({
			to:'+919927031169',
			from: '+15124123971',
			body: 'hello '+n
		}).then((message)=>{console.log(message.sid)})
		
	}));
res.send("name is:  "+n+"pass is:  "+p);



});

var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  