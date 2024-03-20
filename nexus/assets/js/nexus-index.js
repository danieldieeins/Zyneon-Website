function resizeApp() {
    const app = document.getElementById("application");
    if(app) {
        if(window.innerWidth>768) {
            app.style.left = "15%";
            app.style.right = "15%";
            app.style.width = "70%";
        } else {
            app.style.left = "5%";
            app.style.right = "5%";
            app.style.width = "90%";
        }
    }
}
window.onresize = resizeApp;

function closeApp() {
    const app = document.getElementById("application");
    if(app) {
        app.style.display = "none";
    }
}

function maximizeApp() {
    window.location.href = "https://danieldieeins.github.io/Zyneon-Application/";
}

function minimizeApp() {
    const app = document.getElementById("application");
    const button = document.getElementById("app-button");
    if(app) {
        app.style.display = "none";
    }
    if(button) {
        button.style.display = "inherit";
    }
}

function reopenApp() {
    const app = document.getElementById("application");
    const button = document.getElementById("app-button");
    if(app) {
        app.style.display = "inherit";
    }
    if(button) {
        button.style.display = "none";
    }
}