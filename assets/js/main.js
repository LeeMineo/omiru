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


document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-alert-form');
  const closeBtn = document.getElementById('close-alert-form');
  const alertForm = document.getElementById('alert-form');
  const notifyForm = document.getElementById('notify-form');

  // 열기
  openBtn.addEventListener('click', () => {
    alertForm.style.display = 'flex';
  });

  // 닫기
  closeBtn.addEventListener('click', () => {
    alertForm.style.display = 'none';
  });

  // 제출 시 (나중에 fetch로 백엔드 연결)
  notifyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = notifyForm.name.value;
    const email = notifyForm.email.value;

    console.log('알림 신청됨:', { name, email });

    // TODO: Spring Boot 백엔드에 POST 요청 연결 예정
    // fetch('/api/notify', { method: 'POST', body: JSON.stringify({ name, email }) })

    alertForm.style.display = 'none';
    notifyForm.reset();
    alert('출시 알림 신청이 완료되었습니다!');
  });
});
