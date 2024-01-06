document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');

    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    let itemCount = items.length;
    let itemActive = 0;
    let refreshInterval;

    if (next && prev) {
        next.onclick = function () {
            itemActive = itemActive + 1;
            if (itemActive >= itemCount) {
                itemActive = 0;
            }
            showSlider();
        };

        prev.onclick = function () {
            itemActive = itemActive - 1;
            if (itemActive < 0) {
                itemActive = itemCount - 1;
            }
            showSlider();
        };

        refreshInterval = setInterval(() => {
            next.click();
        }, 3000);
    }

    function showSlider() {
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        clearInterval(refreshInterval);
        if (next && prev) {
            refreshInterval = setInterval(() => {
                next.click();
            }, 5000);
        }
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };

    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Toggle the 'active' class to show/hide the dropdown
            this.classList.toggle('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".gallery-slider", {
        loop: true,
        effect: "coverflow",
        slidesPerView: "auto",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
