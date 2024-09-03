function updateNavBarMargin() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const navbarHeight = navbar.offsetHeight;
    document.body.style.marginTop = navbarHeight + 'px';
  }
}

function navBarMargin() {
  document.addEventListener('DOMContentLoaded', updateNavBarMargin);
  window.addEventListener('resize', updateNavBarMargin);
}

export default navBarMargin;
