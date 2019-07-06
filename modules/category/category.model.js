var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    name:{
        type: String
    },
    createdAt:{
        type: Number,
        default:Date.now()
    },
    status:{
        type: Number,
        default:1
    },
    updatedAt:{
        type: Number,
        default:Date.now()
    },
    },{
    versionKey: false 
});
module.exports = mongoose.model('Category', CategorySchema);

