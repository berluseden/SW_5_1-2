var windowsWidth = 0;
var windowsHeight= 0;
$('body').on("dblclick",function(){
  document.querySelector('.resizable').style.left = '100px';
  document.querySelector('.resizable').style.top = '50px';
  document.querySelector('.resizable').style.width = "50%";
  document.querySelector('.resizable').style.height ="50%";
})
$(window).resize(function() {
  windowsWidth = $(window).width() //window width
  windowsHeight = $(window).height() //window height
  document.querySelector('.resizable').style.width = "50%";
  document.querySelector('.resizable').style.height ="50%";
}).trigger("resize") //to ensure that you do whatever you're going to do when the window is first loaded;
/*Make resizable div by Hung Nguyen*/
function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizers = document.querySelectorAll(div + ' .resizer')
  const minimum_size = 20;
  //$(".resizable").draggable();
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
      document.querySelector('.resizable').setAttribute('draggable',false);
      console.log(windowsWidth)
      if (currentResizer.classList.contains('bottom-right')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size && e.pageX<(windowsWidth-120)) {
          element.style.width = width + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
      }
      else if (currentResizer.classList.contains('bottom-left')) {
        const height = original_height + (e.pageY - original_mouse_y)
        const width = original_width - (e.pageX - original_mouse_x)
        if (height > minimum_size) {
          element.style.height = height + 'px'
        }
        // if (width > minimum_size && e.pageX>100) {
        //     element.style.width = width + 'px'
        //     element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        // }
      }
      else if (currentResizer.classList.contains('top-right')) {
        const width = original_width + (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size && e.pageX<(windowsWidth-120)) {
          element.style.width = width + 'px'
        }
        // if (height > minimum_size && e.pageY>=50) {
        //   element.style.height = height + 'px'
        //   element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        // }
      }
      else if (currentResizer.classList.contains('top-right2')) {
        const height = original_height + (e.pageY - original_mouse_y)
        const width = original_width - (e.pageX - original_mouse_x)
        // if (height > minimum_size) {
        //   element.style.height = height + 'px'
        // }
        if (width > minimum_size && e.pageX>100) {
            element.style.width = width + 'px'
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
      }
      else {
        const width = original_width - (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        // if (width > minimum_size && e.pageX>100) {
        //   element.style.width = width + 'px'
        //   element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        // }
        if (height > minimum_size && e.pageY>=50) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
      //document.querySelector('.resizable').setAttribute('draggable',true);
    }
  }
}

//makeResizableDiv('.resizable')