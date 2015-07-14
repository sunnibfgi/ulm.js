//ulm.js

;(function() {
  var $window = $(window),
    body = $(document.body),
    original = body.scrollTop(),
    hold = 300,
    timer, step = 0
	
  body.on('show:alert', function() {
    if(!step && original >= hold) {
      alert('>>>>>>>>>>>>')
      step = 1
    }
  });

  function css(el, color) {
    return el.css({
      backgroundColor: color
    })
  }
  
  $window.on('scrollevent', function() {
    var top = body.scrollTop()
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      if(top <= hold) {
        css(body, '').trigger('show:alert')
      } else if(top < original) {
        step = 0;
        clearTimeout(timer)
        css(body, 'purple')
      } else {
        css(body, '')
      }
      original = top
    }, 1)
  }).on('scroll', function(e) {
	  
    if(original !== body.scrollTop()) {
      $(this).trigger('scrollevent')
    }
  })
})()