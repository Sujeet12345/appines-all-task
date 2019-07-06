var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    categoryId:{
        type:Schema.Types.ObjectId,
        ref: 'Category'
    },
    title:{
        type: String
    },
    volume:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },
    status:{
        type: Number,
        default:1
    },
    createdAt:{
        type: Number,
        default:Date.now()
    },
    updatedAt:{
        type: Number,
        default:Date.now()
    },
    },{
    versionKey: false 
});
module.exports = mongoose.model('Product', ProductSchema);

