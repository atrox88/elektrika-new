const hiddenBlock = document.querySelector(".shop-categories__list");
const subMenus = document.querySelectorAll(".cont");

subMenus.forEach((subMenu) => {
  if (subMenu.querySelector(".actives")) {
    subMenu.addEventListener("mouseover", () => {
      hiddenBlock.style.display = "block";
    });

    subMenu.addEventListener("mouseout", () => {
      hiddenBlock.style.display = "none";
    });
  }
});

window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  const scrollMenu = document.querySelector(".scroll-top-menu");

  if (scrollTop > 720) {
    if(scrollMenu != null){
        scrollMenu.classList.add("actives");
    }

    var contActive = document.querySelector(".categorijas-sub-menu.actives");

    const hiddenBlock = document.querySelector(".shop-categories__list");
    if (contActive) {
      contActive.addEventListener("mouseover", () => {
        hiddenBlock.style.display = "block";
      });

      contActive.addEventListener("mouseout", () => {
        hiddenBlock.style.display = "none";
      });
    }
  } else {
    var contActive = document.querySelector(".categorijas-sub-menu.actives");
    const hiddenBlock = document.querySelector(".shop-categories__list");

    if(scrollMenu != null) {
        scrollMenu.classList.remove("actives");
    }
    contActive.addEventListener("mouseover", () => {
      hiddenBlock.style.display = "none";
    });
  }
});

function open_sidenav() {
  $("#header_side").css("left", "0");
}

function closeNav() {
  $("#header_side").css("left", "-100%");
}

// function searhBox() {
//     var $searchBoxCont = $('.search-box'),
//         $searchResult  = $searchBoxCont.find('.search-box__result');
//
//     $searchBoxCont.find('input').on('input change focus', function(e){
//         if ( $(this).val().length >= 1 ) {
//             $searchResult.addClass('active');
//
//             $('body').on('click.search', function(e){
//                 if ( !$(e.target).closest($searchBoxCont).length ) {
// 	                $searchResult.removeClass('active');
//                     $(this).off('click.search');
//                 }
//             });
//         } else {
//             $searchResult.removeClass('active');
//         }
//     });
//
// }

function productListGridSwitch() {
  var $switch = $("[data-product-list-grid]"),
    $productListCont = $(".product-list:not(.product-list__static)");

  if (window.matchMedia("(max-width: 767px)").matches) {
    $productListCont.removeClass("product-list__grid");
    return;
  }

  function checkGrid(view) {
    switch (view) {
      case "list":
        $productListCont.addClass("product-list__grid");
        break;
      default:
        $productListCont.removeClass("product-list__grid");
        break;
    }
    localStorage.setItem("productListView", view);

    $switch
      .removeClass("active")
      .filter(function () {
        return $(this).data("product-list-grid") === view;
      })
      .addClass("active");
  }

  $switch.on("click", function (e) {
    e.preventDefault();
    checkGrid($(this).data("product-list-grid"), $(this));
  });

  if (typeof localStorage.productListView !== "undefined") {
    checkGrid(localStorage.productListView);
  } else {
    checkGrid("grid");
  }
}

function Bounce(ele, times, distance, speed) {
  for (var i = 0; i < times; i++) {
    ele
      .animate(
        {
          marginTop: "-=" + distance,
        },
        speed
      )
      .animate(
        {
          marginTop: "+=" + distance,
        },
        speed
      );
  }
}

// function addProductItemToCart(val) {
//     val = parseInt(val);
//
//     if (isNaN(val)) {
//         return;
//     }
//
//     var $carNo = $('.cart-no');
//     var $count = parseInt($carNo.html());
//     $count += val;
//     $carNo.html($count);
//     Bounce($carNo, 2, '5px', 100);
// }

// function shoppingCartProductCount(event) {
//     var $targetEl = $(event.target),
//         $elItem = $targetEl.parents('.product__el').eq(0),
//         $input = $elItem.find('input[name="quantity"]'),
//         $count = $input.val();
//
//     switch(event.data.action) {
//         case 'add':
//             $input.val(++$count);
//         break;
//         default:
//             if ($count > 1) {
//                 $input.val(--$count);
//             }
//         break;
//     }
//
//     if ($count <= 1) {
// 	    $elItem.find('.quantity-remove').addClass('disabled');
// 	    return;
//     } else {
// 	    $elItem.find('.quantity-remove').removeClass('disabled');
//     }
//
//     $input.trigger('change');
// }

// function countProductTotalPrice($item, $elItem){
// 	var $price = $elItem.find('[data-product-price]'),
// 		$discount = $elItem.find('[data-product-discount]'),
// 		currency = $elItem.find('[data-product-currency]').data('product-currency'),
// 		priceArray = $price.data('product-price'),
// 		quantity = 1;
//
// 	console.log($price);
// 	console.log(priceArray);
// 	if ($item.length) {
// 		quantity = $item.val();
// 	}
//
// 	if (typeof currency === "undefined") {
// 		currency = 'â‚¬';
// 	}
//
// 	if (isNaN(quantity)) {
// 		quantity = 1;
// 		$item.val(quantity);
// 	}
//
// 	var maxKey = -1;
// 	for (var key in priceArray) {
// 		if (maxKey < 0 || key < parseInt(quantity) + 1) {
// 			maxKey = Math.max(maxKey, key);
// 		}
// 	}
//
// 	var $totalPrice = Math.round((quantity * priceArray[maxKey]).toFixed(2) * 100) / 100;
// 	$price.html($totalPrice.toFixed(2).replace('.', ',') + ' ' + currency);
//
// 	if ($discount.length) {
// 		var $totalDiscount = Math.round((quantity * $discount.data('product-discount')).toFixed(2) * 100) / 100;
// 		$discount.html($totalDiscount.toFixed(2).replace('.', ',') + ' ' + currency);
// 	}
//
// 	return $totalPrice.toFixed(2);
// }

// function removeFromShoppingCart(event) {
//     var $elItem = $(event.target).parents('.opc-products').eq(0),
//         $itemName = $elItem.find('h4').eq(0).html();
//
//     if (confirm('Do you really want to delete this item from the shopping cart?')) {
//         alert('Should delete this item from shopping cart: ' + $itemName);
//     }
// }

function showHiddenBlock($block, $el, value) {
  if (!$el.is(":checked")) {
    return;
  }
  $el.val() === value ? $block.show() : $block.hide();
}

function fillSelect(obj, el) {
  el.empty();
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      $("<option/>", {
        value: key,
        text: obj[key],
      }).appendTo(el);
    }
  }
  el.trigger("refresh");
}

// function headerCartPrice(val) {
// 	var $cartPrice = $(".js-cart-total"),
// 		price = $cartPrice.html().replace(',','.');
//
// 	price = parseFloat(price) + parseFloat(val);
// 	$cartPrice.html(price.toFixed(2).replace('.',','));
// }

var omnivia_parcel_machine = {
  Latvia: {
    0: "Some address 0",
    1: "Some address 1",
    2: "Some address 2",
    3: "Some address 3",
  },
  Estonia: {
    4: "Some address 4",
    5: "Some address 5",
    6: "Some address 6",
    7: "Some address 7",
  },
  Lithuania: {
    8: "Some address 8",
    9: "Some address 9",
    10: "Some address 10",
    11: "Some address 11",
  },
};

$(document).ready(function () {
  // var $productQuantityAdd = $(".product-quantity .quantity-add"),
  // 	$productQuantityRemove = $(".product-quantity .quantity-remove"),
  // 	$productQuantityInput = $(".product-quantity [name='quantity']");

  // $productQuantityAdd.on("click", {"action": "add"}, shoppingCartProductCount);
  // $productQuantityRemove.on("click", {"action": "remove"}, shoppingCartProductCount);
  // $productQuantityInput.on("change keyup", function(){
  // 	countProductTotalPrice($(this), $(this).parents('.product__el').eq(0));
  // }).trigger("change");

  // var $productListItemBtn = $(".product-list__item .product-item__button button"),
  // $singleProductBtn = $(".product .product__button button");
  //
  // $productListItemBtn.on("click", function(e){
  //     e.preventDefault();
  //
  //     var $productInput = $(this).parents('.product-list__item').find('[name="product__count"]'),
  //         count = 1;
  //
  //     if ($productInput.length && !window.matchMedia('(max-width: 1223px)').matches) {
  //         count = $productInput.val();
  //     }
  //
  //     addProductItemToCart(count);
  //    headerCartPrice(countProductTotalPrice($productInput, $(this).parents('.product-list__item').eq(0)));
  // });
  //
  // $singleProductBtn.on("click", function(e){
  // e.preventDefault();
  //
  //    var count = 1,
  //     $productCount = $(this).parents(".product__desc").eq(0).find("[name='quantity']");
  //
  //    if ($productCount.length){
  //     count = $productCount.val();
  //    }
  //
  //    addProductItemToCart(count);
  //    headerCartPrice(countProductTotalPrice($productCount, $productCount.parents('.product__el').eq(0)));
  // });

  var $shoppingCartItemDel = $(".opc-products .opc-products__del");

  // $shoppingCartItemDel.on("click", removeFromShoppingCart);

  // $("[name='omniva_country']").on("change", function(){
  //     fillSelect(omnivia_parcel_machine[$(this).val()], $("[name='omnivia_parcel_machine']"));
  // }).trigger("change");

  // $('[name="shipping-method"], [name="dpd-address"]').on('change', function(){
  //     if (!$(this).is(':checked') || $(this).data('shipping-price') == null){
  // 		return;
  // 	}
  //
  //     $('.shipping__price').html($(this).data('shipping-price'));
  // }).trigger('change');
  //
  // searhBox();

  $(".styler").styler();

  // $('[name="shipping-method"]').on('change', function(){
  //    showHiddenBlock($('#sm_dpd'), $(this), "shipping-method_dpd");
  // }).trigger('change');
  //
  // $('[name="dpd-address"]').on('change', function(){
  //    showHiddenBlock($('#dpd_4'), $(this), "dpd-address_4");
  // }).trigger('change');

  // $('[name="ship-to"]').on('change', function(){
  // 	showHiddenBlock($('#company'), $(this), "company");
  // }).trigger('change');
  //
  // $('[name="ship-to"]').on('change', function(){
  // 	showHiddenBlock($('#individual'), $(this), "individual");
  // }).trigger('change');

  // $(".stay-touch [type='submit']").on("click", function(e){
  //     e.preventDefault();
  //     $(this).parents('.stay-touch').eq(0).find('.stay-touch__success').show();
  // });

  /* home_swiper */
  var swiper = new Swiper(".js-best-sellers", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, 
    spaceBetween: 8,
    slidesPerView: 2,
    breakpoints: {
    // when window width is <= 499px
      499: {
          slidesPerView: 2,
          spaceBetweenSlides: 8
      },
      // when window width is <= 999px
      850: {
          slidesPerView: 3,
          spaceBetweenSlides: 8
      },
      1250: {
          slidesPerView: 4,
          spaceBetweenSlides: 8
      }
    }
    // slidesPerView: $(window).width() > 1223 ? 4 : 2,
    // spaceBetween: $(window).width() > 1223 ? 0 : 8,
  });
  var swiper = new Swiper(".js-on-sale", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev", 
    },
    spaceBetween: 8,
    slidesPerView: 2,
    breakpoints: {
      // when window width is <= 499px
      499: {
          slidesPerView: 2,
          spaceBetweenSlides: 8
      },
      // when window width is <= 999px
      850: {
          slidesPerView: 3,
          spaceBetweenSlides: 8
      },
      1250: {
          slidesPerView: 4,
          spaceBetweenSlides: 8
      }
    }
    // 1024: {},
    // slidesPerView: $(window).width() > 1223 ? 4 : 2,
    // spaceBetween: $(window).width() > 1223 ? 0 : 8,
  });
  var swiperProduction = new Swiper(".js-cart-related", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 2,
    spaceBetween: $(window).width() > 1223 ? 0 : 8,
    breakpoints: {
      // when window width is <= 767px
      768: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });
  /* home_swiper */

  /* manufacturer_swiper */
  var swiper = new Swiper(".swiper-manufacturer", {
    slidesPerView: 4,
    slidesPerColumn: 1,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 767px
      767: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 8,
      },
    },
  });
  /* manufacturer_swiper */

  /* swiper 6 */
  var swiper = new Swiper(".swiper-featured-6", {
    slidesPerView: 6,
    slidesPerColumn: 1,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1223: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 8,
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 8,
      },
    },
  });

  var swiper = new Swiper(".swiper-inner", {
    slidesPerView: 4,
    slidesPerColumn: 1,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1223: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 8,
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 8,
      },
    },
  });

  var swiper = new Swiper(".swiper-aside", {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1223: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 15,
      },
      // when window width is <= 767px
      767: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 8,
      },
    },
  });
  /* swiper */

  let galleryThumbs = new Swiper(".swiper-product__gallery", {
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  let swiperProductImage = new Swiper(".swiper-product", {
    slidesPerView: 1,
    spaceBetween: 20,
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  var swiper = new Swiper(".more-slides", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });

  $(".js-google-map").each(function (i, v) {
    var id = $(this).attr("id");
    var lat = $(this).data("lat");
    var lng = $(this).data("lng");
    new GMaps({
      div: "#" + id,
      lat: lat,
      lng: lng,
    }).addMarker({
      lat: lat,
      lng: lng,
      title: "Elektrika SIA",
    });
  });

  $("#auth_purchaser")
    .on("change", function () {
      $(this).is(":checked") ? $("#auth_purchaser_block").show() : $("#auth_purchaser_block").hide();
    })
    .trigger("change");

  $("#not_vat_company")
    .on("change", function () {
      $(this).is(":checked") ? $("#vat_id").prop("disabled", true) : $("#vat_id").prop("disabled", false);
    })
    .trigger("change");

  $("#s-cart__promocode--button").on("click", function (e) {
    $("#s-cart__promocode--discount").show().css("display", "flex");
  });

  $(".show_more").click(function () {
    $(".all_manufactures").toggle();
  });

  $("body").tooltip({
    selector: "[data-toggle='tooltip']",
    container: "body",
  });

  productListGridSwitch();

  $(".selectpicker").selectpicker();

  $(window)
    .on("resize orientationchange", function () {
      if ($(window).width() > 767) {
        closeNav();
      }
      productListGridSwitch();

      setTimeout(function () {
        var item_swiper = $(".swiper-container .swiper-slide").width();
        $(".swiper-container .swiper-slide .pro_image").css("height", item_swiper);
      }, 500);
    })
    .trigger("resize orientationchange");
});

$(window).load(function () {
  setTimeout(function () {
    var item_swiper = $(".swiper-container .swiper-slide").width();
    $(".swiper-container .swiper-slide .pro_image").css("height", item_swiper);
  }, 500);
});

/* document.onclick = function(e) {
   let menuToggler = document.getElementsByClassName('header-categories-block')[0]
   let lang = document.getElementsByClassName('lang')[0]
   let navToggler = document.getElementsByClassName('menu-burger')[0]
   if(e.target.classList.contains('categories')) {
   document.getElementsByClassName('header-categories-menu')[0].classList.remove('active')
   document.getElementsByClassName('dropdown-lang')[0].classList.remove('active')
   document.getElementsByClassName('shop-categories')[0].parentNode.classList.toggle('menu-opened')
   document.getElementsByClassName('menu-burger')[0].classList.remove('open')
   }
   else if(e.target.classList.contains('language')){
   document.getElementsByClassName('header-categories-menu')[0].classList.remove('active')
   document.getElementsByClassName('shop-categories')[0].parentNode.classList.remove('menu-opened')
   document.getElementsByClassName('dropdown-lang')[0].classList.toggle('active')
   document.getElementsByClassName('menu-burger')[0].classList.remove('open')
   }
   else if(e.target.classList.contains('menu-burger') || e.target.parentNode.classList.contains('menu-burger')){
   document.getElementsByClassName('dropdown-lang')[0].classList.remove('active')
   document.getElementsByClassName('shop-categories')[0].parentNode.classList.remove('menu-opened')
   document.getElementsByClassName('header-categories-menu')[0].classList.toggle('active')
   document.getElementsByClassName('menu-burger')[0].classList.toggle('open')
   }
   else{
   closeModals()
   } */

/* } */
/* function closeModals () {
   document.getElementsByClassName('header-categories-menu')[0].classList.remove('active')
   document.getElementsByClassName('dropdown-lang')[0].classList.remove('active')
   document.getElementsByClassName('shop-categories')[0].parentNode.classList.remove('menu-opened')
   document.getElementsByClassName('menu-burger')[0].classList.remove('open')
   } */
// let lang = document.getElementsByClassName("lang")[0];
if (screen.width < 1230) {
  let headerBottomWrapper = document.getElementsByClassName("header-categories-menu")[0];
  // headerBottomWrapper.append(lang);
}
if (screen.width < 1223) {
  try {
    let submitSomething = document.getElementsByClassName("hideden-lg")[0];
    if (submitSomething) {
      submitSomething.remove();
    }
    let footer = document.getElementsByClassName("footer")[0];
    if (submitSomething) {
      footer.before(submitSomething);
    }
  } catch (e) {
    console.log(e);
  }
}

// HARDWEB SCRIPT

function Burger(burger, menu) {
  this.burger = burger;
  this.menu = menu;
  let self = this;
  this.burger.setAttribute("data-burger", "data-burger");
  this.menu.setAttribute("data-burger", "data-burger");
  Array.from(this.burger.querySelectorAll("*")).forEach((el) => {
    el.setAttribute("data-burger", "data-burger");
  });
  Array.from(this.menu.querySelectorAll("*")).forEach((el) => {
    el.setAttribute("data-burger", "data-burger");
  });

  this.burger.onclick = function (e) {
    document.body.classList.toggle("overflow-js");
    self.menu.classList.toggle("active");
    this.classList.toggle("open");
    window.addEventListener("scroll", noScroll);
    document.getElementsByClassName("shop-categories")[0].parentNode.classList.remove("menu-opened");
  };
  document.onclick = function (e) {
    if (e.target.hasAttribute("data-burger")) {
    } else {
      self.burger.classList.remove("open");
      self.menu.classList.remove("active");
      document.body.classList.remove("overflow-js");
    }
  };

  function noScroll(e) {
    console.log(e);
  }
}

function DropDown(parent, trigger, changers) {
  this.parent = document.getElementsByClassName(parent)[0];
  this.trigger = this.parent.getElementsByClassName(trigger)[0];
  this.changers = this.parent.getElementsByClassName(changers);
  let self = this;
  Array.from(this.changers).forEach((changer) => {
    changer.addEventListener("click", changeTheTabValue);
  });

  function changeTheTabValue() {
    let text = this.innerText;
    self.trigger.getElementsByClassName("changing")[0].innerText = text;
    self.trigger.nextElementSibling.classList.remove("active");
  }

  this.trigger.onclick = function (e) {
    this.nextElementSibling.classList.toggle("active");
  };
  document.addEventListener("click", closeTabs);

  function closeTabs(e) {
    try {
      if (e.target.parentNode.classList.contains("select-drop-down") || e.target.parentNode.classList.contains(parent)) {
        return false;
      } else if (e.target.closest("." + trigger)) {
        return false;
      }

      self.trigger.nextElementSibling.classList.remove("active");
    } catch (e) {
      void e;
    }
  }
}

function ProgramTabs(tabTrigger, tabContentWrapper, parentElement) {
  this.tab = tabTrigger;
  this.tabContent = tabContentWrapper;
  this.parent = parentElement;
  let self = this;

  Array.from(this.tab).forEach((tab) => {
    tab.addEventListener("click", changeTheTab);
  });
  this.showTab = function (index) {
    closeTabs();
    self.tabContent.children[index].classList.add("active");
    self.tab[index].classList.add("active");
  };

  this.parent.addEventListener("click", (e) => {
    if (e.target.classList.contains("open")) {
      self.parent.classList.remove("open");
    }
  });

  function closeTabs() {
    Array.from(self.tabContent.children).forEach((tab) => {
      tab.classList.remove("active");
    });
    Array.from(self.tab).forEach((tab) => {
      tab.classList.remove("active");
    });
  }

  function changeTheTab(e) {
    e.preventDefault();
    let index = Array.from(this.parentNode.children).indexOf(this);
    closeTabs();
    self.tabContent.children[index].classList.add("active");
    this.classList.add("active");
  }
}

let tabTriggers = document.querySelectorAll(".registration-pop-up-inner .changer-content a");
let contentWrapper = document.querySelector(".tab-content-wrapper");
let parentElement = document.querySelector(".registration-pop-up-wrapper");
try {
  let modalTabs = new ProgramTabs(tabTriggers, contentWrapper, parentElement);
} catch (e) {
  void e;
}

function openPopUp() {
  if (this.dataset.authorized === "true") {
    document.location = "/profile/info";
    return;
  }
  document.getElementsByClassName("registration-pop-up-wrapper")[0].classList.add("open");
  let index = this.getAttribute("data-index");
  $(".registration-pop-up-wrapper .changer-content a").removeClass("active");
  $(".registration-pop-up-wrapper .modal-tab-content").removeClass("active");
  $($(".registration-pop-up-wrapper .changer-content a")[index]).addClass("active");
  $($(".registration-pop-up-wrapper .modal-tab-content")[index]).addClass("active");
  // modalTabs.showTab(index); - this was broken
}

try {
  let openPopUpTriggerButtons = document.getElementsByClassName("openpopuptrigger");
  Array.from(openPopUpTriggerButtons).forEach((btn) => {
    btn.addEventListener("click", openPopUp);
  });
} catch (e) {
  void e;
}

let headerBottomWrap = document.getElementsByClassName("header-categories-menu")[0];
let burgerMenu = document.getElementsByClassName("menu-burger")[0];

new DropDown("lang", "drop-down-lang-trigger", "lang-dropdown-changer");

new Burger(burgerMenu, headerBottomWrap);
let headerMenuWrapper = document.getElementsByClassName("header-menu-wrapper")[0];
let headerBottonWrapper = document.getElementsByClassName("header-bottom-wrapper")[0];
if (screen.width < 767) {
  headerMenuWrapper.append(burgerMenu);
  headerMenuWrapper.append(headerBottonWrapper);
}

let headerCategories = document.getElementsByClassName("header-categories-block categories");
Array.from(headerCategories).forEach((cat) => {
  cat.addEventListener("click", showCategories);
});

function showCategories(ev) {
  if ($(window).width() <= 425) {
    ev.preventDefault();
  }
  document.getElementsByClassName("shop-categories")[0].parentNode.classList.toggle("menu-opened");
  this.classList.toggle("active");
  document.addEventListener("click", superFunc);
  let self = this;

  function superFunc(e) {
    if (Array.from(e.path).includes(self) || Array.from(e.path).includes(document.getElementsByClassName("shop-categories")[0])) {
      console.log(e.path);
    } else {
      self.classList.remove("active");
      document.getElementsByClassName("shop-categories")[0].parentNode.classList.remove("menu-opened");
    }
  }
}

new DropDown("has-inner-ul", "inner-ul-trigger", "inner-ul-inner-changer");

/* let titles = document.getElementsByClassName('product-item__title')
   Array.from(titles).forEach(title => {
   if(title.innerText.length >= 50){
   title.innerText = title.innerText.substr(0, 35) + '...';
   }
   }) */

let addToCart = document.getElementsByClassName("add-to-card-btn");
Array.from(addToCart).forEach((add) => {
  add.addEventListener("mouseover", changeToHover);
  add.addEventListener("mouseout", changeToNotHover);
  add.addEventListener("touchstart", changeToHover);
  add.addEventListener("touchend", changeToNotHover);
});

function changeToHover() {
  this.classList.add("active");
  let img = this.getElementsByTagName("img")[0];
  let hoverSrc = img.getAttribute("data-hover-src");
  img.src = hoverSrc;
}

function changeToNotHover() {
  this.classList.remove("active");
  let img = this.getElementsByTagName("img")[0];
  let notHoveredSrc = img.getAttribute("data-src");
  img.src = notHoveredSrc;
}

let cookieButton = document.getElementsByClassName("button-cookie")[0];
if (cookieButton) {
  cookieButton.addEventListener("click", closeCookieButton);
}

function closeCookieButton() {
  var date = new Date();
  date.setTime(date.getTime() + 730 * 24 * 60 * 60 * 1000);
  document.cookie = "visit=true; expires=" + date.toUTCString() + "; path=/";
  document.getElementsByClassName("cookie-usage-wrapper")[0].style.display = "none";
}

let discountTags = document.getElementsByClassName("tag tag--discount");
if (screen.width < 767) {
  Array.from(discountTags).forEach((disc) => {
    let neededNumb = Math.round(parseInt(disc.innerText));
    disc.innerText = neededNumb + "%";
  });
}

var mySwiper = new Swiper(".home-carousel", {
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".carousel-indicators",
    type: "bullets",
    clickable: true,
  },
});

if (screen.width < 767) {
  document.getElementById("user").onclick = function () {
    if (this.dataset.authorized === "true") {
      document.location = "/profile/info";
      return;
    }
    Array.from(document.getElementsByClassName("registration-pop-up-wrapper")).forEach((modal) => {
      modal.classList.add("open");
    });
  };
  Array.from(document.getElementsByClassName("footer-top-wrapper")).forEach((el) => {
    document.getElementsByClassName("footer")[0].before(el);
  });
}

let showMarks = document.getElementsByClassName("show-hide-marks");
Array.from(showMarks).forEach((show) => {
  show.addEventListener("click", showAllMarks);
});

function showAllMarks() {
  let amount = this.getAttribute("data-active-amount");
  let innerWrapper = this.closest(".inner-wrapper");
  let innerWrappersPar = innerWrapper.getElementsByTagName("a");

  function loop(argument, type) {
    for (let i = 0; i < argument; i++) {
      innerWrappersPar[i].style.display = type;
    }
  }

  if (this.previousElementSibling.style.display == "none") {
    loop(innerWrappersPar.length, "block");
    this.innerText = "ذ،ذ؛ر€ر‹ر‚رŒ ذ¼ذµر‚ذ؛ذ¸";
  } else {
    loop(innerWrappersPar.length, "none");
    loop(+amount, "block");
    this.innerText = "ذںذ¾ذ؛ذ°ذ·ذ°ر‚رŒ ذ¼ذµر‚ذ؛ذ¸";
  }
}

/* function showMark( marksTrigger, marksOpeningEl ) {
   this.marksTrigger = document.getElementsByClassName(marksTrigger);
   this.marksOpeningEl = document.getElementsByClassName(marksOpeningEl);
   let self = this
   Array.from(this.marksTrigger).forEach((trigger, index) => {
   console.log(trigger);
   trigger.addEventListener('click', openEl)
   })
   function openEl(){
   Array.from(self.marksOpeningEl).forEach(el => {
   console.log(el.clientHeight)
   if(el.style.maxHeight){
   el.style.maxHeight = ``
   return false
   }
   el.style.maxHeight = `${el.scrollHeight}px`;
   })
   }
   }
   new showMark('show-hide-marks', 'cat-marks-wrapper')*/

function Accordion(accordionTriggerSelector, accordionContentSelector, options) {
  options.active = options.active ? options.active : "+";
  options.passive = options.passive ? options.passive : "-";
  this.trigger = document.querySelectorAll(accordionTriggerSelector);
  this.content = document.querySelectorAll(accordionContentSelector);
  Array.from(this.trigger).forEach((trig, index) => {
    trig.onclick = (e) => {
      e.preventDefault();
      isOpen(this.content[index], trig);
    };
  });

  function isOpen(el, trig) {
    if (el.style.maxHeight) {
      el.style.maxHeight = "";
      trig.innerText = options.active;
      setTimeout(() => {
        linkActivation.calculatePosition();
      }, 500);
      return false;
    }
    el.style.maxHeight = `${el.scrollHeight}px`;
    trig.innerText = options.passive;
    setTimeout(() => {
      linkActivation.calculatePosition();
    }, 500);
  }
}

new Accordion(".open-production-button", ".production-additional", {
  active: "+",
  passive: "-",
});

function StickyElement(elementSelector) {
  this.element = document.querySelectorAll(elementSelector);
  let header = document.getElementsByClassName("site-header")[0];
  this.headerHeight = screen.width > 991 ? header.scrollHeight : 0;
  let self = this;

  function isSticky(el, elPosition) {
    if (pageYOffset + self.headerHeight > elPosition) {
      header.classList.add("js-shadow");
      el.classList.add("sticky");
      return false;
    }
    header.classList.remove("js-shadow");
    el.classList.remove("sticky");
  }
  Array.from(this.element).forEach((el) => {
    let elPosition = el.getBoundingClientRect().top + pageYOffset;
    document.addEventListener("scroll", (e) => {
      isSticky(el, elPosition);
    });
    isSticky(el);
  });
}
let stickyElement = new StickyElement(".production-sticky-tabs");

function ActiveLinks(linksSelector, contentWrapper) {
  let className = "active";
  this.links = document.querySelectorAll(linksSelector);
  this.contentChildren = document.querySelector(contentWrapper).children;
  let previousIndex = 0;
  let self = this;
  let els = [];
  this.calculatePosition = function () {
    els = [];
    Array.from(self.contentChildren).forEach((el, index) => {
      let obj = {
        id: index,
        position: pageYOffset + el.getBoundingClientRect().top - stickyElement.headerHeight - 140,
      };
      els.push(obj);
    });
    els.reverse();
  };
  setTimeout(function () {
    self.calculatePosition();
  }, 500);

  document.addEventListener("scroll", activateLink);

  function activateLink() {
    for (let i = 0; i < els.length; i++) {
      if (els[i].position < pageYOffset) {
        self.links[previousIndex].classList.remove(className);
        self.links[els[i].id].classList.add(className);
        previousIndex = els[i].id;
        break;
      }
    }
  }
}
try {
  var linkActivation = new ActiveLinks(".production-sticky-tabs .tab", ".production-tabs-content-wrapper");
} catch (e) {
  console.log("linkActivation error " + e);
}

let labels = document.querySelectorAll(".tab-li label");
Array.from(labels).forEach((label) => {
  label.addEventListener("click", changeActive);
});

function changeActive() {
  let parent = this.parentNode;
  Array.from(parent.querySelectorAll("label")).forEach((lab) => {
    lab.classList.remove("active");
  });
  this.classList.add("active");
}

function AnchorLinks(linksSelector, contentWrapper) {
  this.links = document.querySelectorAll(linksSelector);
  this.contentWrapper = document.querySelector(contentWrapper);
  let self = this;
  Array.from(this.links).forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      moveToTheAppropriateContent(index);
    });
  });

  function moveToTheAppropriateContent(index) {
    let elementCoordinates = self.contentWrapper.children[index].getBoundingClientRect().top + pageYOffset;

    //self.contentWrapper.children[index].scrollIntoView({behavior: 'smooth'});
    let overAllCoordinates = elementCoordinates - stickyElement.headerHeight;
    console.log(stickyElement.headerHeight);
    window.scrollTo(0, overAllCoordinates - 70);
  }
}
new AnchorLinks(".production-sticky-tabs .tab", ".production-tabs-content-wrapper");

if ($(window).width() <= 425) {
  $(".drop-list >li .active-link").on("click", function (e) {
    e.preventDefault();
    $(".drop-list").toggleClass("drop-list-active");
  });

  $(".drop-list >li .active-link").parent().addClass("activeItem");
  let activeItem = document.getElementsByClassName("activeItem")[0];
  try {
    activeItem.remove();
    document.getElementsByClassName("drop-list")[0].prepend(activeItem);
  } catch (e) {
    void e;
  }
}

$("#form-checkbox-disabled").on("click", function (e) {
  e.preventDefault;
  $("#dnc_company").toggleClass("label-checkbox-active");
});

$(function () {
  $(".var-number").niceNumber({
    autoSize: false,
  });
});

window.addEventListener(
  "orientationchange",
  function () {
    location.reload();
  },
  false
);

// Map
var map;

var positions = [
  {
    lat: 56.917074,
    lng: 23.990774,
  },
  {
    lat: 57.525685,
    lng: 25.435736,
  },
  {
    lat: 55.866103,
    lng: 26.536275,
  },
  {
    lat: 57.388212,
    lng: 21.56037,
  },
];

function initMap() {
    var mapdiv =  document.getElementById('map');
    if (typeof(mapdiv) == 'undefined' || mapdiv == null){
        return;
    }

  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(56.917074, 23.990774),
    zoom: 14,
  });

  var iconBase = "https://www.elektrika.lv/images/icons/";

  var icons = {
    pin: {
      icon: iconBase + "map-icon.svg",
    },
  };
  var features = [
    {
      position: new google.maps.LatLng(56.917074, 23.990774),
      type: "pin",
    },
    {
      position: new google.maps.LatLng(57.525685, 25.435736),
      type: "pin",
    },
    {
      position: new google.maps.LatLng(55.866103, 26.536275),
      type: "pin",
    },
    {
      position: new google.maps.LatLng(57.388212, 21.56037),
      type: "pin",
    },
  ];

  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

let contactTabs = document.querySelectorAll(".map-content .nav-item");
Array.from(contactTabs).forEach((tab) => {
  tab.addEventListener("click", changeMapCenter);
});

function changeMapCenter() {
  let index = Array.from(this.parentElement.children).indexOf(this);
  map.setCenter(new google.maps.LatLng(positions[index].lat, positions[index].lng));
  history.replaceState(null, "", this.querySelector(".nav-link").href);
}

$(function () {
  // check & set contacts tab
  if (location.hash) {
    const place = location.hash.substr(1);
    $("#pills-tab .nav-item").removeClass("active");
    $(`#pills-tab [data-place=${place}]`).addClass("active");
    $("#pills-tabContent .tab-pane").removeClass("active");
    $(`#pills-tabContent #${place}`).addClass("active");
    changeMapCenter.call($(`#pills-tab [data-place=${place}]`)[0]);
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
  }
});

// selectric js
$(".selectric").selectric();

var $selectValue = $("#select_value").find("strong");

$selectValue.text($("#get_value").val());

$("#get_value")
  .selectric()
  .on("change", function () {
    $selectValue.text($(this).val());
  });

$(".box__header .btn-open-list").on("click", function (e) {
  e.preventDefault();
  $(".box__header").toggleClass("box__header-list-active");
});

// Hamburger
$(".hamburger").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("hamburger-active");
  $(".header .navbar").toggleClass("navbar-active");
  $(".overlay").toggleClass("overlay-active");
});

// $( function(){
//     $( "#datepicker" ).datepicker();
// });

$(".filter-close").on("click", function (e) {
  e.preventDefault();
  $("#filter-box-sidebar").removeClass("active");
  $(".caregories-page.cats").removeClass("active");
});

$(".radio_ch.tab-li").on("click", function (e) {
  e.preventDefault();
  if ($(".individual-radio").hasClass("active")) {
    $("#indv-comp-name").parent(".form-group").addClass("js-active");
    $("#indv-comp-position").parent(".form-group").addClass("js-active");
  } else {
    $("#indv-comp-name").parent(".form-group").removeClass("js-active");
    $("#indv-comp-position").parent(".form-group").removeClass("js-active");
  }
});

if ($(window).width() <= 768) {
  $(".about-item").parent().css("width", "100%");
}
if ($(window).width() <= 425) {
  $(".home-carousel").parent().css({
    paddingLeft: "8px",
    paddingRight: "8px",
  });
}

// Date-Range-Picker

// $('.date').flatpickr({
//     "locale": "ru",
//     minDate: "today",
//     altInput: true,
//     altFormat: "j F",
//     disableMobile: "true"
// });

$(".inner-ul-inner-changer").on("click touchend", function (e) {
  var el = $(this);
  var link = el.attr("href");
  window.location = link;
});

$(".btn-manager").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(".manager-box").toggleClass("hidden");
  window.setTimeout(function () {
    $(".manager-box").toggleClass("active");
  }, 0);
});

document.addEventListener("touchmove", closeAllRibbons);

function closeAllRibbons() {
  Array.from(ribbonsWrapper).forEach((ribbon) => {
    ribbon.style.width = "";
  });
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 280) {
    $(".fix-column").addClass("fixed");
  } else {
    $(".fix-column").removeClass("fixed");
  }
});

$(document).scroll(function () {
  if ($(document).scrollTop() > 720) {
    $(".scroll-top-menu").addClass("actives");
  } else {
    $(".scroll-top-menu").removeClass("actives");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 650) {
    $(".fix-column").removeClass("fixed");
  }
});

$(".shop-categories__list .shop-categories__item").hover(function () {
  $(this).toggleClass("hover");
});
/*
$(".categorijas-sub-menu").hover(function () {
  $(this).toggleClass("hovers");
});


if ($(".categorijas-sub-menu").hasClass("actives")) {

  $(".activies").hover(function () {
    $(this).toggleClass("hovers");
  });

}*/

$("body").on("hover", ".categories-main-menu.activies", function () {
  $(this).toggleClass("hovers");
});

var swiper = new Swiper(".new-categories-carousel", {
  slidesPerView: 8,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    425: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    1124: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});

window.initPartnerSwiper = function () {
  var swiper = new Swiper(".partner-sliders", {
    slidesPerView: 1,
    // loop: true,
    // autoplay: true,
    navigation: {
      nextEl: ".partner-next",
      prevEl: ".partner-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1124: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },
  });
};

(function ($) {
  $(function () {
    $("ul.tabs__caption").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active");
      $(".filter-row-hdn").toggleClass("hdn");
    });
  });
})(jQuery);

$(function () {
  /*
   * International Telephone Input v16.0.0
   * https://github.com/jackocnr/intl-tel-input.git
   * Licensed under the MIT license
   */
  var input = document.querySelectorAll("input[type=tel]");
  var iti_el = $(".iti.iti--allow-dropdown.iti--separate-dial-code");
  if (iti_el.length) {
    iti.destroy();
    // Get the current number in the given format
  }
  for (var i = 0; i < input.length; i++) {
    iti = intlTelInput(input[i], {
      autoHideDialCode: false,
      autoPlaceholder: "aggressive",
      initialCountry: ECM.country_code || "lv",
      separateDialCode: true,
      customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        return "" + selectedCountryPlaceholder.replace(/[0-9]/g, "X");
      },
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    });

    input[i].iti_instance = iti;

    $('input[type=tel]').on("focus click countrychange", function (e, countryData) {
      var pl = $(this).attr("placeholder") + "";
      var res = pl.replace(/X/g, "9");
      if (res != "undefined") {
        $(this).inputmask(res, {
          placeholder: "X",
          autoUnmask: true,
          clearMaskOnLostFocus: true,
        });
      }
    });
  }
});

let image_template = document.getElementById("image-template");

let icons_url = {
  xlsx: "https://img.icons8.com/color/48/000000/ms-excel.png",
  pdf: "https://img.icons8.com/color/50/000000/pdf.png",
  docx: "https://img.icons8.com/color/48/000000/word.png",
};

function get_extenstion(file) {
  return file.name.split(".")[1];
}

function show_file_previews(e) {
  let file_element = e.target;
  let files = e.target.files;
  let object_url = null,
    div = null,
    extension = null;

  image_template.innerHTML = "";
  if (files.length) {
    for (let index in files) {
      if (files[index] instanceof File) {
        extension = get_extenstion(files[index]);
        object_url = icons_url[extension] ? icons_url[extension] : URL.createObjectURL(files[index]);

        div = document.createElement("DIV");
        div.innerHTML = `
                            <img src="${object_url}" class="img-small" >
                        `;
        image_template.appendChild(div);
      }
    }
  }
}