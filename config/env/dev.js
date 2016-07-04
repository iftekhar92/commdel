/* 
 * To handle development enviroment and define the config accordingly
 */
var express = require('express');
mongoose = require('mongoose');
exports.config = function (app) {
   mongoose.connect('mongodb://localhost:27017/commdel', function(err) {
        if (err) {
            console.log(err);
        }else{
            console.log("connected to the database successfully.");
        }
    });
    
    /// catch 404 and forwarding to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}
