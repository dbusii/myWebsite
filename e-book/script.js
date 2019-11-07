
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

if (w > 780){

    /*globals window, document, $*/

    (function () {
        'use strict';

        var module = {
            ratio: 1.38,
            init: function (id) {
                var me = this;

                // if older browser then don't run javascript
                if (document.addEventListener) {
                    this.el = document.getElementById(id);
                    this.resize();
                    this.plugins();

                    $('map').imageMapResize();

                    // on window resize, update the plugin size
                    window.addEventListener('resize', function (e) {
                        var size = me.resize();
                        $(me.el).turn('size', size.width, size.height);
                    });
                }
            },

            resize: function () {
                // reset the width and height to the css defaults
                this.el.style.width = '';
                this.el.style.height = '';

                console.log(w)
                var width = this.el.clientWidth,
                    height = Math.round(width / this.ratio),
                    padded = Math.round(document.body.clientHeight * 0.9);

                // if the height is too big for the window, constrain it
                if (height > padded) {
                    height = padded;
                    width = Math.round(height * this.ratio);
                }

                // set the width and height matching the aspect ratio
                this.el.style.width = width + 'px';
                this.el.style.height = height + 'px';

                return {
                    width: width,
                    height: height
                };

            },
            
            plugins: function () {
                // run the plugin
                $(this.el).turn({
                    gradients: true,
                    acceleration: true,
                });
                // hide the body overflow
                document.body.className = 'hide-overflow';
            }
        };

        module.init('book');

    }());

} 

else {

    $(".book").turn({
        display: "single",
        width: w*.9,
        height:(w*.9)*1.414,
        gradients: false,
        acceleration: true
    });

    
    $('map').imageMapResize();
}

jQuery(document).ready(function() {

    $('#previousPage').click(function(){
        $('.book').turn('previous');
    });

    $('#nextPage').click(function(){
        $('#book').turn('next');
    });
});