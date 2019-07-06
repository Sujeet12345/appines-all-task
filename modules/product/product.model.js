var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    categoryId:{
        type:Schema.Types.ObjectId,
        ref: 'Product'
    },
    title:{
        type: Number
    },
    volume:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: Number
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

