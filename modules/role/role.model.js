var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const RoleSchema = new Schema({
    shopName: {
        type: String
    },
    status:{
        type:Number,
        default:1
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    updatedAt: {
        type: Number,
        default: Date.now()
    },
}, {
        versionKey: false
    });
module.exports = mongoose.model('Role', RoleSchema);