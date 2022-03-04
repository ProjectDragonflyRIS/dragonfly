var opened = false;
var navbar;
var menuBG;
function menuPressed() {
    navbar = document.getElementById('navbar');
    menuBG = document.getElementById('menu-background');
    if (opened == true) {
        // check if in portrait mode and change navbar accordingly
        if (window.innerHeight > window.innerWidth) {
            navbar.style.top = '-80vh';
            navbar.style.animationName = 'navbar-slide-out-mobile';
        } else {
            navbar.style.left = '-250px';
            navbar.style.animationName = 'navbar-slide-out-desktop';
        }
        menuBG.style.backgroundColor = 'transparent';
        menuBG.style.width = '0px'
        menuBG.style.animationName = 'menu-background-off';
        opened = false;
    } else {
        // check if in portrait mode and change navbar accordingly
        if (window.innerHeight > window.innerWidth) {
            navbar.style.top = '0px';
            navbar.style.animationName = 'navbar-slide-in-mobile';
        } else {
            navbar.style.left = '0px';
            navbar.style.animationName = 'navbar-slide-in-desktop';
        }
        menuBG.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        menuBG.style.width = '100vw'
        menuBG.style.animationName = 'menu-background-on';
        opened = true;
    }
}