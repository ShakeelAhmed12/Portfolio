window.onload = function() {

    function getScrollTop() {
      if (typeof window.pageYOffset !== 'undefined' ) {
        // Most browsers
        return window.pageYOffset;
      }
  
      let d = document.documentElement;
      if (d.clientHeight) {
        // IE in standards mode
        return d.scrollTop;
      }
  
      // IE in quirks mode
      return document.body.scrollTop;
    }
  
    window.onscroll = function() {
      let box = document.getElementById('wrapper'),
          scroll = getScrollTop();
  
      if (scroll <= 18) {
        box.style.paddingTop = "20px";
      }
      else {
        box.style.paddingTop = (scroll + 1) + "px";
      }
    };
  
  };