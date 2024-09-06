let body = document.querySelector('html body')
let arrow = document.querySelectorAll('.arrow');
let arrowAsk = document.querySelector('.arrowAsk');
let arrowQ = document.querySelector('.arrowQuest');
let wrapper = document.querySelectorAll('.wrapperFav');
let rowFav = document.querySelectorAll('.rowFav');
let descFav = document.querySelectorAll('.descFav');
let favTxt = document.querySelectorAll('.favtxt');
let nemBots = document.querySelector('.nameBot');
let botStat = document.querySelector('.botStatus');
let desk = document.querySelectorAll('.description');
let descText = document.querySelectorAll('.descriptionText');
let headerIcon = document.querySelector('.headerMenu');
let arrowButon = document.querySelector('.arrow-button');
let nameUser = document.querySelector('.nameUser');
let userStat = document.querySelector('.statusUser');
let footer = document.querySelector('.footer');
let wrapInput = document.querySelector('.wrapper');
let input = document.querySelector('input');
let myButton = document.querySelector('button');
let bio = document.querySelectorAll('.infoTxt');
let about = document.querySelector('.about');
let favItem = document.querySelectorAll('.favorite-items');
let chatUser = document.querySelector('.chatJawaban');
let chatBot = document.querySelector('.chatPertanyaans');
let imgBox = document.querySelector('#imgBox');
let imgProfile = document.querySelector('.imgProfile');
let fablue = document.querySelector('.nameBot');

var theme = localStorage.getItem("theme");

if(theme === null) {
 localStorage.setItem("theme", "basic")
 theme = "basic";
}

function applyTheme() {
 if(theme === "basic") {
  console.log("basic")
 }
 else if (theme === "blue") {
  body.style.animationDelay = "5s";
  var img = document.createElement('img');
  img.src = 'fablue.webp';
  document.getElementById('imgBox').appendChild(img);
  fablue.innerHTML = "Fablue Bot";
  containerLinear.style.display = "none";
  
  favTxt.forEach(function(txt) {
   txt.classList.add('favtxtBg');
  });
  rowFav.forEach(function(rows) {
   rows.classList.add('rowBg');
  });
  descFav.forEach(function(desc) {
   desc.classList.add('descfavBg');
  });
  arrow.forEach(function(arrows) {
   arrows.classList.add('arrowBg');
  });
  desk.forEach(function(descrip) {
   descrip.classList.add('descBg');
  });
  descText.forEach(function(desctexts) {
   desctexts.classList.add('textBg');
  });
  wrapper.forEach(function(wrap) {
   wrap.classList.add('wrapperBg');
  });
  bio.forEach(function(biotxt) {
   biotxt.classList.add('bioClr');
  });
  favItem.forEach(function(favItems) {
   favItems.classList.add('favItems');
  });
  
  menu.classList.add('menuBg');
  arrowA.classList.add('arrowAClr');
  arrowAsk.classList.add('arrowAskClr');
  arrowQ.classList.add('arrowQClr');
  arrowQuest.classList.add('arrowQClr');
  chatBot.classList.add('chatBot');
  clonedElementPertanyaan.classList.add('chatBot');
  clonedElementJawaban.classList.add('chatUser');
  imgProfile.classList.add('brderProf');
  imgBox.classList.add('borderBg');
  chatUser.classList.add('chatUser');
  about.classList.add('aboutBg');
  myButton.classList.add('buttom');
  input.classList.add('inputBg');
  wrapInput.classList.add('footerBg');
  userStat.classList.add('userStat');
  nameUser.classList.add('nameUsers');
  arrowButon.classList.add('menuIcon');
  headerIcon.classList.add('menuIcon');
  nemBots.classList.add('nameBotClr');
  botStat.classList.add('botStatClr');
  
  header.classList.add('headerBg');
  container.classList.add('containerBg');
  profileSection.classList.add('profileBg');
 }
}

window.onload = function() {
 applyTheme()
}

moon.onclick = function() {
 console.log('ubah theme di klikk');
 
 if(menu.classList.contains("menuBg")) {
  var img = document.createElement('img');
  img.src = 'boticon.webp';
  document.getElementById('imgBox').appendChild(img);
  containerLinear.style.display = "block";
  localStorage.setItem("theme", "basic");
  fablue.innerHTML = "Fabot Chat";
  
  favTxt.forEach(function(txt) {
   txt.classList.remove('favtxtBg');
  });
  rowFav.forEach(function(rows) {
   rows.classList.remove('rowBg');
  });
  desk.forEach(function(descrip) {
   descrip.classList.remove('descBg');
  });
  descText.forEach(function(desctexts) {
   desctexts.classList.remove('textBg');
  });
  arrow.forEach(function(arrows) {
   arrows.classList.remove('arrowBg');
  });
  descFav.forEach(function(desc) {
   desc.classList.remove('descfavBg');
  });
  wrapper.forEach(function(wrap) {
   wrap.classList.remove('wrapperBg');
  });
  bio.forEach(function(biotxt) {
   biotxt.classList.remove('bioClr');
  });
  favItem.forEach(function(favItems) {
   favItems.classList.remove('favItems');
  });
  
  arrowA.classList.remove('arrowAClr');
  arrowAsk.classList.remove('arrowAskClr');
  arrowQ.classList.remove('arrowQClr');
  arrowQuest.classList.remove('arrowQClr');
  chatBot.classList.remove('chatBot');
  clonedElementPertanyaan.classList.remove('chatBot');
  clonedElementJawaban.classList.remove('chatUser');
  imgProfile.classList.remove('brderProf');
  imgBox.classList.remove('borderBg');
  chatUser.classList.remove('chatUser');
  about.classList.remove('aboutBg');
  myButton.classList.remove('buttom');
  input.classList.remove('inputBg');
  wrapInput.classList.remove('footerBg');
  userStat.classList.remove('userStat');
  nameUser.classList.remove('nameUsers');
  arrowButon.classList.remove('menuIcon');
  headerIcon.classList.remove('menuIcon');
  nemBots.classList.remove('nameBotClr');
  botStat.classList.remove('botStatClr');
  menu.classList.remove('menuBg');
  header.classList.remove('headerBg');
  container.classList.remove('containerBg');
  profileSection.classList.remove('profileBg');
 }
 else {
  localStorage.setItem("theme", "blue");
  if(localStorage.getItem("theme") === "blue") {
  var img = document.createElement('img');
  img.src = 'fablue.webp';
  document.getElementById('imgBox').appendChild(img);
  fablue.innerHTML = "Fablue Bot";
  containerLinear.style.display = "none";
  
  favTxt.forEach(function(txt) {
   txt.classList.add('favtxtBg');
  });
  rowFav.forEach(function(rows) {
   rows.classList.add('rowBg');
  });
  descFav.forEach(function(desc) {
   desc.classList.add('descfavBg');
  });
  arrow.forEach(function(arrows) {
   arrows.classList.add('arrowBg');
  });
  desk.forEach(function(descrip) {
   descrip.classList.add('descBg');
  });
  descText.forEach(function(desctexts) {
   desctexts.classList.add('textBg');
  });
  wrapper.forEach(function(wrap) {
   wrap.classList.add('wrapperBg');
  });
  bio.forEach(function(biotxt) {
   biotxt.classList.add('bioClr');
  });
  favItem.forEach(function(favItems) {
   favItems.classList.add('favItems');
  });
  
  menu.classList.add('menuBg');
  arrowA.classList.add('arrowAClr');
  arrowAsk.classList.add('arrowAskClr');
  arrowQ.classList.add('arrowQClr');
  arrowQuest.classList.add('arrowQClr');
  chatBot.classList.add('chatBot');
  clonedElementPertanyaan.classList.add('chatBot');
  clonedElementJawaban.classList.add('chatUser');
  imgProfile.classList.add('brderProf');
  imgBox.classList.add('borderBg');
  chatUser.classList.add('chatUser');
  about.classList.add('aboutBg');
  myButton.classList.add('buttom');
  input.classList.add('inputBg');
  wrapInput.classList.add('footerBg');
  userStat.classList.add('userStat');
  nameUser.classList.add('nameUsers');
  arrowButon.classList.add('menuIcon');
  headerIcon.classList.add('menuIcon');
  nemBots.classList.add('nameBotClr');
  botStat.classList.add('botStatClr');
  
  header.classList.add('headerBg');
  container.classList.add('containerBg');
  profileSection.classList.add('profileBg');
  }
 }
}
