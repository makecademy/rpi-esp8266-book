// Start
var express = require('express');
var app = express();
var piREST = require('pi-arest')(app);
var Sound = require('node-aplay');

// Set parameters
piREST.set_id('34f5eQ');
piREST.set_name('rpi');

// Route for ringbell
app.get('/doorbell', function(req, res) {
  new Sound('doorbell.wav').play();
  res.json({data: "Sound played"});
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});