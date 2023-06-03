
jQuery(document).ready(function ($) {
    $('.woocommerce-variation.single_variation').text('0.0')
    $('.variation_select').on('click', '.item', function () {
        $(this).addClass('select').siblings('.item').removeClass('select')
        let value = $(this).text()
        let select = $(this).parent().siblings('select')
        select.val(value).change()
    })
})
