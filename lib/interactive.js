function activateInteractive() {
    jQuery('a, input, img, p, span').on('hover', function(){
        $this = jQuery(this);
        var random50 = String(Math.floor((Math.random()*100)+50));
        var random4 = Math.floor((Math.random()*4)+1);
        $this.css({position: 'absolute'});
        switch(random4){
            case 1:
                $this.animate({left: '+=' + random50}, 200);
                break;
            case 2:
                $this.animate({top: '+=' + random50}, 200);
                break;
            case 3:
                $this.animate({right: '+=' + random50}, 200);
                break;
            case 4:
                $this.animate({bottom: '+=' + random50}, 200);
                break;
            default:
                $this.animate({left: '+=' + random50}, 200);
        }
    });
}

module.exports = function interactive() {
    if(!window.jQuery) {
        var stupid = document.createElement('script');
        stupid.src = 'http://code.jquery.com/jquery-1.10.1.min.js';
        document.getElementsByTagName('head')[0].appendChild(stupid);

        jQueryCheck = setInterval(function() {
            if(window.jQuery) {
                clearInterval(jQueryCheck);
                activateInteractive();
            }
        }, 100);

    } else {
        activateInteractive();
    }
};