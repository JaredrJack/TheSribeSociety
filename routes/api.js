require('dotenv').config();

const express = require('express');

const router = express.Router();

const axios = require('axios');

router.get('/api/posts', (req,res) => {

    axios.get('https://bing-news-search1.p.rapidapi.com/news', {

    headers: {'X-RapidAPI-Key':'process.env.API_KEY',},

    })

    .then((response) => {

        const posts = response.data;

        res.json(posts);

    })

    .catch((error) => {

        console.error(error);

        res.sendStatus(404);

    });

});

module.exports = router;