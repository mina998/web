jQuery(document).ready(function ($) {
    let width = $(window).width()
    if(width <= 400){
        $('.tt-col .tt-head').click(function(e){
            e.stopPropagation()
            let parent = $(this).parent('.tt-col')
            console.log(parent);
            if(parent.hasClass('tt-active')){
                parent.removeClass('tt-active');
            }else{
                parent.addClass('tt-active');
            }
        })
    }
});