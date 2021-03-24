$(document).ready(function() {
    $('img').hover(function(){
        var next = $(this).attr("data-alt-src");
        $(this).attr("src", next);
    }, function(){
        var original = $(this).attr("data-org-src"); 
        $(this).attr("src", original);
    });
});