/* 
 * To define the route for apis
 */
require('../module');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

// from here all the routing will handle and provide proper controller and models to them
exports.apply = function (app) {
    
    app.all('*', $.setMyViews);
    app.get('/', $.controller('home').index);
    app.get('/industry/',$.controller('industry').index);
    app.get('/products/',$.controller('products').index);
    app.get('/services/',$.controller('services').index);
    app.get('/company/',$.controller('company').index);
    app.get('/contact/',$.controller('contact').index);
};


