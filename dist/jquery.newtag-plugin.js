/*! jQuery Newtag Plugin - v0.1.0 - 2012-11-04
* https://github.com/jonahlyn/newtag-plugin
* Author: Jonahlyn Gilstrap;*/

( function($) {

        $.fn.newtag = function(options) {

            var opts = $.extend({}, $.fn.newtag.defaults, options), today = new Date();

            return this.each(function() {

                var $el = $(this), expiration = new Date(opts.expiration), newicon;

                // check that today is before the expiration date
                if (today <= expiration) {
                    // create a new span with specified text and class
                    newicon = $('<span>').addClass(opts.classname).text(opts.text);
                    newicon.css(opts.css);
                    
                    // add new span to selected element
                    $el.append(newicon);

                    // add css to parent element
                    if (opts.parentcss) {
                        newicon.parent().css(opts.parentcss);
                    }
                }
            });

        };

        $.fn.newtag.defaults = {
            'expiration' : '2012/12/31',
            'classname' : 'new',
            'text' : 'new!',
            'css' : {
                'color' : 'gold',
                'font-size' : '14px',
                'padding-left' : '5px',
                'position' : 'absolute',
                'top' : '5px',
                'right' : '10px',
                '-webkit-transform' : 'rotate(20deg)',
                '-moz-transform' : 'rotate(20deg)',
                '-ms-transform' : 'rotate(20deg)',
                '-o-transform' : 'rotate(20deg)',
                'transform' : 'rotate(20deg)',
                '-webkit-transform-origin' : 'bottom right',
                '-moz-transform-origin' : 'bottom right',
                '-ms-transform-origin' : 'bottom right',
                '-o-transform-origin' : 'bottom right',
                'transform-origin' : 'bottom right',
                '-webkit-backface-visibility' : 'hidden',
                'text-shadow' : '1px 1px 1px #1F1E1E'
            },
            'parentcss' : {
                'position' : 'relative'
            }
        };

    }(jQuery));
