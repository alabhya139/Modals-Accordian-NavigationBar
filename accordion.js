$(document).ready(()=>{
    $('.content').hide();

    $('.slide').click(function(){
        $('.content').slideToggle("slow");
    });
});