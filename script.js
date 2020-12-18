// script html

const navBar = document.querySelector('.navbar')
window.addEventListener('scroll', hideNav)

function hideNav() {
  if (window.scrollY > navBar.offsetHeight + 150) {
    navBar.classList.add('activeHide')
  } else {
    navBar.classList.remove('activeHide')
  }
}

function openOrder () {
  // script open form
}