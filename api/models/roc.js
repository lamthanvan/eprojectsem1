'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rocSchema = new Schema({// Rangge of car
    name: {
        type: String,
        index: true,
        required: 'Name of brand is require'
    },
    postId: Schema.Types.ObjectId,
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