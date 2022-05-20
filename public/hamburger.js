const burger = document.querySelector('#burger');
const burger2 = document.querySelector('#burger2');
const menu = document.querySelector('.header');

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});
function toggleMenu() {
  if (menu.classList.contains('hidden')) {
    console.log('Hello');
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}

burger.addEventListener('click', toggleMenu);
burger2.addEventListener('click', toggleMenu);
