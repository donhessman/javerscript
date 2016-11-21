module.exports = function soft() {
    var stuff = document.querySelector('html');
    stuff.style.transition = 'all .5s ease-in-out';
    stuff.style.filter = 'blur(5px)';
};