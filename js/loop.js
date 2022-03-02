// run continuous loop that updates every 100 milliseconds
function runLoop() {

    hideFooter()

    // run again after 100ms
    setTimeout(runLoop, 100)
}

// hide the footer if its at the bottom of the page
function hideFooter() {
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

// start the loop for the first time
setTimeout(runLoop, 100);