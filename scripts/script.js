//buttons
document.getElementById("tell-me").onclick = function () {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}

document.getElementById("whats-wrong").onclick = function () {
    document.getElementById("method").scrollIntoView({behavior: "smooth"});
}


//menu
document.getElementById("menu-main").onclick = function () {
    document.getElementById("main").scrollIntoView({behavior: "smooth"});
}

document.getElementById("menu-about").onclick = function () {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}

document.getElementById("menu-method").onclick = function () {
    document.getElementById("method").scrollIntoView({behavior: "smooth"});
}

document.getElementById("menu-feedback").onclick = function () {
    document.getElementById("feedback").scrollIntoView({behavior: "smooth"});
}

document.getElementById("menu-price").onclick = function () {
    document.getElementById("price").scrollIntoView({behavior: "smooth"});
}





document.addEventListener("DOMContentLoaded", function () {
    
    
    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});