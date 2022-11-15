const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive= () => {
  hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)

$(".hamburger").click(function(){
  $(".link").slideToggle();
});

AOS.init({
  offset:160,
  duration: 1500
});