var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  watchSlidesProgress: true,
  spaceBetween: "24px",
  navigation: {
    nextEl: ".nft .button-next",
    prevEl: ".nft .button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: "18px",
    },
    768: {
      slidesPerView: 3,
      spaceBetween: "22px",
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: "24px",
    },
  },
});

var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 2,
  spaceBetween: "18px",
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: "20px",
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: "22px",
    },
  },
});

window.addEventListener("resize", () => {
  swiper.update();
  swiper2.update();
});

const detailsArrows = document.getElementsByClassName("details-arrow");
const details = document.getElementsByTagName("details");

for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("toggle", () => {
    if (details[i].open) {
      details[i].style.borderColor = "#9d360c";
      detailsArrows[i].style.rotate = "180deg";
    } else {
      details[i].style.borderColor = "black";
      detailsArrows[i].style.rotate = "0deg";
    }
  });
}

const navMenuIcon = document.getElementById("nav-menu-icon");
const sidbarBg = document.getElementById("sidebar-bg");
const sidebar = document.getElementById("sidebar");
const sidebarCloseBtn = document.getElementById("sidebar-close");

navMenuIcon.addEventListener("click", () => {
  sidbarBg.classList.toggle("show-sidebar-bg");
  sidebar.classList.toggle("show-sidebar");
  document.body.classList.toggle("stop-overflow");
});

sidebarCloseBtn.addEventListener("click", () => {
  sidbarBg.classList.toggle("show-sidebar-bg");
  sidebar.classList.toggle("show-sidebar");
  document.body.classList.toggle("stop-overflow");
});
