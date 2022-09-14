var requestAnimation;

//Header Scroller

//Get PageYOffset
//Pure Javascript Code
function getScrollOffsets(w) {

    w = w || window;

    if (w.pageXOffset !== null) {
        return { x: w.pageXOffset, y: w.pageYOffset };
    }

    var d = w.document;

    //IE Quirks Mode
    if (document.compatMode === "CSS1Compat") {
        return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
    }

    //IE Standard Mode
    return { x: d.body.scrollLeft, y: d.body.scrollTop };
}

//Verifies if the screen scrolled and apply the scrolled class
function applyScrolled() {
    var header_element = document.getElementById("header-main");

    if (getScrollOffsets().y > 67) {
        header_element.classList.add("scrolled");
    } else {
        header_element.classList.remove("scrolled");
    }

    requestAnimation = window.requestAnimationFrame(applyScrolled);
}

applyScrolled();