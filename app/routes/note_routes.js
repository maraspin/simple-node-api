module.exports = function(app, people) {

   // Returns a list of people
   app.get('/', (req, res) => {

	res.writeHead(403, {"Content-Type": "text/html"});
	res.end("You're not supposed to be here...");

  });


  // Returns whether checked person is suspected or not
  app.get('/check/:id', (req, res) => {

  	var id = parseInt(req.params["id"]);

  	if (id < 1 || id > 100) {
		// Not found!
		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("Station Not Found");
		res.end();
  	}

	var working = true;

	console.log(id);
	koStations = [8,11,13,19,27,29,31,37,39,57,58,59,60,61,62,63,64,67,68,93];

	for (var i = 0; i < koStations.length; i++) {
	  	if (koStations[i] === id) {
	    	working = false;
	    	break;
	  	}
	}

	var result = new Object();
	result.id = id;
	result.working = working;

    res.send(JSON.stringify(result));
	return;

  });

};