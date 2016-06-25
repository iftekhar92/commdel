var async = require('async');
/* 
 * To handle users directly with model
 */
module.exports = {
    
    index: function (req, res) {
        res.render('dashboard', {title: 'Welcome to Admin'});
        /*if(req.user){
         res.render('index',{title:'Chat Application',email:req.user.username,id:'$.user:'+req.user._id});
         }else{
         res.render('login',{title:'Chat Application Login'});
         }*/
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    },
};


