/* 
 * To handle the User collection in the connected database means a User model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GallerySchema = new Schema({
    image:{
        type: String,required:true
    },
    path:{
        type: String,required:true
    },
    captions:{
        type: String
    },
    types:{
        type: String
    },
    orders:{
        type: String
    },
});
module.exports = mongoose.model('GalleryModel',GallerySchema);


