
function toggle2(elements){
    if(elements.length > 0){
        elements.forEach(ele => {
            ele.addEventListener('click', function(){
                let pec = this.parentElement.classList
                if(pec.contains('soroy_active')){
                    pec.remove('soroy_active')
                }else{
                    pec.add('soroy_active');
                }
            })
        });
    }
}

window.addEventListener('load', () => {
    let width = document.documentElement.clientWidth;
    if(width <= 420){
        elements = document.querySelectorAll('#footer .widget_nav_menu .widget-title')
        toggle2(elements)
    }
});