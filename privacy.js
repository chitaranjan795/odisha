const hambutton = document.querySelector(".hamburger");
const sidebar = document.querySelector(".list ul");
hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('active');
    sidebar.classList.toggle('active');
})