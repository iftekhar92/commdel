var async = require('async');
/* 
 * To handle users directly with model
 */
module.exports = {
    // the function to handle login page and after submit the page 
    index: function (req, res) {
        res.render('services/index', {
            title: 'Services | Commdel',
            keywords:'',
            description: ''
        });
    },
};


