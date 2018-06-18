$(document).ready(()=>{
    $('.box').hide();

    $(window).click((e)=>{
        if(!$(e.target).is('.btn')){
            $('.box').hide('1000');
            $('.clicked').show();
            $('html').removeClass('bg');
            console.log(e.target)
        }
    });
    $('.clicked').click(()=>{
        $('.box').show('10000');
        $('.clicked').hide();
        $('html').addClass('bg');
    });
});