const accordionBtn = document.querySelectorAll('.accordion-item');

accordionBtn.forEach(element => {
    element.addEventListener('click',()=>{
        element.classList.toggle('active');
    })
});