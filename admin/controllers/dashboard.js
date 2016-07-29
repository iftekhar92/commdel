var async = require('async');
/* 
 * To handle users directly with model
 */
module.exports = {
    index: function (req, res) {
        var sess = req.session;
        if (sess.userInfo) {
            res.render('dashboard', {title: 'Commdel Consulting: Dashboard'});
        } else {
            res.render('login', {msg: '', title: 'Chat Application Login'});
        }
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    },
};


