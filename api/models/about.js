'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var aboutSchema = new Schema({// Rangge of car
    title: {
        type: String,
        index: true,
        required: 'Title is require'
    },
    content :{type: String, required: 'post content is require'},
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: Number,
            enum: [-1, 0, 1]
        }],
        default: 1
    }
});

// module.exports = mongoose.model('Tasks', TaskSchema);