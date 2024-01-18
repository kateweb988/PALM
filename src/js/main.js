document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons.length; i++) {
      accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
      pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass == "accordeon__button closed") {
      this.className = "accordeon__button active";
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  }
});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons2 = document.getElementsByClassName("accordeon__button2");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons2.length; i++) {
    var accordeonButton2 = accordeonButtons2[i];

    accordeonButton2.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass2 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons2.length; i++) {
      accordeonButtons2[i].className = "accordeon__button2 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels2 = document.getElementsByClassName("accordeon__panel2");
    for (var z = 0; z < pannels2.length; z++) {
      pannels2[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass2 == "accordeon__button2 closed") {
      this.className = "accordeon__button2 active";
      var panel2 = this.nextElementSibling;
      panel2.style.maxHeight = panel2.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons3 = document.getElementsByClassName("accordeon__button3");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons3.length; i++) {
    var accordeonButton3 = accordeonButtons3[i];

    accordeonButton3.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass3 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons3.length; i++) {
      accordeonButtons3[i].className = "accordeon__button3 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels3 = document.getElementsByClassName("accordeon__panel3");
    for (var z = 0; z < pannels3.length; z++) {
      pannels3[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass3 == "accordeon__button3 closed") {
      this.className = "accordeon__button3 active";
      var panel3 = this.nextElementSibling;
      panel3.style.maxHeight = panel3.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons4 = document.getElementsByClassName("accordeon__button4");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons4.length; i++) {
    var accordeonButton4 = accordeonButtons4[i];

    accordeonButton4.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass4 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons4.length; i++) {
      accordeonButtons4[i].className = "accordeon__button4 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels4 = document.getElementsByClassName("accordeon__panel4");
    for (var z = 0; z < pannels4.length; z++) {
      pannels4[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass4 == "accordeon__button4 closed") {
      this.className = "accordeon__button4 active";
      var panel4 = this.nextElementSibling;
      panel4.style.maxHeight = panel4.scrollHeight + "px";
    }

  }

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons5 = document.getElementsByClassName("accordeon__button5");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons5.length; i++) {
    var accordeonButton5 = accordeonButtons5[i];

    accordeonButton5.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass5 = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons5.length; i++) {
      accordeonButtons5[i].className = "accordeon__button5 closed";
    }

    // закрываем все открытые панели с текстом
    var pannels5 = document.getElementsByClassName("accordeon__panel5");
    for (var z = 0; z < pannels5.length; z++) {
      pannels5[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass5 == "accordeon__button5 closed") {
      this.className = "accordeon__button5 active";
      var panel5 = this.nextElementSibling;
      panel5.style.maxHeight = panel5.scrollHeight + "px";
    }

  }

});

document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');
});
document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs2');
});
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
document.addEventListener("DOMContentLoaded", () => {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E8EBF3', '#282D3C', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#E8EBF3', '#282D3C', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E8EBF3', '#282D3C', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#E8EBF3', '#282D3C', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector('#fromSlider');
  const toSlider = document.querySelector('#toSlider');
  const fromInput = document.querySelector('#fromInput');
  const toInput = document.querySelector('#toInput');
  fillSlider(fromSlider, toSlider, '#E8EBF3', '#282D3C', toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

});
document.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    var elActive = '';
    $.fn.selectCF = function (options) {

      // option
      var settings = $.extend({
        color: "#888888", // color
        backgroundColor: "#FFFFFF", // background
        change: function () { }, // event change
      }, options);

      return this.each(function () {

        var selectParent = $(this);
        list = [],
          html = '';

        //parameter CSS
        var width = $(selectParent).width();

        $(selectParent).hide();
        if ($(selectParent).children('option').length == 0) { return; }
        $(selectParent).children('option').each(function () {
          if ($(this).is(':selected')) { s = 1; title = $(this).text(); } else { s = 0; }
          list.push({
            value: $(this).attr('value'),
            text: $(this).text(),
            selected: s,
          })
        })

        // style
        var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

        html += "<ul class='selectCF'>";
        html += "<li>";
        html += "<span class='arrowCF ion-chevron-right' style='" + style + "'></span>";
        html += "<span class='titleCF' style='" + style + "; width:" + width + "px'>" + title + "</span>";
        html += "<span class='searchCF' style='" + style + "; width:" + width + "px'><input style='color:" + settings.color + "' /></span>";
        html += "<ul>";
        $.each(list, function (k, v) {
          s = (v.selected == 1) ? "selected" : "";
          html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>";
        })
        html += "</ul>";
        html += "</li>";
        html += "</ul>";
        $(selectParent).after(html);
        var customSelect = $(this).next('ul.selectCF'); // add Html
        var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
        var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
        var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

        // handle active select
        $(customSelect).unbind('click').bind('click', function (e) {
          e.stopPropagation();
          if ($(this).hasClass('onCF')) {
            elActive = '';
            $(this).removeClass('onCF');
            $(this).removeClass('searchActive'); $(seachElInput).val('');
            $(seachElOption).show();
          } else {
            if (elActive != '') {
              $(elActive).removeClass('onCF');
              $(elActive).removeClass('searchActive'); $(seachElInput).val('');
              $(seachElOption).show();
            }
            elActive = $(this);
            $(this).addClass('onCF');
            $(seachEl).children('input').focus();
          }
        })

        // handle choose option
        var optionSelect = $(customSelect).children('li').children('ul').children('li');
        $(optionSelect).bind('click', function (e) {
          var value = $(this).attr('value');
          if ($(this).hasClass('selected')) {
            //
          } else {
            $(optionSelect).removeClass('selected');
            $(this).addClass('selected');
            $(customSelect).children('li').children('.titleCF').html($(this).html());
            $(selectParent).val(value);
            settings.change.call(selectParent); // call event change
          }
        })

        // handle search 
        $(seachEl).children('input').bind('keyup', function (e) {
          var value = $(this).val();
          if (value) {
            $(customSelect).addClass('searchActive');
            $(seachElOption).each(function () {
              if ($(this).text().search(new RegExp(value, "i")) < 0) {
                // not item
                $(this).fadeOut();
              } else {
                // have item
                $(this).fadeIn();
              }
            })
          } else {
            $(customSelect).removeClass('searchActive');
            $(seachElOption).fadeIn();
          }
        })

      });
    };
    $(document).click(function () {
      if (elActive != '') {
        $(elActive).removeClass('onCF');
        $(elActive).removeClass('searchActive');
      }
    })
  }(jQuery));

  $(function () {
    var event_change = $('#event-change');
    $(".select").selectCF({
      change: function () {
        var value = $(this).val();
        var text = $(this).children('option:selected').html();
        console.log(value + ' : ' + text);
        event_change.html(value + ' : ' + text);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Scroll
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup1
  let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.pro__btn, .in__btn');
  let closePopupButton = document.querySelector('.close-popup');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
    })
  });

  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup2
  let popupBg2 = document.querySelector('.popup__bg2');
  let popup2 = document.querySelector('.popup2');
  let openPopupButtons2 = document.querySelectorAll('.a2, .card__link');
  let closePopupButton2 = document.querySelector('.close-popup2');

  openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg2.classList.add('active');
      popup2.classList.add('active');
    })
  });

  closePopupButton2.addEventListener('click', () => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg2) {
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup3
  let popupBg3 = document.querySelector('.popup__bg3');
  let popup3 = document.querySelector('.popup3');
  let openPopupButtons3 = document.querySelectorAll('.a3');
  let closePopupButton3 = document.querySelector('.close-popup3');

  openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg3.classList.add('active');
      popup3.classList.add('active');
    })
  });

  closePopupButton3.addEventListener('click', () => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg3) {
      popupBg3.classList.remove('active');
      popup3.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg3.classList.remove('active');
      popup3.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup4
  let popupBg4 = document.querySelector('.popup__bg4');
  let popup4 = document.querySelector('.popup4');
  let openPopupButtons4 = document.querySelectorAll('.nav__link');
  let closePopupButton4 = document.querySelector('.close-popup4');

  openPopupButtons4.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg4.classList.add('active');
      popup4.classList.add('active');
    })
  });

  closePopupButton4.addEventListener('click', () => {
    popupBg4.classList.remove('active');
    popup4.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg4) {
      popupBg4.classList.remove('active');
      popup4.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg4.classList.remove('active');
      popup4.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup5
  let popupBg5 = document.querySelector('.popup__bg5');
  let popup5 = document.querySelector('.popup5');
  let openPopupButtons5 = document.querySelectorAll('.popup4__btn');
  let closePopupButton5 = document.querySelector('.close-popup5');

  openPopupButtons5.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg5.classList.add('active');
      popup5.classList.add('active');
    })
  });

  closePopupButton5.addEventListener('click', () => {
    popupBg5.classList.remove('active');
    popup5.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg5) {
      popupBg5.classList.remove('active');
      popup5.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg5.classList.remove('active');
      popup5.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup6
  let popupBg6 = document.querySelector('.popup__bg6');
  let popup6 = document.querySelector('.popup6');
  let openPopupButtons6 = document.querySelectorAll('.cont__btn_1');
  let closePopupButton6 = document.querySelector('.close-popup6');

  openPopupButtons6.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg6.classList.add('active');
      popup6.classList.add('active');
    })
  });

  closePopupButton6.addEventListener('click', () => {
    popupBg6.classList.remove('active');
    popup6.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg6) {
      popupBg6.classList.remove('active');
      popup6.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg6.classList.remove('active');
      popup6.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup7
  let popupBg7 = document.querySelector('.popup__bg7');
  let popup7 = document.querySelector('.popup7');
  let openPopupButtons7 = document.querySelectorAll('.cont__btn_2');
  let closePopupButton7 = document.querySelector('.close-popup7');

  openPopupButtons7.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg7.classList.add('active');
      popup7.classList.add('active');
    })
  });

  closePopupButton7.addEventListener('click', () => {
    popupBg7.classList.remove('active');
    popup7.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg7) {
      popupBg7.classList.remove('active');
      popup7.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg7.classList.remove('active');
      popup7.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup8
  let popupBg8 = document.querySelector('.popup__bg8');
  let popup8 = document.querySelector('.popup8');
  let openPopupButtons8 = document.querySelectorAll('.cont__btn_3');
  let closePopupButton8 = document.querySelector('.close-popup8');

  openPopupButtons8.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg8.classList.add('active');
      popup8.classList.add('active');
    })
  });

  closePopupButton8.addEventListener('click', () => {
    popupBg8.classList.remove('active');
    popup8.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg8) {
      popupBg8.classList.remove('active');
      popup8.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg8.classList.remove('active');
      popup8.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup9
  let popupBg9 = document.querySelector('.popup__bg9');
  let popup9 = document.querySelector('.popup9');
  let openPopupButtons9 = document.querySelectorAll('.cont__edit_1');
  let closePopupButton9 = document.querySelector('.close-popup9');

  openPopupButtons9.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg9.classList.add('active');
      popup9.classList.add('active');
    })
  });

  closePopupButton9.addEventListener('click', () => {
    popupBg9.classList.remove('active');
    popup9.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg9) {
      popupBg9.classList.remove('active');
      popup9.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg9.classList.remove('active');
      popup9.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup10
  let popupBg10 = document.querySelector('.popup__bg10');
  let popup10 = document.querySelector('.popup10');
  let openPopupButtons10 = document.querySelectorAll('.cont__edit_2');
  let closePopupButton10 = document.querySelector('.close-popup10');

  openPopupButtons10.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg10.classList.add('active');
      popup10.classList.add('active');
    })
  });

  closePopupButton10.addEventListener('click', () => {
    popupBg10.classList.remove('active');
    popup10.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg10) {
      popupBg10.classList.remove('active');
      popup10.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg10.classList.remove('active');
      popup10.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup11
  let popupBg11 = document.querySelector('.popup__bg11');
  let popup11 = document.querySelector('.popup11');
  let openPopupButtons11 = document.querySelectorAll('.cont__edit_3');
  let closePopupButton11 = document.querySelector('.close-popup11');

  openPopupButtons11.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg11.classList.add('active');
      popup11.classList.add('active');
    })
  });

  closePopupButton11.addEventListener('click', () => {
    popupBg11.classList.remove('active');
    popup11.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg11) {
      popupBg11.classList.remove('active');
      popup11.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg11.classList.remove('active');
      popup11.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup12
  let popupBg12 = document.querySelector('.popup__bg12');
  let popup12 = document.querySelector('.popup12');
  let openPopupButtons12 = document.querySelectorAll('.a4');
  let closePopupButton12 = document.querySelector('.close-popup12');

  openPopupButtons12.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg12.classList.add('active');
      popup12.classList.add('active');
    })
  });

  closePopupButton12.addEventListener('click', () => {
    popupBg12.classList.remove('active');
    popup12.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg12) {
      popupBg12.classList.remove('active');
      popup12.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg12.classList.remove('active');
      popup12.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup13
  let popupBg13 = document.querySelector('.popup__bg13');
  let popup13 = document.querySelector('.popup13');
  let openPopupButtons13 = document.querySelectorAll('.help__btn');
  let closePopupButton13 = document.querySelector('.close-popup13');

  openPopupButtons13.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg13.classList.add('active');
      popup13.classList.add('active');
    })
  });

  closePopupButton13.addEventListener('click', () => {
    popupBg13.classList.remove('active');
    popup13.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg13) {
      popupBg13.classList.remove('active');
      popup13.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg13.classList.remove('active');
      popup13.classList.remove('active');
    }
  });
});
window.addEventListener("DOMContentLoaded", function () {
  $('body').on('click', '.password-control', function () {
    if ($('#password-input').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('#password-input').attr('type', 'password');
    }
    return false;
  });
});
window.addEventListener("DOMContentLoaded", function () {
  $('body').on('click', '.password-control2', function () {
    if ($('#password-input2').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input2').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('#password-input2').attr('type', 'password');
    }
    return false;
  });
});
window.addEventListener("DOMContentLoaded", function () {
  $('body').on('click', '.password-control3', function () {
    if ($('#password-input3').attr('type') == 'password') {
      $(this).addClass('view');
      $('#password-input3').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('#password-input3').attr('type', 'password');
    }
    return false;
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn1').on('click', function () {
    $('.item__btn1').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn2').on('click', function () {
    $('.item__btn2').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn3').on('click', function () {
    $('.item__btn3').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn4').on('click', function () {
    $('.item__btn4').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn5').on('click', function () {
    $('.item__btn5').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn6').on('click', function () {
    $('.item__btn6').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn7').on('click', function () {
    $('.item__btn7').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn8').on('click', function () {
    $('.item__btn8').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn9').on('click', function () {
    $('.item__btn9').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn10').on('click', function () {
    $('.item__btn10').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn11').on('click', function () {
    $('.item__btn11').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn12').on('click', function () {
    $('.item__btn12').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn13').on('click', function () {
    $('.item__btn13').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.item__btn14').on('click', function () {
    $('.item__btn14').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.view__add').on('click', function () {
    $('.view__add').toggleClass('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $(function () {
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      slidesToScroll: 1,
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });

});
document.addEventListener("DOMContentLoaded", () => {
  $(function () {
    $('.slider2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      slidesToScroll: 1,
      asNavFor: '.slider-nav2',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider-nav2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider2',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });

});
document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination1",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      1200: {
        spaceBetween: 0,
        slidesPerView: 1
      }
    }
  });
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination2",
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  });
  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination3",
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  });
  const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination4",
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  });
  const swiper5 = new Swiper('.swiper5', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination5",
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  });
  const swiper33 = new Swiper('.swiper33', {
    slidesPerView: 2,
    spaceBetween: 67,
    pagination: {
      el: ".swiper-pagination33",
    },
    navigation: {
      nextEl: '.swiper-button-next33',
      prevEl: '.swiper-button-prev33',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 67,
        slidesPerView: 2
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.item__see').click(function (event) {
    $(this).css('display', 'none');
    $('.item__content').slideToggle();
    $('.item__content').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.cat__see').click(function (event) {
    $(this).css('display', 'none');
    $('.cat__open').slideToggle();
    $('.cat__open').addClass('opened');
    return false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $(function () {
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      slidesToScroll: 1,
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider',
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="/img/top.svg" class="old"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="/img/top2.svg" class="old"></button>',
      vertical: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $("#up").on('click', function () {
      $("#incdec input").val(parseInt($("#incdec input").val()) + 1);
    });

    $("#down").on('click', function () {
      $("#incdec input").val(parseInt($("#incdec input").val()) - 1);
    });

  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn2 = document.querySelector('.menu-btn2');
  let menu2 = document.querySelector('.menu2');
  menuBtn2.addEventListener('click', function () {
    menuBtn2.classList.toggle('active');
    menu2.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn3 = document.querySelector('.menu-btn3');
  let menu3 = document.querySelector('.menu3');
  menuBtn3.addEventListener('click', function () {
    menuBtn3.classList.toggle('active');
    menu3.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let menuBtn4 = document.querySelector('.menu-btn4');
  let menu4 = document.querySelector('.menu4');
  menuBtn4.addEventListener('click', function () {
    menuBtn4.classList.toggle('active');
    menu4.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn5 = document.querySelector('.menu-btn5');
  let menu5 = document.querySelector('.menu5');
  menuBtn5.addEventListener('click', function () {
    menuBtn5.classList.toggle('active');
    menu5.classList.toggle('active');
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//   let menuBtn6 = document.querySelector('.menu-btn6');
//   let menu6 = document.querySelector('.menu6');
//   menuBtn6.addEventListener('click', function () {
//     menuBtn6.classList.toggle('active');
//     menu6.classList.toggle('active');
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   let menuBtn7 = document.querySelector('.menu-btn7');
//   let menu7 = document.querySelector('.menu7');
//   menuBtn7.addEventListener('click', function () {
//     menuBtn7.classList.toggle('active');
//     menu7.classList.toggle('active');
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   let menuBtn8 = document.querySelector('.menu-btn8');
//   let menu8 = document.querySelector('.menu8');
//   menuBtn8.addEventListener('click', function () {
//     menuBtn8.classList.toggle('active');
//     menu8.classList.toggle('active');
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   let menuBtn9 = document.querySelector('.menu-btn9');
//   let menu9 = document.querySelector('.menu9');
//   menuBtn9.addEventListener('click', function () {
//     menuBtn9.classList.toggle('active');
//     menu9.classList.toggle('active');
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   let menuBtn10 = document.querySelector('.menu-btn10');
//   let menu10 = document.querySelector('.menu10');
//   menuBtn10.addEventListener('click', function () {
//     menuBtn10.classList.toggle('active');
//     menu10.classList.toggle('active');
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   let menuBtn11 = document.querySelector('.menu-btn11');
//   let menu11 = document.querySelector('.menu11');
//   menuBtn11.addEventListener('click', function () {
//     menuBtn11.classList.toggle('active');
//     menu11.classList.toggle('active');
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   let menuBtn12 = document.querySelector('.menu-btn12');
//   let menu12 = document.querySelector('.menu12');
//   menuBtn12.addEventListener('click', function () {
//     menuBtn12.classList.toggle('active');
//     menu12.classList.toggle('active');
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  $('.articmodal-close').click(function (e) {
    $.arcticmodal('close');

  });
  $('.it1').click(function (e) {
    e.preventDefault();
    $('#it1').arcticmodal({
    });
  });
  $('.it2').click(function (e) {
    e.preventDefault();
    $('#it2').arcticmodal({
    });
  });
  $('.it3').click(function (e) {
    e.preventDefault();
    $('#it3').arcticmodal({
    });
  });
  $('.it4').click(function (e) {
    e.preventDefault();
    $('#it4').arcticmodal({
    });
  });
  $('.it5').click(function (e) {
    e.preventDefault();
    $('#it5').arcticmodal({
    });
  });
  $('.it6').click(function (e) {
    e.preventDefault();
    $('#it6').arcticmodal({
    });
  });
  $('.it7').click(function (e) {
    e.preventDefault();
    $('#it7').arcticmodal({
    });
  });
  $('.it8').click(function (e) {
    e.preventDefault();
    $('#it8').arcticmodal({
    });
  });
  $('.it9').click(function (e) {
    e.preventDefault();
    $('#it9').arcticmodal({
    });
  });
  $('.it10').click(function (e) {
    e.preventDefault();
    $('#it10').arcticmodal({
    });
  });
  $('.it11').click(function (e) {
    e.preventDefault();
    $('#it11').arcticmodal({
    });
  });
  $('.it12').click(function (e) {
    e.preventDefault();
    $('#it12').arcticmodal({
    });
  });
  $('.it13').click(function (e) {
    e.preventDefault();
    $('#it13').arcticmodal({
    });
  });
  $('.it14').click(function (e) {
    e.preventDefault();
    $('#it14').arcticmodal({
    });
  });
  $('.it15').click(function (e) {
    e.preventDefault();
    $('#it15').arcticmodal({
    });
  });
  $('.it16').click(function (e) {
    e.preventDefault();
    $('#it16').arcticmodal({
    });
  });
  $('.it17').click(function (e) {
    e.preventDefault();
    $('#it17').arcticmodal({
    });
  });
  $('.it18').click(function (e) {
    e.preventDefault();
    $('#it18').arcticmodal({
    });
  });
  $('.it19').click(function (e) {
    e.preventDefault();
    $('#it19').arcticmodal({
    });
  });
  $('.it20').click(function (e) {
    e.preventDefault();
    $('#it20').arcticmodal({
    });
  });
  $('.it21').click(function (e) {
    e.preventDefault();
    $('#it21').arcticmodal({
    });
  });
  $('.it22').click(function (e) {
    e.preventDefault();
    $('#it22').arcticmodal({
    });
  });
  $('.it23').click(function (e) {
    e.preventDefault();
    $('#it23').arcticmodal({
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $(".youtube-link").grtyoutube({
      autoPlay: true
    });
  });

  (function ($) {

    $.fn.grtyoutube = function (options) {

      return this.each(function () {

        // Get video ID
        var getvideoid = $(this).attr("youtubeid");

        // Default options
        var settings = $.extend({
          videoID: getvideoid,
          autoPlay: true
        }, options);

        // Convert some values
        if (settings.autoPlay === true) { settings.autoPlay = 1 } else { settings.autoPlay = 0 }

        // Initialize on click
        if (getvideoid) {
          $(this).on("click", function () {
            $("body").append('<div class="grtvideo-popup">' +
              '<div class="grtvideo-popup-content">' +
              '<span class="grtvideo-popup-close">&times;</span>' +
              '<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' + settings.videoID + '?rel=0&wmode=transparent&autoplay=' + settings.autoPlay + '&iv_load_policy=3" allowfullscreen frameborder="0"></iframe>' +
              '</div>' +
              '</div>');
          });
        }

        // Close the box on click or escape
        $(this).on('click', function (event) {
          event.preventDefault();
          $(".grtvideo-popup-close, .grtvideo-popup").click(function () {
            $(".grtvideo-popup").remove();
          });
        });

        $(document).keyup(function (event) {
          if (event.keyCode == 27) {
            $(".grtvideo-popup").remove();
          }
        });
      });
    };
  }(jQuery));
});
document.addEventListener("DOMContentLoaded", () => {
  // svg
  $(function () {
    jQuery('img.svg').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, else we gonna set it if we can.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

    });
  });
});

