const router = require('express').Router();

router.get('/', function(req, res){
    res.status(200).json();
});

router.post('/authenticate', function(req, res){
    res.status(200).json({
        token: req.body.username + '-' + req.body.password
    });
});

module.exports = router;