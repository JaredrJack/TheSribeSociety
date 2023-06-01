const express = require('express');

const router = express.Router();

const multer = require('multer');

const upload = multer({dest:'uploads/'});

const Post = require('../models/post');

router.get('/', (req,res) => {

    Post.find({isApproved: true}).then((posts) => {

        res.json(posts);

    })

    .catch((err) => {

        console.error(err);

        res.sendStatus(404);

    });

});

router.get('/admin/posts', (req,res) => {

    Post.find({isReviewed:true, isApproved:false})

    .then((posts) => {

        res.json(posts);

    })
    
    .catch((err) => {

        console.error(err);

        res.sendStatus(404);

    });

});

router.patch('/admin/posts/:id/approve', (req,res) => {

    const postId = req.params.id;

    Post.findByIdAndUpdate(postId, {isApproved:true}, {new:true})

    .then((updatedPost) => {

        res.json(updatedPost);

    })

    .catch((err) => {

        console.error(err);

        res.sendStatus(404);

    });

});

router.post('/', upload.single('file'), (req,res) => {

    const newPost = new Post({

        firstName: req.body.firstName,

        lastName: req.body.lastName,
        
        email: req.body.email,

        phoneNumber: req.body.phoneNumber,

        file: req.file ?req.file.filename :'',

    });

    newPost

    .save().then((savedPost) => {

        res.json(savedPost);
    
    })

    .catch((err) => {

        console.error(err);

        res.sendStatus(404);

    });

});

module.exports = router;