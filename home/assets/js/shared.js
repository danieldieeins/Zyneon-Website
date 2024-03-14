let menu = false;
function toggleMenu() {
    if(menu) {
        document.getElementById("links").classList.remove("active");
        document.getElementById("toggle-on").style.display = "none";
        document.getElementById("toggle").style.display = "inherit";
        menu = false;
    } else {
        document.getElementById("links").classList.add("active");
        document.getElementById("toggle-on").style.display = "inherit";
        document.getElementById("toggle").style.display = "none";
        menu = true;
    }
}