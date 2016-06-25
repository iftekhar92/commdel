var express = require('express')
        , session = require('express-session')
        , app = express()
        , passport = require('passport')
        , http = require('http').Server(app)
        , io = require('socket.io')(http)
        , path = require('path')
        , cookieParser = require('cookie-parser')
        , bodyParser = require('body-parser')
        , redis = require('redis')
        , url = require('url')
        , busboy = require('connect-busboy');
app.use(busboy())
        , multer = require('multer');

var RedisStore = require('connect-redis')(session),
        rClient = redis.createClient({}),
        sessionStore = new RedisStore({client: rClient});

/*global varibale define start*/
global.Schemas = require('./models').Schemas;
global.rootPath = __dirname;
/*global varibale define end*/

// include common functions
global.func =require('./components/functions.js');

// Enable CORS
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    next();
};

app.use(allowCrossDomain);

// define the configuration
app.set('port', process.env.PORT || 2000);
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({store: sessionStore, secret: 'ifti92', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

// check enviroment and the use config accordingly
require('./routes/index.js').apply(app);
require('./frontend/config/route.js').apply(app);
require('./admin/config/route.js').apply(app);
if ('development' == app.get('env')) {
    require('./config/env/dev').config(app);
} else {
    require('./config/env/prod').config(app);
}
http.listen(2000, function () {
    console.log('Express server listening on port *:' + app.get('port'));
});



