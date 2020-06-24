var inMobileNav = false;

document.querySelector('.menu-btn').addEventListener('click', function () {

  var documentName = document.documentURI.split("/").pop();

  console.log(documentName)

  if (inMobileNav) {

    inMobileNav = false;

    document.querySelector('.menu-btn').src = 'resources/img/menu-icon.png';

    document.querySelector('.mobile-nav').style.display = 'none';

    switch (documentName) {
      case 'index.html':
        document.querySelector('.header-row').style.display = 'flex';
        document.querySelector('.services-section').style.display = 'block';
        document.querySelector('.features-section').style.display = 'block';
        document.querySelector('.how-it-works-section').style.display = 'block';
        break;
      case 'cennik.html':
        document.querySelector('.wip-content').style.display = 'flex';
        break;
      case 'kontakt.html':
        document.querySelector('.contact-row').style.display = 'flex';
        break;
    }
  } else {

    inMobileNav = true;

    document.querySelector('.menu-btn').src = 'resources/img/close-icon.png';

    document.querySelector('.mobile-nav').style.display = 'flex';

    switch (documentName) {
      case 'index.html':
        document.querySelector('.header-row').style.display = 'none';
        document.querySelector('.services-section').style.display = 'none';
        document.querySelector('.features-section').style.display = 'none';
        document.querySelector('.how-it-works-section').style.display = 'none';
        break;
      case 'cennik.html':
        document.querySelector('.wip-content').style.display = 'none';
        break;
      case 'kontakt.html':
        document.querySelector('.contact-row').style.display = 'none';
        break;
    }
  }
});