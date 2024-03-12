let menu = false;
function toggleMenu() {
    if(menu) {
        document.getElementById("links").classList.remove("active");
        document.getElementById("toggle").classList.remove("bx-x");
        document.getElementById("toggle").classList.add("bx-menu");
        menu = false;
    } else {
        document.getElementById("links").classList.add("active");
        document.getElementById("toggle").classList.remove("bx-menu");
        document.getElementById("toggle").classList.add("bx-x");
        menu = true;
    }
}