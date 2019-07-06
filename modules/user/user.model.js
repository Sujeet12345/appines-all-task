var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type: String
    },
    password:{
        type: String
    },
    mobileNumber:{
        type: String
    },
    roleId:{
        type: Schema.Types.ObjectId,
        ref:"Role"
    },
    email:{
        type: String, 
        lowercase: true, 
        unique:true,
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
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
module.exports = mongoose.model('User', UserSchema);

