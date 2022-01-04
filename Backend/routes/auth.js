const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/auth');
const User = require('../models/User.js');

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/users/:username', async (request , response) => {
    try {
       // let { email, password } = request.body;
        let users = await User.find({username:request.params.username});
       // console.log(users);
        response.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error : error.message
        });
    }
});

router.get('/users', async (request , response) => {
    try {
       // let { email, password } = request.body;
        let users = await User.find();
       // console.log(users);
        response.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error : error.message
        });
    }
});


module.exports = router;