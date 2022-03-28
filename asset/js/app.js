var navMenu = document.getElementById("nav_menu");
var navToggle = document.getElementById("nav_toggle");
var navClose = document.getElementById("nav_close");

if(navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}
if(navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// remove mobile menu

var navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll change background

function scrollHeader() {
    var Header = document.getElementById('header');
    if (this.scrollY >= 80) {
        Header.classList.add('scroll-header');
    } else {
        Header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// accordion

const accordionItem = document.querySelectorAll('.question-item');
// console.log(accordionItem);
accordionItem.forEach((item) => {
    // console.log(item);
    const accordionHeader = item.querySelector('.question-header');
    // console.log(accordionHeader);
    accordionHeader.addEventListener('click', () => {
        // console.log(item);
        const openItem = document.querySelector('.accordion-open');
   
        toggleItem(item);

        if(openItem && openItem!== item)
        {
            toggleItem(openItem)
        } 
        
    })
})

const toggleItem = (item1) => {
    const accordionContent = item1.querySelector('.question-content');
    if(item1.classList.contains('accordion-open'))
    {
        accordionContent.removeAttribute('style');
        item1.classList.remove('accordion-open')
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item1.classList.add('accordion-open');
    }

}


const sections = document.querySelectorAll('section[id]');
// console.log(sections);
function setActive() {
    const scrollY = window.pageYOffset;
    // console.log(scrollY);
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58;
            sectionId = current.getAttribute('id');
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll',setActive)

function scrollup() {
    scrollUp = document.getElementById('scrollup');
    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollup);

function changeTheme() {
    document.body.classList.toggle('dark-theme');
    document.getElementById('change-theme').classList.toggle('feather-sun');

}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-data`)
sr.reveal(`.home-img`, {delay: 500})
sr.reveal(`.home-social`, {delay: 600})
sr.reveal(`.about-img, .contact-box`,{origin: 'left'})
sr.reveal(`.about-data, .contact-form`,{origin: 'right'})
sr.reveal(`.steps-card, .product-card, .questions-group, .footer`,{interval: 100})
