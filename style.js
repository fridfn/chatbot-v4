
let moon = document.getElementById('moon');
let container = document.querySelector('.container');
let menu = document.querySelector('.menu');
let profileSection = document.querySelector('.profileSection');

let arrowMenu = document.getElementById('arrow-menu');
let headerUser = document.querySelector('.headerUser');
let header = document.querySelector('header');
let profileImgBox = document.querySelector('.profileImgBox');
let userInfo = document.querySelector('.userInfo');

let cards = document.querySelector('.cards');
let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');

let descriptionSatu = document.getElementById('descriptionSatu');
let descriptionDua = document.getElementById('descriptionDua');
let descriptionTiga = document.getElementById('descriptionTiga');

let descSatu = document.getElementById('desc1');
let descDua = document.getElementById('desc2');
let descTiga = document.getElementById('desc3');
let descEmpat = document.getElementById('desc4');


descriptionSatu.innerHTML = "Hi👋,My name is Farid Fathoni N. I am the developer of this website and I am a vocational high school student who is very enthusiastic about learning and has a special interest in making websites. Although sometimes I feel confused cause I am self-taught and don't hv a mentor to guide me.";

descriptionDua.innerHTML = "I have taught myself various techniques and programming languages such as HTML, CSS, and JavaScript to build attractive and interactive websites for users.";

descriptionTiga.innerHTML = "and lastly this website was created only to learn how to develop websites using the basic programming language that I currently understand.";

descSatu.innerHTML = "I like to play games when my head can't think anymore about coding";

descDua.innerHTML = "I like to listen to music every day while studying, if I'm not listening to it. I feel something is missing";

descTiga.innerHTML = "I really like coding. because when I make something from 0 to it can be something interesting. that is a very proud thing for me";

descEmpat.innerHTML = "I like sleeping because it is a place to forget all the things that make me tired";

descriptionSatu.onclick = function() {
 console.log('cards di klik')
 
 cards.classList.toggle('active');
 setTimeout(() => {
  
  text1.style.transition = ".050s";
  text1.classList.toggle('active');
  
 setTimeout(() => {
  
  text2.style.transition = ".050s";
  text2.classList.toggle('active');
  
  }, 400);
 }, 500);
}

function perbesarGambar() {
  if (profileImgBox.classList.contains('profileImgBesar')) {
   
    profileImgBox.classList.remove('profileImgBesar');
  } else {
    profileImgBox.classList.add('profileImgBesar');
  }
}

arrowMenu.onclick = function() {
 console.log('arrow di klick');
 menu.classList.toggle('active');
 arrowMenu.classList.toggle('active');
 
 header.classList.toggle('active');
 container.classList.toggle('active');
}

arrowMenu.addEventListener('click', function() {
 arrowMenu.classList.add('arrowEffect');
 
 setTimeout(function() {
 arrowMenu.classList.remove('arrowEffect');
 }, 300);
});

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset;
  var batasHeight = 15;

  if (scrollTop > batasHeight) {
    profileImgBox.classList.add('profileEffect');
    userInfo.classList.add('userEffect');
    profileImgBox.classList.remove('profileImgBesar');
    
  } else {
   profileImgBox.classList.remove('profileEffect');
   userInfo.classList.remove('userEffect');
  }
});


let favoriteIcons = document.querySelectorAll('.favorite-items');
containerFav = document.querySelector('.container-favorite');
let activeFav = null;
let activeDesc = null;

favoriteIcons.forEach((favoriteIcon) => {
  favoriteIcon.addEventListener('click', () => {
    const clickedDesc = favoriteIcon.querySelector('.descFav');

    if (activeDesc === clickedDesc) {
      clickedDesc.classList.toggle('active');
      activeFav.classList.remove('active');
      containerFav.classList.remove('active');
    } else {
      if (activeFav) {
        activeFav.classList.remove('active');
        activeDesc.classList.remove('active');
      }
      
     containerFav.classList.add('active');
     
      clickedDesc.classList.add('active');
      favoriteIcon.querySelector('.rowFav').classList.add('active');

      activeFav = favoriteIcon.querySelector('.rowFav');
      
      activeDesc = clickedDesc;
    }
  });
});
