let theToggler=document.querySelector(".toggler");
let theSideBar=document.querySelector(".sidebar");

theToggler.addEventListener('click', function () {
    theSideBar.classList.toggle('openSideBar');
});

let theNavLinks=document.querySelectorAll('.navlinks li a');

// Animate Sections On scroll
let sections=document.querySelectorAll(".main-content .section");

// Select ScrollTop Button
let scrollBtn=document.querySelector(".scrollTopBtn");

function showSectionsWithScroll () {
    sections.forEach((sec, index) => {
        // Get The OffsetTop of each section (section الجزء الا فوق جزء )
        let theSectionOffsetTop=sec.offsetTop-250;
        // Get Section OuterHeight (Get The Height Of The Section Including border padding and etc)
        let theSectionOutterHeight=sec.offsetHeight;
        // Get Window Scroll Top (The scroll Height in the page)
        let windowscrollTop=window.pageYOffset;
        if((windowscrollTop>theSectionOffsetTop)&&(windowscrollTop<theSectionOffsetTop+theSectionOutterHeight)) {
            sec.classList.add("showSection");
            if(index===2) {
                let allSpanProgress=document.querySelectorAll('.progress-value');
                allSpanProgress.forEach((spanProgress) => {
                    spanProgress.style.width=spanProgress.dataset.progress;
                });
            }
        } else {
            sec.classList.remove("showSection");
        }
    });
};

let theLinks=document.querySelectorAll(".links li a");

function moveLinks () {
    sections.forEach((sec) => {
        // Get The OffsetTop of each section (section الجزء الا فوق جزء )
        let theSectionOffsetTop=sec.offsetTop-250;
        // Get Section OuterHeight (Get The Height Of The Section Including border padding and etc)
        let theSectionOutterHeight=sec.offsetHeight;
        // Get Window Scroll Top (The scroll Height in the page)
        let windowscrollTop=window.pageYOffset;
        // Get Section Id
        let sectionId=sec.getAttribute('id');
        if((windowscrollTop>=theSectionOffsetTop)&&(windowscrollTop<theSectionOffsetTop+theSectionOutterHeight)) {
            theLinks.forEach((link) => {
                link.classList.remove("active");
                document.querySelector('.links a[href*='+sectionId+']').classList.add("active");
            });
            theNavLinks.forEach(navlink => {
                navlink.classList.remove("active");
                document.querySelector('.navlinks a[href*='+sectionId+']').classList.add("active");
            });
        }
    });
}
window.onscroll=() => {
    showSectionsWithScroll();
    moveLinks();
    if(window.scrollY>750) {
        scrollBtn.classList.add("showBtn");
    } else {
        scrollBtn.classList.remove("showBtn");
    }
};

scrollBtn.onclick=function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
// Swiper.js
let theSwiper=new Swiper('.mySwiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    freemode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});

// Start Typed.ls libarary
let theIntroName=document.querySelector(".Intro-name");
let options={
    strings: ['Front-End Developer', 'Web Developer', 'UI/UX Designer'],
    typeSpeed: 80,
    startDelay: 0,
    backSpeed: 20,
    smartBackspace: true,
    backDelay: 0,
    fadeOut: false,
    loop: true,
    showCursor: false,
};

let typed=new Typed(theIntroName, options);
//---------------------------  End Typed.js part   ------------------------------ //
// End Typed.ls libarary