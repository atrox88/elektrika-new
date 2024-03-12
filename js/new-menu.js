const megaMenu = document.querySelector(".mega-menu");
const megaMenuWrapper = document.querySelector(".mega-menu__wrapper");
const megaMenuItems = megaMenu.querySelectorAll(".shop-categories__item");
const megaMenuSubItems = megaMenu.querySelectorAll(".submenu-lvl2__block-title");
const megaMenuLink = document.querySelector(".header-categories-block");
const megaMenuClose = document.querySelector(".mega-menu__close a");
const megaMenuBack = document.querySelector(".mega-menu__back");
const htmlElem = document.documentElement;

megaMenuLink.addEventListener("click", (e) => {
  e.preventDefault();
  megaMenuWrapper.classList.add("active");
  htmlElem.classList.add("no-scroll");
});

megaMenuClose.addEventListener("click", (e) => {
  e.preventDefault();
  megaMenuWrapper.classList.remove("active");
  htmlElem.classList.remove("no-scroll");
});

megaMenuItems.forEach((linkItem) => {
  link = linkItem.querySelector(".shop-categories__link");

  link.addEventListener("click", (e) => {
    const isActive = linkItem.classList.contains("active");
    e.preventDefault();
    megaMenuItems.forEach((item) => {
      if (isActive) {
        item.classList.remove("hidden");
        item.classList.remove("active");
      } else {
        if (!item.isEqualNode(linkItem)) {
          item.classList.add("hidden");
          item.classList.remove("active");
        }
        linkItem.classList.add("active");
      }
    });
    megaMenuSubItems.forEach((item) => {
      item.classList.remove("hidden");
      item.classList.remove("active");
    });
    megaMenuBack.classList.add("active");
    htmlElem.classList.add("no-scroll");
  });
});

megaMenuSubItems.forEach((title) => {
  link = title.querySelector(".submenu-lvl2__block-title-link");

  link.addEventListener("click", (e) => {
    const isActive = title.classList.contains("active");

    if (title.nextElementSibling.classList.contains("submenu-lvl2__list")) {
      e.preventDefault();

      megaMenuSubItems.forEach((item) => {
        if (isActive) {
          item.classList.remove("hidden");
          item.classList.remove("active");
        } else {
          if (!item.isEqualNode(title)) {
            item.classList.add("hidden");
            item.classList.remove("active");
          }
          title.classList.add("active");
        }
      });
    }
  });
});

megaMenuBack.addEventListener("click", () => {
  let subMenuActive = false;

  megaMenuSubItems.forEach((item) => {
    if (item.classList.contains("active")) {
      subMenuActive = true;
      item.classList.remove("active");
    } else {
      item.classList.remove("hidden");
    }
  });

  if (!subMenuActive) {
    megaMenuItems.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.remove("hidden");
      }
    });
    megaMenuBack.classList.remove("active");
  }
});

$(document).ready(function () {
  let wrappers = $(".submenu-lvl2.submenu-lvl2--index .new-row");

  wrappers.each(function (i, wrapper) {
    let items = $(wrapper).children();
    $(wrapper).empty();

    for (let i = 0; i < 4; i++) {
      $(wrapper).append("<div class='submenu-lvl2__children-nodes col-1-of-4'></div>")
    }

    items.each(function (i, item) {
      $(wrapper).children().eq(((i + 1) / 2 - 1) % 4).append(item);
    });
  });
});

document.body.addEventListener("mouseup", function (event) {
  if (
    !(
      event.target.closest(".mega-menu") ||
      event.target.matches(".header-categories-block")
    )
  ) {
    megaMenuWrapper.classList.remove("active");
    htmlElem.classList.remove("no-scroll");
  }
});