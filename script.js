$(document).ready(()=>{
    $('#toggle-button').click(()=>{
        console.log("clicked");
        $('.nav-bar').slideToggle('slow');
    });

    $(window).click(function(event){
        if ($(window).width()<=710){
            if(!$(event.target).is('#toggle-button')){
                $('.nav-bar').hide('slow');
            }
        }
    });

    if ($(window).width() <= 710) {
        $('.nav-bar').hide();
    }else $('.nav-bar').show();

    $(window).on('resize',()=> {
        var win = $(this);
        if ($(win).width() <= 710) {
            $('.nav-bar').hide();
        }else $('.nav-bar').show();
    });
});