var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type: String
    },
    mainProductID:{
        type: Number
    },
    registrationTime:{
        type: String
    },
    lifeCycleState:{
        type: Number
    },
    alwaysMFSAuthentication:{
        type: Boolean,
        default:true
    },
    // web , android , ios
    loginBy:{
        type: String
    },
    deviceDetail:{
        type: Object
    },
    playerId:{
        type: String,
        default:null
    },
    firstTimeLogin:{
        type: Boolean,
        default:true
    },
    //prepaid (0),postpaid (1),hybrid(2)
    simType:{
        type:Number
    },
    customerDetails:{
      type:Object
    },
    // logiin by other number
    otherNumber:{
        type:Array,
        default:null
    },
    // to check other number
    isOtherNumber:{
        type:Boolean
    },
    //accepted rejected,pending
    profileUpdateStatus:{
        type:String
    },
    //request user to admin 
    copyCustomerDetails:{
        // to check kyc update
        mfsRegistrationRequest:{
            type:Boolean
        },
        email:{
            type: String
        },
        firstName:{
            type: String
        },
        lastName:{
            type: String
        },
        gender:{
           type: String
        },
        dateOfBirth:{
            type: String
        },
        docImgUrl:{
            type: String
        },
        docImgId:{
            type: String
        },
        address:{
            type: String
        },
        docType:{
            type: String
        },
        docNumber:{
            type: String
        }
    },
    // small sized publicId
    profileImage:{
      type:String
    },
    // small sized url
    profileImageUrl:{
        type:String
    },
    // original sized url
    originalProfileImageUrl:{
       type:String
    },
    // original sized publicId
    originalImage:{
        type:String
    },
    //only for recharge by voucher
    voucherNumber:{
       type: Number
    },
    // point system on recharge or transaction 
    point:{
        type: Number,
        default:0
    },
    password:{
        type: String
    },
    mobileNumber:{
        type: String
    },
    isNumberVerify:{
        type: Boolean,
        default:false
    },
    // isPasswordReset:{
    //     type: Boolean,
    //     default:false
    // },
    role:{
        type: String,
        default:"user"
    },
    numberVerifyCode:{
        type: Number
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

