//burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__wrap');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__wrap--active');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__wrap--active');
    document.body.classList.remove('stop-scroll');

  });
});



// Открыть модальное окно
document.querySelector('.hero__btn').addEventListener('click', function() {
  document.querySelector('.modal').classList.add('open');
})

// Закрыть модальное окно
document.querySelector('.modal__box-close').addEventListener('click', function() {
  document.querySelector('.modal').classList.remove('open');
})
// Закрыть модальное окно при клике вне его
document.querySelector('.modal .modal__box').addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.querySelector('.modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});



//slider
let swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    lastSlideMessage: 'Последний слайд',
    firstSlideMessage: 'Первый слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
});



function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(json);
          
        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
  }