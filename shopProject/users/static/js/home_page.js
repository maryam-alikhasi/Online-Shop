const iphoneBox = document.getElementById('iphone-box');
const mobileCaseLink = document.getElementById('mobile');
let isVisible = false;

// If the user clicks the link, prevent the default display and display the box

mobileCaseLink.onclick = function(event) {
    event.preventDefault();
    isVisible = !isVisible;
    iphoneBox.style.display = isVisible ? 'flex' : 'none';
};

// If the iPhone box is displayed and the user clicks anywhere else on the page
// (except the box and the activation link)
// the iPhone box will be hidden.

document.onclick = function(event) {
    if (isVisible && !iphoneBox.contains(event.target) && event.target !== mobileCaseLink) {
        iphoneBox.style.display = 'none';
        isVisible = false;
    }
};

// mobile
const menuButton = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menuPanel = document.querySelector('.menu-panel');
const nestedToggle = document.querySelector('.nested-toggle');
const nestedBack = document.querySelector('.nested-back');
const body = document.body;

let menuIsOpen = false;
let scrollY = 0;

// Toggle menu open/close
menuButton.onclick = function (event) {
    scrollY = window.scrollY;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.paddingRight = `${scrollBarWidth}px`;
    body.classList.add('menu-open');

    menuIsOpen = true;
};

// Close menu when clicking on overlay
menuOverlay.onclick = function () {
    body.classList.remove('menu-open');
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    body.style.width = '';
    body.style.paddingRight = '';
    window.scrollTo(0, scrollY);

    menuPanel.classList.remove('active-nested');
    menuIsOpen = false;
};

// Toggle nested menu
nestedToggle.onclick = function (e) {
    e.preventDefault();
    menuPanel.classList.add('active-nested');
};

nestedBack.onclick = function () {
    menuPanel.classList.remove('active-nested');
};

// Enable horizontal drag scroll for nested carousels
const nestedCarousels = document.querySelectorAll('.nested-items');

nestedCarousels.forEach(container => {
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    container.onmousedown = function (e) {
        isDragging = true;
        container.classList.add('is-dragging');
        startX = e.pageX - container.offsetLeft;
        scrollStart = container.scrollLeft;
    };

    container.onmouseup = container.onmouseleave = function () {
        isDragging = false;
        container.classList.remove('is-dragging');
    };

    container.onmousemove = function (e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const delta = (x - startX) * 2;
        container.scrollLeft = scrollStart - delta;
    };
});


// mobile
const searchTrigger = document.querySelector('.search-box-mobile');
const searchPanel = document.querySelector('.search-panel-wrapper');
const searchCloseBtn = document.querySelector('.panel-close-btn');
const searchOverlay = document.querySelector('.search-overlay-bg');

if (searchTrigger && searchPanel && searchCloseBtn && searchOverlay) {

    const openSearchPanel = () => {
        document.body.classList.add('search-open');
    };

    const closeSearchPanel = () => {
        document.body.classList.remove('search-open');
    };

    searchTrigger.addEventListener('click', (event) => {
        event.preventDefault();
        openSearchPanel();
    });

    searchCloseBtn.addEventListener('click', closeSearchPanel);
    searchOverlay.addEventListener('click', closeSearchPanel);
}


var likeButtons = document.querySelectorAll('.like-toggle');

for (var i = 0; i < likeButtons.length; i++) {
    (function () {
        var button = likeButtons[i];
        var img = button.querySelector('img');
        var isLiked = false;

        button.addEventListener('click', function (e) {
            e.preventDefault();
            isLiked = !isLiked;
            if (isLiked) {
                img.src = '/static/images/Like2.svg';
            } else {
                img.src = '/static/images/Like.svg';
            }
        });
    })();
}

var likeButtons2 = document.querySelectorAll('.like-toggle2');

for (var i = 0; i < likeButtons2.length; i++) {
    (function () {
        var button2 = likeButtons2[i];
        var img2 = button2.querySelector('img');
        var isLiked2 = false;

        button2.addEventListener('click', function (e) {
            e.preventDefault();
            isLiked2 = !isLiked2;
            if (isLiked2) {
                img2.src = '/static/images/Like.svg';
            } else {
                img2.src = '/static/images/Like2.svg';
            }
        });
    })();
}

var followButtons = document.querySelectorAll('.follow');

for (var i = 0; i < followButtons.length; i++) {
    followButtons[i].addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var p = this.querySelector('p');
        var img = this.querySelector('img');
        var isFollowing = this.classList.contains('is-following');

        if (isFollowing) {
            this.classList.remove('is-following');
            this.style.backgroundColor = 'white';
            p.style.color = '#A72F3B';
            p.textContent = 'دنبال کردن';
            img.src = '/static/images/profile-add.svg';
        } else {
            this.classList.add('is-following');
            this.style.backgroundColor = '#A72F3B';
            p.style.color = 'white';
            p.textContent = 'دنبال شده';
            img.src = '/static/images/profile-tick.svg';
        }
    });
}

var addButtons = document.querySelectorAll('.add-gallery');

for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var p = this.querySelector('p');
        var img = this.querySelector('img');
        var isAdded = this.classList.contains('is-Added');

        if (isAdded) {
            this.classList.remove('is-Added');
            this.style.backgroundColor = 'white';
            p.style.color = '#A72F3B';
            p.textContent = 'افزودن به گالری';
            img.src = '/static/images/gallery-add.svg';
        } else {
            this.classList.add('is-Added');
            this.style.backgroundColor = '#A72F3B';
            p.style.color = 'white';
            p.textContent = 'ذخیره شده';
            img.src = '/static/images/gallery-tick.svg';
        }
    });
}



