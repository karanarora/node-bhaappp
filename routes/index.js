var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var db = req.db;
	var collection = db.get('user_bhaappp');
	collection.find({}, {}, function(e, docs){
		res.render('index', {'user_bhaappps': docs})
	});
});

router.get('/new_bhaappp', function(req, res){
	res.render('new_bhaappp', {title: 'Post your bhaappp message'});
});

router.post('/add_bhaappp', function(req, res){
	var db = req.db;
	
	var name = req.body.name;
	var bhaappp = req.body.bhaappp;

	var collection = db.get('user_bhaappp');

	collection.insert({
		"name": name,
		"bhaappp": bhaappp
	}, function(err, doc){
		if (err) {
			res.send("There was a problem adding the information to the database.");
		} else {
			res.redirect('/')
		}
	});
});

module.exports = router;
