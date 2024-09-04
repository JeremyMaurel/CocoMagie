function updateNavBarMargin() {
  const navbar = document.querySelector('.navbar');
  const navbarStyle = window.getComputedStyle(navbar);
  if (navbarStyle.position === 'fixed') {
    const navbarHeight = navbar.offsetHeight;
    document.body.style.marginTop = navbarHeight + 'px';
  } else {
    document.body.style.marginTop = '0px';
  }
}

function navBarMargin() {
  document.addEventListener('DOMContentLoaded', updateNavBarMargin);
  window.addEventListener('resize', updateNavBarMargin);
}

export default navBarMargin;
