const current = document.getElementById('current');
const delivered = document.getElementById('delivered');
const returned = document.getElementById('returned');
const canceled = document.getElementById('canceled');

// Buttons related to being in the current tab
const current_button1 = document.getElementById('current-button1');
const delivered_button1 = document.getElementById('delivered-button1');
const returned_button1 = document.getElementById('returned-button1');
const canceled_button1 = document.getElementById('canceled-button1');

// Buttons related to being in the delivered tab
const current_button2 = document.getElementById('current-button2');
const delivered_button2 = document.getElementById('delivered-button2');
const returned_button2 = document.getElementById('returned-button2');
const canceled_button2 = document.getElementById('canceled-button2');

// Buttons related to being in the returned tab
const current_button3 = document.getElementById('current-button3');
const delivered_button3 = document.getElementById('delivered-button3');
const returned_button3 = document.getElementById('returned-button3');
const canceled_button3 = document.getElementById('canceled-button3');

// Buttons related to being in the canceled tab
const current_button4 = document.getElementById('current-button4');
const delivered_button4 = document.getElementById('delivered-button4');
const returned_button4 = document.getElementById('returned-button4');
const canceled_button4 = document.getElementById('canceled-button4');

// Moving from the current tab to other tabs
current_button1.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'block';
    delivered.style.display = 'none';
    returned.style.display = 'none';
    canceled.style.display = 'none';
};
delivered_button1.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'flex';
    returned.style.display = 'none';
    canceled.style.display = 'none';
};
returned_button1.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'none';
    returned.style.display = 'block';
    canceled.style.display = 'none';
};
canceled_button1.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'none';
    returned.style.display = 'none';
    canceled.style.display = 'block';
};

// Moving from the delivered tab to other tabs
current_button2.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'block';
    delivered.style.display = 'none';
    returned.style.display = 'none';
    canceled.style.display = 'none';
};
delivered_button2.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'flex';
    returned.style.display = 'none';
    canceled.style.display = 'none';
};
returned_button2.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'none';
    returned.style.display = 'block';
    canceled.style.display = 'none';
};
canceled_button2.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'none';
    returned.style.display = 'none';
    canceled.style.display = 'block';
};

// Moving from the returned tab to other tabs
current_button3.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'block';
    delivered.style.display = 'none';
    returned.style.display = 'none';
    canceled.style.display = 'none';
};
delivered_button3.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'flex';
    returned.style.display = 'none';
    canceled.style.display = 'none';
};
returned_button3.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'none';
    returned.style.display = 'block';
    canceled.style.display = 'none';
};
canceled_button3.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'none';
    returned.style.display = 'none';
    canceled.style.display = 'block';
};

// Moving from the canceled tab to other tabs
current_button4.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'block';
    delivered.style.display = 'none';
    returned.style.display = 'none';
    canceled.style.display = 'none';
};
delivered_button4.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'flex';
    returned.style.display = 'none';
    canceled.style.display = 'none';
};
returned_button4.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'none';
    returned.style.display = 'block';
    canceled.style.display = 'none';
};
canceled_button4.onclick = function(event) {
    event.preventDefault();
    current.style.display = 'none';
    delivered.style.display = 'none';
    returned.style.display = 'none';
    canceled.style.display = 'block';
};