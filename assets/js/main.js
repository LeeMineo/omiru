//index.html 의 배너 넘기기
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.banner-slider img.slide');
    let currentIndex = 0;
    const interval = 5000; // 4초마다 전환
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    // 초기 실행
    showSlide(currentIndex);
    setInterval(nextSlide, interval);
  });
  
  
// 헤더 메뉴 토글
const menuToggle  = document.getElementById('menuToggle');
const mobileNav   = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');      // 사이드 메뉴 열기/닫기
  document.body.classList.toggle('no-scroll', mobileNav.classList.contains('open'));
});


// 기존 코드 아래에 이어 붙이기
const menuClose = document.getElementById('menuClose');

function closeNav(){                 // 이미 있는 로직 재활용
  mobileNav.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

menuClose.addEventListener('click', closeNav);
