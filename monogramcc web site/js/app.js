// header
const header_ = document.getElementById("header");
const workflows = document.getElementById("workflows-second-li");
const workflowsDiv = document.getElementById("workflows-items-div");

workflows.addEventListener("click", (e) => {
  workflowsDiv.classList.toggle("workflows-items-div-active");
  setTimeout(() => {
    document.addEventListener("click", (e) => {
      if (e.composedPath().includes(workflows)) {
      } else {
        workflowsDiv.classList.remove("workflows-items-div-active");
      }
    });
  }, 100);
  e.preventDefault();
});
const currency = document.getElementById("currency");
const currencyLi = document.getElementById("currency-li");
const currencyDiv = document.getElementById("currency-items-div");
const currencyItems = document.querySelectorAll(".currency-item");
currency.addEventListener("click", () => {
  currencyDiv.classList.toggle("currency-items-div-active");
  setTimeout(() => {
    document.addEventListener("click", (e) => {
      if (e.composedPath().includes(currencyLi)) {
      } else {
        currencyDiv.classList.remove("currency-items-div-active");
      }
    });
  }, 100);
  currencyItems.forEach((element) =>
    element.addEventListener("click", () => {
      currency.innerText = element.innerText.slice(
        0,
        element.innerText.length - 3
      );
      currencyDiv.classList.remove("currency-items-div-active");
    })
  );
});

// burger menu
const burgerMenuMainDiv = document.getElementById("burger-menu-main-div");
const burgerMenuBtn = document.getElementById("burger-menu");
const hamburgerMenuActiveDiv = document.getElementById(
  "hamburger-menu-active-div"
);
const closeHamburgerMenu = document.getElementById("close-hamburger-menu");
burgerMenuBtn.addEventListener("click", () => {
  hamburgerMenuActiveDiv.classList.add("hm-mn-act");
  header_.style.opacity = ".8";
  section_a.style.opacity = ".8";
  burgerMenuMainDiv.style.width = "100%";
  burgerMenuMainDiv.style.height = "100vh";
  setTimeout(() => {
    document.addEventListener("click", (e) => {
      if (
        e.composedPath().includes(hamburgerMenuActiveDiv) &&
        !e.composedPath().includes(burgerMenuBtn)
      ) {
      } else {
        hamburgerMenuActiveDiv.classList.remove("hm-mn-act");
        burgerMenuMainDiv.style.width = "0";
        burgerMenuMainDiv.style.height = "0";
        header_.style.opacity = "1";
        section_a.style.opacity = "1";
      }
      if (e.composedPath().includes(burgerMenuBtn)) {
        hamburgerMenuActiveDiv.classList.add("hm-mn-act");
        burgerMenuMainDiv.style.width = "100%";
        burgerMenuMainDiv.style.height = "100vh";
        header_.style.opacity = ".8";
        section_a.style.opacity = ".8";
      }
    });
  }, 100);
});
closeHamburgerMenu.addEventListener("click", (e) => {
  hamburgerMenuActiveDiv.classList.remove("hm-mn-act");
  burgerMenuMainDiv.style.width = "0";
  burgerMenuMainDiv.style.height = "0";
  header_.style.opacity = "1";
  section_a.style.opacity = "1";
  e.preventDefault();
});
document.addEventListener("scroll", () => {
  burgerMenuMainDiv.style.top = scrollY + "px";
  cardMenuMainDiv.style.top = scrollY + "px";
});
// cart menu

const cardMenuMainDiv = document.getElementById("cart-menu-main-div");
const shopCardLi = document.getElementById("shop-card-li");
const shopCartDiv = document.getElementById("cart-menu");
const closeShopCard = document.getElementById("cart-menu-back");
const shopCartDivWidth = getComputedStyle(shopCartDiv).width;
shopCartDiv.style.left = window.innerWidth + "px";
shopCardLi.addEventListener("click", () => {
  shopCartDiv.classList.add("crt-mn-act");
  shopCartDiv.style.left =
    window.innerWidth - parseInt(shopCartDivWidth) + "px";
  cardMenuMainDiv.style.width = "100%";
  cardMenuMainDiv.style.height = "100vh";
  header_.style.opacity = ".8";
  section_a.style.opacity = ".8";
  setTimeout(() => {
    document.addEventListener("click", (e) => {
      if (
        e.composedPath().includes(shopCartDiv) &&
        !e.composedPath().includes(shopCardLi)
      ) {
      } else {
        shopCartDiv.classList.remove("crt-mn-act");
        shopCartDiv.style.left = window.innerWidth + "px";
        cardMenuMainDiv.style.width = "0";
        cardMenuMainDiv.style.height = "0";
        header_.style.opacity = "1";
        section_a.style.opacity = "1";
      }
      if (e.composedPath().includes(shopCardLi)) {
        shopCartDiv.classList.add("crt-mn-act");
        shopCartDiv.style.left =
          window.innerWidth - parseInt(shopCartDivWidth) + "px";
        cardMenuMainDiv.style.width = "100%";
        cardMenuMainDiv.style.height = "100vh";
        header_.style.opacity = ".8";
        section_a.style.opacity = ".8";
      }
    });
  }, 100);
});
closeShopCard.addEventListener("click", (e) => {
  shopCartDiv.classList.remove("crt-mn-act");
  shopCartDiv.style.left = window.innerWidth + "px";
  header_.style.opacity = "1";
  section_a.style.opacity = "1";
  cardMenuMainDiv.style.width = "0";
  cardMenuMainDiv.style.height = "0";
  e.preventDefault();
});

window.addEventListener("resize", () => {
  if (shopCartDiv.classList.contains("crt-mn-act")) {
    shopCartDiv.style.left =
      window.innerWidth - parseInt(shopCartDivWidth) + "px";
  } else {
    shopCartDiv.style.left = window.innerWidth + "px";
  }
});

// go sectiona-a btn
const goSec_aBtn = document.getElementById("bx-chevron-down");
goSec_aBtn.addEventListener("click", (e) => {
  window.scrollTo(0, section_a.offsetTop - 100);
  e.preventDefault();
});
// section
// section a
const section_a = document.getElementById("section-a");
const section_a_items = document.querySelectorAll(".section-a-items");
section_a_items.forEach((k, i) => {
  k.addEventListener("mouseenter", () => {
    k.children[0].children[1].style.transition = "0.6s all";
    k.children[0].children[1].style.opacity = "1";
    k.children[0].children[0].style.opacity = "0";
    k.children[1].children[2].style.opacity = "1";
    k.children[1].children[1].style.opacity = "0";
  });
  k.addEventListener("mouseleave", () => {
    k.children[0].children[0].style.transition = "0.6s all";
    k.children[0].children[0].style.opacity = "1";
    k.children[0].children[1].style.opacity = "0";
    k.children[1].children[2].style.opacity = "0";
    k.children[1].children[1].style.opacity = "1";
  });
});
