$(document).ready(function() {
    $('img').click(function(){
        var current = $(this).attr('src');
        var alternate = $(this).attr('data-alt-src');
        $(this).attr('data-alt-src', current);
        $(this).attr('src', alternate);
    });
});