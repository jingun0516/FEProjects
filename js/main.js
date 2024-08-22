window.initMap = () => {
    const map = new google.maps.Map(document.querySelector('#map'), {
        center: {lat: 37.24317528542883, lng: 131.86688500415858},
        zoom: 8,
    });
}

const btn_scrollup = document.querySelector('.btn-scrollup');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        btn_scrollup.style.opacity = 1;
    } else {
        btn_scrollup.style.opacity = 0;
    }
});

btn_scrollup.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const input_email = document.querySelector('.input-email');
const button_email = document.querySelector('.box-email .btn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modalpage = document.querySelector('.container-modal');
const btn_modalclose = document.querySelector('.btn-modal');
const form_submit = document.querySelector('#form-email');
const mobile_btn_email = document.querySelector('.btn-subscribe-mobile');

const handleEmailClick = (event) => {
    event.preventDefault();

    const input_value = input_email.value;
    if (!input_value) {
        window.alert('이메일이 입력되지 않았습니다!');
    } else if (!emailPattern.test(input_value)) {
        window.alert('유효하지 않은 이메일입니다!');
    } else {
        modalpage.style.display = 'flex';
    }
}

button_email.addEventListener('click', handleEmailClick);
mobile_btn_email.addEventListener('click', handleEmailClick);

btn_modalclose.addEventListener('click', function (event) {
    event.preventDefault();

    const formData = new FormData(form_submit);
    console.log('제출 폼 데이터 확인:');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // form_submit.submit();

    modalpage.style.display = 'none';
});

const btnBlog = document.querySelector('.btn-blog');
const btnInsta = document.querySelector('.btn-insta');
const btnFacebook = document.querySelector('.btn-facebook');
const btnYoutube = document.querySelector('.btn-youtube');

const iconHandleClick = (event, url)=>{
    if(event.button === 1) {        // 마우스 휠
        window.open(url, "_blank"); // 새 탭에서 열기
    }
    else if(event.button === 0){
        window.location.href = url;
    }
}
btnBlog.addEventListener('mousedown', (event) => iconHandleClick(event, "https://blog.naver.com"));
btnInsta.addEventListener('mousedown', (event) => iconHandleClick(event, "https://instagram.com"));
btnFacebook.addEventListener('mousedown', (event) => iconHandleClick(event, "https://facebook.com"));
btnYoutube.addEventListener('mousedown', (event) => iconHandleClick(event, "https://youtube.com"));


const btn_menu = document.querySelector('.btn-menu');
const menu_content = document.querySelector('.container-menu');
const menu_close = document.querySelector('.btn-arrow');
btn_menu.addEventListener('click',  () => {
    menu_content.style.display = 'block';
});
menu_close.addEventListener('click', () => {
    menu_content.style.display = 'none';
})



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
