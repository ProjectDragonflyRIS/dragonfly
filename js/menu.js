var opened = false;
var navbar;
var menuBG;
function menuPressed() {
    navbar = document.getElementById('navbar');
    menuBG = document.getElementById('menu-background');
    if (opened == true) {
        navbar.style.left = '-250px';
        navbar.style.animationName = 'menu-slide-out';
        menuBG.style.backgroundColor = 'transparent';
        menuBG.style.width = '0px'
        menuBG.style.animationName = 'menu-background-off';
        opened = false;
    } else {
        navbar.style.left = '0px';
        navbar.style.animationName = 'menu-slide-in';
        menuBG.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        menuBG.style.width = '100vw'
        menuBG.style.animationName = 'menu-background-on';
        opened = true;
    }
}