const router = require('express').Router();
const ERROR = true;

router.get('/', function(req, res){
    res.status(200).json();
});

if (!ERROR) {
	/* Mock Success */
	router.post('/authentication', function(req, res){
		res.status(200).json({
			//token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
			token: req.body.username + '-' + req.body.password
		});
	});

	router.post('/registration', function(req, res){
		res.status(200).json({
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
			//token: req.body
		});
	});
} else {
	/* Mock Error */
	router.post('/authentication', function(req, res){
		res.status(200).json({
			error: 'INVALID_USER'
		});
	});

	router.post('/registration', function(req, res){
		res.status(200).json({
			error: 'USERNAME_UNAVAILABLE'
		});
	});
}

module.exports = router;