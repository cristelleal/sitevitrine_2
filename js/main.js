window.onload = () => {

// Nav / Menu hamburger

const navMenu  = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

  if(navToggle){
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }
  
  if(navClose){
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }

// Scrollreveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 50
})

sr.reveal(`.hero .container-medium`)
sr.reveal(`.experience .container-medium`, {delay:500})
sr.reveal(`.project, .contact`, {interval: 100})

}
