const openBox = document.getElementById('open');
const closeBox = document.getElementById('close');
const Box = document.getElementById('box');
const overlay = document.getElementById('overlay');
const submitCommentButton = document.getElementById('submitComment');


const starImage1 = document.getElementById('starImage1');
const starImage2 = document.getElementById('starImage2');
const starImage3 = document.getElementById('starImage3');
const starImage4 = document.getElementById('starImage4');
const starImage5 = document.getElementById('starImage5');

let isStarFilled1 = false;
let isStarFilled2 = false;
let isStarFilled3 = false;
let isStarFilled4 = false;
let isStarFilled5 = false;

let isVisible = false;
let scrollbarWidth;

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')


function getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '50px';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    const widthWithoutScroll = outer.offsetWidth;
    const widthWithScroll = inner.offsetWidth;
    document.body.removeChild(outer);
    return widthWithoutScroll - widthWithScroll;
}

function hide(){
    if (input1){
        input1.value = '';
    }
    if (input2){
        input2.value = '';
    }
    if (input3){
        input3.value = '';
    }
    if (input4){
        input4.value = '';
    }

    Box.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
    isVisible = false;
}

scrollbarWidth = getScrollbarWidth();

openBox.onclick = function(event) {
    event.preventDefault();
    isVisible = !isVisible;
    Box.style.display = isVisible ? 'block' : 'none';
    overlay.style.display = isVisible ? 'block' : 'none';
    if (isVisible) {
        // Prevents scrolling
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
    }
};

document.onclick = function(event) {
    if (isVisible && !Box.contains(event.target) && event.target !== openBox) {
        hide();
    }
};

submitCommentButton.onclick = function (event){
    if (isVisible) {
        if (input4.value.trim() === '') {
            alert('لطفا متن نظر خود را وارد کنید.');
            return;
        }
        hide();
    }
};

closeBox.onclick = function (event){
    if (isVisible) {
        hide();
    }
}

starImage1.onclick = function() {
    isStarFilled1 = !isStarFilled1;
    if (isStarFilled1) {
        starImage1.src = 'images/Component%204.svg';
    } else {
        starImage1.src = 'images/Component%202.svg';
    }
};

starImage2.onclick = function() {
    isStarFilled2 = !isStarFilled2;
    if (isStarFilled2) {
        starImage2.src = 'images/Component%204.svg';
    } else {
        starImage2.src = 'images/Component%202.svg';
    }
};

starImage3.onclick = function() {
    isStarFilled3 = !isStarFilled3;
    if (isStarFilled3) {
        starImage3.src = 'images/Component%204.svg';
    } else {
        starImage3.src = 'images/Component%202.svg';
    }
};

starImage4.onclick = function() {
    isStarFilled4 = !isStarFilled4;
    if (isStarFilled4) {
        starImage4.src = 'images/Component%204.svg';
    } else {
        starImage4.src = 'images/Component%202.svg';
    }
};

starImage5.onclick = function() {
    isStarFilled5 = !isStarFilled5;
    if (isStarFilled5) {
        starImage5.src = 'images/Component%204.svg';
    } else {
        starImage5.src = 'images/Component%202.svg';
    }
};

