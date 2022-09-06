const toolbarBtn = document.getElementById('toolbar-btn');
const menu = document.getElementById('menuOpen');
const mainContainer = document.getElementById('mainContainer');
const cancelBtn = document.getElementById('closeBtn');

function menuOpen() {
    menu.style.display = "flex";
    mainContainer.style.display = "none";
}

function menuClose() {
    menu.style.display = "none";
    mainContainer.style.display = "block";
}