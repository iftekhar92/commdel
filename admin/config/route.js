/* 
 * To define the route for apis
 */
require('../module');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

// from here all the routing will handle and provide proper controller and models to them
exports.apply = function (app){
    
    app.all('*',$.setMyViews);
    app.get('/admin',$.controller('login').index);
    app.post('/admin/index',$.controller('login').index);
    app.get('/admin/logout',$.controller('dashboard').logout);
    app.get('/admin/dashboard',$.controller('dashboard').index);
};


