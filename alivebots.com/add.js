jQuery(document).ready(function($) {
    $('.price_item').on('click', '.elementor-price-table__footer>a', function(e){
        e.preventDefault()
        let search = new URLSearchParams(this.search);
        let product_id = search.get('add-to-cart');
        if(product_id){
            location.href = '/?quantity=1&add-to-cart=' + product_id
        }
        return false
    })
});
