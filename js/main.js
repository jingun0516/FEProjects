// 앵커 태그
const anchors = document.querySelectorAll('a');

anchors.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

// 스크롤 잠그기
let scrollPosition = 0;

function lockScroll() {
    // 현재 스크롤 위치를 기억합니다.
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // body에 고정된 위치와 크기를 설정합니다.
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

// 스크롤 해제하기
function unlockScroll() {
    // 잠그기 전의 스크롤 위치를 가져옵니다.
    scrollPosition = -parseInt(document.body.style.top, 10);

    // 스크롤 해제
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    // 원래 위치로 스크롤을 복원합니다.
    window.scrollTo(0, scrollPosition);
}

// 구글맵 API
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

// 스크롤 이벤트
const scrollUpBtn = document.querySelector('.scrollup-btn');

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

// email (구독)
const emailInput = document.querySelector('.email-input');
const emailBtn = document.querySelector('.email-box .btn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modalContent = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-btn');
const submitForm = document.querySelector('#email-form');
const mobileEmailBtn = document.querySelector('.mobile-subscribe-btn');

// 구독창에서 엔터키가 눌렸을 때
submitForm.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();  
        handleEmailClick(event);
    }
});

// email 유효성 검사 및 container 블러
const backdropContainer = document.querySelector('.backdrop-background');

const applyBlur = () => {
    backdropContainer.style.display = 'flex';
};

const hideBlur = () => {
    backdropContainer.style.display = 'none';
}

const handleEmailClick = (event) => {
    event.preventDefault();

    const valueInput = emailInput.value;
    if (!valueInput) {
        window.alert('이메일이 입력되지 않았습니다!');
    } else if (!emailPattern.test(valueInput)) {
        window.alert('유효하지 않은 이메일입니다!');
    } else {
        modalContent.style.display = 'flex';
        applyBlur();
        lockScroll();
    }
};

emailBtn.addEventListener('click', handleEmailClick);
mobileEmailBtn.addEventListener('click', handleEmailClick);

const backdropBackground = document.querySelector('.backdrop-background');

backdropBackground.addEventListener('click', () => {
    modalContent.style.display = 'none';
    hideBlur();
    unlockScroll();
})

// 제출 이벤트
modalCloseBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const formData = new FormData(submitForm);
    console.log('제출 폼 데이터 확인:');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // submitForm.submit();
    // 현재 서버와 연결되어 있지 않기 때문에 제출 폼 데이터를 확인하기 위하여 submit() 구동 X

    modalContent.style.display = 'none';
    hideBlur();
    unlockScroll();
});


// 모바일 화면 메뉴
const menuBtn = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.menu-container');
const menuCloseBtn = document.querySelector('.arrow-btn');
menuBtn.addEventListener('click',  () => {
    menuContent.style.display = 'block';
});
menuCloseBtn.addEventListener('click', () => {
    menuContent.style.display = 'none';
})


// 다운로드 이벤트 (요구사항 X)
const downloadFile = () => {
    const userConfirmed = confirm("정말 다운받으시겠습니까?");
    if(userConfirmed) {
        const link = document.createElement('a');
        link.href = './images/modal-cat.png'; // 실제 파일 경로
        link.download = 'cute-cat.png'; // 다운로드 파일 이름
        link.click();
    }
};

// 아이콘 이벤트 (요구사항 X)
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