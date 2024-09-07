function navbarCollapseWhenLinkCliked() {
  document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  });
}
export default navbarCollapseWhenLinkCliked;
