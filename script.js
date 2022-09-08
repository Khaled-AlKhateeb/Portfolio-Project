const menu = document.getElementById('menuOpen');
const mainContainer = document.getElementById('mainContainer');

function menuOpen() {
  menu.style.display = "flex";
  mainContainer.style.display = "none";
}

function menuClose() {
  menu.style.display = "none";
  mainContainer.style.display = "block";
}

const element = document.getElementById("popUpCard");
const actionBtn = document.querySelectorAll('.action');
const workCards = document.querySelectorAll('.frame');
const headerTwo = document.createElement("h2");
const popupList = document.createElement("ul");
const image = document.createElement("img");
const content = document.createElement("p");
const container = document.createElement("div");
const division = document.createElement("div");
const closeBtn = document.createElement("button");
const btnImages = [{
  name: "See Live",
  path: "Assets/Icon-live.png",
},
{
  name: "See Source",
  path: "Assets/git-white.png",
}];

headerTwo.classList.add('popup-header');
popupList.classList.add('popup-list');
image.classList.add('popup-image');
content.classList.add('popup-text');
division.classList.add('popup-btn-container');
closeBtn.classList.add('popup-close-btn');

container.setAttribute('id', "container");
headerTwo.setAttribute('id','popupHeader');
popupList.setAttribute('id','popupList');
image.setAttribute('id','popupImage');
content.setAttribute('id','popupText');
division.setAttribute('id','popupBtnContainer');
closeBtn.setAttribute('id','popupCloseBtn');

actionBtn.forEach((btn, i) => (
  btn.setAttribute('id', data[i].id)
))

for (let i = 0; i < workCards.length; i++) {
  workCards[i].style.backgroundImage = 'url("' + data[i].thumbnails + '")';
  workCards[i].children[0].innerHTML = data[i].name;
  workCards[i].children[1].innerHTML = data[i].description;
}
//place cardClicked function here