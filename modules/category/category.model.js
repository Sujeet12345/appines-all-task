var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    title:{
        type: String, 
        lowercase: true, 
        unique:true,
        required: [true, "Can't be blank"], 
        index: true
    },
    description:{
        type:String
    },
    productCount:{
        type:Number,
        default:0
    },
    product: [{type: Schema.Types.ObjectId, ref: 'Product',default:[]}],
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

