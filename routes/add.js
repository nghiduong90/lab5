var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here


		res.render('add'); 
		var newFriend = 
			{
				'name': req.query.name,
				'description': req.query.description,
				'imageURL': "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"
			}
		;


	  console.log("New friend added:");

	  console.log(newFriend);
	  data["friends"].push(newFriend);

	  	
}