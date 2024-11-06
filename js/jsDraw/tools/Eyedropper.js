var Eyedropper = function(lc) {  // take lc as constructor arg
  var self = this;
  return {
    name: 'Eyedropper',
    iconName: 'eyedropper',
    strokeWidth: lc.opts.defaultStrokeWidth,
    optionsStyle: 'stroke-width',

    didBecomeActive:function(lc){
        console.log("Active Selector");
       
    },
    willBecomeInactive: function(lc) {
        console.log("deactivated Selector")
    }
  }
};