var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
require('dotenv').config();


app.use(express.static('public'));
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors')
var corsOptions = {
	origin: process.env.ENABLE_CORS,
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.get('/usuarios', function (req, res) {
   fs.readFile(`${__dirname}/${process.env.MOCK_FILE_USER}`, function (err, data) {
      res.end(data);
   });
});

app.post('/usuarios', function (req, res) {
   console.log('gravando dados do usuário');
   const usrData = req.body;
   fs.writeFile(`${__dirname}/${process.env.MOCK_FILE_USER}`,
      JSON.stringify(usrData), function (err) { 
      });
   res.end("{ \"msg\": \"OK\" }");
});

app.get('/animais-resgatados', function (req, res) {
   fs.readFile(`${__dirname}/${process.env.MOCK_FILE_PETS}`, function (err, data) {
      res.end(data);
   });
});

app.post('/animais-resgatados', function (req, res) {
   console.log('gravando dados do usuário');
   const usrData = req.body;
   fs.writeFile(`${__dirname}/${process.env.MOCK_FILE_PETS}`,
      JSON.stringify(usrData), function (err) { 
      });
   res.end("{ \"msg\": \"OK\" }");
});


var server = app.listen(process.env.PORT, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Server running", host, port);
});
