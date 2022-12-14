const hambutton = document.querySelector(".hamburger");
const sidebar = document.querySelector(".list ul");

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('active');
    sidebar.classList.toggle('active');
})

AOS.init({
  offset:170,
  duration: 1500
});