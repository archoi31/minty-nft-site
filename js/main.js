window.onload = function() {

    //언어선택    
    const langIcon = document.querySelector('.lang-area a');
    const langList = document.querySelector('.lang-area .lang-list');

    langIcon.addEventListener('click', function () {
        langList.classList.toggle('show');
    })

    //마이 월렛  
    new Swiper('.wallet-cont .swiper-container', {
        // Optional parameters
        direction: "vertical",
        slidesPerView: 3,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        spaceBetween: 16, // 슬라이드 사이 여백
        loop: true,/*반복재생*/
        autoplay: {
            delay: 5000 /*3초*/
        },
        pagination: { // 페이지 번호 사용 여부
            el: '.wallet-cont .swiper-pagination', // 페이지 번호 요소 선택자
            clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
        },
        breakpoints: {
            1200: {
                direction: "horizontal",

            }
        }
    });

    //쇼핑몰 썸네일
    new Swiper('.shop-cont .swiper-container', {
        // Optional parameters
        spaceBetween: 16, // 슬라이드 사이 여백
        slidesPerView: 2,
        loop: true,/*반복재생*/
        autoplay: {
            delay: 3000 /*3초*/
        },
        pagination: { // 페이지 번호 사용 여부
            el: '.shop-cont .swiper-pagination', // 페이지 번호 요소 선택자
            clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
        },
        breakpoints: {
            375: {
                slidesPerView: 2
            },
            414: {
                slidesPerView: 3
            },
            720: {
                spaceBetween: 24, // 슬라이드 사이 여백
                slidesPerView: 4
            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // 모바일 메뉴 오픈
    const menuOpen = document.querySelector('.menu-open');
    const menuBg = document.querySelector('#m-open-menu');
    const menuClose = document.querySelector('.menu-container .close-btn');

    menuOpen.addEventListener('click', function () {
        menuBg.classList.add('show');
    })
    menuClose.addEventListener('click', function () {
        menuBg.classList.remove('show');
    })


    /*모바일 서브메뉴*/
    const subMenu = document.querySelectorAll('#m-open-menu .menu-list .mu-sub');
    const subMenuList = document.querySelectorAll('#m-open-menu .menu-list .mu-sub-list');

    subMenu.forEach(function (subMenuEl, index) {

        subMenuEl.addEventListener('click', function () {

            subMenuEl.classList.toggle("active");
            subMenuList[index].classList.toggle("active");

        })
    })

    /*PC 서브메뉴*/
    const pcSubMenu = document.querySelectorAll('#main-header .main-mu > ul > li');
    const pcSubMenuList = document.querySelectorAll('#main-header .main-mu .mu-sub-list li');
    

    pcSubMenu.forEach(function (pcSubMenuEl, index) {
        pcSubMenuEl.addEventListener('click', function () {
            pcSubMenuEl.classList.toggle("active");
        })
    })

    pcSubMenuList.forEach(function (pcSubMenuListEl, index) {
        pcSubMenuListEl.addEventListener('click', function () {
            pcSubMenuListEl.classList.toggle("active");
        })
    })

    const pcMainMenu = document.querySelector("#main-header .main-mu");
    const pcMenuSubBg = document.querySelector('#main-header .sub-bg');
    const mainMenuWrap = document.querySelector('#main-header .main-mu-wrap');


    pcMainMenu.addEventListener("mouseover", ()=> {
        mainMenuWrap.classList.add("on");
    }, false);

    pcMainMenu.addEventListener("mouseleave", ()=> {
        mainMenuWrap.classList.remove("on");
    }, false);

    pcMenuSubBg.addEventListener("mouseleave", ()=> {
        mainMenuWrap.classList.remove("on");
    }, false);      

    /* main search */
    const searchIconPc = document.querySelector("#main-header .search-icon");
    const searchIconM = document.querySelector("#m-header .search-icon");
    const searchCont = document.querySelector("#main-search");

    searchIconPc.addEventListener('click', function () {
        searchCont.classList.toggle("show");
    })
    searchIconM.addEventListener('click', function () {
        searchCont.classList.toggle("show");
    })

   /* header fixed */
    const mHeader = document.querySelector("#m-header");

    window.addEventListener("scroll", function(e) {

        let windowTop = window.scrollY;
        // 스크롤 세로값이 헤더높이보다 크거나 같으면 
        // 헤더에 클래스 'fixed'을 추가한다
        if (windowTop > 0) {
            mHeader.classList.add("fixed");
        }
        // 아니면 클래스 'fixed'을 제거
        else {
            mHeader.classList.remove("fixed");

        }
    })
    

    

};



