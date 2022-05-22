// GET HTML ELEMENTS
const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const mobileNav = document.getElementById('nav');

// ADD EVENTLISTENER
menuBtn.addEventListener('click', () => {
    mobileNav.style.left = 0; //showing the mobile nav
    closeBtn.classList.remove('hidden') //show close button by removing the display:none class
    menuBtn.style.display = 'none' //hide menu btn
})


closeBtn.addEventListener('click', () => {
    mobileNav.style.left = `100%`; //showing the mobile nav
    menuBtn.style.display = 'block'  //show close button by removing the display:none class
    closeBtn.classList.add('hidden') //hide menu btn
})