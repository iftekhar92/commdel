/* 
 * To handle the User collection in the connected database means a User model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HomeSchema = new Schema({
    title:{
        type: String,required:true
    },
    slug:{
        type: String,required:true
    },
    keywords:{
        type: String
    },
    description:{
        type: String
    },
    created_date:{
        type:Date,default:Date.now()
    },
    updated_date:{
        type:Date,default:Date.now()
    }
});
module.exports = mongoose.model('HomeModel',HomeSchema);


