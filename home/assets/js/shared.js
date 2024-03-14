let menu = false;
function toggleMenu() {
    if(menu) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    menu = true;
    document.getElementById("links").classList.add("active");
    document.getElementById("toggle-on").style.display = "inherit";
    document.getElementById("toggle").style.display = "none";
}

function closeMenu() {
    menu = false;
    document.getElementById("links").classList.remove("active");
    document.getElementById("toggle-on").style.display = "none";
    document.getElementById("toggle").style.display = "inherit";
}

function onResize() {
    if(window.innerWidth>768) {
        closeMenu();
    }
}

window.onresize = onResize;