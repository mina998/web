
jQuery(document).ready(function ($) {

    let product = $('form.variations_form').attr('data-product_variations');
    let variations = JSON.parse(product);

    $('.woocommerce-variation.single_variation').text('0.0')
    $('.variation_select').on('click', '.item', function () {
        $(this).addClass('select').siblings('.item').removeClass('select')
        let value = $(this).text()
        let select = $(this).parent().siblings('select')
        select.val(value).change()
    })

    $('input.input-text.qty.text').on('change', function(){
        let quantity = $(this).val()
        let variation_id = $('input[type="hidden"].variation_id').val()
        variation_id = parseInt(variation_id)
        if(variation_id < 1){
            return false
        }
        variations.forEach(function (item) { 
            if(item['variation_id'] == variation_id){
                let price = item['display_price'] * parseInt(quantity);
                let regex = new RegExp('[^>]+?</bdi>', 'g')
                let _html = item['price_html'].replace(regex, Number(price).toFixed(2) + '</bdi>')
                $('.woocommerce-variation.single_variation').html(_html)
            }
        });
    })
})
