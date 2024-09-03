function goToTop() {
  document.addEventListener('DOMContentLoaded', () => {
    document
      .querySelector('.scrollTopBtn')
      .addEventListener('click', scrollToTop);
  });

  window.onscroll = function () {
    const scrollTopBtn = document.querySelector('.scrollTopBtn');
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  };

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

export default goToTop;
