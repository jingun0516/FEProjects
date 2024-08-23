const loadGoogleMaps = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
};

window.onload = loadGoogleMaps; // 페이지 로드 시 Google Maps API 로드

window.initMap = () => {
    const map = new google.maps.Map(document.querySelector('#map'), {
        center: {lat: 37.24317528542883, lng: 131.86688500415858},
        zoom: 8,
    });
}

const scrollUpBtn = document.querySelector('.scrollup-btn');
const scrollUp = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        scrollUpBtn.style.opacity = 1;
    } else {
        scrollUpBtn.style.opacity = 0;
    }
};
window.addEventListener('scroll', function ()  {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        scrollUpBtn.style.opacity = 1;
    } else {
        scrollUpBtn.style.opacity = 0;
    }
}, { passive: true });

scrollUpBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const emailInput = document.querySelector('.email-input');
const emailBtn = document.querySelector('.email-box .btn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modalContent = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-btn');
const submitForm = document.querySelector('#email-form');
const mobileEmailBtn = document.querySelector('.mobile-subscribe-btn');

const handleEmailClick = (event) => {
    event.preventDefault();

    const valueInput = emailInput.value;
    if (!valueInput) {
        window.alert('이메일이 입력되지 않았습니다!');
    } else if (!emailPattern.test(valueInput)) {
        window.alert('유효하지 않은 이메일입니다!');
    } else {
        modalContent.style.display = 'flex';
    }
}

emailBtn.addEventListener('click', handleEmailClick);
mobileEmailBtn.addEventListener('click', handleEmailClick);

modalCloseBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const formData = new FormData(submitForm);
    console.log('제출 폼 데이터 확인:');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // submitForm.submit();

    modalContent.style.display = 'none';
});

const blogBtn = document.querySelector('.blog-btn');
const instaBtn = document.querySelector('.insta-btn');
const facebookBtn = document.querySelector('.facebook-btn');
const youtubeBtn = document.querySelector('.youtube-btn');

const iconHandleClick = (event, url)=>{
    if(event.button === 1) {        // 마우스 휠
        window.open(url, "_blank"); // 새 탭에서 열기
    }
    else if(event.button === 0){
        window.location.href = url;
    }
}
blogBtn.addEventListener('mousedown', (event) => iconHandleClick(event, "https://blog.naver.com"));
instaBtn.addEventListener('mousedown', (event) => iconHandleClick(event, "https://instagram.com"));
facebookBtn.addEventListener('mousedown', (event) => iconHandleClick(event, "https://facebook.com"));
youtubeBtn.addEventListener('mousedown', (event) => iconHandleClick(event, "https://youtube.com"));


const menuBtn = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.menu-container');
const menuCloseBtn = document.querySelector('.arrow-btn');
menuBtn.addEventListener('click',  () => {
    menuContent.style.display = 'block';
});
menuCloseBtn.addEventListener('click', () => {
    menuContent.style.display = 'none';
})


const downloadFile = () => {
    const userConfirmed = confirm("정말 다운받으시겠습니까?");
    if(userConfirmed) {
        const link = document.createElement('a');
        link.href = './images/modal-cat.png'; // 실제 파일 경로
        link.download = 'cute-cat.png'; // 다운로드 파일 이름
        link.click();
    }
};


// 비동기식 접근을 통해 제출 후 새로고침X
//     btn_modalclose.addEventListener('click', function() {
//     const formData = new FormData(form_submit);
//     formData.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });
//     fetch(form_submit.action, {
//     method: 'POST',
//     body: formData,
// })
//     .then(response => {
//     if (response.ok) {
//     console.log('성공적으로 제출되었습니다.');
//     modalpage.style.display = 'none'; // 모달 닫기
// } else {
//     console.error('제출 실패');
// }
// })
//     .catch(error => {
//     console.error('서버 요청 실패:', error);
// });
// });
