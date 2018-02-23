const router = require('express').Router();

router.get('/', function(req, res){
    res.status(200).json();
});

/* Mock Success */
router.post('/authentication', function(req, res){
    res.status(200).json({
        token: req.body.username + '-' + req.body.password
    });
});

router.post('/registration', function(req, res){
    res.status(200).json({
        token: req.body
    });
});

/* Mock Error
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
*/

module.exports = router;