$(document).ready(function(){
    $('#addClass_btn').click(function(){
        $('.section-1 h1').addClass("red");
    });
    $('#hide_btn').click(function(){
        $('.section-1 h1').hide();
    });
    $('#show_btn').click(function(){
        $('.section-1 h1').show();
    });
    $('#before_btn').click(function(){
        $('.section-1 h1').before('<p>Before</p>');
    });
    $('#after_btn').click(function(){
        $('.section-1 h1').after('<p>After</p>');
    });
    $('#append_btn').click(function(){
        $('.section-1 h1').append('<p>Append</p>');
    });
    $('#html_btn').click(function(){
        $('.section-1 h1').html('<p>HTML</p>');
    });
    $('#valtext_btn').keyup(function(){
        var value = $('#valtext_btn').val();
        $('.section-1 h1').text(value);
    });

    $('#toggle_btn').click(function(){
        $('.section-2 img').toggle();
    });
    $('#slideToggle_btn').click(function(){
        $('.section-2 img').slideToggle();
    });
    $('#slideUp_btn').click(function(){
        $('.section-2 img').slideUp();
    });
    $('#slideDown_btn').click(function(){
        $('.section-2 img').slideDown();
    });
    $('#fadeIn_btn').click(function(){
        $('.section-2 img').fadeIn();
    });
    $('#fadeOut_btn').click(function(){
        $('.section-2 img').fadeOut();
    });
    $('#attr_btn').click(function(){
        $('.section-2 img').attr("width", "100");
    });
});