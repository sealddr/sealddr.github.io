window.addEventListener('scroll', function() {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (containerTop < windowHeight / 2) {
      body.classList.add('fade-in');
    }
  });