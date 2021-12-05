type = "text/javascript"
function getTopOffset(e) {
    var y = 0;
    do { y += e.offsetTop; } while (e = e.offsetParent);
    return y;
}
var block = document.getElementById('adv'); 
if (null != block) {
    var topPos = getTopOffset(block);
    window.onscroll = function () {
        var newcss = (topPos < window.pageYOffset) ?
            'top:20px; position: fixed;' : 'position:static;';
        block.setAttribute('style', newcss);
    }
};
/*jQuery(document).ready(function($){
  
    $('form').on('submit', function(e){
      e.preventDefault();
      
      var container = $(this).parent();
      container.find('p').remove();
    });
  });*/