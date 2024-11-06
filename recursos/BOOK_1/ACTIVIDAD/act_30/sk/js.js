/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

// INFO

a5.dp.info = {
  engine: `${a5.Engine.version || 'development'} (recommended: buckminster-35.0.0-beta.5.0)`,
  root: 'core-release35'
};


// ENGINE CONFIGURATION VARIABLES

_.extend(a5.dp.config, {
  // Translations

  languageDefault: 'en',                        // String         Multilanguage support. Default translation. (example: 'en-US' - default: false)
  languageAvailable: ['en', 'de', 'es', 'fr', 'it', 'nl', 'zh', 'ar'],  // String Array   Multilanguage support. Available translations. (example: ['en-US', 'es-ES'] - default: empty [])
  translationAsJSONP: false,                    // Boolean        Load translations with file protocol to support offline LOs. (default: false)

  // Responsive

  exclusionBottom: 0,                           // Integer (px)   Reduces the visible content by excluding an area from bottom (e.g to insert a fixed footer)  (default: 0). WIP: REMOVE IF CORE IS THE ROOT DP.
  mediaAreaFixedInView: true,                   // Boolean        Adds an old school sticky behaviour to the media area. If false, uses inline values. Otherwise it toggles the class .stay-in-view (default: false),

  responsiveAttachments: true,                  // Boolean        Enable the responsive attachments feature to remove any inline width/height style from attachment's images & videos (default: false)
  responsiveSupplements: true,                  // Boolean        Enable the responsive supplements feature in Author's interface (rip absolute positioning) (default: false)

  // Dialogs

  skipDialogs: false,                           // String Array   Disable showing of all dialogs (when `true`) or some dialogs (when an Array of dialog template filenames) (default: false)
  nonModalDialogs: [],                          // String Array   Collection of template names whose dialogs are not modal, e.g. ['a5.view.dialog.Hint'] (default: [])

  // Video

  skipEngineCSS: true,                          // Boolean        Skip video-js.css 3rd party css file on Engine side (default: false)
  videoCustomFullscreen: true,                  // Boolean        Enable a custom fullscreen implementation instead letting videojs handle it (default: false)

  // Annotation Tools

  annotationsDefaultTool: 'pointer',            // String         Default annotations toolbar tool (pointer -default- | pen | brush | stickynote)
  annotationsDisableOnCollapse: true,           // Boolean        Disables annotations after collapsing the toolbar and reenables on expanding (default: false)
  annotationsKeepPaletteOpen: false,            // Boolean        Keeps the color/shape palette open after selection if true, otherwise closes it after selection (default: false)

  // Misc

  confirmBeforeSubmit: 'if-unanswered',         // String         Requests user confirmation before submit the LO ('always' | 'if-unanswered' -default- | anything else to disable)
  displayAllScreens: false,                     // Boolean        Commonly used in vertical DPs. Check core-vertical-canvas branch for additional info (default: false)
  forceCorrectedAfterSubmitAttempts: false,     // Boolean        If true, the show answer state will be restored as corrected if the LO has been submitted. This way, teacher will see the original answers instead of the solution. (default: false)
  loadScreensOnDemand: false,                   // Boolean        Renders the LO screens on demand while navigating (default: false)
  postMessageUIManagement: false,               // Boolean        Option to change or add post message to some buttons behaviour.


  // AT related
  //

  // Draggables

  draggableOptions: _selectiveDraggableOptions, // Object         Override jQuery UI draggable options (http://api.jqueryui.com/draggable/) for drag items. Can be an object or a function(interaction)
  keepDragElementInsideContentZone: false,      // Boolean        Drag element can only be moved inside the content zone (om-textgap, om-textgap-labelanobject) (default: true)

  // IC Free Writing 2 Columns

  ICFreeWriting2ColAsTabPanel: true,            // Boolean        Use Tabs Panel on IC Free Writing 2 Columns instead of Radio Accordion (default: false)

  // IC Text Gap

  ICTextgapActive: true,                        // Boolean        Focus the first gaptext in the interaction (default: true). Not supported by vertical DPs.

  // IM Marking

  markingLetterDialogEnabled: false,            // Boolean        Enables a dialog to select individual letters (only works when highlight selection is letters [529 == 'letters']) (default: false)
  markingCSSVariablesGetColor: function(red, green, blue, alpha) {     // Function       Set the function to calculate the colors for CSS custom variables. Arguments: red, green, blue, alpha (default: false)
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  },

  // IM Wordsnake

  snakeFont: 'italic 20px Georgia',             // String         Font style, size and family used for the wordsnake
  snakeSpace: 26,                               // Integer (px)   Space between letters. Must be >= a5.dp.config.snakeWidth to avoid the overlapping of the target areas
  snakeWidth: 26,                               // Integer (px)   Width of letter target area
  snakeHeight: 36,                              // Integer (px)   Height of letter target area
  snakeVerticalMin: 0,                          // Integer (px)   Snake 'wave' top vertical position in relation to the first word
  snakeVerticalMax: 50,                         // Integer (px)   Snake 'wave' bottom vertical position in relation to the first word
  snakeHorizontalSpread: 120,                   // Integer (px)   Snake 'wave' spread. The horizontal distance between top and bottom of a 'wave'

  // IM Wordsearch

  wordsearchCellSize: 32,                       // Integer (px)   Size in pixels
  wordsearchCheckmarks: 2,                      // Custom         Use checkmarks on check answers and see answers states: false (don't use),  1 (on the cell starting the word/marking), 2 (on the ending cell)

  // IS Dropdown

  dropdownNativeSelect: false,                  // Boolean        If true, and we don't have any option with an image inside, IS Dropdown will use a hidden native <select> with opacity: 0 (default: false)

  // IS Linking Lines

  linkingLinesColors: null,                     // String Array   An optional array of colors to be used in linking lines touch variant links. If null or undefined default color is used (defaul: null)
  linkingLinesContainedEvents: false,           // Boolean        If true, linking lines mouse events are captured in the .interaction node instead of the body. It is used when custom scrollbars are added to inner containers (default: false)
  linkingLinesPreserveColorAfterCorrect: false, // Boolean        Use .isLinkingLines__line--statusCorrectedCorrect instead of .isLinkingLines__line styles if a line has been checked correct previously (default: false)
  linkingLinesTouchDirection: [0, 0],           // Integer Array  Array of animation directions for Link Behaviour: Touch. ([horizontal: 0 -right- | 1 -left-, vertical: 0 -bottom- | 1 -top-) (default: [0, 1])
  linkingLinesTouchDuration: 1000,              // Integer (ms)   Duration of the Link Behaviour: Touch animation (default: 1000)
  linkingLinesGetAttributes: function() {       // Function       Set the function to calculate the line styles
    var _getStyle = function(classname, type, attr) {
      var style = a5.utils.getCSSAttributeFromCSS(classname, type, attr + '-style');
      if (style == 'none') style = null;
      return style;
    };
    var _getColor = function(classname, type, attr) {
      var color = null;
      var style = _getStyle(classname, type, attr);
      if (style) color = a5.utils.getCSSAttributeFromCSS(classname, type, attr + '-color');
      return color;
    };
    var attributes = {};
    attributes.lineWidth = a5.utils.getCSSAttributeFromCSS('.is-linking-lines', 'isLinkingLines__line', 'border-width');

    attributes.defaultStyle = a5.utils.getCSSAttributeFromCSS('.is-linking-lines', 'isLinkingLines__line', 'border-style') || 'solid';
    attributes.defaultColor = _getColor('.is-linking-lines', 'isLinkingLines__line', 'border');
    attributes.defaultShadow = _getColor('.is-linking-lines', 'isLinkingLines__line', 'outline') || 'white';

    attributes.prefillStyle = _getStyle('.is-linking-lines', 'isLinkingLines__line--prefilled', 'border') || attributes.defaultStyle;
    attributes.prefillColor = _getColor('.is-linking-lines', 'isLinkingLines__line--prefilled', 'border') || attributes.defaultColor;

    attributes.drawingStyle = _getStyle('.is-linking-lines', 'isLinkingLines__line--drawing', 'border') || attributes.defaultStyle;
    attributes.drawingColor = _getColor('.is-linking-lines', 'isLinkingLines__line--drawing', 'border') || attributes.defaultColor;

    attributes.answersWrongStyle = _getStyle('.is-linking-lines', 'isLinkingLines__line--statusAnswersWrong', 'border') || attributes.defaultStyle;
    attributes.answersWrongColor = _getColor('.is-linking-lines', 'isLinkingLines__line--statusAnswersWrong', 'border') || attributes.defaultColor;
    attributes.answersCorrectStyle = _getStyle('.is-linking-lines', 'isLinkingLines__line--statusAnswersCorrect', 'border') || attributes.defaultStyle;
    attributes.answersCorrectColor = _getColor('.is-linking-lines', 'isLinkingLines__line--statusAnswersCorrect', 'border') || attributes.defaultColor;
    attributes.unattemptedStyle = _getStyle('.is-linking-lines', 'isLinkingLines__line--statusAnswersRevealed', 'border') || attributes.answersWrongStyle;
    attributes.unattemptedColor = _getColor('.is-linking-lines', 'isLinkingLines__line--statusAnswersRevealed', 'border') || attributes.answersWrongColor;

    attributes.feedbackWrongStyle = _getStyle('.is-linking-lines', 'isLinkingLines__line--statusCorrectedWrong', 'border') || attributes.answersWrongStyle;
    attributes.feedbackWrongColor = _getColor('.is-linking-lines', 'isLinkingLines__line--statusCorrectedWrong', 'border') || attributes.answersWrongColor;
    attributes.feedbackCorrectStyle = _getStyle('.is-linking-lines', 'isLinkingLines__line--statusCorrectedCorrect', 'border') || attributes.answersCorrectStyle;
    attributes.feedbackCorrectColor = _getColor('.is-linking-lines', 'isLinkingLines__line--statusCorrectedCorrect', 'border') || attributes.answersCorrectColor;

    attributes.seeNextAnswerStyle = attributes.unattemptedStyle;
    attributes.seeNextAnswerColor = attributes.unattemptedColor;
    return attributes;
  },

  // IS Linking Multiple Lines

  linkingMultipleLinesPreserveColorAfterCorrect: false, // Boolean        Instead of linkingMultipleLinesDefaultColor, use linkingMultipleLinesFeedbackCorrectColor if a line has been checked correct previously (default: false)
  linkingMultipleLinesGetAttributes: function() {       // Function       Set the function to calculate the line styles
    var _getStyle = function(classname, type, attr) {
      var style = a5.utils.getCSSAttributeFromCSS(classname, type, attr + '-style');
      if (style == 'none') style = null;
      return style;
    };
    var _getColor = function(classname, type, attr) {
      var color = null;
      var style = _getStyle(classname, type, attr);
      if (style) color = a5.utils.getCSSAttributeFromCSS(classname, type, attr + '-color');
      return color;
    };
    var attributes = {};
    attributes.lineWidth = a5.utils.getCSSAttributeFromCSS('.is-linking-multiple-lines', 'isLinkingMultipleLines__line', 'border-width');

    attributes.defaultStyle = a5.utils.getCSSAttributeFromCSS('.is-linking-multiple-lines', 'isLinkingMultipleLines__line', 'border-style') || 'solid';
    attributes.defaultColor = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line', 'border');
    attributes.defaultShadow = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line', 'outline') || 'white';

    attributes.prefillStyle = _getStyle('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--prefilled', 'border') || attributes.defaultStyle;
    attributes.prefillColor = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--prefilled', 'border') || attributes.defaultColor;

    attributes.drawingStyle = _getStyle('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--drawing', 'border') || attributes.defaultStyle;
    attributes.drawingColor = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--drawing', 'border') || attributes.defaultColor;

    attributes.answersWrongStyle = _getStyle('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusAnswersWrong', 'border') || attributes.defaultStyle;
    attributes.answersWrongColor = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusAnswersWrong', 'border') ||attributes.defaultColor;
    attributes.answersCorrectStyle = _getStyle('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusAnswersCorrect', 'border') || attributes.defaultStyle;
    attributes.answersCorrectColor = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusAnswersCorrect', 'border') ||attributes.defaultColor;
    attributes.unattemptedStyle = _getStyle('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusAnswersRevealed', 'border') || attributes.answersWrongStyle;
    attributes.unattemptedColor = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusAnswersRevealed', 'border') || attributes.answersWrongColor;

    attributes.feedbackWrongStyle = _getStyle('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusCorrectedWrong', 'border') || attributes.answersWrongStyle;
    attributes.feedbackWrongColor = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusCorrectedWrong', 'border') || attributes.answersWrongColor;
    attributes.feedbackCorrectStyle = _getStyle('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusCorrectedCorrect', 'border') || attributes.answersCorrectStyle;
    attributes.feedbackCorrectColor = _getColor('.is-linking-multiple-lines', 'isLinkingMultipleLines__line--statusCorrectedCorrect', 'border') || attributes.answersCorrectColor;

    attributes.seeNextAnswerStyle = attributes.unattemptedStyle;
    attributes.seeNextAnswerColor = attributes.unattemptedColor;
    return attributes;
  },

  // IS Linking Lines & IS Linking Multiple Lines

  linkingSelectionAreaEnabled: false,               // Boolean        Enables the selection area support (default: false)

  // OM Pairs

  ompairsNew: true,                                 // Boolean        Enables the refactored OM Pairs AT with tap tap support. DON'T TOUCH (default: false)

  // OM Text Gap

  omTextGapLabelAnObjectAutoscaling: true,          // Boolean        Enables auto-scaling of image tiles to maintain their size relative to the background (puzzle mode) (default: false)
                                                    // TODO: This doesn't work as expected. (min-* instead of width/height or transform)

  // OS Box Drop

  boxdropAnswersPosition: 1,                        // Boolean | Integer   If a number, moves the categories to the configured position when check answers or seeAnswers is triggered (default: false)

  // OS Sequence

  ossequencePositionedTooltip: false,               // Boolean        Enables a absolute positioned tooltip related to the input bottom left corner instead of the checkmark itself (default: true)
  ossequenceTransitionDelay: 250,                   // Integer (ms)   Swap position delay and toggle between the .transition-out & .transition-in classes
  reactActivities: ["Input:Completion:Crossword"],  // Array          Supported activities in React

  // OS Sorting

  ossortingCollapseDropZones: true,                 // Boolean        Toggle drop zones on zone title click (default: false)
  ossortingTargetZoneCounter: true,                 // Boolean        Add element counter to sorting target zones (default: false)
  ossortingCloneCss: false,                         // Boolean        By default OS Sorting elements are appended to the body, so the css of the original element is copied to preserve styling (default: true)

  // PP Slideshow

  ppslideshowDelay: 6,                              // Integer (s)    Default delay between slides
  ppslideshowStep: 1                                // Integer (s)    Value to be applied when increasing or decreasing the delay
});


// CORE CONFIGURATION VARIABLES

a5.core = {};

a5.core.config = {
  // Translations
  // String Array   Translations keys used in pseudo elements

  translationVars: ['interaction.syllabify.answerCheckTooltipPrefix',
                    'contentElements.icTextCorrectionDialog.titlePrefix'],

  // Spinner

  loaderBetweenScreens: false,                      // Boolean        Enables the spinner between screens

  // Custom properties

  calcDialogHeight: false,                          // Boolean        Enables the custom property --toolbarDialog-height
  calcFooterHeight: false,                          // Boolean        Enables the custom property --loControls-height
  calcAsideHeight: false,                           // Boolean        Enables the custom property --aside-height
  mobileViewportUnit: true,                         // Boolean        Add the css custom property (variable) --vh100 for use in iOS

  // Responsive

  breakpoints: {},                                  // Object         Enables the management of breakpoints from js

  // User activity

  detectUserActivity: true,                         // Boolean        Enable to detect if the user is active or not (for example to display the video controls) and the last input method used
  detectUserActivityIdleInterval: 3000,             // Integer (ms)   Delay before go back to idle status removing the user--active class
  detectUserInputMethod: true,                      // Boolean        Enable to detect if the user is using his mouse or keyboard in any single moment

  // Attachments

  attachmentBadge: false,                           // Boolean        Enables the attachment count badge
  loToolbarMaxWidthRatio: false,                    // Integer (%)    Toggle the activity--hasWideAttachments class if the attachments width is higher than the established ratio
  loToolbarActivityHeaderMaxWidth: false,           // Boolean        Toggle the activity--hasWideAttachments class if the sum of widths of the attachments and activity title (or rubric if the title is disabled) is highter than the available space

  // Timer

  timerProgress: 'circular',                        // String         Set the LO Timer progress bar style (false | linear | circular -default-)

  // Draggables

  draggableStackOffset: -3,                         // Integer        Must match the draggable stack offset to adjust the height of these pools

  // Media

  miniPlayerAnimation: true,                        // Boolean        Enables the miniPlayer (playbutton) sound wave animation (template available in skinTemplates/a5.view.core.playbuttonAnimation.handlebars)
  miniPlayerProgress: true,                         // Boolean        Enables the circular progress animation
  recorderAnimation: false,                         // Boolean        Enables the Audio Recorder (record button) sound wave animation (template available in skinTemplates/a5.view.core.recorderAnimation.handlebars)
  videoFluidSize: true,                             // Boolean        Enables the fluid video sizing based on his aspect ratio

  // Pagination

  paginationRange: false,                           // Integer        Number of pages that will get a --prev & --next class that can be used to limit the number of visible items or style them in a different way (default: false to disable it)
  paginationProgressBar: false,                     // Boolean        Enables the pagination progress bar

  // Toggleable Supplement Area

  toggleableMediaGlobalButton: true,                // Boolean        Enables the global toggleableMedia toggle button on contentElements.html

  // Misc

  parallaxImages: false                             // Boolean        Enables the parallax effect on images with the .parallaxImage class (default: false)
};


/**
 * SELECTIVE DRAGGABLE OPTIONS. Allow us to use different option sets for each AT
 * @param  {object} interaction   Interaction
 * @private
 */

function _selectiveDraggableOptions(interaction) {
  return {
    appendTo: '#' + $(interaction.contentZone).attr('id') + ' .drag-drop'
  };

/*
  switch(interaction.identifier) {
    case 'Order:Sequence:Sequence':
      return {};
    default:
      return {
        appendTo: '.drag-drop',
        containment: '#page'
      };
  } */
}

/// FONTS
//  Web Font Loader (https://github.com/typekit/webfontloader) is used to manage this task.
//  Child DPs can modify its configuration object 'WebFontConfig' to load their own fonts.
//

WebFontConfig = {
  // By default, CORE loads the sprite font used broadly in our DPs. Child DPs only need to replace
  // the font file if they want to customize it using icomoon.io and the json file in the resources folder.
  custom: { 
    families: ['avallainico']
  },

  // Examples of usage in child DPs:
  //   - To load Adobe fonts (Typekit), use:
  //       WebFontConfig.typekit = { id: your typekit ID string here };
  //
  //   - To load Google fonts, use:
  //       WebFontConfig.google = { families: [your families string here] };
  //
  //   - To add additional custom fonts along side the default avallainico family, use:
  //       WebFontConfig.custom.families.push(your families string here);
  //
  //   - To load different custom font families overwriting our default value (not recomended), use:
  //       WebFontConfig.custom = {
  //         families: [your families string here]
  //       };

  // If you eventually choose to redefine the 'WebFontConfig' completely,
  // make sure to not forget to include the following 'active' handler as it is:
  active: function() {
    a5.hooks.interactionFontUpdated.call();
  }
};

// This hook loads the fonts automatically for you. You do NOT need to add this into any child DP.
a5.hooks.layoutStylesLoaded.add(function() {
  WebFont.load(WebFontConfig);
});


// EVENTS
// ======
//
// Takes care of announcing (potential) DOM change in an orderly
// and not overwhelming manner. It doesn't fire more than one of
// each `:update` events per execution cycle.
//
// [Update Events](https://docs.google.com/document/d/1swEMiHhAbNcCZiEj0vE5k8mlxku3Oa3Aom_UUGFCTb4#heading=h.tpjchcl5pmw8)
//
(function($) {
  var events = a5.dp.events = {
    // Counters of how many times a reson for triggering an update event
    // has occured within a cycle.
    //
    syndicatedDomUpdate: 0,
    syndicatedWindowUpdate: 0,

    // Initializer is common to all modules and is ran only
    // once per session on first interaction load.
    // It generally binds handlers to events.
    //
    // @param {a5.Interaction} interaction Engine's interaction instance
    //
    init: function(interaction) {
      a5.callbacks.interaction.bind('showed',      events.domUpdate );
      a5.callbacks.controls.bar.bind('added',      events.domUpdate );
      a5.hooks.interactionStatusChanged.add(       events.domUpdate );
      a5.mainBuilder.bind('frequent_score_update', events.domUpdate );
      $( document ).on('dragstop click keydown',   events.domUpdate );

      a5.callbacks.interaction.bind('showed',      events.windowUpdate );
      $( window ).on('resize',                     _.throttle(events.windowUpdate, 30) );
      $('#page').on('scroll',                      _.throttle(events.windowUpdate, 30) );

      // Both events are triggered right of the bat on init
      //
      events.windowUpdate();
      events.domUpdate();

      events.syndication();
    },

    // Runs continuously in a loop and ensures that neither `dom:`
    // nor `window:update` events are ever fired twice inside one cycle,
    // no matter how many source events have been the cause for the trigger.
    //
    syndication: function() {
      events.syndicatedWindowUpdate && !(events.syndicatedWindowUpdate = 0) && $(document).trigger('window:update');
      events.syndicatedDomUpdate && !(events.syndicatedDomUpdate = 0) && $(document).trigger('dom:update');

      _.defer(events.syndication);
    },

    // Increments the window update potential counter
    // essentially causing a trigger at the end of the cycle.
    //
    // @param {Event} e jQuery event
    //
    windowUpdate: function(e) {
      events.syndicatedWindowUpdate++;
    },

    // Increments the window update potential counter
    // essentially causing a trigger at the end of the cycle.
    //
    // @param {Event} e jQuery event
    //
    domUpdate: function(e) {
      events.syndicatedDomUpdate++;
    }
  };

  a5.callbacks.interaction.bind('loaded', events.init, this, { once: true });
})(jQuery);

/*
  ENGINE FILL-IN
  Propagates key wordpool properties further up the DOM
*/
$(function() {
  a5.hooks.interactionShowed.add(function(interaction) {
  	var $pool = interaction.$('.wordpool');
  	var $interaction = interaction.$('.interaction');

    $interaction.toggleClass('wordpool-bottom', $pool.is('.bottom, .alignment_bottom'));
    $interaction.toggleClass('wordpool-right', $pool.is('.right, .alignment_right'));
    $interaction.toggleClass('wordpool-left', $pool.is('.left, .alignment_left'));
    $interaction.toggleClass('wordpool-top', $pool.is('.top, .alignment_top'));
  });
});

$(function() {
  a5.hooks.interactionShowed.add(function(interaction) {
    interaction.contentWrap.toggleClass("withHeaderAudio", interaction.rubricZone.hasClass("withHeaderAudio"));
  });
});

/*
  ENGINE FILL-IN
  Management of dialogue recording
*/
$(function() {
  var dialogue = a5.dp.dialogue = {
    // Allow child DP to eventually don't use this module at all
    // in favor of child's own implementation
    //
    unused: false,

    init: function() {
      if (dialogue.unused) { return; }

      $(document)
        .on('click', '.ic-dialogue-recording .dialogue .role-photo', dialogue.triggerPlay)
        .on('click', '.ic-dialogue-recording .dialogue.role-active .role-content', dialogue.triggerRecord)
      ;
    },

    $: function(selector) {
      var $interaction = a5.mainBuilder.curInteraction.$('.interaction');

      // Retreives either the `.interaction` element itself
      // or any of its children matching given selector
      //
      return selector ? $interaction.find(selector) : $interaction; // jQuery
    },

    triggerRecord: function(e) {
      var $dialogue = $(e.target).closest('.dialogue:not(.is-playing)');

      $dialogue.find('.lrp_record').click();
    },

    triggerPlay: function(e) {
      var $dialogue = $(e.target).closest('.dialogue:not(.is-recording)');

      if (!$dialogue.is('.role-active')) { $dialogue.find('.playbutton').click(); }
      else $dialogue.find($dialogue.is('.is-playing') ? '.lrp_stop' : '.lrp_play').click();
    }
  };

  a5.callbacks.interaction.bind('loaded', dialogue.init, this, { once: true });
});

$(function() {
  a5.hooks.interactionShowed.add(function(interaction) {
    interaction.$('.interaction.ic-text-correction .checkbox').append($('<div class="styleEl">'));
  });
});

/*
  ENGINE FILL-IN
  Management of playbuttons in audio gaps
*/
$(function() {
  $('body').on('click focus tp:click', function(e) {
    var $target = $(e.target);
    var $audioGap = $target.closest('.audio-gap');
    var statusInput = $audioGap.closest('.interaction').is('.status-input');
    var isInput = $target.is('.audio-gap .input-text input');
    var isDropdown = $target.is('.audio-gap .wrapper-dropdown *');
    var isPlaybutton = $target.is('.audio-gap .playbutton');

    if (statusInput && (isInput || isDropdown)) {
      hideAll();
      $('.playbutton', $audioGap).show();
    } else if (isPlaybutton) {
      $('.input-text input', $audioGap).focus();
      $('.rich-dropdown', $audioGap).click();
    } else {
      hideAll();
    }

    function hideAll() {
      $('.interaction:visible .audio-gap .playbutton ~ .element-wrap .filled').closest('.element-wrap').prev().hide();
    }
  });
});

// KEYBOARD
// ========
//
// Provides an extensible keyboard control for otherwise pure mouse elements
//
// [Keyboard Control](https://docs.google.com/document/d/1swEMiHhAbNcCZiEj0vE5k8mlxku3Oa3Aom_UUGFCTb4#heading=h.nh23eehvsv6k)
//
(function($) {
  // As the DP manipulates the default `tabindex`es to place the content
  // correctly in the tabbing order between the top and the bottom panel and also between the
  // pagination buttons, a numeric `tabindex` is specified in `a5.dp.tabindex` to be
  // further used by number of the DP's scripts (mostly AT-related).
  //
  a5.dp.tabindex = 0;

  var keyboard = a5.dp.keyboard = {
    // Pairs of keys and key codes
    // recognized by this script
    //
    keys: {
      'backspace':   8,
      'tab':         9,
      'enter':      13,
      'break':      19,
      'caps-lock':  20,
      'esc':        27,
      'space':      32,
      'page-up':    33,
      'page-down':  34,
      'end':        35,
      'home':       36,
      'left':       37,
      'up':         38,
      'right':      39,
      'down':       40,
      'insert':     45,
      'delete':     46,
      'menu':       93,
      'multiply':  106,
      'add':       107,
      'subtract':  109,
      'divide':    111,
      'equal':     187
    },

    // Behavior schemes describing for each supported AT
    //
    // Keyboard `behavior` members (all optional):
    //
    // `tabindex`     - selector of elements to receive tabindex for TAB key use
    // `tabindexAs`   - function which returns a tabindex number to be applied
    // `reset`        - behavior key string to reset tabindexes applied by that behavior
    // `activate`     - either boolean `false` to prevent activation with ENTER/SPACE key
    //                  or function to be executed instead of default on activation
    //
    behavior: {
      '.ic-dialogue-recording':          { tabindex: '.dialogue', activate: true },
      '.im-colouring':                   { tabindex: '.button, circle, rect, path' },
      '.im-marking':                     { tabindex: '.button, .markable:not(.prefilled)' },
      '.is-pelmanism':                   { tabindex: '.panel' },
      '.pp-flashcards':                  { tabindex: '.panel' }
    },

    // Selector of what is subject to activation in ATs
    // not listed in `a5.dp.keyboard.behavior`
    //
    activatable: ':focus',

    // Initializer is common to all modules and is ran only
    // once per session on first interaction load.
    // It generally binds handlers to events.
    //
    // @param {a5.Interaction} interaction Engine's interaction instance
    //
    init: function(interaction) {
      $(document).on('keydown', keyboard.operate);
      $(document).on('dom:update', keyboard.tabindexes);
    },

    // Activates an element.
    // If activation happed, jQuery of the activated element is returned
    //
    activate: function() {
      var scheme = keyboard.scheme();

      if (!scheme.activate) { return; }

      var $el = $(keyboard.activatable);
      var inInteraction = !!$el.closest('.interaction').length;

      if (inInteraction) {
        try {
          return scheme.activate();
        } catch (e) {
          var inner = keyboard.scheme().activate;

          $el = inner === true ? $el : $el.find(inner);
        }
      }

      return $el.click();
    },

    // Assigns `tabindex` attributes.
    // Returns jQuery with the set of processed elements.
    //
    // @param {Event} e jQuery event
    //
    tabindexes: function(e) {
      var scheme = keyboard.scheme();
      if (scheme.tabindex) {
        if (scheme.reset) {
          var $reset = $(scheme.id + '.interaction.status-input:visible').find(keyboard.behavior[scheme.reset].tabindex);

          $reset.attr({ tabindex: -1 });
        }
        var $el = $(scheme.id + '.interaction.status-input:visible').find(scheme.tabindex);

        return $el.attr({ tabindex: scheme.tabindexAs || a5.dp.tabindex });
      }
    },

    // Find a keyboard scheme matching currently visible interaction
    // and return it as keyboard scheme Object. In case of no match
    // an empty Object is returned.
    //
    scheme: function() {
      var $interaction = $('.interaction.status-input:visible');
      var scheme = _.find(keyboard.behavior, function(scheme, interaction) {
        return $interaction.is(scheme.id = interaction);
      });

      return scheme || {};
    },

    // Map key presses to clicks in the GUI
    //
    // @param {Event} e jQuery event
    //
    operate: function(e) {
      if (keyboard.isKey('enter space', e) && keyboard.activate()) {
        e.preventDefault();
      }
    },

    // Return true if one of the keys listed (separated by space) matches the pressed key
    //
    // @param {String} key String listing key or keys separated by space to match
    // @param {Event} e jQuery event
    //
    isKey: function(key, e) {
      return !!_.find(key.split(/ /), function(key) {
        return e.keyCode == keyboard.keys[key];
      });
    }
  };

  a5.callbacks.interaction.bind('loaded', keyboard.init, this, { once: true });
})(jQuery);


// DIALOGUE RECORDING
// ==================
//
// [Dialogue Recording AT](https://docs.google.com/document/d/1swEMiHhAbNcCZiEj0vE5k8mlxku3Oa3Aom_UUGFCTb4#heading=h.2stuj0rm3vwa)
//
(function($) {
  var dialogue = a5.dp.dialogueRecording = {
    // Initializer is common to all modules and is ran only
    // once per session on first interaction load.
    // It generally binds handlers to events.
    //
    // @param {a5.Interaction} interaction Engine's interaction instance
    //
    init: function(interaction) {
      // Use this module's custom function to decide the `tabindex` number
      // in the keyboard tabindexing routine
      //
      a5.dp.keyboard.behavior['.ic-dialogue-recording'].tabindexAs = dialogue.tabindex;
    },

    // Method called by the keyboard module to decide on a value for `tabindex`
    // and return it back as a Number.
    //
    // As such, normally, this method is supposed to return a numeric value
    // for the `tabindex` attribute. But since here we are assigning the `tabindex`es
    // to the element's children instead of `this`, we don't want any tabindex
    // to land on it, so in this very case we explicitly return nothing.
    //
    tabindex: function() {
      var $dialogue = $(this);
      var activeRole = $dialogue.is('.role-active');
      var hasRecording = $dialogue.is('.has-recording');

      $('.role-photo', $dialogue).attr('tabindex', !activeRole || hasRecording ? a5.dp.tabindex : -1);
      $('.role-content', $dialogue).attr('tabindex', activeRole ? a5.dp.tabindex : -1);

      return; // Number
    }
  };

  a5.callbacks.interaction.bind('loaded', dialogue.init, this, { once: true });
})(jQuery);


// CLOSE ROLLOVERS WITH KEYBOARD
// =============================

(function($, a5) {
  var rollover = {
    init: function() {
      $(document).on('keydown', rollover.keydown);
    },

    keydown: function(ev) {
      if (ev.which === 27) { // Escape key
        var active = rollover.activeRollover();

        if (!active.length) {
          return;
        }

        active.addClass('no-rollover');
        rollover.addEnableHook(active);
      }
    },

    activeRollover: function() {
      return $('.button-pagination:has(span:visible)');
    },

    addEnableHook: function(node) {
      node.on('blur mouseout', rollover.enable);
    },

    enable: function() {
      $(this).removeClass('no-rollover').off('blur mouseout', rollover.enable);
    }
  };

  a5.callbacks.controls.bar.bind('added', rollover.init);
})(jQuery, a5);

$(function() {
  a5.hooks.interactionStatusChanged.add(function(interaction) {
    interaction.$('.im-marking .markable').removeClass('has_check');
    interaction.$('.im-marking .markable').removeClass('wrong_2');
    interaction.$('.im-marking .markable:has(.check)').addClass('has_check');
    interaction.$('.im-marking .markable:has(.wrong_2)').addClass('wrong_2');
  });
});

/*
  ENGINE FILL-IN
  Management of proof reading
*/
$(function() {
  // Proofreading toolbar has a sticky behavior.
  // If the toolbar is about to get scrolled away "off screen"
  // more precisely beyond the configured top exclusion (`a5.dp.config.exclusionTop`)
  // the toolbar sticks to the edge of the exclusion
  // and remains fixed in view.
  //

  // Whether to project the vertical space occupied by unstuck `.toolbar`
  // as a top padding of `.interaction` to compensate for `.toolbar`
  // going fixed position when stuck.
  // Useful when a child DP has the toolbar to the side of content, not above.
  //
  a5.dp.compensateProofingToolbarHeight = true;

  // For how long keep the hint highlight on markables and markers, in milliseconds.
  //
  a5.dp.config.IMProofingSignalDuration = 3000; // 3s

  // Child DPs can turn the sticky behavior off if they choose so:
  //
  //   - `a5.dp.proofing.stickyToolbar` - set this to `false` to disable // Boolean
  //
  // and also redefine several DOM or measurements retreiving methods:
  //
  //   - `a5.dp.proofing.$master()` - returns the container element used for size measuring // jQuery
  //   - `a5.dp.proofing.$document()` - returns the UI's scrolling element // jQuery
  //   - `a5.dp.proofing.scrollTop()` - returns the vertical scrolling position of $document() // Number
  //   - `a5.dp.proofing.exclusionTop()` - returns engine's configured top exclusion // Number
  //
  var proofing = a5.dp.proofing = {
    stickyToolbar: true,

    init: function() {
      // Perform position/size update on scroll,
      // on window resize and on interaction show.
      //
      $(window).on('resize scroll', proofing.update);
      a5.callbacks.interaction.bind('showed', proofing.update);

      // Toggle `.expanded` class on  `.tools`,
      // adding on mouse enter and removing on leave and tool click.
      //
      $(document).on('mouseover mouseout click focusin focusout', '.im-proofing .tools', function(e) {
        $(this).toggleClass('expanded', !!e.type.match(/mouseover|focusin/));
      });
    },

    $: function(selector) {
      var $interaction = a5.mainBuilder.curInteraction.$('.interaction');

      // Retreives either the `.interaction` element itself
      // or any of its children matching given selector
      //
      return selector ? $interaction.find(selector) : $interaction; // jQuery
    },

    // `$document` is the DOM element, which is subject to the page scrolling.
    // By default it is `document`
    //
    $document: function() { return $(document); }, // jQuery

    // `$master` is typically direct DOM container of the toolbar
    // which is used to measure width of the toolbar.
    // By default it is the `.interaction` itself.
    //
    $master:   function() { return proofing.$(); }, // jQuery

    // `$toolbar` is the DOM node representing the toolbar
    // By default it is intearction's `.toolbar` element.
    //
    $toolbar:  function() { return proofing.$('.toolbar'); }, // jQuery

    update: function(e) {
      if (proofing.$().is('.im-proofing') && proofing.stickyToolbar) {
        // Compares the `.toolbar`'s current position
        // against the configured top exclusion
        //
        if (proofing.scrollTop() > proofing.$master().offset().top - proofing.exclusionTop()) {
          proofing.stickToolbar();
        } else {
          proofing.unstickToolbar();
        }
      }
    },

    stickToolbar: function() {
      proofing.$toolbar().css({
        // Position on the edge of top exclusion fixly to the window
        //
        top: proofing.exclusionTop(),

        // Replicate toolbar dimensions in fixed space from its other positions
        //
        left: proofing.$master().offset().left,
        right: proofing.$document().width() - proofing.$master().offset().left - proofing.$master().outerWidth()
      });

      // The mass of an unstuck toolbar typically occupies some
      // of the `.interaction`'s vertical space
      // and snatching the toolbar for fixed position removes this mass.
      //
      // If enabled, we compensate for this loss of this space.
      //
      if (a5.dp.compensateProofingToolbarHeight) { proofing.compensate(true); }

      proofing.toggleStuckClass(true);
    },

    toggleStuckClass: function(yes) {
      // `.toolbar.stuck` is used to apply `position: fixed`
      // to keep the toolbar in place and other custom styles.
      //
      proofing.$toolbar().toggleClass('stuck', yes);
    },

    compensate: function(yes) {
      // To prevent the interaction content to jump up
      // by the height + margin because of that
      // a padding of same value is applied to `.interaction`
      //
      var $toolbar = proofing.$toolbar();
      var compensation = $toolbar.outerHeight();
          compensation+= parseInt($toolbar.css('marginTop')) || 0;
          compensation+= parseInt($toolbar.css('marginBottom')) || 0;

      proofing.$master().css({
        paddingTop: yes ? compensation : ''
      });
    },

    unstickToolbar: function() {
      proofing.toggleStuckClass(false);

      // If enabled, cancel the compensation
      //
      if (a5.dp.compensateProofingToolbarHeight) { proofing.compensate(false); }
    },

    scrollTop: function() {
      // Reports the vertical scrolling position
      //
      return proofing.$document().scrollTop(); // Number (pixels)
    },

    exclusionTop: function() {
      // Reports the vertical scrolling position
      //
      return a5.dp.config.exclusionTop; // Number (pixels)
    }
  };

  a5.callbacks.interaction.bind('loaded', proofing.init, this, { once: true });
});

/*
  ENGINE FILL-IN
  Management of pairs
*/
$(function() {
  var setDropAreasMaxWidth = function(interaction) {
    interaction.$('.om-pairs .ontop .content img,' +
                  '.om-pairs .vertical .content img').each(function() {
      var drop_area = $(this).closest('.drop_area'),
          width = _.max(drop_area.add(interaction.$('.drag_element')).map(function(_, item) {
        // In the call to _naturalSize_, "width: 0" is applied to the container, so we get the
        // minimum width the node can take with text wrapping into several lines
        return $(item).naturalSize(null, { width: 0 })[0];
      }));
      drop_area.css({ maxWidth: width });
    });
  };

  a5.hooks.interactionShowed.add(setDropAreasMaxWidth);
  $(window).on('resize', _.throttle(function() {
    setDropAreasMaxWidth(a5.mainBuilder.curInteraction);
  }, 300));
});

/*
  OPTION
  Shows Download button after LRP widget recording has finished
*/
$(function() {
  $('body').on('download:show', '.lrp_download.button', function(e) {
    $(this).show();
  });
});

(function() {
  var addTranslations = function() {
    var keys = [];

    _.each(a5.core.config.translationVars, function(i18nKey) {
      keys.push('--' + _.str.camelize('lang_' + i18nKey.replace(/\./g, '_')) + ": '" + htmlEncode(i18next.t(i18nKey)) + "';");
    }, {});

    if (keys.length) {
      var css = document.createElement('style');

      css.type = 'text/css';
      keys = ':root {\n' + keys.join('\n') + '\n}';

      if (css.styleSheet) {
        css.styleSheet.insertRule(keys);
      } else {
        css.appendChild(document.createTextNode(keys));
      }

      document.head.appendChild(css);
    }
  };

  a5.callbacks.interaction.bind('loaded', addTranslations, this, { once: true });
})();

/*
  ENGINE FILL-IN
  Additional functionality for notes area
*/
$(function() {
  function addInteractivity(interaction) {

    // Proxy clicks on inner toggle button to the real reference toolbar button to hide notes
    $('#reference_toolbar').on('click', '.notes.toolbar_tray .your_notes_button', function() {
      $('#reference_toolbar .buttons > .your_notes_button').click();
    });

    // Remove `no-notes` class when note is added
    $('#reference_toolbar').on('click', '.add_new_note', function() {
      $('#reference_toolbar .notes.toolbar_tray').removeClass('no-notes');
    });
  }

  a5.callbacks.interaction.bind("loaded", _.once(addInteractivity));
});

/*
  ENGINE FILL-IN
  Propagates radiobutton and checkbox settings up to the contentblock
*/
$(function() {
  a5.callbacks.interaction.bind("loaded", function(interaction) {
    interaction.$('.choice_interaction.algn-hor').parents('.contentblock').addClass('alignment-horizontal');
    interaction.$('.choice_interaction.algn-ver').parents('.contentblock').addClass('alignment-vertical');
    interaction.$('.choice_interaction.algn-inl').parents('.contentblock').addClass('alignment-inline');
  });
});

/*
  ENGINE FILL-IN
  Flags viewtext container
*/
$(function() {
  a5.callbacks.interaction.bind("loaded", flagMediaArea);
  function flagMediaArea(interaction) {
    var $zone = interaction.mediaZone;

    $zone.toggleClass('viewtext-zone', !!$('.view-text', $zone).length);
  }
});

$(function() {
  a5.hooks.interactionShowed.add(function(interaction) {
    _.defer(resizeCells, interaction);
    $(window).off('.table_cells').bind('resize.table_cells').resize(function () {
      _.throttle(resizeCells(interaction), 300);
    });
  });

  function resizeCells(interaction) {
    if (interaction.$('.interaction').hasClass('is-radiobutton-columns')) {
      interaction.$('.radiobutton-column-label').children().each(function (position, cell) {
        var $referenceCell = position === 0 ? getHeaderReferenceCell(interaction) : $(cell);
        applyHeightToRow(position,interaction,$referenceCell);
      });
    }
  }

  function getHeaderReferenceCell(interaction) {
    var cell = _.max(interaction.$('.radiobutton-column-header'), function (cell) {
      return $(cell).outerHeight();
    });
    return $(cell);
  }

  function applyHeightToRow(position, interaction, referenceCell) {
    interaction.$('.choice_interaction').each(function (columnIndex, column) {
      var height;
      if (position === 0) {
        height = referenceCell.height();
        interaction.$('.answer-label').height(height);
      } else {
        height = referenceCell.outerHeight();
        $(column).children().eq(position).outerHeight(height);
      }
    });
  }
});

$(function() {
  a5.hooks.interactionShowed.add(function (interaction) {
    // Detect touch support and save it in support
		$.support.touch = 'ontouchend' in document;
    if ($.support.touch) { $('body').addClass('isMobile'); }
  });
});

/*
  ENGINE FILL-IN
  Additions to draggable/droppable items
*/
$(function() {
  // Adjusts otherwise negative horizontal margin of images on drag items
  // into positive values to not overlap with the eventual text label inside
  function adjustImageMargins($item) {
    var $image = $item.find('img');
    var $div = $item.find('> div');
    var $contents = ($div.length ? $div : $item).contents();

    // ... AND text label
    if ($item.text()) {
      var before = $contents.first()[0] == $image[0];
      var after = $contents.last()[0] == $image[0];

      $item.toggleClass('image-between-text', !before && !after);
      $item.toggleClass('image-before-text', before && !after);
      $item.toggleClass('image-after-text', !before && after);
    }
  }

  a5.hooks.interactionShowed.add(function(interaction) {
    // Only do the adjustment on drag items with image...
    var applicables = '.drag_item, .drag_element, .shuffle_interaction .element';

    interaction.$(applicables).each(function() {
      adjustImageMargins($(this));
    });
  });

  a5.callbacks.interaction.bind('loaded', function(interaction) {
    interaction.bind('drag:render', adjustImageMargins);
  });


  // Adjust the height of stacked drop zone in the pool
  // to match the height of the actual stack
  function adjustStacksDropZones(interaction) {
    var $interaction = interaction ? interaction.$('.interaction') : $('.interaction:visible');
    $('.wordpool .stacked.drop_item_zone', $interaction).each(function() {
      var $stack = $(this);
      $stack.css({ paddingTop: Math.abs(a5.core.config.draggableStackOffset) * ($stack.children().length - 1) });
    });
  }

  a5.callbacks.interaction.bind('loaded', adjustStacksDropZones);
  $('body').on('drop', function() { _.defer(adjustStacksDropZones); });
});

(function(core) {
  'use strict';

  /**
   * Used to store an instance of Device class
   * @type {Device}
   */
  var deviceClassInstantation;

  /**
   * Device class is based upon isMobile library
   * https://github.com/kaimallea/isMobile (Kai Mallea (kmallea@gmail.com))
   * Usage (e.g.): Device.iOS.ipod
   */
  core.Device = (function() {
    /**
     * Different regular expressions
     * @type {RegEx}
     */
    var iOSPhone           = /iPhone/i,
        iOSIpod            = /iPod/i,
        iOSTablet          = /iPad/i,
        androidPhone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
        androidTablet      = /Android/i,
        amazonPhone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        amazonTablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        windowsPhone       = /Windows Phone/i,
        windowsTablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
        otherBlackberry    = /BlackBerry/i,
        otherBlackberry_10 = /BB10/i;


    /**
     * Executes a search for a match between a regular expression and a specified string
     * @param  {RegEx}  regex      Regular expresion
     * @param  {string} userAgent  User agent string
     * @return {boolean}           Returns true if regex patter is found in userAgent string
     */
    var _match = function(regex, userAgent) {
      return regex.test(userAgent);
    };

    /**
     * Device class
     * @constructor
     */
    var Device = function() {
      var userAgent = navigator.userAgent;

      /**
       * navigator.userAgent string
       * @type {string}
       */
      this.userAgent = userAgent;

      /**
       * Object to store booleans to easily check if a device is an iOS device, and which kind
       * Usage (e.g.): Device.iOS.phone
       * @type {Object}
       */
      this.iOS = {
        phone: _match(iOSPhone, userAgent),
        ipod: _match(iOSIpod, userAgent),
        tablet: !_match(iOSPhone, userAgent) &&
                _match(iOSTablet, userAgent),
        any: _match(iOSPhone, userAgent) ||
             _match(iOSIpod, userAgent) ||
             _match(iOSTablet, userAgent)
      };

      /**
       * Object to store booleans to easily check if a device is an iPadOS (iOS 13 for iPad) device, and which kind
       * Usage (e.g.): Device.iPadOS.tablet
       * @type {Object}
       */
      this.iPadOS = {
        tablet: navigator.platform === 'MacIntel' &&
                navigator.maxTouchPoints > 1
      };

      /**
       * Object to store booleans to easily check if a device is an android device, and which kind
       * Usage (e.g.): Device.android.phone
       * @type {Object}
       */
      this.android = {
        phone: _match(amazonPhone, userAgent) ||
               _match(androidPhone, userAgent),
        tablet: !_match(amazonPhone, userAgent) &&
                !_match(androidPhone, userAgent) &&
                (_match(amazonTablet, userAgent) ||
                _match(androidTablet, userAgent)),
        any: _match(amazonPhone, userAgent) ||
             _match(amazonTablet, userAgent) ||
             _match(androidPhone, userAgent) ||
             _match(androidTablet, userAgent)
      };

      /**
       * Object to store booleans to easily check if a device is a window device, and which kind
       * Usage (e.g.): Device.windows.phone
       * @type {Object}
       */
      this.windows = {
        phone:  _match(windowsPhone, userAgent),
        tablet: _match(windowsTablet, userAgent),
        any: _match(windowsPhone, userAgent) ||
             _match(windowsTablet, userAgent)
      };

      /**
       * Object to store booleans to easily check if a device is a phone
       * Usage (e.g.): Device.phone
       * @type {Object}
       */
      this.phone = this.iOS.phone || this.android.phone || this.windows.phone;

      /**
       * Object to store booleans to easily check if a device is a tablet
       * Usage (e.g.): Device.tablet
       * @type {boolean}
       */
      this.tablet = this.iOS.tablet || this.iPadOS.tablet || this.android.tablet || this.windows.tablet;

      /**
       * Object to store booleans to easily check if a device is a phone or a tablet
       * Usage (e.g.): Device.mobile
       * @type {boolean}
       */
      this.mobile = this.phone || this.tablet;
    };

    _(Device.prototype).extend({
      /**
       * Returns device width (don't confuse with viewport width)
       * @return {number} Device width
       */
      getDeviceWidth: function() {
        return window.innerWidth > 0 ? window.innerWidth : screen.width;
      },
      
      /**
       * Returns device height (don't confuse with viewport width)
       * @return {number} Device height
       */
      getDeviceHeight: function() {
        return window.innerHeight > 0 ? window.innerHeight : screen.height;
      }
    });

    deviceClassInstantation = new Device();

    return deviceClassInstantation;
  })();
})(a5.core);

(function(core, Device, jQuery) {
  'use strict';

  /**
   * Variable used to store our Logger
   * @type {Logger}
   */
  var logger = new Logger();

  /**
   * Used to store an instance of Device class
   * @type {Client}
   */
  var clientClassInstantation;

  /**
   * Client class is based upon Rob Wu solution
   * https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
   * Usage:
   * Client.apple.ipod
   * Client.userAgent()
   */
  core.Client = (function() {
    /**
     * Executes a search for a match between a regular expression and a specified string
     * @param  {RegEx}  regex      Regular expresion
     * @param  {String} userAgent  User agent string
     * @return {Boolean}           Returns true if regex patter is found in userAgent string
     */
    var _match = function(regex, userAgent) {
      return regex.test(userAgent);
    };

    /**
     * Client
     * @constructor
     */
    var Client = function() {
      var userAgent = navigator.userAgent;

      /**
       * navigator.userAgent string
       * @type {string}
       */
      this.userAgent = userAgent;
      this.chrome = !!window.chrome && !!window.chrome.webstore;
      this.firefox = typeof InstallTrigger !== 'undefined';
      this.safari = /constructor/i.test(window.HTMLElement) ||
                    (function(p) {
                      return p.toString() === "[object SafariRemoteNotification]";
                    })(!window.safari || (typeof safari !== 'undefined' && safari.pushNotification));
      this.opera = (!!window.opr && !!opr.addons) || !!window.opera ||
                   navigator.userAgent.indexOf(' OPR/') >= 0;
      this.oldIe = /*@cc_on!@*/false || !!document.documentMode;
      this.ie8 = this.oldIe && !this.ie9 && typeof document.body.style.msBlockProgression !== 'undefined';
      this.ie9 = this.oldIe && typeof document.body.style.opacity !== 'undefined';
      this.ie10 = this.oldIe && !this.ie9 && typeof document.body.style.msGridRows !== 'undefined';
      this.ie11 = this.oldIe && !this.ie10 && !!window.MSInputMethodContext && !!document.documentMode;
      this.edge = !this.oldIe && !!window.StyleMedia;
      this.ie = this.oldIe || this.edge;
      this.blink = (this.chrome || this.opera) && !!window.CSS;
      this.webkit = this.edge && Device.iOS.any ||
                    this.firefox && Device.iOS.any ||
                    !this.edge && document.documentElement.style.hasOwnProperty('WebkitAppearance');

      a5.hooks.layoutStylesLoaded.add(function(){
        if (!jQuery.isEmptyObject(a5.core.config.breakpoints)) {
          /**
           * Device keys sorted by value
           * @type {Array}
           */
          this._breakpointsKeysSortedByValue = typeof dp.config.breakpointKeys !== 'undefined' ?
                                               dp.config.breakpointKeys : this._keysSortedByValue();

          /**
           * Store current breakpoint
           * @type {string}
           */
          this._cachedCurrentBreakpoint;

          this._initEvents();
        }
      });
    };

    _(Client.prototype).extend({
      /**
       * Init events
       * @private
       */
      _initEvents: function() {
        $(window).on('resize', _.debounce(this._onResize.bind(this), 200));

        a5.eventBus.bind('lo:start', function(data) {
          this.setCachedCurrentBreakpoint(this.getCurrentBreakpoint(true));
        }, this);
      },

      /**
       * onResize event. Called once using throttle after 300ms (from underscore)
       * It modifies this._cachedCurrentBreakpoint value if needed
       * @private
       */
      _onResize: function() {
        var current = this.getCurrentBreakpoint(true);
        var cachedBreakpoint = this.getCachedCurrentBreakpoint();

        if (current !== cachedBreakpoint) {
          this._onBreakpointChange(cachedBreakpoint, current);
        }
      },

      /**
       * It happens when breakpoint is changed.
       * Rise an event with an object which includes previous and current
       * @param {string} previous  Previous breakpoint
       * @param {string} current   Current breakpoint
       * @private
       */
      _onBreakpointChange: function(previous, current) {
        this.setCachedCurrentBreakpoint(current);
        logger.info('[CORE][Client] device:breakpointChange -> _onBreakpointChange', { previous: previous, current: current });
        a5.eventBus.trigger('device:breakpointChange', { previous: previous, current: current });
      },

      /**
       * Get breakpoint keys sorted by value
       * @private
       * @return {Array<string>} Array of device keys
       */
      _keysSortedByValue: function() {
        var breakpoints = this.getBreakpoints();

        return Object.keys(breakpoints).sort(
          _.bind(function(a, b) {
            return breakpoints[a] - breakpoints[b];
          }, this)
        );
      },

      /**
       * Returns breakpoints defined on config of current DP
       * @return {Object} Breakpoints
       */
      getBreakpoints: function() {
        return a5.core.config.breakpoints;
      },

      /**
       * Returns viewport width
       * @return {number} Viewport width
       */
      getWidth: function() {
        if (Device.iOS.any) {
          return document.documentElement.clientWidth || 0;
        } else {
          return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
      },

      /**
       * Returns viewport height
       * @return {number} Viewport height
       */
      getHeight: function() {
        if (Device.iOS.any) {
          return document.documentElement.clientHeight || 0;
        } else {
          return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        }
      },

      /**
       * Get current breakpoint
       * @param {boolean|undefined} avoidCache  If true, recalculates value for current breakpoint and store it into this._cachedCurrentBreakpoint
       * @return {string}  current breakpoint
       */
      getCurrentBreakpoint: function(avoidCache) {
        var current;
        var bps = this.getBreakpoints();

        if (avoidCache || typeof this.getCachedCurrentBreakpoint() === 'undefined' ) {
          var breakpoints = Object.keys(bps).filter(function(breakpoint){
            return bps[breakpoint] <= this.getWidth();
          }, this);

          current = breakpoints[breakpoints.length - 1];
        } else {
          current = this.getCachedCurrentBreakpoint();
        }

        return current;
      },

      /**
       * Returns cached value for current breakpoint
       * @return {string}  current breakpoint
       */
      getCachedCurrentBreakpoint: function() {
        return this._cachedCurrentBreakpoint;
      },

      /**
       * Set current breakpoint
       * @param  {string} key  Breakpoint key name
       * @return {undefined}   Heartbeat
       */
      setCachedCurrentBreakpoint: function(key) {
        this._cachedCurrentBreakpoint = key;

        return;
      },

      /**
       * Check if a device is on a concrete breakpoint
       * @param  {string} key  device key name
       * @param  {boolean|undefined} avoidCache  Avoid cache
       * @return {boolean} Returns true if key passed as argument is equal to current breakpoint key
       */
      isOnBreakpoint: function(key, avoidCache) {
        if (typeof key !== "string") {
          throw new Error("[Client] breakpoints needs a string to check");
        }

        return this.getCurrentBreakpoint(avoidCache) === key;
      }
    });

    clientClassInstantation = new Client();

    return clientClassInstantation;
  })();
})(a5.core, a5.core.Device, jQuery);

(function(core, Device) {
  'use strict';

  /**
   * HtmlDocument class applies modifications to html, head, body tags
   */
  core.HtmlDocument = (function() {
    var userActivityTimeout = 0;

    /**
     * To store css classes used in this file
     * @type {Object}
     */
    var classnames = {
      loadedCalculating: 'loader--calculatingHeight'
    };

    /**
     * HtmlDocument: class to manage learning object html document stuff
     * @constructor
     */
    var HtmlDocument = function() {
      /**
       * Flag variable to execute code only once in the first interaction showed.
       * @type {boolean}
       */
      this.firstInteractionShowed = false;
      this.virtualKeyboard = false;
      this.deviceOrientation = window.orientation;

      /**
       * Used to store responsive document meta params
       * @type {Object}
       */
      this.metaParams = {
        'width': 'device-width',
        'height': 'device-height',
        'initial-scale': 1,
        'minimum-scale': 1,
        'maximum-scale': 1,
        'user-scalable': 'no',
        'viewport-fit': 'cover'
      };

      this._applyMetaTags();

      // Set the actual vieport height of a mobile device
      if (a5.core.config.mobileViewportUnit && Device.iOS.any || Device.iPadOS.tablet || Device.android.any) {
        this._setMobileViewportHeight();
      }

      this._initEvents();
    };

    _(HtmlDocument.prototype).extend({
      /**
       * Events managment
       * @private
       */
      _initEvents: function() {
        if (a5.core.config.mobileViewportUnit && Device.iOS.any || Device.iPadOS.tablet || Device.android.any) {
          $(document.body).on('focus', 'textarea, input', this._onVirtualKeyboardOn.bind(this))
                          .on('blur', 'textarea, input', this._onVirtualKeyboardOff.bind(this));
          $(window).on('resize', this._setMobileViewportHeight.bind(this));
        }

        if (a5.core.config.calcFooterHeight) {
          a5.eventBus.bind('lo:controls:change', this._updateFooterHeight.bind(this));
          $(window).on('resize', this._updateFooterHeight.bind(this));
        }

        if (a5.core.config.calcAsideHeight) {
          a5.callbacks.interaction.bind('showed', this._updateAsideHeight.bind(this));
          $(window).on('resize', this._updateAsideHeight.bind(this));
        }

        if (a5.core.config.calcDialogHeight) {
          $('body').on('dialogopen', this._setDialogHeight.bind(this));
        }

        if (a5.core.config.detectUserInputMethod) {
          $(window).on('keydown', _.debounce(this._userInputMethodAddClass.bind(this, true), 1000, true));
          $(window).on('mousemove mousedown touchstart', _.debounce(this._userInputMethodAddClass.bind(this, false), 1000, true));
        }

        if (a5.core.config.detectUserActivity) {
          $(window).on('mousemove mousedown touchstart keydown', _.debounce(this._userIsActiveAddClass.bind(this), 1000, true));
          $(window).on('mousemove mousedown touchstart keydown', _.debounce(this._userIsActiveRemoveClass.bind(this), 1000, false));
        }
      },

      /**
       * Check if there is on the document a meta tag with 'name' as value of name attribute
       * @param  {String} name  attribute name to check
       * @return {Boolean}      true if exists a meta tag with 'name' as value of name attribute
       */
      _hasMeta: function(name) {
        return $('meta').filter(function() {
          return $(this).attr('name') === name;
        }).length !== 0;
      },

      /**
       * Creates a meta tag named viewport and append to head
       * @private
       */
      _applyMetaTags: function() {
        if (!this._hasMeta('viewport')) {
          var metaContent = _.map(this.metaParams, function(value, key) {
            return key + '=' + value;
          }).join(', ');

          $('<meta name="viewport">').attr('content', metaContent).appendTo('head');
        }
      },

      /**
       * Toggle the flag related to the virtual keyboard on mobile devices
       * @private
       */
      _onVirtualKeyboardOn: function() {
        this.virtualKeyboard = true;
      },

      _onVirtualKeyboardOff: function() {
        this.virtualKeyboard = false;
      },

      /**
       * Set the actual vieport height of a mobile device
       * @private
       */
      _setMobileViewportHeight: function() {
        if (!this.virtualKeyboard) {
          $('html').addClass(classnames.loadedCalculating);

          if (this.deviceOrientation != window.orientation || !this.firstInteractionShowed) {
            // Initialization or orientation change
            this.deviceOrientation = window.orientation;

            setTimeout(function() {
              this._updateHeight(window.innerHeight, 900);
            }.bind(this), 900);
          } else {
            // Fullscreen toggle
            setTimeout(function() {
              this._updateHeight(window.innerHeight, 450);
            }.bind(this), 450);
          }
        }
      },

      /**
       * Update document height
       * @private
       */
      _updateHeight: function(verticalHeight, delay) {
        document.documentElement.style.setProperty('--vh100', `${verticalHeight}px`);
        $('html').removeClass(classnames.loadedCalculating);
        a5.eventBus.trigger('viewport:updated');
        console.log(`DEBUG: Vertical height updated to ${verticalHeight} after ${delay}ms.`);
      },

      /**
       * Enables the custom property --loControls-height if a5.core.config.calcFooterHeight is set to true
       * @private
       */
      _updateFooterHeight: function() {
        document.body.style.setProperty('--loControls-height', `${$('.loControls').outerHeight()}px`);
      },

      /**
       * Enables the custom property --aside-height if a5.core.config.calcAsideHeight is set to true
       * @private
       */
      _updateAsideHeight: function() {
        const $asideNode = a5.mainBuilder.curInteraction.contentZone.find(this._getInteractionAsideElement(a5.mainBuilder.curInteraction.identifier)),
              verticalHeight = $asideNode.outerHeight();

        if (verticalHeight) {
          document.body.style.setProperty('--aside-height', `${verticalHeight}px`);
        }
      },

      _getInteractionAsideElement: function(identifier) {
        switch(identifier) {
          case 'Identify:Mark:Colouring':
          case 'Identify:Mark:Marking':
          case 'Identify:Mark:Wordsearch':
          case 'Identify:Select:Linking lines':
          case 'Identify:Select:Linking multiple lines':
          case 'Input:Creative:Dialogue recording':
            return '.toolbar:not(.interaction)';
          case 'Order:Match:Text gap':
          case 'Order:Match:Text gap (Label an object)':
          case 'Order:Match:Number pyramid':
          case 'Order:Sort:Sorting':
          case 'Input:Completion:Text gap':
            return '.pool';
          case 'Order:Sort:Number stacks':
            return '.os-number-stacks-pool';
          case 'Order:Match:Pairs':
            return '.wordpool';
        }
      },

      /**
       * Enables the custom property --toolbarDialog-height if a5.core.config.calcDialogHeight is set to true
       * @param  {Object} event  Event object from jQuery UI
       * @private
       */
      _setDialogHeight: function(event) {
        const $dialog = $(event.target).parent(),
              isModal = $dialog.prev().hasClass('ui-widget-overlay') || $dialog.next().hasClass('ui-widget-overlay');

        if (!isModal) {
          document.body.style.setProperty('--toolbarDialog-height', $dialog.outerHeight() + 'px');
          $('body').one('dialogclose', this._resetDialogHeight.bind(this));
        }
      },

      _resetDialogHeight: function(event) {
        document.body.style.setProperty('--toolbarDialog-height', '');
      },

      /**
       * Show loader
       */
      showLoader: function() {
        $('html').removeClass('loader--hidden');
      },

      /**
       * Add a class to know that first interaction is shown
       */
      readyEnough: function() {
        $('html').addClass('loader--readyEnough');
      },

      /**
       * Hide loader
       */
      hideLoader: function() {
        $('html').addClass('loader--hidden');

        setTimeout(function() {
          a5.eventBus.trigger('loader:hidden');
        }.bind(this), 100);
      },

      /**
       * Toggle the user--keyboard class in the document to indicate the user input method
       * @private
       */
      _userInputMethodAddClass: function(isKeyboard) {
        $('html').toggleClass('user--keyboard', isKeyboard);
      },

      /**
       * Add the user--active class to the document for a period of time when user activity is detected
       * @private
       */
      _userIsActiveAddClass: function() {
        clearInterval(userActivityTimeout);

        $('html').addClass('user--active');
      },

      _userIsActiveRemoveClass: function() {
        clearInterval(userActivityTimeout);

        userActivityTimeout = setTimeout(function() {
          $('html').removeClass('user--active');
        }, a5.core.config.detectUserActivityIdleInterval);
      }
    });

    a5.eventBus.bind('lo:start', function() { // This way we can change our a5.core.config variables in any child DP
      core.htmlDocument = new HtmlDocument();

      return core.htmlDocument;
    });
  })();
})(a5.core, a5.core.Device);

(function(core, HtmlDocument, Scroll) {
  'use strict';

  /**
   * Variable used to store our Logger
   * @type {Logger}
   */
  var logger = new Logger();

  /**
   * LearningObject class
   */
  core.LearningObject = (function() {
    /**
     * LearningObject: class to manage learning object stuff
     * @constructor
     */
    var LearningObject = function() {
      this.lo = null;
      this.id = null;
      this.uid= null;

      this._initEvents();
    };

    _(LearningObject.prototype).extend({
      /**
       * Events managment
       * @private
       */
      _initEvents: function() {
        a5.eventBus.bind('lo:start', this._onLOStart.bind(this));
        a5.callbacks.interaction.bind('loaded', this._onInteractionLoaded.bind(this));
        a5.eventBus.bind('interaction:ready', this._onInteractionReady.bind(this));
        a5.eventBus.bind('lo:ready', this._onLOready.bind(this));

        a5.eventBus.bind('interaction:start', this._onInteractionStart.bind(this));
        a5.callbacks.interaction.bind('showed', this._onInteractionShow.bind(this));
        a5.eventBus.bind('interaction:show', this._onInteractionShowDelayed.bind(this));
        a5.eventBus.bind('interaction:first', this._onInteractionFirst.bind(this));

        a5.eventBus.bind('interaction:reset', this._onInteractionReset.bind(this));

        a5.eventBus.bind('lo:submit', this._onLOsubmit.bind(this));
      },

      /**
       * Method fired only once at the very beginning when the LO starts to load.
       * Triggered by 'lo:start'.
       * @param  {Object} data  data object from engine
       * @private
       */
      _onLOStart: function(data) {
        this.lo = data.lo;
        this.id = data.id;
        this.uid= data.uid;

        logger.info('[CORE][LearningObject] lo:start -> _onLOStart', this.lo);

        if (a5.dp.config.postMessageUIManagement) {
          a5.service.postMessager.sendMessage('lostart');
        }

        this.lo.bind('frequent_score_update', this._onScoreUpdated, this);
      },

      /**
       * Method fired n times during the loading of the LO, where n is the number of interactions.
       * Triggered by 'loaded' at the start of the interaction loading.
       * @param  {Object} interaction  interaction object from engine
       * @private
       */
      _onInteractionLoaded: function(interaction) {
        logger.info('[CORE][LearningObject] loaded -> _onInteractionLoaded', interaction);
      },

      /**
       * Method fired n times during the loading of the LO, where n is the number of interactions.
       * Triggered by 'interaction:ready' at the end of the interaction loading.
       * @param  {Object} interaction  interaction object from engine
       * @private
       */
      _onInteractionReady: function(interaction) {
        logger.info('[CORE][LearningObject] interaction:ready -> _onInteractionReady', interaction);
      },

      /**
       * Method fired only once at the very end when the LO has finished loading and any previous sesion data has been loaded.
       * Triggered by 'lo:ready'.
       * @param  {Array<Object>} interactionList  Array with object of interactions
       * @private
       */
      _onLOready: function(interactionList) {
        logger.info('[CORE][LearningObject] lo:ready -> _onLOready', interactionList);
      },

      /**
       * Method fired each time an interaction is going to be showed.
       * Triggered by 'interaction:start'.
       * @param  {Object} interaction  object which contains index of interaction and interaction object from engine
       * @private
       */
      _onInteractionStart: function(interaction) {
        logger.info('[CORE][LearningObject] interaction:start -> _onInteractionStart', interaction);

        if (a5.core.config.loaderBetweenScreens) {
          core.htmlDocument.hideLoader();
        }

        $('html')
          .toggleClass('root--isLastScreen', interaction.id === a5.mainBuilder.getNumberOfInteractions() - 1)
          .toggleClass('root--isEndResultScreen', interaction.interaction.isEndResultScreen())
          .toggleClass('root--hasAnnotationTools', interaction.interaction.options.annotationToolsIsOn())
          .toggleClass('root--stickySupplementEnabled', interaction.interaction.options.stayinviewIsTrue());
      },

      /**
       * Method fired each time an interaction is showed.
       * Triggered by 'showed'.
       * @param  {Object} interaction  object which contains index of interaction and interaction object from engine
       * @private
       */
      _onInteractionShow: function(interaction) {
        logger.info('[CORE][LearningObject] showed -> _onInteractionShow', interaction);

        // Reset the scroll by default (disabled for vertical DPs)
        if (!a5.dp.config.displayAllScreens) {
          core.Scroll.resetScroll();
        } else if (core.Scroll.cachedScroll) {
          core.Scroll.resetScroll(core.Scroll.cachedScroll);
        }

        core.htmlDocument.hideLoader();
      },

      /**
       * Method fired each time an interaction is showed, 200ms after this happens.
       * Triggered by 'interaction:show'.
       * @param  {Object} interaction  object which contains index of interaction and interaction object from engine
       * @private
       */
      _onInteractionShowDelayed: function(interaction) {
        logger.info('[CORE][LearningObject] interaction:show -> _onInteractionShowDelayed', interaction);

        if (!core.htmlDocument.firstInteractionShowed) {
          core.htmlDocument.firstInteractionShowed = true;

          a5.eventBus.trigger('interaction:first', interaction);
        }
      },

      /**
       * Method fired only once after the first interaction is shown for the first time
       * Triggered by CORE 'interaction:first'.
       * @param  {Object} interaction  object which contains index of interaction and interaction object from engine
       * @private
       */
      _onInteractionFirst: function(interaction) {
        logger.info('[CORE][LearningObject] interaction:first -> _onInteractionFirst', interaction);

        core.htmlDocument.readyEnough();

        if (a5.core.config.paginationProgressBar) {
          new a5.core.PaginationProgress();
        }

        new a5.core.Toggleable();

        new a5.core.LoToolbar();

        const $headerMedia = $('.headerMedia');

        if ($headerMedia.length) {
          new a5.core.Media($headerMedia);
        }

        $('html').addClass('root--role' + a5.service.lms.API.getUserRole());
      },

      /**
       * Method fired each time an interaction is reset
       * Triggered by CORE 'interaction:reset'.
       * @param  {Object} interaction  object which contains index of interaction and interaction object from engine
       * @private
       */
      _onInteractionReset: function(interaction) {
        if (a5.dp.config.displayAllScreens) {
          core.Scroll.keepScrollPosition();
        }
      },

      /**
       * Method fired once event 'lo:submit' happens.
       * @private
       */
      _onLOsubmit: function() {
        logger.info('[CORE][LearningObject] lo:submit -> _onLOsubmit');

        $('html').addClass('lo-submitted');
      },

      /**
       * Method fired once event 'score:updated' happens.
       * @private
       */
      _onScoreUpdated: function() {
        logger.info('[CORE][LearningObject] frequent_score_update -> _onScoreUpdated');
      },

      /**
       * Get template from skinTemplates
       * @param  {string} templateName Template name
       * @return {string}              Template html
       * @public
       */
      getTemplate: function(templateName, data) {
        data = data || {};
        return a5.service.templates.render(templateName, data);
      },

      /**
       * Returns true if we erasing action is selected
       * @public
       */
      isErasing: function() {
        return $('body').hasClass("erasing");
      }
    });

    core.learningObject = new LearningObject();

    return core.learningObject;
  })();
})(a5.core, a5.core.HtmlDocument, a5.core.Scroll);

/*
  ENGINE FILL-IN
  Adds eye candy to annotation tools
*/
$(function() {
  $('html').on('click', '.annotationsToolbar__paletteItem', function(e) {
    const $sample = $(this),
          $tool = $sample.closest('.annotationsToolbar__item'),
          shape = $sample.data('shape');

    // Toggle active class
    $sample.addClass('annotationsToolbar__paletteItem--active')
           .siblings().removeClass('annotationsToolbar__paletteItem--active');

    // Update the color custom property
    $tool[0].style.setProperty('--annotationsToolbarColor', $(this).css('backgroundColor'));

    // Update the active shape data attribute if any
    if (shape) {
      $tool[0].dataset.active = shape;
    }
  });
});

(function(core, jQuery) {
  'use strict';

  /**
   * Used to store an instance of Pagination class
   * @type {Pagination}
   */
   var paginationInstantation;

  /**
   * Pagination class
   */
  core.Pagination = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    const locators = {
      loControls: '.loControls',
      pagination: '.pagination',
      paginationItem: '.pagination__item'
    };

    /**
     * To store classes used in this file
     * @type {Object}
     */
    const classes = {
      loControlsSingleScreenModifier: 'loControls--singleScreen',
      singleScreenModifier: 'pagination--singleScreen',
      previousModifier: 'pagination__item--previous',
      nextModifier: 'pagination__item--next'
    };

    /**
     * Pagination: class to manage anything related to the pagination
     * @constructor
     */
    var Pagination = function() {
    };

    _(Pagination.prototype).extend({
      /**
       * Add previous and next classes to N paginations items sets by a5.core.config.paginationRange
       * @param  {Object} interaction  Interaction object
       * @private
       */
      _rangeClasses: function(interaction) {
        const index = (interaction.visibleIndex ? interaction.visibleIndex - 1 : interaction.index) + (a5.mainBuilder.hasIntroScreen() ? 1 : 0),
              total = a5.mainBuilder.getNumberOfInteractions(),
              $items = $(locators.paginationItem);

        // Remove modifiers from items out of range
        for (let i = 0; i < total; i++) {
          if (i < index - a5.core.config.paginationRange) {
            $items.eq(i).removeClass(classes.previousModifier);
          }

          if (i > index + a5.core.config.paginationRange) {
            $items.eq(i).removeClass(classes.nextModifier + ' ' + classes.previousModifier); // We need to remove the previous to cover the "go to the first screen" case
          }
        }

        // Remove modifiers from the current screen

        $items.eq(index).removeClass(classes.previousModifier + ' ' + classes.nextModifier);

        // Add modifiers from items in range

        for (let i = 1; i <= a5.core.config.paginationRange; i++) {
          if (index - i >= 0) {
            $items.eq(index - i).addClass(classes.previousModifier);
          }

          if (index + i < total) {
            $items.eq(index + i).addClass(classes.nextModifier);
          }
        }
      },

      _singleScreen: function() {
        const $items = $(locators.paginationItem);

        if ($items && $items.length === 1) {
          $(locators.loControls).addClass(classes.loControlsSingleScreenModifier);
          $(locators.pagination).addClass(classes.singleScreenModifier);
        }
      }
    });

    paginationInstantation = new Pagination();

    return paginationInstantation;
  });

  a5.callbacks.interaction.bind('showed', function(interaction) {
    if (a5.core.config.paginationRange) {
      a5.core.Pagination()._rangeClasses(interaction);
    }
  });

  a5.eventBus.bind('interaction:first', function() {
    a5.core.Pagination()._singleScreen();
  }, this);

})(a5.core, jQuery);

(function(core, jQuery) {
  'use strict';

  /**
   * Variable used to store our Logger
   * @type {Logger}
   */
  var logger = new Logger();

  /**
   * Toggleable class
   */
  core.Toggleable = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      toggle: '.toggleable__button',
      content: '.toggleable__content',
      loToolbar: {
        toogle: '.loToolbar > .toggleable__button',
        mediaToogle: '.loToolbar__toggleableMedia > .toggleable__button'
      },
      dialogs: '.ui-dialog'
    };

    /**
     * To store css classes used in this file
     * @type {Object}
     */
    var classes = {
      toggledContent: 'toggleable__content--enabled',
      toggledButton: 'toggleable__button--enabled',
      position: {
        prefix: 'toggleable__content--align',
        options: ['toggleable__content--alignTopCenter', 'toggleable__content--alignBottomCenter', 'toggleable__content--alignRightCenter', 'toggleable__content--alignLeftCenter',
                  'toggleable__content--alignTopRight', 'toggleable__content--alignBottomRight', 'toggleable__content--alignRightTop', 'toggleable__content--alignLeftTop',
                  'toggleable__content--alignTopLeft', 'toggleable__content--alignBottomLeft', 'toggleable__content--alignRightBottom', 'toggleable__content--alignLeftBottom']
      }
    };

    /**
     * Toggleable: class to manage toggleable elements
     * @constructor
     */
    function Toggleable(interaction) {
      if (interaction) {
        // Interaction handlers
        this._initEvents(interaction);

        // Attachment dialogs

        interaction.bind('interaction:dialog:display', function() {
          $(locators.dialogs).off('click.toggleable').on('click.toggleable', locators.toggle, this._toggle.bind(this));
        }, this);
      } else {
        // ToDo: Refactor this in the same way media.js is invoced from learning-object.js

        // headerMedia
        $('.headerMedia').on('click.toggleable', locators.toggle, this._toggle.bind(this));

        // settings
        $('#settings').on('click.toggleable', locators.toggle, this._toggle.bind(this));

        // loToolbar Toggle
        $(locators.loToolbar.toogle).on('click.toggleable', this._toggle.bind(this));

        // Global ToggeableMedia
        if (a5.core.config.toggleableMediaGlobalButton) {
          $(locators.loToolbar.mediaToogle).on('click.toggleable', this._toggle.bind(this));

          // Engine resets the toolbar with user navigation
          a5.eventBus.bind('interaction:show', function() {
            $(locators.loToolbar.mediaToogle).off('click.toggleable').on('click.toggleable', this._toggle.bind(this));
            this._syncBrokenToggleables();
          }, this);
        }

        $(document).on('click', this._onExternalClick.bind(this));
      }
    }

    $.extend(Toggleable.prototype, {
      /**
       * Events managment
       */
      _initEvents: function(interaction) {
        interaction.contentWrap.off('click.toggleable').on('click.toggleable', locators.toggle, this._toggle.bind(this));
      },

      /**
       * Behavior applied when the user clicks on the toggle for both, wrapped and external toggleables
       * @param  {Object} event  event object
       * @private
       */
      _toggle: function(event) {
        const $toggleableButton = $(event.currentTarget),
              enabled = $toggleableButton.hasClass(classes.toggledButton),
              externalToggle = this._getAttribute($toggleableButton, 'target'),
              isAccordion = this._getAttribute($toggleableButton.parent().parent().parent(), 'behaviour') === 'accordion';
        let $toggleableContent,
            toggledTargetClass;

        event.stopPropagation();

        if (externalToggle) {
          // External Toggle
          $toggleableContent = $(externalToggle);

          if ($toggleableContent.length === 0) {
            logger.error('[Toggleable] data attribute toggleable is defined but element is not into the DOM. ' +
                          'Toggleable element: ', $toggleableButton[0]);
            return false;
          } else {
            toggledTargetClass = this._getAttribute($toggleableButton, 'class');

            // Sync duplicated buttons if any
            $.each($('button[data-toggleable-target]'), $.proxy(function(index, node) {
              if (this._getAttribute($(node), 'target') ===  externalToggle &&
                  this._getAttribute($(node), 'class') === toggledTargetClass) {
                $(node).toggleClass(classes.toggledButton, !enabled);
              }
            }, this));
          }
        } else {
          // Wrapped Toggle
          toggledTargetClass = classes.toggledContent;
          $toggleableContent = $toggleableButton.next();

          if ($toggleableContent.length === 0) {
            logger.error('[Toggleable] There is no toggleable__content next to the toggleable__button. ' +
            'Toggleable element: ', $toggleableButton[0]);
            return false;
          } else if (!enabled) {
            const position = this._preferredPosition($toggleableContent);

            if (position) {
              let fits = this._checkAvailableSpace($toggleableContent, position);

              if (!fits) {
                $.each(classes.position.options, $.proxy(function(index, value) {
                  fits = this._checkAvailableSpace($toggleableContent, value);

                  return !fits;
                }, this));

                if (!fits) {
                  $toggleableContent.removeClass(classes.position.options.join(' ')).addClass(position);
                }
              }
            }
          }
        }

        if (isAccordion) {
          $toggleableButton.parent().parent().parent().find('> .toggleable__item > .toggleable > .toggleable__button').removeClass(classes.toggledButton);
          $toggleableButton.parent().parent().parent().find('> .toggleable__item > .toggleable > .toggleable__content').removeClass(classes.toggledContent);
        }

        $toggleableButton.toggleClass(classes.toggledButton, !enabled);
        $toggleableContent.toggleClass(toggledTargetClass, !enabled);
      },

      /**
       * Behavior applied if the uses clicks somewhere else
       * Hide any other opened toggleable menu, so that only one is shown at the same time
       * @private
       */
      _onExternalClick: function() {
        this.hide('.toggleable__content[data-toggleable-behaviour]');
        this.hide('.mediaPlayer .toggleable__content--enabled'); // Special case for mediaPlayer volume
      },

      /**
       * Close any given toggleable
       * @param  {String} locator  selector class or id
       * @public
       */
      hide: function(locator) {
        const $toggleableContent = $(locator),
              $toggleableButton = $toggleableContent.prev();

        if ($toggleableContent.length > 0 && $toggleableButton.length > 0) {  // Maybe we should use each
          $toggleableContent.removeClass(classes.toggledContent);
          $toggleableButton.removeClass(classes.toggledButton);
        }
      },

      /**
       * Checks if the toggleable content fits in any given position
       * @param  {Object} $toggleableContent  jQuery object
       * @param  {String} position  Position classname
       * @private
       */
      _checkAvailableSpace: function($toggleableContent, position) {
        $toggleableContent.removeClass(classes.position.options.join(' ')).addClass(position);

        // Calculates space and position
        $toggleableContent.css({'display' : 'flex', 'border-radius' : '0'});
        const fits = this._isElementVisible($toggleableContent[0]);

        $toggleableContent.css({'display' : '', 'border-radius' : ''});

        if (!fits) {
          $toggleableContent.removeClass(position);
        }

        return fits;
      },

      /**
       * Checks element visibility
       * @param  {Object} el  Element
       * @private
       */
      _isElementVisible: function(el) {
        const rect = el.getBoundingClientRect(),
              vWidth = window.innerWidth || document.documentElement.clientWidth,
              vHeight = window.innerHeight || document.documentElement.clientHeight,
              efp = function (x, y) {
                return document.elementFromPoint(x, y);
              };

        // Return false if it's not in the viewport
        if (rect.left < 0 || rect.top < 0 || rect.right > vWidth || rect.bottom > vHeight) {
          return false;
        }

        // Return true every of its four corners are visible
        return (
          el.contains(efp(rect.left, rect.top)) &&
          el.contains(efp(rect.right - 1, rect.top)) &&
          el.contains(efp(rect.right - 1, rect.bottom - 1)) &&
          el.contains(efp(rect.left, rect.bottom - 1))
        );
      },

      /**
       * Return the preferred aligment position for the toggleable content
       * @param  {Object} $toggleableContent  jQuery object
       * @private
       */
      _preferredPosition: function($toggleableContent) {
        const direction = this._getAttribute($toggleableContent, 'align');

        return direction ? classes.position.prefix + direction : false;
      },

      /**
       * Fix the issue when toggle & content are separated and one of them are rendered again by ENGINE
       * @private
       */
      _syncBrokenToggleables: function() {
        $.each($('button[data-toggleable-sync]'), $.proxy(function(index, toggleableButton) {
          const $toggleableButton = $(toggleableButton),
                $toggleableContent = $(this._getAttribute($toggleableButton, 'target')),
                toggleClass = this._getAttribute($toggleableButton, 'class');

          $toggleableButton.toggleClass(classes.toggledButton, $toggleableContent.hasClass(toggleClass));
        }, this));
      },

      /**
       * Checks if the node has an especific data attribute to return it. Returns false if not.
       * @param  {Object} $node  jQuery object
       * @param  {String} attribute  Data attribute name
       * @private
       */
      _getAttribute: function($node, attribute) {
        attribute = $node.data('toggleable-' + attribute);

        return typeof attribute !== 'undefined' ? attribute : false;
      }
    });

    return Toggleable;
  })();

  a5.hooks.interactionLoaded.add(function(interaction) {
    new a5.core.Toggleable(interaction);
  });

})(a5.core, a5.core.Toggleable, jQuery);

(function(core, LearningObject, Progress, jQuery) {
  'use strict';

  /**
   * Media class
   */
  core.Media = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      component: '.mediaPlayer',
      toggleable: '.toggleable__button, .mediaPlayer__button--quality',
      toggleableEnabled: '.toggleable--enabled, .toggleable__button--enabled, .mediaPlayer__toggleableMenu--enabled',
      volumeRange: '.mediaPlayer__volume',
      currentVolume: '.mediaPlayer__volumeBarCurrent',
      volumeGroup: '.mediaPlayer__toggleableMenu--volume',
      miniPlayer: '.playbutton:not(.tinyAudioPlayer__speed)',
      miniPlayerDraggables: '.drag_audio_player',
      recorderMiniPlayer: '.lrp_play',
      recorderRecord: '.lrp_record',
      recorderPlayAll: '.button--playAll',
      engineVideo: '.the_video',
      qualityMenu: '.mediaPlayer__toggleableMenu--quality',
      controlsWrapper: '.mediaPlayer__controls',
      controls: '.mediaPlayer__button, .mediaPlayer__screenButton',
      dialogs: '.ui-dialog'
    };

    /**
     * To store css classes used in this file
     * @type {Object}
     */
    var classes = {
      loading: 'mediaPlayer--loading',
      volumeVerticalMode: 'mediaPlayer__volume--vertical',
      volumeStatuses: 'mediaPlayer__volumeStatus--muted mediaPlayer__volumeStatus--low mediaPlayer__volumeStatus--half mediaPlayer__volumeStatus--full',
      volumeStatus: 'mediaPlayer__volumeStatus--',
      miniPlayerAnimation: 'playbutton--animated',
      miniPlayerProgress: 'playbutton--progress',
      recorderAnimation: 'lrp_record--animated',
      toggleableEnabled: ['toggleable--enabled', 'toggleable__button--enabled', 'mediaPlayer__toggleableMenu--enabled']
    };

    /**
     * Media: class to manage the audio & video players
     * @constructor
     * @param  {Object} $root  jQuery object
    */
    function Media($root) {
      // Miniplayer

      let $node = $root.find(locators.miniPlayer);

      this._initMiniPlayer($node, false);
      this._initMiniPlayerEvents($node);

      $node = $root.find(locators.miniPlayerDraggables);
      this._initMiniPlayer($node);
//      this._initMiniPlayerEvents($miniPlayers);     ToDo: Drag Player data-audio-uid doesn't seems to work

      $node = $root.find(locators.recorderMiniPlayer);
      this._initMiniPlayer($node);
//      this._initMiniPlayerEvents($miniPlayers);     ToDo: Recorder play button doesn't have the required data-attribute (yet)

      $node = $root.find(locators.recorderPlayAll);
      this._initMiniPlayer($node);
//      this._initMiniPlayerEvents($miniPlayers);     ToDo: Play all button doesn't have the required data-attribute (yet)

      $node = $root.find(locators.recorderRecord);
      this._initRecorder($node);

      // Volume range selector

      const $volumeRange = $root.find(locators.volumeRange);

      this.cachedIcon = '';       // [string] muted | low | half | full
      this.volume = {
        id: null,                 // [string] Media id
        verticalMode: null,       // [boolean] Vertical/horizontal volume bar
        $toggleContainer: null,   // [jquery object] Toggle container node
        $range: null,             // [jquery object] Volume bar node
        size: null,               // [number] Volume bar height (vertical) or width (horizontal)
        offset: null              // [number] Volume bar offset top (vertical) or left (horizontal)
      };

      this._initVolume($volumeRange);
      this._initVolumeEvents($volumeRange);

      // Attachment dialogs

      a5.mainBuilder.curInteraction.bind('interaction:dialog:display', function() {
        const $dialogVolumeRange = $(locators.dialogs).find(locators.volumeRange);

        this._initVolume($dialogVolumeRange);
        this._initVolumeEvents($dialogVolumeRange);
      }, this);

      // Video Sizing

      if (a5.core.config.videoFluidSize) {
        const $videos = $root.find(locators.engineVideo);

        this._videoFluidSize($videos);

        // Attachment dialogs

        a5.mainBuilder.curInteraction.bind('interaction:dialog:display', function() {
          const $dialogVideos = $(locators.dialogs).find(locators.engineVideo);

          this._videoFluidSize($dialogVideos, true);
        }, this);
      }

      $root.find(locators.controls).on('click', this._closeToggleables.bind(this));

      // Video Quality menu direction
      // WIP: Engine should use the same logic we use for other toggleable menus instead.

      $root.find(locators.qualityMenu).on('click', function(e) {
        const $popup = $(this).find('.mediaPlayer__qualityList');

        if ($popup.offset().top < 0) {
          $popup.removeClass('toggleable__content--alignTopLeft')
                .addClass('toggleable__content--alignBottomLeft');
        } else {
          $popup.removeClass('toggleable__content--alignBottomLeft')
                .addClass('toggleable__content--alignTopLeft');
        }
      });
    }

    $.extend(Media.prototype, {
      /**
       * Extend the miniPlayer functionality
       * @param  {Object} $node  jQuery object
       * @param  {Boolean} disableProgress  To control if the circular progress bar is appended or not in those cases in which we don't have that info
       * @private
       */
      _initMiniPlayer: function($node, disableProgress = true) {
        if (a5.core.config.miniPlayerAnimation) {
          $node.addClass(classes.miniPlayerAnimation).append(LearningObject.getTemplate('a5.view.core.playbuttonAnimation'));
        }

        if (!disableProgress && a5.core.config.miniPlayerProgress) {
          $node.addClass(classes.miniPlayerProgress).append(LearningObject.getTemplate('a5.view.core.progressCircular'));
        }
      },

      /**
       * Events managment
       * @param  {Object} $miniPlayers  jQuery object
       */
      _initMiniPlayerEvents: function($miniPlayers) {
        if (a5.core.config.miniPlayerProgress) {
          $.each($miniPlayers, function(index) {
            var id = $($miniPlayers[index]).data('playableMedia'); // Playbutton format

/*            if (typeof id === 'undefined') {
              id = 'ID_' + $($miniPlayers[index]).data('audio-uid'); // Drag Audio Player format
            } */

            if (typeof id === 'string' && typeof a5.service.media.by_id[id] != 'undefined') {
              a5.service.media.by_id[id].bind('start', this._onMiniPlayerAudioPlay.bind($miniPlayers[index]));
              a5.service.media.by_id[id].bind('paused stopped', this._onMiniPlayerAudioStop.bind($miniPlayers[index]));
            }
          }.bind(this));
        }
      },

      /**
       * Extend the Recorder functionality
       * @param  {Object} $node  jQuery object
       * @private
       */
      _initRecorder: function($node) {
        if (a5.core.config.recorderAnimation) {
          $node.addClass(classes.recorderAnimation).append(LearningObject.getTemplate('a5.view.core.recorderAnimation'));
        }
      },

      /**
       * Behavior applied when the start event is fired
       * @private
       */
      _onMiniPlayerAudioPlay: function() {
        var id = $(this).data('playableMedia'),
            elapsedTime = a5.service.media.by_id[id].position() / 100,
            duration = a5.service.media.by_id[id].duration() / 100,
            $componentNode = $(this);

        globalThis.a5.core.Media.progressInterval = setInterval(function() {
          elapsedTime++;

          if (elapsedTime < duration) {
            this.a5.core.Progress.circularAnimated($componentNode, elapsedTime, duration);
          }
        }, 100);
      },

      /**
       * Behavior applied when the paused or stopped events are fired
       * @private
       */
      _onMiniPlayerAudioStop: function() {
        clearInterval(globalThis.a5.core.Media.progressInterval);
        a5.core.Progress.resetCircular($(this));
      },

      /**
       * Set the initial volume level & icon
       * @param  {Object} $volumeRange  jQuery object
       * @private
       */
      _initVolume: function($volumeRange) {
        $.each($volumeRange, function(index) {
          var media = {
            id: $($volumeRange[index].closest(locators.component)).data('playableMedia') || $($volumeRange[index].closest(locators.component)).find(locators.engineVideo).data('playableMedia'),
            volume: null,
            verticalMode: $($volumeRange[index]).hasClass(classes.volumeVerticalMode),
            $toggleContainer: $($volumeRange[index]).closest(locators.volumeGroup)
          };

          media.volume = a5.service.media.by_id[media.id].volume() * 100;

          // Set UI
          if (media.verticalMode) {
            $($volumeRange[index]).find(locators.currentVolume).css('height', media.volume + "%");
          } else {
            $($volumeRange[index]).find(locators.currentVolume).css('width', media.volume + "%");
          }

          media.volume = this._getVolumeIcon(media.volume);
          media.$toggleContainer.addClass(classes.volumeStatus + media.volume);
        }.bind(this));
      },

      /**
       * Events managment
       * @param  {Object} $volumeRange  jQuery object
       */
      _initVolumeEvents: function($volumeRange) {
        $volumeRange.on('mousedown touchstart', this._inputStart.bind(this));
      },

      /**
       * Initializes the volume bar update
       * @param  {Object} event  event object
       * @private
       */
      _inputStart: function(event) {
        this.volume = {
          id: $(event.currentTarget).closest(locators.component).data('playableMedia') || $(event.currentTarget).closest(locators.component).find(locators.engineVideo).data('playableMedia'),
          verticalMode: $(event.currentTarget).hasClass(classes.volumeVerticalMode),
          $toggleContainer: $(event.currentTarget).closest(locators.volumeGroup),
          $range: $(event.currentTarget).find(locators.currentVolume)
        };

        if (this.volume.verticalMode) {
          this.volume.size = $(event.currentTarget).outerHeight();
          this.volume.offset = event.currentTarget.getBoundingClientRect().top;
        } else {
          this.volume.size = $(event.currentTarget).outerWidth();
          this.volume.offset = event.currentTarget.getBoundingClientRect().left;
        }

        this._updateVolume(event);

        $(document).on('mouseup.volume touchend.volume', this._inputEnd.bind(this));
        $(document).on('mousemove.volume touchmove.volume', this._updateVolume.bind(this));
      },

      /**
       * Remove the volume event handlers
       * @private
       */
      _inputEnd: function() {
        $(document).off('mousemove.volume touchmove.volume mouseup.volume touchend.volume');
      },

      /**
       * Update media volume
       * @param  {Object} event  event object
       * @private
       */
      _updateVolume: function(event) {
        var volume, mode,
            clientX, clientY;

        if (typeof event.clientY === 'undefined') {
          clientX = event.originalEvent.touches[0].pageX;
          clientY = event.originalEvent.touches[0].pageY;
        } else {
          clientX = event.clientX;
          clientY = event.clientY;
        }

        if (this.volume.verticalMode) {
          volume = 100 - (clientY - this.volume.offset) * 100 / this.volume.size;
          mode = 'height';
        } else {
          volume = (clientX - this.volume.offset) * 100 / this.volume.size;
          mode = 'width';
        }

        // Normalize
        volume = volume < 0 ? 0 : volume;
        volume = volume > 100 ? 100 : volume;

        // Update volume
        a5.service.media.by_id[this.volume.id].volume(volume / 100);

        // Update UI
        this.volume.$range.css(mode, volume + "%");
        volume = this._getVolumeIcon(volume);

        if (volume != this.cachedIcon) {
          this.cachedIcon = volume;
          this.volume.$toggleContainer.removeClass(classes.volumeStatuses).addClass(classes.volumeStatus + volume);
        }
      },

      /**
       * Assigns the volume level to an icon
       * @param  {Number} volume  volume level (0-100)
       * @private
       */
      _getVolumeIcon: function(volume) {
        if (volume === 0) {
          volume = 'muted';
        } else if (volume < 33) {
          volume = 'low';
        } else if (volume < 66) {
          volume = 'half';
        } else {
          volume = 'full';
        }

        return volume;
      },

      /**
       * Set the video height based on its aspect ratio in a way that allows responsive sizing
       * @param  {Object}  $videos       jQuery object
       * @param  {Boolean} skipMetadata  Flag to wait or skip the loadedmetadata event
       * @private
       */
      _videoFluidSize: function($videos, skipMetadata = false) {
        $.each($videos, function(index) {
          const $videoWrapper = $($videos[index]).closest('.mediaPlayer');

          $videoWrapper.addClass(classes.loading);

          if (!skipMetadata) {
            $($videos[index]).find('video').on('loadedmetadata', function() {
              $(this).closest('.mediaPlayer__screen').css('padding-top', ((this.videoHeight / this.videoWidth) * 100) + '%');
              $videoWrapper.removeClass(classes.loading);
            });
          } else { // The loadedmetadata is fired before the interaction:dialog:display
            const curVideo = $($videos[index]).find('video')[0];
            $($videos[index]).closest('.mediaPlayer__screen').css('padding-top', ((curVideo.videoHeight / curVideo.videoWidth) * 100) + '%');
            $videoWrapper.removeClass(classes.loading);
          }
        }.bind(this));
      },

      _closeToggleables: function(event) {
        var hasAnyClass = false;

        $.each(classes.toggleableEnabled, function(index, value) {
          if ($(event.currentTarget).hasClass(value) || $(event.currentTarget).parent().hasClass(value)) {
            hasAnyClass = true;
          }
        });

        if (!hasAnyClass) {
          var $controls = $(event.currentTarget).closest(locators.component).find(locators.controlsWrapper);

          $controls.find(locators.toggleableEnabled).removeClass(classes.toggleableEnabled.join(' '));
        }
      }
    });

    return Media;
  })();

  a5.hooks.interactionLoaded.add(function(interaction) {
    new a5.core.Media(interaction.contentWrap);
  });
})(a5.core, a5.core.LearningObject, a5.core.Progress, jQuery);

(function(core) {
  'use strict';

  /**
   * Used to store an instance of Progress class
   * @type {Progress}
   */
  var progressClassInstantation;

  /**
   * Progress class
   */
  core.Progress = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      linear: '.progress--linear .progress__current',
      circularLeft: '.progress__current--left .progress__currentArc',
      circularRight: '.progress__current--right .progress__currentArc'
    };

    /**
     * Progress: class to manage progress stuff
     * @constructor
     */
    var Progress = (function() {
    });

    _(Progress.prototype).extend({
      linear: function(node, current, total) {
        total = total || 100;

        this._updateLinearProgressBar(node, current * 100 / total);
      },

      linearAnimated: function(node, current, total) {
        total = total || 100;

        this._updateLinearProgressBar(node, current / (total / 100) + (100 / total));
      },

      circular: function(node, current, total) {
        total = total || 360;

        this._updateCircularProgressBar(node, current * 360 / total);
      },

      circularAnimated: function(node, current, total) {
        total = total || 360;

        this._updateCircularProgressBar(node, current / (total / 360) + (360 / total));
      },

      resetLinear: function(node) {
        $(node).find(locators.linear).css('width', '');
      },

      resetCircular: function(node) {
        $(node).find(locators.circularLeft).css('transform', '');
        $(node).find(locators.circularRight).css('transform', '');
      },

      _updateLinearProgressBar: function(node, currentPercentage) {
        $(node).find(locators.linear).css('width', currentPercentage + '%');
      },

      _updateCircularProgressBar: function(node, currentAngle) {
        if (currentAngle > 180) {
          currentAngle = currentAngle - 180;

          $(node).find(locators.circularRight).css('transform', 'rotate(180deg)'); // Required to ensure that the half turn has been completed
          $(node).find(locators.circularLeft).css('transform', 'rotate(' + currentAngle + 'deg)');
        } else {
          $(node).find(locators.circularRight).css('transform', 'rotate(' + currentAngle + 'deg)');
        }
      }
    });

    progressClassInstantation = new Progress();

    return progressClassInstantation;
  })();
})(a5.core);

(function(core, Progress) {
  'use strict';

  /**
   * Used to store an instance of Timer class
   * @type {Timer}
   */
  var timerClassInstantation;

  /**
   * Timer class
   */
  core.Timer = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      component: '.loTimer'
    };

    /**
     * To store css classes used in this file
     * @type {Object}
     */
    var classnames = {
      enabled: 'loTimer--enabled',
      running: 'loTimer--running',
      warning: 'loTimer--warning',
      secondWarning: 'loTimer--secondWarning'
    };

    /**
     * Timer: class to manage timer stuff
     * @constructor
     */
    var Timer = (function() {
      this._initEvents();
    });

    _(Timer.prototype).extend({
      /**
       * Events managment
       */
      _initEvents: function() {
        a5.eventBus.bind('interaction:start', function(interaction) {
          if (a5.mainBuilder.timer) {
            a5.mainBuilder.timer.bind('start', function() {
              this._onTimerStart();
            }, this);

            if (a5.core.config.timerProgress != false) {
              a5.mainBuilder.timer.bind('update:deferred', function(elapsedTime) {
                this._onTimerUpdate(elapsedTime);
              }, this);
            }

            a5.mainBuilder.timer.bind('first_warning', function() {
              this._onFirstWarning();
            }, this);

            a5.mainBuilder.timer.bind('second_warning', function() {
              this._onSecondWarning();
            }, this);

            a5.mainBuilder.timer.bind('timeout', function() {
              this._onTimeout();
            }, this);

            a5.eventBus.bind('lo:submit', function() {
              this._onTimeout();
            }, this);
          }
        }, this);
      },

      /**
       * Behavior applied when timer starts
       * @private
       */
      _onTimerStart: function() {
        this.$component = $(locators.component);
        $('body').addClass(classnames.enabled);
        this.$component.addClass(classnames.running);
        this.total = a5.mainBuilder.timer.originalTime;
      },

      /**
       * Behavior applied when timer is updated
       * @param  {number} time  interaction object from engine
       * @private
       */
      _onTimerUpdate: function(elapsedTime) {
        if (a5.core.config.timerProgress === 'linear') {
          Progress.linearAnimated(locators.component, elapsedTime, this.total);
        } else {
          Progress.circularAnimated(locators.component, elapsedTime, this.total);
        }
      },

      /**
       * Behavior applied when the first_warning event is fired
       * @private
       */
      _onFirstWarning: function() {
        this.$component.addClass(classnames.warning);
      },

      /**
       * Behavior applied when the second_warning event is fired
       * @private
       */
      _onSecondWarning: function() {
        this.$component.addClass(classnames.secondWarning);
      },

      /**
       * Behavior applied when the timeout event is fired
       * @private
       */
      _onTimeout: function() {
        this.$component.removeClass(classnames.running);
      }
    });

    timerClassInstantation = new Timer();

    return timerClassInstantation;
  })();
})(a5.core, a5.core.Progress);

(function(core, jQuery) {
  'use strict';

  /**
   * PaginationProgress class
   */
  core.PaginationProgress = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      component: '.paginationProgress'
    };

    var classes = {
      hidden: 'paginationProgress--hidden'
    };

    /**
     * PaginationProgress: class to manage pagination stuff
     * @constructor
     */
    function PaginationProgress() {
      this._initEvents();
    }

    $.extend(PaginationProgress.prototype, {
      /**
       * Events managment
       */
      _initEvents: function() {
        this._totalPages = a5.mainBuilder.numberOfInteractions();

        switch (a5.mainBuilder.curInteraction.options.getProgressBar()) {
          case 'true':                  // Progress Bar always active
            a5.eventBus.bind('interaction:show', this._updateProgressBar.bind(this));
            a5.eventBus.bind('lo:submit', this._completeProgressBar.bind(this));
            break;
          case 'auto':
            if (this._totalPages > 1) { // Progress Bar active if there is more than one page
              a5.eventBus.bind('interaction:show', this._updateProgressBar.bind(this));
              a5.eventBus.bind('lo:submit', this._completeProgressBar.bind(this));
              break;
            }
            /* falls through */
          case 'screenSelection':       // ToDo
            /* falls through */
          default:                      // Progress Bar inactive
            $(locators.component).addClass(classes.hidden);
        }
      },

      /**
       * Update valors for the progress bar
       * The presentation pages, with negative value, will not be taken into account.
       */
      _updateProgressBar: function() {
        if (a5.mainBuilder.curInteraction.index >= 0) {
          a5.core.Progress.linear(locators.component, a5.mainBuilder.curInteraction.index, this._totalPages);
        }
      },

      /**
       * Method fired once event 'lo:submit' happens.
       * @private
       */
      _completeProgressBar: function() {
        a5.core.Progress.linear(locators.component, a5.mainBuilder.curInteraction.index + 1, this._totalPages);
      }
    });

    return PaginationProgress;
  })();

})(a5.core, a5.core.Progress, jQuery);

(function(core, LearningObject, jQuery) {
  'use strict';

  /**
   * LoToolbar class
   */
  core.LoToolbar = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    const locators = {
      loToolbar: '.loToolbar',
      loToolbarItems: '.loToolbar__item',
      interactionToggleableMedia: '.toggleableMedia',
      toggleableMedia: '.loToolbar__toggleableMedia',
      toggleableMediaEnabled: '.loToolbar__toggleableMedia--enabled',
      attachment: '.attachment__item',
      attachmentButton: '.act_head_button',
      attachmentDropdownItem: '.dropdown__item',
      activityTitle: '.activity__title',
      activityRubric: '.activity__rubric'
    };

    const classes = {
      togglableMediaEnabled: 'loToolbar__toggleableMedia--enabled',
      loToolbarEnabled: 'loToolbar--enabled',
      lastVisible: 'loToolbar__item--lastVisible',
      hasAttachment: 'activity--hasAttachments',
      loToolbarMaxWidthRatioExceded: 'activity--hasWideAttachments'
    };

    /**
     * Toolbar: class to manage toolbar stuff like attachments
     * @constructor
     */
    var LoToolbar = (function() {
      this._onInteractionStart(a5.mainBuilder.curInteraction);
      this._onInteractionShow(a5.mainBuilder.curInteraction);
      this._initEvents();
    });

    _(LoToolbar.prototype).extend({
      /**
       * Events managment
       */
      _initEvents: function() {
        a5.eventBus.bind('interaction:start', function(data) {
          this._onInteractionStart(data.interaction);
        }, this);

        a5.eventBus.bind('interaction:show', function(interaction) {
          this._onInteractionShow(interaction);
        }, this);
      },

      _onInteractionStart: function(interaction) {
        interaction.contentWrap.toggleClass(classes.hasAttachment, this._hasVisibleAttachments(interaction));

        a5.core.config.attachmentBadge && this._updateAttachmentBadge();

        a5.core.config.toggleableMediaGlobalButton && this._updateToggleableMediaGlobalButtonVisibility(interaction);

        this._updateLoToolbarVisibility();
        this._updateLastVisibleClass();
      },

      _onInteractionShow: function(interaction) {
        if (a5.core.config.loToolbarMaxWidthRatio) {
          if (this._hasVisibleAttachments(interaction)) {
            this._updateLoToolbarWidthRatio(interaction)

            $(window).off('resize.loToolbarWidthRatio').on('resize.loToolbarWidthRatio', this._updateLoToolbarWidthRatio.bind(this, interaction));
          } else {
            document.documentElement.style.setProperty('--loToolbarWidth', '');
          }
        }

        if (a5.core.config.loToolbarActivityHeaderMaxWidth) {
          if (this._hasVisibleAttachments(interaction)) {
            this._updateLoToolbarAndActivityHeaderWidth(interaction);

            $(window).off('resize.loToolbarActivityHeaderMaxWidth').on('resize.loToolbarActivityHeaderMaxWidth', this._updateLoToolbarAndActivityHeaderWidth.bind(this, interaction));
          } else {
            document.documentElement.style.setProperty('--loToolbarWidth', '');
          }
        }
      },

      _updateLoToolbarWidthRatio: function(interaction) {
        const contentWrapWidth = interaction.contentWrap.width(),
              loToolbarWidth = $(locators.loToolbar).width(),
              loToolbarWidthRatio = 100 * loToolbarWidth / contentWrapWidth;

        interaction.contentWrap.toggleClass(classes.loToolbarMaxWidthRatioExceded, loToolbarWidthRatio > a5.core.config.loToolbarMaxWidthRatio);

        document.documentElement.style.setProperty('--loToolbarWidth', `${loToolbarWidthRatio}%`);
      },

      _updateLoToolbarAndActivityHeaderWidth: function(interaction) {
        const DEFAULT_GAP = 20,
              contentWrapWidth = interaction.contentWrap.width(),
              loToolbarWidth = $(locators.loToolbar).width(),
              loToolbarWidthRatio = 100 * loToolbarWidth / contentWrapWidth,
              $activityHeader = interaction.contentWrap.find(interaction.options.activitytitledisplayIsOn() ? locators.activityTitle : locators.activityRubric),
              activityHeaderWidth = this._getTextWidth($activityHeader.text(), this._getCanvasFontSize($activityHeader[0]));

        interaction.contentWrap.toggleClass(classes.loToolbarMaxWidthRatioExceded, activityHeaderWidth + loToolbarWidth + DEFAULT_GAP > contentWrapWidth);

        document.documentElement.style.setProperty('--loToolbarWidth', `${loToolbarWidthRatio}%`);
      },

      _getTextWidth: function(text, font) {
        const canvas = this._getTextWidth.canvas || (this._getTextWidth.canvas = document.createElement("canvas")),
              context = canvas.getContext("2d");

        context.font = font;

        const metrics = context.measureText(text);

        return metrics.width;
      },

      _getCssStyle: function(element, prop) {
        return window.getComputedStyle(element, null).getPropertyValue(prop);
      },

      _getCanvasFontSize: function(el = document.body) {
        const fontWeight = this._getCssStyle(el, 'font-weight') || 'normal',
              fontSize = this._getCssStyle(el, 'font-size') || '16px',
              fontFamily = this._getCssStyle(el, 'font-family') || 'Times New Roman';

        return `${fontWeight} ${fontSize} ${fontFamily}`;
      },

      /**
       * Check if the interaction has attachments and at least one of them is visible for the user role
       * @private
       * @param  {Object} interaction  Interaction object
       * @returns Boolean
       */
      _hasVisibleAttachments: function(interaction) {
        return interaction.hasAttachments() && $.map(interaction.attachments.attachments, function(attachment) {
          return attachment.userVisibility === a5.service.lms.API.getUserRole() || attachment.userVisibility === 'All';
        }).some(function(e) { return e === true; });
      },

      /**
       * Append the attachment count as a badge
       * @private
       */
      _updateAttachmentBadge: function() {
        $.each($(locators.attachment), function() {
          $(this).find(locators.attachmentButton).append(LearningObject.getTemplate('a5.view.core.loToolbarBadge', {
            count: $(this).find(locators.attachmentDropdownItem).length
          }));
        });
      },

      _updateToggleableMediaGlobalButtonVisibility: function(interaction) {
        const hasToggleableMedia = interaction.contentWrap.find(locators.interactionToggleableMedia).length > 0; // Instead of === 1 to be more tolerant with cases like using the class to make toggleable the clues of an AT, having selected (erroneously) also the layout with toggleable media.

        $(locators.toggleableMedia).toggleClass(classes.togglableMediaEnabled, hasToggleableMedia);
      },

      _updateLoToolbarVisibility: function() {
        let items = 0;

        $(locators.loToolbarItems).each(function() {
          $(this).is(':not(:empty)') && items++;
        });

        $(locators.toggleableMediaEnabled).length === 0 && items--;

        $(locators.loToolbar).toggleClass(classes.loToolbarEnabled, items > 0);
      },

      _updateLastVisibleClass: function() {
        $(locators.loToolbarItems + ':not(:empty):last').addClass(classes.lastVisible);
      }
    });

    return LoToolbar;
  })();
})(a5.core, a5.core.LearningObject, jQuery);

(function(core) {
  'use strict';

  /**
   * Enumeration class
   */
  core.Enumeration = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      enumeration: '.enum:not(:empty):not(.enum-per-question)',
      enumerationAnswer: '.enum-answers:not(:empty)'
    };

    /**
     * To store css classes used in this file
     * @type {Object}
     */
    var classnames = {
      hasEnumeration: 'contentblock--enumeration',
      hasEnumerationAnswer: 'contentblock--enumerationAnswer',
      startWithImage: 'contentblock--startWithImage'
    };

    /**
     * Enumeration: class to manage enumeration stuff
     * @constructor
     */
    var Enumeration = (function(interaction) {
      this.interaction = interaction;
      this.maxWidth = this._calculateMaxWidth();

      this._applyEnumerationClasses();
      this._applyEnumerationWidth(this.maxWidth);
    });

    _(Enumeration.prototype).extend({
      _applyEnumerationClasses: function(interaction) {
        var $enumerations = this.interaction.contentZone.find(locators.enumeration),
            $enumerationsAnswer = this.interaction.contentZone.find(locators.enumerationAnswer);

        // Add class to the enum wrapper
        $enumerations.parents('.contentblock').addClass(classnames.hasEnumeration);

        // Add class to the enum-answer wrapper
        $enumerationsAnswer.parents('.contentblock').addClass(classnames.hasEnumerationAnswer);

        // Add class to indicate if the contentblock has an image as first element next to the enumeration
        $enumerations.each(function() {
          var $nextToEnum = $(this).next();

          if ($nextToEnum.length && $nextToEnum.contents() && $nextToEnum.contents().eq(0).is('img')) {
            $(this).parents('.contentblock').addClass(classnames.startWithImage);
          }
        });
      },

      _applyEnumerationWidth: function(maxWidth) {
        this.interaction.contentZone.find(locators.enumeration).parents('.contentblock').each(function() {
          this.style.setProperty('--enumerationWidth', maxWidth + 'px');
        });
      },

      _calculateMaxWidth: function() {
        var enumerationWidth = this.interaction.contentZone.find(locators.enumeration).map(function() {
          return $(this).outerWidth();
        });

        return Math.max(...enumerationWidth.get());
      }
    });

    return Enumeration;
  })();

  a5.hooks.interactionLoaded.add(function(interaction) {
    interaction.bind('show', function() {
      interaction.enumerationReady().then(function() {
        new a5.core.Enumeration(interaction);
      });
    }, this, {once: true});
  });
})(a5.core);

(function(core, jQuery) {
  'use strict';

  /**
   * Variable used to store our Logger
   * @type {Logger}
   */
  var logger = new Logger();

  /**
   * Used to store an instance of Scroll class
   * @type {Scroll}
   */
  var scrollInstantation;

  /**
   * Scroll class
   */
  core.Scroll = (function() {
    /**
     * Options
     * @type {Integer}
     */
    const DIRECTION_SENSIBILITY = 30;

    /**
     * To store locators used in this file
     * @type {Object}
     */
    const locators = {
      container: '.learningObject__content'
    };

    /**
     * To store classes used in this file
     * @type {Object}
     */
    const classes = {
      toggleDefault: 'body--scrollEnabled',
      directionUp: 'body--scrollUp',
      directionDown: 'body--scrollDown'
    };

    /**
     * ScrollWatcher: class to manage anything related to the scroll position
     * @constructor
     */
    var Scroll = function() {
    };

    _(Scroll.prototype).extend({
      /**
       * Toggle a class if the node is above the top of the screen
       * @param  {string} selector         Trigger node
       * @param  {string} triggeredClass   Class to toggle (optional)
       * @public
       */
      triggerIfHidden: function(selector, triggeredClass = classes.toggleDefault) {
        this._init(selector, triggeredClass, this._addClassIfHidden);
      },

      /**
       * Toggle a class if the node is below the top of the screen
       * @param  {string} selector         Trigger node
       * @param  {string} triggeredClass   Class to toggle (optional)
       * @public
       */
      triggerIfVisible: function(selector, triggeredClass = classes.toggleDefault) {
        this._init(selector, triggeredClass, this._addClassIfVisible);
      },

      /**
       * Initial common tasks
       * @param  {string} selector         Trigger node
       * @param  {string} triggeredClass   Class to toggle
       * @public
       */
      _init: function(selector, triggeredClass, functionName) {
        const $NODE = $(selector);

        this.triggeredClass = triggeredClass;

        if ($NODE.length === 0) {
          logger.error(`[Scroll] There is no node with the selector '${selector}'`);
        } else {
          if ($NODE.length > 1) {
            this.limitTocurInteraction = true;

            // Check if the selector is a contentWrap class
            if (selector.charAt(0) === '.' && a5.mainBuilder.curInteraction.contentWrap.hasClass(selector.substring(1))) {
              this._updateCurInteraction();
              a5.eventBus.bind('interaction:show', this._updateCurInteraction.bind(this));
            } else {
              this._updateCurNode(selector);
              a5.eventBus.bind('interaction:show', this._updateSelector.bind(this, selector));
            }
          } else {
            this.limitTocurInteraction = false;

            this.$currentNode = $(selector);
            this.cachedStatus = null;
          }

          $(locators.container).on('scroll', functionName.bind(this));
        }
      },

      /**
       * Get the element height and set it as an inline min-height to avoid jumps on the scroll if
       * you remove or hide any inner element layer
       * @param  {string} selector       Element
       * @public
       */
      keepHeight: function(selector) {
        const HEIGHT = $(selector).height();

        $(selector).css('min-height', HEIGHT);
      },

      /**
       * Toggle a class with the scroll direction
       * @public
       */
      monitorDirection: function() {
        var cachedScroll = $(locators.container).scrollTop(),
            elasticScroll;

        $(locators.container).on('scroll', function(event) {
          var currentScroll = $(this).scrollTop();

          elasticScroll = currentScroll < 0;

          if (currentScroll > cachedScroll + DIRECTION_SENSIBILITY) {
            if (!elasticScroll && this.direction !== 'down') {
              this.direction = 'down';
              $('body').addClass(classes.directionDown)
                       .removeClass(classes.directionUp);
            }

            cachedScroll = currentScroll;
          }

          if (cachedScroll > currentScroll + DIRECTION_SENSIBILITY) {
            if (this.direction !== 'up') {
              this.direction = 'up';
              $('body').addClass(classes.directionUp)
                       .removeClass(classes.directionDown);
            }

            cachedScroll = currentScroll;
          }
        });
      },

      /**
       * Reset scroll to avoid memory effect from one screen to the next
       * @public
       */
      resetScroll: function(position = 0) {
        $(locators.container).scrollTop(position);
        this.cachedScroll = null;
      },

      /**
       * Reset scroll to avoid memory effect from one screen to the next
       * @public
       */
       keepScrollPosition: function() {
        this.cachedScroll = $(locators.container).scrollTop();
      },

      /**
       * Toggle a class if the node is above the top of the screen
       * @private
       */
       _addClassIfHidden: function() {
        const STATUS = this._getStatus(this.$currentNode);

        if (STATUS != null) {
          $('body').toggleClass(this.triggeredClass, !STATUS);
        }
      },

      /**
       * Toggle a class if the node is below the top of the screen
       * @private
       */
      _addClassIfVisible: function() {
        const STATUS = this._getStatus(this.$currentNode);

        if (STATUS != null) {
          $('body').toggleClass(this.triggeredClass, STATUS);
        }
      },

      /**
       * Update the node when this is the contentWrap itself
       * @private
       */
      _updateCurInteraction: function() {
        this.$currentNode = a5.mainBuilder.curInteraction.contentWrap;
        this.cachedStatus = null;
        this._addClassIfHidden(); // WIP What about Visible
      },

      /**
       * Update the node when it's a current interaction contentWrap child
       * @param  {object} $node       jQuery object
       * @private
       */
      _updateCurNode: function(selector) {
        this.$currentNode = a5.mainBuilder.curInteraction.contentWrap.find(selector);
        this.cachedStatus = null;
        this._addClassIfHidden(); // WIP What about Visible
      },

      /**
       * Return the current status only if it has changed
       * @param  {object} $node       jQuery object
       * @private
       */
      _getStatus: function($node) {
        const STATUS = this._checkVisibility($node);

        if (this.cachedStatus != STATUS) {
          this.cachedStatus = STATUS;
          return STATUS;
        } else {
          return null;
        }
      },

      /**
       * Return true if the node is above the top of the screen
       * @param  {object} $node       jQuery object
       * @private
       */
      _checkVisibility: function($node) {
        return $node.offset().top > 0;
      }
    });

    scrollInstantation = new Scroll();

    return scrollInstantation;
  })();
})(a5.core, jQuery);

(function(core, jQuery) {
  'use strict';

  /**
   * ParallaxImages class
   */
  core.ParallaxImages = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      parallaxImage: '.parallaxImage'
    };

    /**
     * ParallaxImages: class to manage ParallaxImages stuff like attachments
     * @constructor
     */
    var ParallaxImages = function(event) {
      a5.core.config.parallaxImages && this._initEvents();
    };

    _(ParallaxImages.prototype).extend({
      /**
       * Events managment
       */
      _initEvents: function() {
        $(window).off('mousemove.parallaxImages').on('mousemove.parallaxImages', this.parallax.bind(this));
      },

      bind: function(event) {
        a5.eventBus.bind(event, this._initEvents.bind(this));
      },

      /**
       * Transform the color:before background-color in a custom property
       * @param  {object} interaction   Interaction
       * @private
       */
      parallax: function(e) {
        let _w = window.innerWidth/2,
            _h = window.innerHeight/2,
            _mouseX = e.clientX,
            _mouseY = e.clientY,
            _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`,
            _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`,
            _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`,
            x = `${_depth3}, ${_depth2}, ${_depth1}`;

        $(locators.parallaxImage).each(function() {
          if($(this).is(':visible')) {
            this.style.backgroundPosition = x;
          }
        });
      }
    });

    core.parallaxImages = new ParallaxImages();

    return core.parallaxImages;
  })();
})(a5.core, jQuery);
(function(core, jQuery, _) {
  'use strict';

  /**
   * IsLinkLines class
   */
  core.IsLinkingLines = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      grid: 'table',
      items: '.element-row',
      subitems: '.element, .element-heading'
    };

    /**
     * IsLinkingLines: class to manage isLinkLines AT
     * @constructor
     */
    var IsLinkingLines = function(interaction) {
      this._interaction = interaction;
      this._orientation = this._interaction.activityOptions.answerdisplayIsColumns() ? 'columns' : 'rows';

      if (this._orientation === 'columns' && this._enumerationAnswersIsOn()) {
        this._applyEnumerationsInColumnsClass();
      }

      this._setColumnsCustomProperty();
    };

    _(IsLinkingLines.prototype).extend({
      _enumerationAnswersIsOn: function() {
        /* Enumeration set to Custom without any option being provided
           We should be able to remove this if it is fixed in Author with:
           https://avallain.atlassian.net/browse/ISP-8037 */
        if (this._interaction.activityOptions.enumerationAnswersIsCustom() &&
            this._interaction.activityOptions.getEnumerationAnswers().length === 0) {
          return false;
        }

        return !this._interaction.activityOptions.enumerationAnswersIsFalse();
      },

      _applyEnumerationsInColumnsClass: function() {
        this._interaction.contentZone.find(locators.grid).addClass('answers--enumeration');
      },

      _setColumnsCustomProperty: function() {
        var $grid = this._interaction.contentZone.find(locators.grid);
        var columns = $grid.find(locators.items).eq(0).children(locators.subitems).size();

        $grid.get(0).style.setProperty('--columns', columns);
      }
    });

    return IsLinkingLines;
  })();

  a5.hooks.interactionLoaded.add(function(interaction) {
    if ('Identify:Select:Linking lines' === interaction.identifier) {
      new core.IsLinkingLines(interaction);
    }
  });
})(a5.core, jQuery, _);
(function(core, jQuery, _) {
  'use strict';

  /**
   * IsLinkingLinesMultiple class
   */
  core.IsLinkingLinesMultiple = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      enumAnswers: '.enum-answers',
      columnsGrid: '.ll_view',
      columns: '.ll_column'
    };

    /**
     * IsLinkingLinesMultiple: class to manage IsLinkingLinesMultiple AT
     * @constructor
     */
    var IsLinkingLinesMultiple = function(interaction) {
      this._interaction = interaction;
      this._orientation = this._interaction.activityOptions.answerdisplayIsColumns() ? 'columns' : 'rows';

      if (this._orientation === 'columns' && this._enumerationAnswersIsOn()) {
        var $node = this._interaction.contentZone.find(locators.columnsGrid);

        this._applyMaxRowsCustomProperty($node);
        this._applyEnumerationsInColumnsClass($node);
      }
    };

    _(IsLinkingLinesMultiple.prototype).extend({
      _enumerationAnswersIsOn: function() {
        /* Enumeration set to Custom without any option being provided
           We should be able to remove this if it is fixed in Author with:
           https://avallain.atlassian.net/browse/ISP-8037 */
        if (this._interaction.activityOptions.enumerationAnswersIsCustom() &&
            this._interaction.activityOptions.getEnumerationAnswers().length === 0) {
          return false;
        }

        return !this._interaction.activityOptions.enumerationAnswersIsFalse();
      },

      _applyMaxRowsCustomProperty: function($node) {
        var highest = 0;

        this._interaction.contentZone.find(locators.columns).each(function() {
          highest = Math.max(highest, this.childElementCount);
        });

        $node[0].style.setProperty('--rows', highest + 1);
      },

      _applyEnumerationsInColumnsClass: function($node) {
        $node.addClass('answers--enumeration');
      }
    });

    return IsLinkingLinesMultiple;
  })();

  a5.hooks.interactionLoaded.add(function(interaction) {
    if (interaction.identifier === 'Identify:Select:Linking multiple lines') {
      new core.IsLinkingLinesMultiple(interaction);
    }
  });
})(a5.core, jQuery, _);

(function(core, jQuery) {
  'use strict';

  /**
   * OsSequence class
   */
  core.OsSequence = (function() {
    /**
     * To store locators used in this file
     * @type {Object}
     */
    var locators = {
      interaction: '.interaction'
    };

    /**
     * OsSequence: class to manage osSequence AT
     * @constructor
     */
    var OsSequence = function(interaction) {
      this._addOrientationClassToInteraction(interaction);
    };

    _(OsSequence.prototype).extend({
      /**
       * Add the vertical class to interaction node regarding orientation
       * @param  {object} interaction   Interaction object
       * @private
       */
      _addOrientationClassToInteraction: function(interaction) {
        var orientation = interaction.activityOptions.dragAlignmentIsVertical() ? 'vertical' : 'horizontal';

        interaction.contentZone.children(locators.interaction).addClass('osSequence--' + orientation);
      }
    });

    return OsSequence;
  })();

  a5.hooks.interactionLoaded.add(function(interaction) {
    if (interaction.identifier === 'Order:Sequence:Sequence') {
      new core.OsSequence(interaction);
    }
  });
})(a5.core, jQuery);

// INFO

_.extend(a5.dp.info, {
  child1: 'richmond-rdp-3.6'
});


// ENGINE CONFIGURATION VARIABLES

_.extend(a5.dp.config, {
  // Translations

  translationAsJSONP: true,                     // Boolean       Load translations with file protocol to support offline LOs. (default: false)

  // Misc

  forceCorrectedAfterSubmitAttempts: false,     // Boolean       If true, the show answer state will be restored as corrected if the LO has been submitted. This way, teacher will see the original answers instead of the solution. (default: false)


  // AT related
  //

  // IC Free Writing 2 Columns

  ICFreeWriting2ColAsTabPanel: false,           // Boolean        Use Tabs Panel on IC Free Writing 2 Columns instead of Radio Accordion (default: false)

  // IM Colouring

  colouringMode: function() {                   // String         Set how the area is coloured (fill -default- | outline)
    return typeof a5.mainBuilder.options(true).getThemes().Colouring === 'undefined' ? 'fill' : a5.mainBuilder.options(true).getThemes().Colouring.toLowerCase();
  },

  // IM Wordsnake

  snakeFont: 'normal 20px museo-slab',          // String         Font used for IM Wordsnake texts

  // IM Wordsearch

  wordsearchCellSize: 50,                       // Integer (px)  Size in pixels

  // OS Sorting

  ossortingCollapseDropZones: false,            // Boolean        Toggle drop zones on zone title click (default: false)
  ossortingTargetZoneCounter: false             // Boolean        Add element counter to sorting target zones (default: false)
});


// CORE CONFIGURATION VARIABLES

_.extend(a5.core.config, {
  // Custom properties

  calcFooterHeight: true,                       // Boolean        Enables the custom property --loControls-height
  calcAsideHeight: true,                        // Boolean        Enables the custom property --aside-height

  // Attachments

  loToolbarActivityHeaderMaxWidth: true,        // Boolean        Toggle the activity--hasWideAttachments class if the sum of widths of the attachments and activity title (or rubric if the title is disabled) is highter than the available space

  // Media

  miniPlayerAnimation: false,                   // Boolean        Enables the miniPlayer (playbutton) sound wave animation (template available in skinTemplates/a5.view.core.playbuttonAnimation.handlebars)

  // Pagination

  paginationProgressBar: true                   // Boolean        Enables the pagination progress bar
});


// DP CONFIGURATION VARIABLES

a5.dp.richmondRDPconfig = {
  scrollWatcher: true,
  titleSegmentation: true
};

WebFontConfig.typekit = {
  id: 'eye2crc'
};

(function() {
  function setLOTitle() {
    if (window.LOInfo.title.indexOf("–") >= 0) {
      var titleFragments = window.LOInfo.title.split("–");
      document.querySelector('#lo-title').textContent = titleFragments[0].trim();

      document.querySelector('.header__title').className += ' header__title--part2';
      document.querySelector('.header__title__part2').textContent = titleFragments[1].trim();

      if (titleFragments.length > 2) {
        document.querySelector('.header__title').className += ' header__title--part3';
        document.querySelector('.header__title__part3').textContent = titleFragments[2].trim();
      }
    }
  }

  a5.eventBus.bind('lo:ready', function() {
    if (a5.dp.richmondRDPconfig.titleSegmentation) {
      setLOTitle();
    }
  });
})();

// Go back to first page on click "Go back" in dialog SubmitInfo

(function() {
  a5.callbacks.dialogs.get('a5.view.dialog.SubmitInfo').bind('showed', function() {
    $(document).one('click', '*[data-button="goback"]', function(event) {
      if (a5.mainBuilder.curInteraction.index === a5.mainBuilder._getStartInteractionIndex()) {
        $(event.currentTarget).next().click();
      } else {
        a5.mainBuilder.goFirst();
      }
    });
  });
})();

(function(core, Scroll, jQuery) {
  'use strict';

  a5.eventBus.bind('interaction:first', function() {
    if (a5.dp.richmondRDPconfig.scrollWatcher) {
      Scroll.monitorDirection();
    }
  }, this);

})(a5.core, a5.core.Scroll, jQuery);

/*
Script to go with the 'speech-bubble' DIV class and its associated tails.
This sets the margin-top value of the bubble-tail-top DIV automatically,
since this is just a function of the border-top-width value.
Similarly, it sets margin-bottom automatically for 'bubble-tail-bottom' DIVs.
*/

a5.hooks.interactionShowed.add(function() {
  // Old method, still useful for finer control of tail

  var bubbleArray1 = document.getElementsByClassName('bubble-tail-top');

  for (var i = 0; i < bubbleArray1.length; i++) {
    bubbleArray1[i].style.marginTop = 5 - parseInt(bubbleArray1[i].style.borderTopWidth) + "px";
  }

  var bubbleArray2 = document.getElementsByClassName('bubble-tail-bottom');

  for (var i = 0; i < bubbleArray2.length; i++) {
    bubbleArray2[i].style.marginBottom = 5 - parseInt(bubbleArray2[i].style.borderBottomWidth) + "px";
  }


  // New method: sets --adjusted-margin in terms of --tail-height
  // UPDATED 20/5/2019. tail no longer embedded – sits on very edge of bubble.

  var spbubbleArray = document.querySelectorAll('.speechbubble-tailup,.speechbubble-taildown');

  for (var i = 0; i < spbubbleArray.length; i++) {
    spbubbleArray[i].style.setProperty('--adjusted-margin', -5 - parseInt(spbubbleArray[i].style.getPropertyValue('--tail-height')) + 'px');
  }
});

// Carousel JS 19 Oct 2021
// Now supports an unlimited number of vertical or horizontal carousels in a single LO

a5.hooks.interactionShowed.add(function () {
  var caro3up = document.querySelectorAll('.carouselscene-3up'),
      caroHoz = document.querySelectorAll('.carouselscene'),
      nextButtons = document.querySelectorAll('.next-button'),
      prevButtons = document.querySelectorAll('.previous-button'),
      nextButtonsV = document.querySelectorAll('.next-button-3up'),
      prevButtonsV = document.querySelectorAll('.previous-button-3up');

  function rotateCarousel(x, index) {
    var cellsH = x.querySelectorAll('.carousel__cell'),
        cellSize = x.offsetWidth,
        cellCountH = cellsH.length,
        radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCountH ) ),
        theta = 360 / cellCountH,
        angle = theta * index * -1;

    x.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;
  }


  // Loop to set up behaviour of buttons for each horiz carousel

  for (let j=0; j < prevButtons.length; j++) {
    let tempselectedIndex = 0;

    prevButtons[j].addEventListener('click', function() {
      tempselectedIndex--;
      rotateCarousel(caroHoz[j].querySelector('.ddcarousel'),tempselectedIndex);
    });

    nextButtons[j].addEventListener('click', function() {
      tempselectedIndex++;
      rotateCarousel(caroHoz[j].querySelector('.ddcarousel'),tempselectedIndex);
    });
  }


  // Loop to set up buttons for vertical carousels

  for (let j=0; j < prevButtonsV.length; j++) {
    let tempselectedIndex = 0;

    prevButtonsV[j].addEventListener('click', function() {
      var thisScene = caro3up[j],
          theseCaros = thisScene.querySelectorAll('.ddcarousel-3up');

      tempselectedIndex--;

      for (var i=0; i < theseCaros.length; i++) {
        rotateCarouselV(theseCaros[i],tempselectedIndex);
      }
    });

    nextButtonsV[j].addEventListener('click', function() {
      var thisScene = caro3up[j],
          theseCaros = thisScene.querySelectorAll('.ddcarousel-3up');

      tempselectedIndex++;

      for (var i=0; i < theseCaros.length; i++) {
        rotateCarouselV(theseCaros[i],tempselectedIndex);
      }
    });
  }

  if (caroHoz !== null) { // Applies if standard horizontal merry-go-round carousel
    // Specific functions for standard carousel

    for ( var i=0; i < caroHoz.length; i++ ) {
      var carouselH = caroHoz[i].querySelector('.ddcarousel'),
          cellsH = carouselH.querySelectorAll('.carousel__cell'),
          cellCountH = cellsH.length,                               // cellCount now set from count of carousel__cell DIVs
          cellWidthH = carouselH.offsetWidth,
          radius,
          theta;

      function setupCarouselH() {
        var cellSize = cellWidthH;

        theta = 360 / cellCountH;
        radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCountH ) );

        for (var i=0; i < cellsH.length; i++) {
          var cell = cellsH[i],
              cellAngle = theta * i;

          cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
        }

        rotateCarousel(carouselH,0);
      }

      // Set initials

      setupCarouselH();
    }
  }

  if (caro3up !== null) {                                           // Applies if there are any vertical carousels
    var carouselV = document.querySelector('.ddcarousel-3up'),      // Only gets first element. Only used to set cellheight for calculations
        carouselsV = document.querySelectorAll('.ddcarousel-3up'),  // Returms an array of all carousels across all scenes. Only used now for set up. Other functions now count the specific carousels within the current scene.
        cellCountV,                                                 // cellCount now set from count of carousel__cell DIVs
        radiusV,
        thetaV;

    function rotateCarouselV(x, index) {
      var cells = x.querySelectorAll('.carousel__cell'),
          cellCountV = cells.length,
          thetaV = 360 / cellCountV,
          cellSize = x.offsetHeight,                                // offsetWidth when horizontal
          angle = thetaV * index * -1;

      radiusV = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCountV ) );
      x.style.transform = `translateZ(${-radiusV}px) rotateX(${angle}deg)`;
    }

    function setupCarouselV(j) {
      var cells = carouselsV[j].querySelectorAll('.carousel__cell'),
          cellSize = carouselsV[j].offsetHeight;                    // offsetWidth when horizontal

      cellCountV = cells.length;
      thetaV = 360 / cellCountV;
      radiusV = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCountV ) );

      for (var i=0; i < cells.length; i++) {
        var cell = cells[i],
            cellAngle = thetaV * i;

        cell.style.transform = `rotateX(${cellAngle}deg) translateZ(${radiusV}px)`;
      }

      rotateCarouselV(carouselsV[j],0);
    }


    // Set initials

    for (var i=0; i < carouselsV.length; i++) {
      setupCarouselV(i);
    }

    for (var j=0; j < caro3up.length; j++) {                                                                // For each 3up scene
      for (var i=0; i < caro3up[j].querySelectorAll('.ddcarousel-3up').length; i++) {                       // For each carousel within that 3d scene
        caro3up[j].querySelectorAll('.ddcarousel-3up')[i].style.setProperty('transition-delay',0.1*i+'s');  // Delay nth carousel animation by 0.1 x n seconds. Starts from 0 for each new scene.
      }
    }
  }
});
// INFO

_.extend(a5.dp.info, {
  child2: 'richmond-rdp-secondary-3.6'
});


// ENGINE CONFIGURATION VARIABLES

_.extend(a5.dp.config, {
});


// CORE CONFIGURATION VARIABLES

_.extend(a5.core.config, {
  timerProgress: 'linear'                  // Set the timer progress bar style (linear | circular -default-)
});


