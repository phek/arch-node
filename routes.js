const router = require('express').Router();
const ERROR = false;

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
	
	router.post('/applications', function(req, res){
		res.status(200).json([
			{
				"competences": [
					{
					"competence": "Woop",
					"yearsOfExperience": 32
					},
					{
					"competence": "Test",
					"yearsOfExperience": 42
					},
					{
					"competence": "Test",
					"yearsOfExperience": 0
					}
				],
				"firstname": "asd",
				"availabilities": [
					{
					"fromDate": 1520467200,
					"toDate": 1521072000
					}
				],
				"email": "asd",
				"lastname": "asd"
			}
		]);
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