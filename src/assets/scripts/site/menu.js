'use strict';

const itemHeadings = document.querySelectorAll('.item__heading');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const toggleButton = document.querySelector('.sidebar-toggle');
const itemLinks = document.querySelectorAll('.item__link');

export const toggleMenu = () => {
  toggleButton.addEventListener('click', function(e) {
    e.preventDefault();
    toggleButton.classList.toggle('active');
    menu.classList.toggle('is-hidden');
    container.classList.toggle('is-expanded');
  });
}

export const autoCloseMenu = () => {
  window.onresize = checkWindowSize;
  window.onload = checkWindowSize;
  function checkWindowSize() {
    if (window.innerWidth < 1140) {
      if (!(menu.classList.contains('is-hidden'))) {
        menu.classList.add('is-hidden');
        toggleButton.classList.remove('active');
        container.classList.add('is-expanded');
      }
    }
    else {
      if (menu.classList.contains('is-hidden')) {
        toggleButton.classList.add('active');
        menu.classList.remove('is-hidden');
        container.classList.remove('is-expanded');
      }
    }
  }
}

export const activeMenuLink = () => {
  Array.prototype.forEach.call(itemLinks, function(element) {
    let itemPath = element.pathname.split('/')[2];
    let windowPath = window.location.href.split('/')[4];
    if (itemPath == windowPath) {
      element.parentElement.classList.add('active');
    }
  })
}

export const openItemHeadings = (nodeList = itemHeadings) => {
  Array.prototype.forEach.call(nodeList, function(element) {

    let subNav = element.nextSibling.nextSibling;

    element.addEventListener('click', function(e) {
      subNav.classList.toggle('open');
    });

    let urlPath = window.location.pathname.split('/')[1];

    if (urlPath && urlPath === element.id) {
      element.nextSibling.nextSibling.classList.add('open');
    }
  });
}
