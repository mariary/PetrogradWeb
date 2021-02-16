let items = document.querySelectorAll('.header__menu_item');

for (let i = 0; i < items.length; i++) {
    setTimeout( function (){
        items[i].classList.add('item');
    }, 250*i);
}

