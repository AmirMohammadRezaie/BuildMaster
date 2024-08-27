/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')


/* Show Menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}    

/* Hidden Menu */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')


const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader)
bgHeader()
/*=============== SWIPER SERVICES ===============*/ 

const swiper = new Swiper('.services__swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY>= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
scrollUp()

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

