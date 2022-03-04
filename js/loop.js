// run continuous loop that updates every 100 milliseconds
function runLoop() {

    hideFooter()

    adjustNavbar()

    // run again after 100ms
    setTimeout(runLoop, 100)
}

// hide the footer if its at the bottom of the page
function hideFooter() {
    // only hide footer if on desktop
    if (!(window.innerHeight > window.innerWidth)) {
        // check if scrolled to the bottom of the page
        if ((Math.ceil(window.innerHeight) + Math.ceil(window.scrollY)) >= Math.ceil(document.body.scrollHeight)) {
            // play hide animation and hide the footer
            document.getElementById("footer").style.top = "100vw";
            document.getElementById("footer").style.animationName = "footer-slide-out";
        } else {
            // show the footer
            document.getElementById("footer").style.top = "calc(100vh - 80px)";
            document.getElementById("footer").style.animationName = "footer-slide-in";
        }
    }
}

/* always adjust the navigation bar according to the orientation of the screen */
function adjustNavbar() {
    navbar = document.getElementById('navbar');
    if (opened == false) {
        // check if in portrait mode and change navbar accordingly
        if (window.innerHeight > window.innerWidth) {
            navbar.style.top = '-80vh';
            navbar.style.left = '0px';
            navbar.style.width = '100vw';
            navbar.style.height = '80vh';
        } else {
            navbar.style.left = '-250px';
            navbar.style.top = '0px';
            navbar.style.width = '16vw';
            navbar.style.height = '100vh';
        }
    } else {
        navbar.style.top = '0px';
        navbar.style.left = '0px';
        // check if in portrait mode and change navbar accordingly
        if (window.innerHeight > window.innerWidth) {
            navbar.style.width = '100vw';
            navbar.style.height = '80vh';
        } else {
            navbar.style.width = '16vw';
            navbar.style.height = '100vh';
        }
    }
}

// start the loop for the first time
setTimeout(runLoop, 100);