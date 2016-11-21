module.exports = function razzleDazzle() {
    var everything = document.querySelectorAll('*');
    for(var i = 0; i < everything.length; i++) {
        console.log('count', i);
        everything[i].style.transition = 'all .5s ease-in-out';
        everything[i].style.borderRadius = '80px';
    }
};