const openMobileMenuBtn = document.querySelector('#openMenuBtn');
const closeMobileMenuBtn = document.querySelector('#closeMenuBtn');
const mobileMenu = document.querySelector('#mobileOverlay')

openMobileMenuBtn.addEventListener("click", openMobileMenu)
closeMobileMenuBtn.addEventListener("click", closeMobileMenu)

function openMobileMenu(){
mobileMenu.classList.remove('is-hidden')
}
function closeMobileMenu(){
mobileMenu.classList.add('is-hidden')
}