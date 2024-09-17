let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

//preloader function
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var preloader = document.querySelector(".preloader");
        var content = document.querySelector(".content");
        
        preloader.style.display = 'none';
        content.classList.add('fade-in');
        
        document.body.style.overflow = 'visible';
    }, 6000);
  });

//js year auto update
document.getElementById("year").textContent = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopupButton = document.querySelector('.close');
  
    // Automatically open the popup when the page loads
    popup.style.display = 'flex';
  
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
  });

  //auto type function
const typedTextElement = document.querySelector(".typed-text");
const cursorElement = document.querySelector(".cursor");

// Array of singers
const textArray = ["content creator", "web developer" , "Video Editor", "Software Engineer", "Freelancer" , "Vlogger"];
const typingDelay = 150;  // Time between each character typing
const erasingDelay = 100; // Time between each character erasing
const newTextDelay = 2000; // Time before starting to type next word
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay); // Start erasing after a pause
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Loop back to the first text
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () { // Start typing when page loads
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


//youtube slider
// YouTube slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 1,
    loop: true,
    autoplay: {
        delay: 3000, 
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 992px (desktop)
        992: {
            slidesPerView: 3,
        },
        // when window width is >= 768px and <= 991px (tablet)
        768: {
            slidesPerView: 2,
        },
        // when window width is <= 767px (mobile)
        767: {
            slidesPerView: 1,
        }
    }
});



//back top top button
// Back to Top button functionality
const backToTopButton = document.getElementById('back-to-top');

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
