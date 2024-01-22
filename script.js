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

function filterMovies() {
    var selectedCategory = document.getElementById('categorie').value;
    var selectedYear = document.getElementById('an').value;
    var selectedRating = document.getElementById('rating').value;
    var movieBoxes = document.querySelectorAll('.box');

    movieBoxes.forEach(function (box) {
        box.classList.remove('inactive');

        var movieType = box.querySelector('.movie-type').innerText;
        var movieYear = box.querySelector('.year').innerText;
        var movieRating = box.querySelector('.rating').innerText;

        if ((selectedCategory !== '' && movieType !== selectedCategory) || 
            (selectedYear !== '' && movieYear !== selectedYear) || 
            (selectedRating !== '' && movieRating !== selectedRating)) {
            box.classList.add('inactive');
        }
    });
}

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

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = contactForm.querySelector('[name="fullName"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const message = contactForm.querySelector('[name="message"]').value;

            // Initialize Email.js with your user ID
            emailjs.init({
                user: "Mr4b0gNXL6SERVL9adr7i", // Replace with your actual User ID (Public Key)
            });

            // Prepare the email parameters
            const emailParams = {
                to_email: 'gstance@ymail.com', // Replace with your recipient email address
                from_name: name,
                from_email: email,
                message: message
            };

            // Send the email
            emailjs.send("default_service", "template_60vz4u6", emailParams)
                .then(function(response) {
                    console.log('Email sent successfully:', response);
                    alert('Message sent successfully!');
                    // You can also reset the form if needed
                    contactForm.reset();
                }, function(error) {
                    console.error('Error sending email:', error);
                    alert('Error sending message. Please try again.');
                });
        });
    } else {
        console.error('Contact form not found.');
    }
});


