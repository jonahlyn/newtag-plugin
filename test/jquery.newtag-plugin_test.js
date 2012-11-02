/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions: http://api.qunitjs.com/category/assert/
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('newtag', {
    setup: function() {
      //this.elems = $('#qunit-fixture').children();
      this.elem = $('#searchnav li:nth-child(2)');
    },
    teardown: function() {
      $('span.new', this.elem).remove();
    }
  });

  // Is chainable
  test('is chainable', 1, function() {
    strictEqual(this.elem.newtag(), this.elem, 'should be chaninable');
  });

  // Has a default expiration date
  test('defaults options', function() {
    strictEqual($.fn.newtag.defaults.expiration, '2012/12/31', 'should have a default expiration date');
  });
  
  // creates a span tag with text and css class specified
  test('appends span to element', function(){
    var classname = $.fn.newtag.defaults.classname,
        text = $.fn.newtag.defaults.text;
    
    this.elem.newtag();
    
    strictEqual($('span.'+classname, this.elem).length, 1, 'should add a span tag with the default class');
    strictEqual($('span', this.elem).text(), text, 'should add a span tag with the default text');
  });
  
  module('expiration feature', {
    setup: function() {
      this.elem = $('#searchnav li:nth-child(2)');
      this.today = new Date();
    }
  });
  
  // shows the tag when today is before the expiration date
  test('shown before expiration date', function(){
    var nextweek = new Date(), year, month, day;
    
    nextweek.setDate(this.today.getDate() + 7);
    year = nextweek.getFullYear();
    month = nextweek.getMonth()+1;
    day = nextweek.getDate();
    
    this.elem.newtag({'expiration': year+'/'+month+'/'+day});
    equal($('span.new', this.elem).length, 1, 'should show the new tag if today is before the expiration date.');
  });
  
  // hides the tag when today is past the expiration date
  test('not shown after expiration date', function(){
    var lastweek = new Date(), year, month, day;
    
    lastweek.setDate(this.today.getDate() - 7);
    year = lastweek.getFullYear();
    month = lastweek.getMonth()+1;
    day = lastweek.getDate();
    
    this.elem.newtag({'expiration': year+'/'+month+'/'+day});
    equal($('span.new', this.elem).length, 0, 'should not show the new tag if today is after the expiration date.');
  });
  
  // test a 6 month time frame
  test('shown before expiration date (6 months)', function(){
    var sixmonths = new Date(), year, month, day;
    
    sixmonths.setMonth(this.today.getMonth() + 6);
    year = sixmonths.getFullYear();
    month = sixmonths.getMonth()+1;
    day = sixmonths.getDate();
    
    this.elem.newtag({'expiration': year+'/'+month+'/'+day});
    equal($('span.new', this.elem).length, 1, 'should show the new tag if today is before the expiration date.');
    //equal(year+'/'+month+'/'+day, 'test', 'testing');
  });
  
  // test a 6 month time frame
  test('not shown after expiration date (6 months)', function(){
    var sixmonths = new Date(), year, month, day;
    
    sixmonths.setMonth(this.today.getMonth() - 6);
    year = sixmonths.getFullYear();
    month = sixmonths.getMonth()+1;
    day = sixmonths.getDate();
    
    this.elem.newtag({'expiration': year+'/'+month+'/'+day});
    equal($('span.new', this.elem).length, 0, 'should not show the new tag if today is after the expiration date.');
    //equal(year+'/'+month+'/'+day, 'test', 'testing');
  });  

}(jQuery));