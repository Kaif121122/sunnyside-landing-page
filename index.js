

const learnMoreLinks = document.querySelectorAll('.common-learn-more-link');
const firstSpanBorder = document.querySelector('.first-span');
const secondSpanBorder = document.querySelector('.second-span');
const openMenu = document.querySelector('.menu-open');
const navBar = document.querySelector('.nav-ul');
const navLinks = document.querySelectorAll('.nav-link');

// LEARN MORE LINKS 

learnMoreLinks.forEach((elem, index) => {
    elem.addEventListener('mouseover', () => {
        if (index === 0) {
            firstSpanBorder.style.opacity = "1"
        } else if (index === 1) {

            secondSpanBorder.style.opacity = "1"
        }
    })
    elem.addEventListener('mouseout', () => {
        if (index === 0) {
            firstSpanBorder.style.opacity = "0.5"
        } else if (index === 1) {

            secondSpanBorder.style.opacity = "0.5"
        }
    })

})

// HAMBURGER 

openMenu.addEventListener('click', () => {
    navBar.classList.toggle('show')
    document.body.classList.toggle('touch-action')
})

// NAV-LINKS 

navLinks.forEach((elem) => {
    elem.addEventListener('click', () => {
        navBar.classList.toggle('show')
        document.body.classList.toggle('touch-action')
    })
})