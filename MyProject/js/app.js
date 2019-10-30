var toggler = document.querySelector('.toggler');
var nav = document.querySelector('.nav-links');


toggler.addEventListener('click', ()=>{
	nav.classList.toggle('nav-active');
});