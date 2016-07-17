var async = require('async');
var _ = require('underscore');
var path = require('path');
var crypto = require('crypto');
var fs = require('fs');
/* 
 * To handle users directly with model
 */
module.exports = {
    index: function (req, res) {
        var sess = req.session;
        if (sess.userInfo) {
            res.render('home/index', {title: 'Commdel Consulting: Home'});
        } else {
            res.render('login', {msg: '', title: 'Chat Application Login'});
        }
    },
    addSlider: function (req, res) {
        var sess = req.session;
        var errorType = '';
        if (sess.userInfo) {
            
            if (req.method === 'POST') {

                var fileExtension = [".jpg", ".jpeg", ".png", ".gif"];
                var busboy = req.busboy;
                busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
                    var random_string = fieldname + filename + Date.now() + Math.random();
                    newFilename = crypto.createHash('md5').update(random_string).digest('hex');
                    var ext = path.extname(filename).toLowerCase();
                    if (ext != "")
                    {
                        if (fileExtension.indexOf(ext) != -1)
                        {
                            /*file.on('data', function(chunk) {
                             size += chunk.length;
                             console.log(size); 
                             });*/
                            newFilename = newFilename + ext;
                            image =newFilename;
                            fstream = fs.createWriteStream(rootPath + '/public/uploads/' + newFilename);
                            var upload_status = file.pipe(fstream);
                            errorType = "success";
                            busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
                                
                            });
                        } else {
                            errorType = "invalid file";
                        }
                    } else {
                        console.log(ext);
                    }
                    
                   /* var inputData = new Schemas.Gallery({ image:newFilename,path:rootPath + '/public/uploads/',captions:'test',types:'home_page_slider',orders:'1'});
		     inputData.save(function(err,result){
                         console.log(result);
                     }); */
                });
                req.pipe(busboy);
            }
            res.render('home/create', {title: 'Commdel Consulting: Home'});
        } else {
            res.render('login', {msg: '', title: 'Chat Application Login'});
        }
    }
};


