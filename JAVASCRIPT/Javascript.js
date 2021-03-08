const menu=document.querySelector('#menu');

menu.addEventListener('click', ()=>{
    document.body.classList.toggle('active');
    menu.classList.toggle('active');
})