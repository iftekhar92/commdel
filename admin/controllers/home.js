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
              //console.log(req.body);
              var inputData = new Schemas.Gallery({image:req.body.image_hidden,path:rootPath + '/public/uploads/',captions:req.body.captions,types:"home_page_slider",orders:req.body.display_orders,createdOn:Date.now()});
                inputData.save(function(err,result){
                 //   console.log(err);
                   if (err) {
                           // throw new Error('oh no');
                        }else{
                          res.redirect('/admin/home');
                          res.end();
                        }
                });
            }
            res.render('home/create', {title: 'Commdel Consulting: Home'});
        } else {
            res.render('login', {msg: '', title: 'Chat Application Login'});
        }
    },
    upload: function (req, res) {
          if (req.method === 'POST') {
                var fileExtension = [".jpg", ".jpeg", ".png", ".gif"];
                var busboy = req.busboy;
                busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
                    var ack ='';
                    var msg ='';
                    var random_string = fieldname + filename + Date.now() + Math.random();
                    newFilename = crypto.createHash('md5').update(random_string).digest('hex');
                    var ext = path.extname(filename).toLowerCase();
                    if (ext != "")
                    {
                        if (fileExtension.indexOf(ext) != -1)
                        {
                            newFilename = newFilename + ext;
                            image =newFilename;
                            fstream = fs.createWriteStream(rootPath + '/public/uploads/' + newFilename);
                            file.pipe(fstream);
                            ack ='OK';
                            msg ="File Upload successfully";
                        } else {
                            ack ='Error';
                            msg ="Invalid File";
                        }
                    } else {
                        ack ='Error';
                        msg ="Please select valid file";
                    }
                    arr = {ack:ack,msg:msg,file_name:newFilename};
		    res.jsonp(arr);
                });
                req.pipe(busboy);
            }
    }
};


