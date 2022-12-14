const hambutton = document.querySelector(".hamburger");
const sidebar = document.querySelector(".list ul");

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('active');
    sidebar.classList.toggle('active');
})

$("#readmore").click(function(){
  $("#rajapara").toggle();
});

$("#readmore").click(function(){
  $("#readmore").fadeOut(1);
});

AOS.init({
  offset:170,
  duration: 1500
});
