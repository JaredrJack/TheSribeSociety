const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    firstName: String,

    lastName: String,
    
    email: String,

    phoneNumber: String,

    file: String,

    isReviewed: {type: Boolean, default:false},

    isApproved: {type: Boolean, default:false},

});

module.exports = mongoose.model('Post', postSchema);