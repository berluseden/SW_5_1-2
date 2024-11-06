//var appWidth = document.getElementById('all').offsetWidth;
//var appHeight = document.getElementById('all').offsetHeight;


var appWidth = $('#all').width();
var appHeight = $('#all').height();


var isWebkit = 'webkitRequestAnimationFrame' in window;
var scale = 0;

window.onresize = function(){
     resizeApp();
}

function resizeApp(){
     var winHeight = window.innerHeight;
     var winWidth = window.innerWidth;
     var appWidth = $('#all').width();
    var appHeight = $('#all').height();
    
     winWidth = $(window).width(); //retrieve current window width
     winHeight = $(window).height(); //retrieve current window height
         
         
     //scale = ((appWidth/winWidth)<(appHeight/winHeight))?(appWidth/winWidth):(appHeight/winHeight);
    
     scale = ((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight);
    
    
    
      var ua = window.navigator.userAgent
      var msie = ua.indexOf ( "MSIE " )

     if(msie>0){
          $('#all').css('zoom',scale);
     }else{
          document.getElementById('all').style.webkitTransformOrigin = '0 0';    
          document.getElementById('all').style.webkitTransform = "scale("+scale+")";
		  document.getElementById('all').style.msTransformOrigin = '0 0';  
		  document.getElementById('all').style.msTransform = "scale("+scale+")";
          document.getElementById('all').style.MozTransformOrigin = '0 0';    
          document.getElementById('all').style.MozTransform = "scale("+scale+")";
     }
    
     var appWidth = document.getElementById('all').offsetWidth * scale;
     document.getElementById('all').style.left = ((winWidth - appWidth )/2)+'px';
    
}

resizeApp();