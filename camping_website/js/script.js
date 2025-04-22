let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-navbar");
};

var swiper = new Swiper(".categorySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Selling Slide
var swiper = new Swiper(".selling-slider", {
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    920: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-navbar");
};

const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2200",
  delay: "350",
});

animate.reveal(
  ".nav, .hero-content h2, .hero-content h2 span, .heading, .tips"
);
animate.reveal(".backpack-content", { origin: "left" });
animate.reveal(".backpack-img, .single-post", { origin: "right" });
animate.reveal(".hero-img img, .btn, .btn img", { origin: "bottom" });
animate.reveal(
  ".category-box, .product-box, .brand-box, .blog-box, .footer-box h3, .footer-box a, .footer-box p",
  {
    interval: 150,
  }
);
animate.reveal(".links", { origin: "right", interval: 150 });
