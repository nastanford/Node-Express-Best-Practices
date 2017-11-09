var express = require('express');
var router = express.Router();

/* Route - /  (ROOT) */
router.get('/', function(req, res) {
	res.render('index', {
		pageTitle: 'Home',
		pageID: 'home'
	});
});

/* Route - About */
router.get('/about', function(req, res) {
	res.render('about', {
		pageTitle: 'About',
		pageID: 'about'
	});
});

module.exports = router;
