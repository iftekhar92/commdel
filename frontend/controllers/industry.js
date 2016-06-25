var async = require('async');
/* 
 * To handle users directly with model
 */
module.exports = {
    // the function to handle login page and after submit the page 
    index: function (req, res) {
        res.render('industry/index', {
            title: 'Industry &amp; Expertise | Commdel',
            keywords:'',
            description: 'Commdel provides full range of Product Engineering Services from Ideation, Product Roadmap, R&amp;D, Product development and Maintenance, Systems Integration &amp; Program Management Services'
        });
    },
};


