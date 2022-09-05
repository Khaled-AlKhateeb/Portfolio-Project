const toolbarBtn = document.getElementById('toolbar-btn');

const menu = document.getElementById('menuOpen');
const toolbar = document.getElementById('navigation');
const cancelBtn = document.getElementById('closeBtn');

function menuOpen() {
    menu.style.display = "flex";
    toolbar.style.display = "none";
}

function menuClose() {
    menu.style.display = "none";
    toolbar.style.display = "flex";
}