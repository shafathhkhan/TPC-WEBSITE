document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    

    // Toggle mobile menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;

    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            target.style.transition = 'background-color 0.5s';
            target.style.backgroundColor = '#fffae6'; // light yellow

            setTimeout(() => {
                target.style.backgroundColor = 'transparent';
            }, 2000);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.product-slider-container');

    sliders.forEach(sliderContainer => {
        const slider = sliderContainer.querySelector('.product-slider');
        const images = slider.querySelectorAll('img');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');
        const dotsContainer = sliderContainer.querySelector('.dots-container');
        const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];

        let currentIndex = 0;

        function showSlide(index) {
            // Wrap index if out of bounds
            if (index >= images.length) index = 0;
            if (index < 0) index = images.length - 1;

            // Hide all images
            images.forEach(img => img.classList.remove('active'));

            // Remove active dot
            dots.forEach(dot => dot.classList.remove('active'));

            // Show current image
            images[index].classList.add('active');

            // Highlight current dot
            if (dots.length > 0) {
                dots[index].classList.add('active');
            }

            currentIndex = index;
        }

        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Show the first slide by default
        showSlide(currentIndex);
    });
});
