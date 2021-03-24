$(document).ready(function() {
    $('img').click(function(){
        $(this).hide();
    });
    $('#restore_btn').click(function(){
        $('img').show();
    });
});