var express = require('express');
var app = express();

var firebase = require("firebase");
var user = "0";

firebase.initializeApp({
  serviceAccount: "serviceAccountCredentials.json",
  databaseURL: "https://databaseName.firebaseio.com"
});


var token = firebase.auth().createCustomToken(user);

process.stdout.write("token: " + token);



app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('앱은 http://%s:%s 에서 작동 중입니다.', host, port);
});