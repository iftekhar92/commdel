var async = require('async');
/* 
 * To handle users directly with model
 */
module.exports = {
    // the function to handle login page and after submit the page 
    index: function (req, res) {
        var sess = req.session;
        if (sess.userInfo) {
            res.redirect('/admin/dashboard');
        } else {
            res.render('login', {msg: '', title: 'Chat Application Login'});
        }
    },
    // the function to handle login page
    login: function (req, res) {
        var sess = req.session;
        if (sess.userInfo) {
            res.redirect('/admin/dashboard/');
        } else {
            var email = req.body.email;
            var password = req.body.password;
            Schemas.Users.findOne({email: email, password: password}, function (err, data) {
                var ack, msg = '';
                if (err)
                {
                    return new Error("Error has been occured.");
                } else {
                    if (data)
                    {
                        if (data.status == 1)
                        {
                            sess.userInfo = data;
                            ack = 'OK';
                            msg = "";
                        } else {
                            msg = "Status is inactive";
                        }
                    } else {
                        msg = "Invalid username/password";
                    }
                }
                if (ack == 'OK')
                {
                    console.log("Loging Successfully." + sess.userInfo);
                    res.redirect('/admin/dashboard');
                } else {
                    console.log("Loging Failled.");
                    res.render('login', {msg: req.flash(msg), title: 'Chat Application Login'});
                }
            });
        }
    },
};


