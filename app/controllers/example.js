var express = require('express');
var router = express.Router();

router.get('/example', function(req, res) {
	res.render('example/index', {
		pageTitle: 'Example Home',
		pageID: 'examplehome'
	});
});

module.exports = router;
