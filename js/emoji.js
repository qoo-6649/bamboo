$(function () {
  
  var clipboard = new Clipboard('.btn');
  var clipboard = new Clipboard('.btn');
  
  clipboard.on('success', function(e) {
      e.clearSelection();
  });
  
});