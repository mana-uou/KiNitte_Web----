window.addEventListener('scroll', function() {
    const header = document.querySelector('.page-header');
    const scrollY = window.scrollY;
  
    // スクロール量が100px以上になったらヘッダーを縮小
    if (scrollY >= 100) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });