const express = require('express');

const router = express.Router();

const User = require('../models/user');

router.post('/register', (req,res) => {

    const {username,password} = req.body;

    if (username.length < 6) {

        return res.status(400).json({message: 'Username length must be at least 6 characters'});

    }

    if (password.length < 6) {

        return res.status(400).json({message: 'Password length must be at least 6 characters'});
    }

    const uppercaseRegex = /[A-Z]/;

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if(!uppercaseRegex.test(password) || !specialCharRegex.test(password)) {

        return res.status(400).json({message: 'Please include at least one special character and one uppercase letter'});
    }

    const newUser = new User({username,password});

    newUser.save().then(() => {

        res.json({message:'Successful user registration!'});

    })

    .catch((err) => {

        console.error(err);

        res.sendStatus(404);

    });

});

router.post('/login', (req,res) => {

    const {username,password} = req.body;

    User.findOne({username,password}).then((user) => {

        if (user) {

            res.json({message:'Login Successful'});

        } else {

            res.status(401).json({message:'The provided credentials do not match an existing user'});

        }

    })

    .catch((err) => {

        console.error(err);

        res.sendStatus(404);

    });

});

module.exports = router;