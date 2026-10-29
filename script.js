var images = document.querySelectorAll('.photo-box img');

for (var i = 0; i < images.length; i++) {
    images[i].style.transition = 'transform 0.3s ease';

    images[i].onmouseover = function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    };

    images[i].onmouseout = function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    };
}

var navLinks = document.querySelectorAll('.main-nav a');
var currentPath = window.location.pathname.split('/').pop() || 'index.html';

for (var i = 0; i < navLinks.length; i++) {
    var linkPath = navLinks[i].getAttribute('href');
    if (linkPath === currentPath) {
        navLinks[i].classList.add('active');
    }
}

var scrollBtn = document.createElement('div');
scrollBtn.className = 'scroll-top-btn';
scrollBtn.innerHTML = '↑';
document.body.appendChild(scrollBtn);

window.onscroll = function() {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};

scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};