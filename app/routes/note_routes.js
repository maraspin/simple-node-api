module.exports = function(app, people) {

   // Returns a list of people
   app.get('/', (req, res) => {

	res.writeHead(200, {"Content-Type": "text/html"});
	console.log("People List Requested");

	for(var i = 0; i < people.length; i += 1){
		delete people[i].Suspect;
	}

	res.end(JSON.stringify(people));

  });


  // Returns whether checked person is suspected or not
  app.get('/check/:id', (req, res) => {

	console.log("Suspect Status Check Requested");

  	var suspect = false;
  	var id = req.params["id"];

	for(var i = 0; i < people.length; i += 1){
	    var person = people[i];
	    if(person.ID === id){

	    	if (person.Suspect == 1) {
	    		suspect = true;
		    }

		    var result = new Object();
		    result.id = id;
		    result.suspect = suspect;

		    // Return true or false whether person :id is a suspect or not
		    res.send(JSON.stringify(result));
			res.end();
		    return;
	    }
	}

	// Not found!
	res.writeHead(404, {"Content-Type": "text/html"});
	res.write("Person Not Found");
  	res.end();

  });

};