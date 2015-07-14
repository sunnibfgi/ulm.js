//ulm.js

;(function() {
  var $window = $(window),
    body = $(document.body),
    original = body.scrollTop(),
    height = $window.height(),
    hold = 300,
    timer, step = 0
  body.on('show:top', function() {
    if(!step && original >= hold) {
      alert(':(->top')
      step = 1
    }
  }).on('show:bottom', function() {
    if(!step) {
      alert(':)->bottom')
      step = 1
    }
  })

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
        css(body, '').trigger('show:top')
      } else if(top + height >= body.height() - hold) {
        css(body, '').trigger('show:bottom')
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