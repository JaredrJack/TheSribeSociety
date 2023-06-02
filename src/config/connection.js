const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodn://127.0.0,1:27017/',
    {
        useNewUrlParser: true,
        usUnifiedTopology: true,
    }
);

module.exports =mongoose.connection;
