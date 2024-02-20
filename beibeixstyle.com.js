jQuery(document).ready(function($) {
    $('#nf-contact-form-container').on('click', 'li', function(){
        let radio = $(this).find('input')
        if(radio.is(':checked')){
            radio.next('label').addClass('checked2');
        }
    })
});
