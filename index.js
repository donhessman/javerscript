var uglify = require('uglify-js');

// Minify the code without changing the variable names
var minify = function( code ) {
    return uglify.minify(code, {fromString: true, mangle:false})
};


// Append any dependent libraries to the DOM if the library is not detected
var appendScript = function( code, options ) {
    return function() {

        var block = document.createElement('script');

        block.setAttribute( 'src', options.src );
        block.onload = code;
        document.body.appendChild(block);

    }
};

// Load in the dependencies
var addDependencies = function( code, options ) {
    var newCode;

    if(options.test) {
        newCode = code;
    } else {
        newCode = appendScript( code, options );
    }

    return newCode;
};

var javerscript = function( code, options ) {

    var newCode = code;

    if(typeof options === 'object') {
        newCode = addDependencies( code, options );
    }

    var bookmarklet = 'javascript:(function(){' + newCode + '})()';

    return minify(bookmarklet);

};

module.exports = javerscript;


// Sample usecase

//var javerscript = require('javerscript');
//
//var $doStuff = $('*').css('color','purple');
//
//var newJaverscript = javerscript( $doStuff, {
//    test : 'jQuery',
//    src : 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'
//});
//
//$('body').append('<a href="' + newJaverscript + '" title="Drag me to your toolbar">Purple Text</a>');