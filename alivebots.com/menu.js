jQuery(document).ready(function($) {
    $("#kitmenu2 .jkit-button > a").click(function (e) {
        e.preventDefault()
        $('#ekit-megamenu-h2').addClass('active');
        $('.elementskit-menu-offcanvas-elements').addClass('active');
        return false
    });
});
