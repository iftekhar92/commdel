/* 
 * To handle the schema and return all models at once to got global
 */
var mongoose = require('mongoose');
exports.Schemas = {
    Users : require('./schemas/Users'),
    Home : require('./schemas/Home')
}


