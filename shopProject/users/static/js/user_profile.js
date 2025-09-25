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