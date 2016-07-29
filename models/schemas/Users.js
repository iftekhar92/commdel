/* 
 * To handle the User collection in the connected database means a User model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id:
    {
       type: Number
    },
    name:{
        type: String,required:true
    },
    email:{
        type: String,required:true
    },
    password:{
        type: String
    },
    status:{
        type: Number,default:0
    },
    role:{
        type: Number,default:1
    },
    createdOn:{
        type:Date,default:Date.now()
    }
});
module.exports = mongoose.model('UserModel',UserSchema);


