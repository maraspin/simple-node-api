const express = require('express');
const converter = require('csvtojson').Converter;
const fs = require("fs");

const app = express();
const port = 8000;

const csvFileName = "./data/people.csv";

//new converter instance
var csvConverter = new converter({trim:true,delimiter:";"});

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(jsonObj){

	require('./app/routes')(app, jsonObj);

	app.listen(port, () => {
  		console.log('We are live on ' + port);
	});

});

fs.createReadStream(csvFileName).pipe(csvConverter);