module.exports = function seo() {
    var seo = function(count, element){
        var seoElement = document.querySelectorAll(element);
        for(var i = 0; i < seoElement.length; i++) {
            var newThis = Array(count).join(seoElement[i].innerHTML);
            seoElement[i].innerHTML = newThis;
        }
    };

    seo(5, 'a');
    seo(11, 'p');
    seo(5, 'h1');
    seo(5, 'h2');
};