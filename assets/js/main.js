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
  