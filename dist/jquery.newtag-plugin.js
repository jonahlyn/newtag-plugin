/*! jQuery Newtag Plugin - v0.1.0 - 2012-11-01
* https://github.com/jonahlyn/newtag-plugin
* Author: Jonahlyn Gilstrap;*/

(function($){
  
    $.fn.newtag = function(options) {
        
        var opts = $.extend({}, $.fn.newtag.defaults, options),
            today = new Date();
        
        return this.each(function(){
            
            var $el = $(this),
                expiration = new Date(opts.expiration),
                newicon;
                
            if (today <= expiration) {
              newicon = $('<span>').addClass(opts.classname).text(opts.text);
              newicon.css(opts.css);
              $el.append(newicon);
            }
        });
        
    };
    
    $.fn.newtag.defaults = {
        'expiration' : '2012-12-31', 
        'classname' : 'new',
        'text' : 'new',
        'css' : {
        'color': 'gold',
        'padding-left':'5px',
        'float':'right',
        '-webkit-transform':'rotate(20deg)',
        '-moz-transform':'rotate(20deg)',
        '-ms-transform':'rotate(20deg)',
        '-o-transform':'rotate(20deg)',
        'transform':'rotate(20deg)',
        '-webkit-transform-origin':'bottom right',
        '-moz-transform-origin':'bottom right',
        '-ms-transform-origin':'bottom right',
        '-o-transform-origin':'bottom right',
        'transform-origin':'bottom right',
        'text-shadow':'1px 1px 1px #1F1E1E'
    }
    };
    
    
}(jQuery));
