const topNav = document.querySelector('#top-nav'),
      navPush = document.querySelector('#push'),
      tags = document.querySelector('#aside-tags'),
      info = document.querySelector('#info'),
      about = document.querySelector('#about'),
      headerBottom = document.querySelector('#header-bottom'),
      topNavItems = topNav.querySelectorAll('a');

const toggleClass = (elem, ...classesToToggle) => classesToToggle.forEach(cls => elem.classList.toggle(cls));

const tagsClone = tags.innerHTML,
      infoClone = info.innerHTML,
      aboutClone = about.innerHTML;

const dropDown = (elem, fill, classToToggle) => {
  elem.classList.toggle(classToToggle);
  let check = elem.classList.contains(classToToggle);
  elem.innerHTML = check ? fill : '';
}

headerBottom.addEventListener('click', e => {
  e.preventDefault();
  let target = e.target;
  if (target.hasAttribute('href')) {
    switchTabs(topNavItems, target, 'nav--active');
  } 
  
  let attr = target.getAttribute('alt') || target.getAttribute('name');

  switch(attr) {
    case 'navigation-menu':
    toggleClass(topNav, 'nav-mobile-hidden');
    toggleClass(navPush, 'no-push');
    break;
    case 'tags':
    toggleClass(navPush, 'no-push', 'push');
    dropDown(navPush, tagsClone, 'push--tags');
    break;
    case 'info': 
    toggleClass(navPush, 'no-push', 'push');
    dropDown(navPush, infoClone, 'push--tags');
    break;
    case 'about': 
    toggleClass(navPush, 'no-push', 'push');
    dropDown(navPush, aboutClone, 'push--tags');
    break;
  }
}, false);

