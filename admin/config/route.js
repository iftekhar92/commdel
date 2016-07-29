/* 
 * To define the route for apis
 */
require('../module');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
/*passport.use(new LocalStrategy(
  function(email, password, done) {
    Users.findOne({ email: email,password:password }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
)); */

// from here all the routing will handle and provide proper controller and models to them
exports.apply = function (app){
    
    app.all('*',$.setMyViews);
    app.get('/admin',$.controller('users').index);
    app.post('/admin/login',$.controller('users').login);
    app.get('/admin/login/',$.controller('users').login);
    app.get('/admin/logout',$.controller('dashboard').logout);
    app.get('/admin/dashboard',$.controller('dashboard').index);
    app.get('/admin/home',$.controller('home').index);
    app.post('/admin/home',$.controller('home').index);
    app.get('/admin/home/addSlider',$.controller('home').addSlider);
    app.post('/admin/home/addSlider',$.controller('home').addSlider);
    app.post('/admin/home/upload',$.controller('home').upload);
};


