var async = require('async');
/* 
 * To handle users directly with model
 */
module.exports = {
    // the function to handle login page and after submit the page 
    index: function (req, res) {
        res.render('login', {title: 'Admin Login'});
        /*if(req.user){
         res.render('index',{title:'Chat Application',email:req.user.username,id:'$.user:'+req.user._id});
         }else{
         res.render('login',{title:'Chat Application Login'});
         }*/
    },
};


