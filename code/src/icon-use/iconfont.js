/* eslint-disable */
(function(window){
    var svgSprite='<svg><symbol id="icon-chenggongtishitubiao" viewBox="0 0 1024 1024"><path d="M512 512m-500.363636 0a500.363636 500.363636 0 1 0 1000.727272 0 500.363636 500.363636 0 1 0-1000.727272 0Z" fill="#43B582" ></path><path d="M269.090909 512l145.454546 116.363636L750.545455 337.454545l32 37.818182L413.090909 731.636364l-176-177.454546z" fill="#FFFFFF" ></path></symbol><symbol id="icon-danchuangtishitubiao" viewBox="0 0 1024 1024"><path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0z m0 836.266667c-37.546667 0-68.266667-30.72-68.266667-68.266667s30.72-68.266667 68.266667-68.266667 68.266667 30.72 68.266667 68.266667-30.72 68.266667-68.266667 68.266667z m0-221.866667c-37.546667 0-68.266667-218.453333-68.266667-341.333333 0-122.88 68.266667-100.693333 68.266667-100.693334s68.266667-20.48 68.266667 100.693334c0 122.88-30.72 341.333333-68.266667 341.333333z" fill="#F19149" ></path></symbol><symbol id="icon-cuowutishitubiao" viewBox="0 0 1024 1024"><path d="M512.005716 0C229.267894 0 0 229.222164 0 511.959986s229.267894 512.040014 512.005716 512.040014 512.017149-229.256461 512.017149-512.040014S794.777836 0 512.005716 0z m214.371312 641.501948a60.020766 60.020766 0 0 1-84.840782 84.909377l-137.533299-137.544731-137.54473 137.544731a60.020766 60.020766 0 0 1-84.840782-84.909377l137.533298-137.544731-137.533298-137.487568a60.009334 60.009334 0 0 1 84.840782-84.897945l137.54473 137.567596 137.533299-137.567596a60.009334 60.009334 0 0 1 84.840782 84.897945l-137.533299 137.487568z" fill="#E66767" ></path></symbol></svg>';
    var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();
    var shouldInjectCss=script.getAttribute("data-injectcss");
    var ready=function(fn){
        if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}
        else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};
        document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}
        function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};
        var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();
        d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};
        var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");
        div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");
        svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";
        prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;
        try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
/* eslint-enable */