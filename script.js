function scrollCarousel(direction) {
    const container = document.getElementById('carousel');
    const scrollAmount = 250;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function scrollCarousel(direction) {
    const container = document.getElementById('carousel');
    const scrollAmount = 250;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  