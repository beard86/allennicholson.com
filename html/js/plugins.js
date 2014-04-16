// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function($){

    $.randomImage = {
        defaults: {
            //you can change these defaults to your own preferences.
            path: 'img/', //change this to the path of your images
            myImages: [ 'mac_book_pro.jpg', 'mac_book_pro2.jpg', 'mac_book_pro3.jpg', 'mac_book_pro5.jpg'] //put image names in this bracket. ex: 'harold.jpg', 'maude.jpg', 'etc'

        }           
    }

    $.fn.extend({
            randomImage:function(config) {
                var config = $.extend({}, $.randomImage.defaults, config); 
                 return this.each(function() {
                        var imageNames = config.myImages;
                        //get size of array, randomize a number from this
                        // use this number as the array index
                        var imageNamesSize = imageNames.length;
                        var lotteryNumber = Math.floor(Math.random()*imageNamesSize);
                        var winnerImage = imageNames[lotteryNumber];
                        var fullPath = config.path + winnerImage;
                        //put this image into DOM at class of randomImage
                        // alt tag will be image filename.
                        $(this).attr( {
                                        src: fullPath,
                                        alt: winnerImage
                                    });
                }); 
            }
    });
})(jQuery);
