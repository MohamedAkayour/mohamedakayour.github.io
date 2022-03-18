var navLinks = document.getElementById("navLinks");

function hideMenu() {
    navLinks.style.right = "-200px";
}

function showMenu() {
    navLinks.style.right = "0";
}




window.addEventListener('scroll', reveal1);

function reveal1() {
    var reveals = document.querySelectorAll('.reveal1');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 400;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal2);

function reveal2() {
    var reveals = document.querySelectorAll('.reveal2');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 400;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal3);

function reveal3() {
    var reveals = document.querySelectorAll('.reveal3');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 400;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header1');
    header.classList.toggle('sticky', window.scrollY > 0);
});










$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: ["<i style= 'color: white;' class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right' style= 'color: white;'></i>"],
        autoplay: true,
        loop: true,
        items: 2,
        autoplayTmeout: 10,
        autoplayHoverPause: true,
        slideBy: 2,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2
            },
        },


    });
});