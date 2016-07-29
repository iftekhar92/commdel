$(document).ready(function () {

    $("#image").change(function (event) {
       var webRootPath ='http://localhost:3000/';
        var files;
        files = event.target.files;

        var data = new FormData();
        $.each(files, function (key, value)
        {
            data.append(key, value);
        });
        var e = new Array("jpeg", "jpg", "png", "gif");
        var n = "";
        for (i = 0; i < files.length; i++) {
            var r = $.trim(files[i].name), l = r.substr((Math.max(0, r.lastIndexOf(".")) || 1 / 0) + 1).toLowerCase();
            -1 == $.inArray(l, e) ? n = "1" : (sizeKb = parseInt(files[i].size) / 1024, sizeMb = parseInt(sizeKb) / 1024, sizeMb > 5 && (n = "1"))
        }
        if ("" != n) {
            $('#file_handling_error').html("Logo couldn't be uploaded. Logo should be less than 5 MB and saved as JPG, PNG or GIF files.");
        } else {

            $("#file_handling_error").html('<img src="/img/ajax-loader-img.gif" align="center">');
            $.ajax({
                url: webRootPath + 'admin/home/upload',
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (data, textStatus, jqXHR)
                {
                   // console.log(data);
                    var msg = data.msg;
                    var fileName = data.file_name;

                    if (data.ack == 'OK') {
                        $("#file_handling_error").html(msg).css('color', 'green');
                        $('.image_preview').html('<img width ="100" src ="/uploads/' + fileName + '" />');
                        $('#image_hidden').val(fileName);
                    } else {
                        $("#file_handling_error").html(msg).css('color', 'red');
                    } 
                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        }
    });
});