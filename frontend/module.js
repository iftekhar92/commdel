/* 
 * To handle api module
 */
var fs = require('fs');
global.$ = {
    controller:function(name){
        return require('./controllers/' + name + '.js');
    },
    setMyViews : function(req, res, next) {
        req.app.set('views', __dirname + '/views');
        next();
    }
    
}


