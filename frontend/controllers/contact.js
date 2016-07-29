var async = require('async');
/* 
 * To handle users directly with model
 */
module.exports = {
    // the function to handle login page and after submit the page 
    index: function (req, res) {
        res.render('contact/index', {
            title: 'Contact | Commdel',
            keywords:'',
            description: ''
        });
    },
};


