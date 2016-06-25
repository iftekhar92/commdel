var async = require('async');
/* 
 * To handle users directly with model
 */
module.exports = {
    // the function to handle login page and after submit the page 
    index: function (req, res) {
        var a1 =Schemas.Home.find();
        console.log(a1);
        res.render('home/index',{
            title: 'Commdel | Commitment Delivered',
            keywords:'',
            description: 'Commdel is a Global professional services company offers various services like Product Engineering, software consulting, application development, etc.'
        });
    },
};


