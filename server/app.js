var express = require('express');
var app = express();
var path=require('path');

app.listen(process.env.PORT || 7777, function(){ console.log("Running on local port 7777"); });

app.use( express.static( 'public' ) );

// base url
app.get( '/', function( req, res ){
  var file = req.params[0] || '/views/index.html';
res.sendFile(path.join(__dirname, '../public/', file));
});
//
// //spin up server
// app.listen( 7777, 'localhost', function( req, res ){
//   console.log( 'listening on 7777' );
// });
