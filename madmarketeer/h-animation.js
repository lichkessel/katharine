$(function() {
  function animate() {
    var frame = $( ".h-container .h-dynamic" )
    frame
    .delay(2000)
    .animate({
      width:0
    },500, function() {
      var child = frame.children('.h-active');
      child.removeClass('h-active');
      var next = child.next();
      if(!next.length) {
        next = frame.children().first()
      }
      next.addClass('h-active');
    })
    .delay(100)
    .animate({
      width:400
    },500, function() {
       animate();
    });
  }
  animate();
});