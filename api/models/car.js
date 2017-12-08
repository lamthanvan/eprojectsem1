'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var carSchema = new Schema({
    brandIcar{
        type: String,
        required :'Brand is require'
    },
    rocId: {
        type: String
    }
    name: {
        type: String,
        index: true,
        required: 'Name of brand is require'
    },
    spec: { //specification
        type: {type: Schema.Types.ObjectId}
        color: {type: String},
        door: Number,
        seat: {type: Number},
        fuel: {type: Number},
        weight: {type: Number},

    },
    price: Number, 
    year: Number, 
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