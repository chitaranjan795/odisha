const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive= () => {
  hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)

$(".hamburger").click(function(){
  $(".link").slideToggle();
});

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

function sendemail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "wanderodisha795@gmail.com",
      Password : "08D3B92190A5279E3DF332340D4B600CE9BE",
      To : "wanderodisha795@gmail.com",
      name : document.getElementById("name").value,
      From : document.getElementById("myEmail").value,
      message : document.getElementById("message").value,
      Subject : "This is new contact form",
      Body : "Hello i am a user"
    }).then(
    message => alert("message")
   );
  }
