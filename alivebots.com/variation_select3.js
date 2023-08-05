
jQuery(document).ready(function ($) {

    let product = $('form.variations_form').attr('data-product_variations');
    let variations = JSON.parse(product);

    console.log(variations);

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
                let display_price = item['display_price']
                let display_regular_price = item['display_regular_price']
                if (display_price == display_regular_price){
                    let price = display_price * parseInt(quantity);
                    let regex = new RegExp('[^>]+?</bdi>', 'g')
                    let _html = item['price_html'].replace(regex, Number(price).toFixed(2) + '</bdi>')
                    $('.woocommerce-variation.single_variation').html(_html)
                    return true
                }
                let price1 = display_price * parseInt(quantity);
                let price2 = display_regular_price * parseInt(quantity);
                let _html = item['price_html'].replace(Number(display_price).toFixed(2), Number(price1).toFixed(2))
                _html = _html.replace(Number(display_regular_price).toFixed(2), Number(price2).toFixed(2))
                $('.woocommerce-variation.single_variation').html(_html)
            }
        });
    })
})
