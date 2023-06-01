const express = require('express');

const router = express.Router();

const Post = require('../models/post');

router.get('/posts', (req,res) => {

    Post.find({isReviewed:true, isApproved:false}).then((posts) => {

        res.render('admin/posts',{posts});

    })

    .catch((err) => {

        console.error(err);

        res.sendStatus(404);

    });
    
});

router.patch('/posts/:id/approve', (req, res) => {

    const postId = req.params.id;

    Post.findByIdAndUpdate(postId, {isApproved:true}, {new:true}).then((updatedPost) => {

        res.redirect('/admin/posts');

    })

    .catch((err) => {

        console.error(err);

        res.sendStatus(404);

    });

});

module.exports = router;