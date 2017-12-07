'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var brandSchema = new Schema({
    name: {
        type: String,
        required: 'Name of brand is require'
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        lowercase: true,
        trim: true
    },
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
var
// module.exports = mongoose.model('Tasks', TaskSchema);