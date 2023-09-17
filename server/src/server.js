var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
require('dotenv').config();


app.use(express.static('public'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors')
var corsOptions = {
	origin: process.env.ENABLE_CORS,
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.get('/usuario', function (req, res) {
   fs.readFile(`${__dirname}/${process.env.MOCK_FILE}`, function (err, data) {
      res.end(data);
   });
});

app.post('/usuario', function (req, res) {
   console.log('gravando dados do usuário');
   const usrData = req.body;
   fs.writeFile(`${__dirname}/${process.env.MOCK_FILE}`,
      JSON.stringify(usrData), function (err) { 
      });
   res.end("{ \"msg\": \"OK\" }");
});


var server = app.listen(process.env.PORT, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Server running", host, port);
});
