// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
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
});

// Initialize slider
$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });
});

// 画面リサイズ時とページ読み込み時に関数を実行
// ページ読み込み時にshowPageTop関数を呼び出す
window.addEventListener("resize", function () {
  updatecontactTel();
});
window.addEventListener("load", function () {
  updatecontactTel();
  showPageTop();
});

// .contact__telクラスの要素のテキストを画面サイズに応じて変更
var contactTelElement = document.querySelector(".contact__tel");
function updatecontactTel() {
  if (window.matchMedia("(min-width: 561px)").matches) {
    contactTelElement.textContent = "03-1234-5678";
  } else {
    contactTelElement.textContent = "tel";
  }
}

// .hamburgerをクリックしたときにmenuOpen関数を実行
var hamburgerElement = document.querySelector(".hamburger");
var menuElement = document.getElementById("menu");
var globalNavBgElement = document.querySelector(".globalNav__bg");
function menuOpen() {
  var ariaExpanded = hamburgerElement.getAttribute("aria-expanded");
  if (ariaExpanded === "false") {
    hamburgerElement.setAttribute("aria-expanded", "true");
    setTimeout(function () {
      globalNavBgElement.classList.add("js_activeglobalNavBg");
    }, 250);
    setTimeout(function () {
      menuElement.classList.add("js_activeMenu");
    }, 500);
  } else {
    hamburgerElement.setAttribute("aria-expanded", "false");
    menuElement.classList.remove("js_activeMenu");
    globalNavBgElement.classList.remove("js_activeglobalNavBg");
  }
}
hamburgerElement.addEventListener("click", menuOpen);

// スクロールイベントをリッスンして、showPageTop関数を呼び出す
window.addEventListener("scroll", showPageTop);
var viewportHeight = window.innerHeight;
var pageTopElement = document.querySelector(".pageTop");
var pageTopImgElement = document.querySelector(".pageTop__img");
var pageTopTextElement = document.querySelector(".pageTop__text");
function showPageTop() {
  var scrollY = window.scrollY;
  if (scrollY > 10) {
    pageTopElement.classList.add("js_activePageTop");
  } else {
    pageTopElement.classList.remove("js_activePageTop");
  }
}

// ページの先頭にスクロールするボタンのクリックイベントを設定
pageTopElement.addEventListener("click", function () {
  pageTopTextElement.style.marginTop = "3px";
  pageTopImgElement.src = "img/rocket.svg";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  setTimeout(function () {
    var scrollY = window.scrollY;
    if (scrollY === 0) {
      pageTopImgElement.src = "img/rocket_base.svg";
      pageTopTextElement.style.marginTop = "-1rem";
    }
  }, 700);
});

// 監視したい要素を選択
var elementsObserves = document.querySelectorAll(
  ".concept__title,.concept__imgWrapper,.consept__item,.concept__btnWrapper,.news__title,.news__list,.course__title,.course__card,.info__inner"
);
var options01 = {
  root: null,
};

// ウィンドウのスクロール位置(初期値)
var lastScrollTop = 0;
function rotateToPosition(entries) {
  // ウィンドウのスクロール位置を取得
  var currentScrollTop = window.scrollY;
  // 下にスクロールしているか判定
  var isScrollingDown = currentScrollTop < lastScrollTop;
  entries.forEach(function (entry) {
    var rotateTitle = entry.target;
    if (entry.isIntersecting) {
      rotateTitle.style.transform = "rotate(0deg)";
    } else {
      if (isScrollingDown) {
        rotateTitle.style.transform = "rotate(10deg)";
      }
    }
  });
  lastScrollTop = currentScrollTop;
}

// ウィンドウのスクロール位置(初期値)
var lastScrollTop02 = 0;
function scaleUpElement(entries) {
  var currentScrollTop = window.scrollY;
  // ウィンドウのスクロール位置を取得
  var isScrollingDown = currentScrollTop < lastScrollTop02;
  // 下にスクロールしているか判定

  entries.forEach(function (entry) {
    var scaleElement = entry.target;
    if (entry.isIntersecting) {
      scaleElement.style.transform = "scale(1)";
    } else {
      if (isScrollingDown) {
        scaleElement.style.transform = "scale(0)";
      }
    }
  });
  lastScrollTop02 = currentScrollTop; // 現在の位置を更新
}

// ウィンドウのスクロール位置(初期値)
var lastScrollTop03 = window.scrollY;
function opacityElement(entries) {
  var currentScrollTop = window.scrollY;
  var isScrollingDown = currentScrollTop < lastScrollTop03;
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    } else {
      if (isScrollingDown) {
        entry.target.style.opacity = "0";
      }
    }
  });
  lastScrollTop03 = currentScrollTop;
}
var lastScrollTop04 = window.scrollY;
function fadeUpElement(entries) {
  var currentScrollTop = window.scrollY;
  var isScrollingDown = currentScrollTop < lastScrollTop04;
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(0)";
    } else {
      if (isScrollingDown) {
        entry.target.style.transform = "translateY(15vh)";
      }
    }
  });
  lastScrollTop04 = currentScrollTop;
}
var lastScrollTop05 = window.scrollY;
function adjustCardAngle(entries) {
  var currentScrollTop = window.scrollY;
  var isScrollingDown = currentScrollTop < lastScrollTop05;
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("--02")) {
        setTimeout(function () {
          entry.target.style.transform = "rotate(0deg)";
          entry.target.style.opacity = "1";
        }, 100);
      } else if (entry.target.classList.contains("--03")) {
        setTimeout(function () {
          entry.target.style.transform = "rotate(0deg)";
          entry.target.style.opacity = "1";
        }, 200);
      } else {
        entry.target.style.transform = "rotate(0deg)";
        entry.target.style.opacity = "1";
      }
    } else {
      if (isScrollingDown) {
        entry.target.style.transform = "rotate(-15deg)";
        entry.target.style.opacity = "0";
      }
    }
  });
  lastScrollTop05 = currentScrollTop;
}
var observer01 = new IntersectionObserver(rotateToPosition, options01);
var observer02 = new IntersectionObserver(scaleUpElement, options01);
var observer03 = new IntersectionObserver(opacityElement, options01);
var observer04 = new IntersectionObserver(fadeUpElement, options01);
var observer05 = new IntersectionObserver(adjustCardAngle, options01);

// 要素を監視開始
elementsObserves.forEach(function (elementsObserve) {
  if (
    elementsObserve.classList.contains("concept__title") ||
    elementsObserve.classList.contains("news__title") ||
    elementsObserve.classList.contains("course__title")
  ) {
    observer01.observe(elementsObserve);
  } else if (
    elementsObserve.classList.contains("concept__imgWrapper") ||
    elementsObserve.classList.contains("news__list")
  ) {
    observer02.observe(elementsObserve);
  } else if (elementsObserve.classList.contains("consept__item")) {
    observer03.observe(elementsObserve);
  } else if (
    elementsObserve.classList.contains("concept__btnWrapper") ||
    elementsObserve.classList.contains("info__inner")
  ) {
    observer04.observe(elementsObserve);
  } else if (elementsObserve.classList.contains("course__card")) {
    observer05.observe(elementsObserve);
  }
});

// Initialize Swiper
// let swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// Initialize slider
// $(document).ready(function () {
//   $(".slider").slick({
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 6000,
//     infinite: true,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     cssEase: "linear",
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 581,
//         settings: {
//           slidesToShow: 1.5,
//         },
//       },
//     ],
//   });
// });

// 画面リサイズ時とページ読み込み時に関数を実行
// ページ読み込み時にshowPageTop関数を呼び出す
// window.addEventListener("resize", () => {
//   updatecontactTel();
// });
// window.addEventListener("load", () => {
//   updatecontactTel();
//   showPageTop();
// });

// .contact__telクラスの要素のテキストを画面サイズに応じて変更
// const contactTelElement = document.querySelector(".contact__tel");

// function updatecontactTel() {
//   if (window.matchMedia("(min-width: 561px)").matches) {
//     contactTelElement.textContent = "03-1234-5678";
//   } else {
//     contactTelElement.textContent = "tel";
//   }
// }

// .hamburgerをクリックしたときにmenuOpen関数を実行
// const hamburgerElement = document.querySelector(".hamburger");
// const menuElement = document.getElementById("menu");
// const globalNavBgElement = document.querySelector(".globalNav__bg");

// function menuOpen() {
//   let ariaExpanded = hamburgerElement.getAttribute("aria-expanded");
//   if (ariaExpanded === "false") {
//     hamburgerElement.setAttribute("aria-expanded", "true");
//     setTimeout(() => {
//       globalNavBgElement.classList.add("js_activeglobalNavBg");
//     }, 250);
//     setTimeout(() => {
//       menuElement.classList.add("js_activeMenu");
//     }, 500);
//   } else {
//     hamburgerElement.setAttribute("aria-expanded", "false");
//     menuElement.classList.remove("js_activeMenu");
//     globalNavBgElement.classList.remove("js_activeglobalNavBg");
//   }
// }
// hamburgerElement.addEventListener("click", menuOpen);

// スクロールイベントをリッスンして、showPageTop関数を呼び出す
// window.addEventListener("scroll", showPageTop);
// let viewportHeight = window.innerHeight;
// const pageTopElement = document.querySelector(".pageTop");
// const pageTopImgElement = document.querySelector(".pageTop__img");
// const pageTopTextElement = document.querySelector(".pageTop__text");

// function showPageTop() {
//   let scrollY = window.scrollY;
//   if (scrollY > 10) {
//     pageTopElement.classList.add("js_activePageTop");
//   } else {
//     pageTopElement.classList.remove("js_activePageTop");
//   }
// }

// ページの先頭にスクロールするボタンのクリックイベントを設定
// pageTopElement.addEventListener("click", () => {
//   pageTopTextElement.style.marginTop = `3px`;
//   pageTopImgElement.src = `img/rocket.svg`;
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });

//   setTimeout(() => {
//     let scrollY = window.scrollY;
//     if (scrollY === 0) {
//       pageTopImgElement.src = `img/rocket_base.svg`;
//       pageTopTextElement.style.marginTop = `-1rem`;
//     }
//   }, 700);
// });

// 監視したい要素を選択
// const elementsObserves = document.querySelectorAll(
//   ".concept__title,.concept__imgWrapper,.consept__item,.concept__btnWrapper,.news__title,.news__list,.course__title,.course__card,.info__inner"
// );
// const options01 = {
//   root: null,
// };

// ウィンドウのスクロール位置(初期値)
// let lastScrollTop = 0;

// function rotateToPosition(entries) {
//   const currentScrollTop = window.scrollY;
//   const isScrollingDown = currentScrollTop < lastScrollTop;

//   entries.forEach((entry) => {
//     const rotateTitle = entry.target;
//     if (entry.isIntersecting) {
//       rotateTitle.style.transform = "rotate(0deg)";
//     } else {
//       if (isScrollingDown) {
//         rotateTitle.style.transform = "rotate(10deg)";
//       }
//     }
//   });
//   lastScrollTop = currentScrollTop;
// }

// ウィンドウのスクロール位置(初期値)
// let lastScrollTop02 = 0;
// function scaleUpElement(entries) {
//   const currentScrollTop = window.scrollY;
//   const isScrollingDown = currentScrollTop < lastScrollTop02;

//   entries.forEach((entry) => {
//     const scaleElement = entry.target;
//     if (entry.isIntersecting) {
//       scaleElement.style.transform = "scale(1)";
//     } else {
//       if (isScrollingDown) {
//         scaleElement.style.transform = "scale(0)";
//       }
//     }
//   });
//   lastScrollTop02 = currentScrollTop; // 現在の位置を更新
// }

// ウィンドウのスクロール位置(初期値)
// let lastScrollTop03 = window.scrollY;
// function opacityElement(entries) {
//   let currentScrollTop = window.scrollY;
//   let isScrollingDown = currentScrollTop < lastScrollTop03;

//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = "1";
//     } else {
//       if (isScrollingDown) {
//         entry.target.style.opacity = "0";
//       }
//     }
//   });
//   lastScrollTop03 = currentScrollTop;
// }

// let lastScrollTop04 = window.scrollY;
// function fadeUpElement(entries) {
//   let currentScrollTop = window.scrollY;
//   let isScrollingDown = currentScrollTop < lastScrollTop04;
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.transform = "translateY(0)";
//     } else {
//       if (isScrollingDown) {
//         entry.target.style.transform = "translateY(15vh)";
//       }
//     }
//   });
//   lastScrollTop04 = currentScrollTop;
// }

// let lastScrollTop05 = window.scrollY;
// function adjustCardAngle(entries) {
//   let currentScrollTop = window.scrollY;
//   let isScrollingDown = currentScrollTop < lastScrollTop05;
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       if (entry.target.classList.contains("--02")) {
//         setTimeout(() => {
//           entry.target.style.transform = "rotate(0deg)";
//           entry.target.style.opacity = "1";
//         }, 100);
//       } else if (entry.target.classList.contains("--03")) {
//         setTimeout(() => {
//           entry.target.style.transform = "rotate(0deg)";
//           entry.target.style.opacity = "1";
//         }, 200);
//       } else {
//         entry.target.style.transform = "rotate(0deg)";
//         entry.target.style.opacity = "1";
//       }
//     } else {
//       if (isScrollingDown) {
//         entry.target.style.transform = "rotate(-15deg)";
//         entry.target.style.opacity = "0";
//       }
//     }
//   });
//   lastScrollTop05 = currentScrollTop;
// }

// const observer01 = new IntersectionObserver(rotateToPosition, options01);

// const observer02 = new IntersectionObserver(scaleUpElement, options01);

// const observer03 = new IntersectionObserver(opacityElement, options01);

// const observer04 = new IntersectionObserver(fadeUpElement, options01);

// const observer05 = new IntersectionObserver(adjustCardAngle, options01);

// 要素を監視開始
// elementsObserves.forEach((elementsObserve) => {
//   if (
//     elementsObserve.classList.contains("concept__title") ||
//     elementsObserve.classList.contains("news__title") ||
//     elementsObserve.classList.contains("course__title")
//   ) {
//     observer01.observe(elementsObserve);
//   } else if (
//     elementsObserve.classList.contains("concept__imgWrapper") ||
//     elementsObserve.classList.contains("news__list")
//   ) {
//     observer02.observe(elementsObserve);
//   } else if (elementsObserve.classList.contains("consept__item")) {
//     observer03.observe(elementsObserve);
//   } else if (
//     elementsObserve.classList.contains("concept__btnWrapper") ||
//     elementsObserve.classList.contains("info__inner")
//   ) {
//     observer04.observe(elementsObserve);
//   } else if (elementsObserve.classList.contains("course__card")) {
//     observer05.observe(elementsObserve);
//   }
// });
