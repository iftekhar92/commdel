/* 
 * To handle production enviroment and define the config accordingly
 */
var express = require('express');
mongoose = require('mongoose');
exports.config = function (app) {
    mongoose.connect('mongodb://localhost/commdel', function(err) {
        if (err) {
            //log4js.getLogger().error('Can not connect to database');
            throw err;
        }

        //log4js.getLogger().info('Successfully connected to database');
    });
    /// catch 404 and forwarding to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


