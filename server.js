const express = require('express');

const mongoose = require('mongoose');

const postsRouter = require ('./routes/posts');

const authRouter = require('./routes/auth');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/posts', postsRouter);

app.use('/auth', authRouter);

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser:true, useUnifiedTopology:true})

    .then(() => {

        console.log('Successful connection to MongoDB');

        app.listen(3001, () => {

            console.log('Server is live on port 3001');

        });

    })

    .catch((err) => {

        console.error('Unsuccessful connection to MongoDB', err);

});