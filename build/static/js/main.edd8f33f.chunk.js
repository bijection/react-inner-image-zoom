(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(64)},32:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(7),r=a.n(s),l=a(5),i=(a(32),a(6)),c=(a(33),function(){return o.a.createElement("nav",{className:"nav"},o.a.createElement("ul",{className:"nav__list nav__list--secondary"},o.a.createElement("li",{className:"nav__item"},o.a.createElement("a",{className:"nav__link",href:"https://github.com/laurenashpole/react-inner-image-zoom"},"Github")),o.a.createElement("li",{className:"nav__item"},o.a.createElement("a",{className:"nav__link",href:"#"},"NPM"))),o.a.createElement("ul",{className:"nav__list nav__list--primary"},o.a.createElement("li",{className:"nav__item nav__item--left"},o.a.createElement(l.b,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"Inner Image Zoom")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(l.b,{to:"/demos",className:"nav__link",activeClassName:"nav__link--active"},"Demos")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(l.b,{to:"/docs",className:"nav__link",activeClassName:"nav__link--active"},"Docs")),o.a.createElement("li",{className:"nav__item"},o.a.createElement(l.b,{to:"/support",className:"nav__link",activeClassName:"nav__link--active"},"Support"))))}),m=(a(42),function(e){return o.a.createElement("main",{className:"main"},e.children)}),u=(a(43),a(8)),p=a(9),h=a(11),d=a(10),f=a(17),g=a(12),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).el=document.createElement("div"),a.el.classList.add(e.className),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return Object(s.createPortal)(this.props.children,this.el)}}]),t}(n.Component),v=(a(44),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleInitialTouchStart=function(){var e=a.props.fullscreenOnMobile&&window.matchMedia&&window.matchMedia("(max-width: ".concat(a.props.mobileBreakpoint,"px)")).matches;a.setState({isTouch:!0,isFullscreen:e})},a.handleTouchStart=function(e){var t=e.changedTouches[0];a.offsets=a.getOffsets(t.pageX,t.pageY,a.zoomImg.offsetLeft,a.zoomImg.offsetTop)},a.handleMouseEnter=function(){a.setState({isActive:!0})},a.handleClick=function(e){a.state.isZoomed?a.state.isTouch||a.zoomOut():(a.state.isTouch&&a.setState({isActive:!0}),a.isLoaded?a.zoomIn(e.pageX,e.pageY):a.onLoadCallback=a.zoomIn.bind(Object(f.a)(a),e.pageX,e.pageY))},a.handleLoad=function(e){a.isLoaded=!0,a.container=a.getContainer(a.img,!1),a.ratios=a.getRatios(a.container,e.target),a.onLoadCallback&&(a.onLoadCallback(),a.onLoadCallback=null)},a.handleMouseMove=function(e){var t=e.pageX-a.offsets.x,n=e.pageY-a.offsets.y;t=Math.max(Math.min(t,a.container.offsetWidth),0),n=Math.max(Math.min(n,a.container.offsetHeight),0),a.setState({left:t*-a.ratios.x,top:n*-a.ratios.y})},a.handleTouchMove=function(e){var t=e.changedTouches[0].pageX-a.offsets.x,n=e.changedTouches[0].pageY-a.offsets.y;t=Math.max(Math.min(t,0),-1*(a.zoomImg.offsetWidth-a.container.offsetWidth)),n=Math.max(Math.min(n,0),-1*(a.zoomImg.offsetHeight-a.container.offsetHeight)),a.setState({left:t,top:n})},a.handleClose=function(){a.zoomOut(function(){setTimeout(function(){a.setDefaults(),a.setState({isActive:!1,isTouch:!1,isFullscreen:!1})},a.props.fadeDuration)})},a.zoomIn=function(e,t){a.setState({isZoomed:!0},function(){(a.state.isTouch?a.initialTouchMove:a.initialMove)(e,t),a.props.onZoomIn&&a.props.onZoomIn()})},a.initialMove=function(e,t){a.offsets=a.getOffsets(window.pageXOffset,window.pageYOffset,-a.container.left,-a.container.top),a.handleMouseMove({pageX:e,pageY:t})},a.initialTouchMove=function(e,t){var n=(e-(window.pageXOffset+a.container.left))*-a.ratios.x,o=(t-(window.pageYOffset+a.container.top))*-a.ratios.y;a.container=a.getContainer(a.img,a.state.isFullscreen),a.offsets=a.getOffsets(0,0,0,0),a.handleTouchMove({changedTouches:[{pageX:n,pageY:o}]})},a.zoomOut=function(e){a.setState({isZoomed:!1},function(){a.props.onZoomOut&&a.props.onZoomOut(),e&&e()})},a.setDefaults=function(){a.isLoaded=!1,a.onLoadCallback=null,a.container={},a.offsets={},a.ratios={}},a.getContainer=function(e,t){if(t)return{offsetWidth:window.innerWidth,offsetHeight:window.innerHeight,left:0,top:0};var a=e.getBoundingClientRect();return{offsetWidth:a.width,offsetHeight:a.height,left:a.left,top:a.top}},a.getOffsets=function(e,t,a,n){return{x:e-a,y:t-n}},a.getRatios=function(e,t){return{x:(t.offsetWidth-e.offsetWidth)/e.offsetWidth,y:(t.offsetHeight-e.offsetHeight)/e.offsetHeight}},a.renderZoomImg=function(e){return o.a.createElement(n.Fragment,null,o.a.createElement("img",{className:"iiz__zoom-img ".concat(a.state.isZoomed?"iiz__zoom-img--visible":""),style:{top:a.state.top,left:a.state.left,transition:"linear ".concat(e,"ms opacity, linear ").concat(e,"ms visibility")},src:a.props.zoomSrc||a.props.src,ref:function(e){a.zoomImg=e},role:"presentation",onLoad:a.handleLoad,onTouchStart:a.handleTouchStart,onMouseMove:a.state.isTouch?null:a.handleMouseMove,onTouchMove:a.state.isTouch?a.handleTouchMove:null}),a.state.isTouch&&o.a.createElement("a",{className:"iiz__btn iiz__close ".concat(a.state.isZoomed?"iiz__close--visible":""),style:{transition:"linear ".concat(e,"ms opacity, linear ").concat(e,"ms visibility")},href:"javascript:void(0);",onClick:a.handleClose,"aria-label":"Zoom Out"}))},a.state={isActive:!1,isTouch:!1,isZoomed:!1,isFullscreen:!1,left:0,top:0},a.setDefaults(),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("figure",{className:"iiz",ref:function(t){e.img=t},onTouchStart:this.handleInitialTouchStart,onClick:this.handleClick,onMouseEnter:this.state.isTouch?null:this.handleMouseEnter,onMouseLeave:this.state.isTouch?null:this.handleClose},this.props.sources?o.a.createElement("picture",null,this.props.sources.map(function(e,t){return o.a.createElement(n.Fragment,{key:t},e.srcSet&&o.a.createElement("source",{key:t,srcSet:e.srcSet,media:e.media,type:e.type}))}),o.a.createElement("img",{className:"iiz__img",src:this.props.src,srcSet:this.props.srcSet,alt:this.props.alt})):o.a.createElement("img",{className:"iiz__img",src:this.props.src,srcSet:this.props.srcSet,alt:this.props.alt}),this.state.isActive&&o.a.createElement(n.Fragment,null,this.state.isFullscreen?o.a.createElement(_,{className:"iiz__zoom-portal"},this.renderZoomImg(0)):this.renderZoomImg(this.props.fadeDuration)),!this.state.isZoomed&&o.a.createElement("span",{className:"iiz__btn iiz__hint"}))}}]),t}(n.Component));v.defaultProps={fadeDuration:150,mobileBreakpoint:640};var E=v,b=function(){return o.a.createElement("section",{className:"product"},o.a.createElement("div",{className:"product__img"},o.a.createElement(E,{src:"images/unsplash-1.jpg",zoomSrc:"images/unsplash-1-large.jpg"})),o.a.createElement("div",{className:"product__details"},o.a.createElement("h2",null,"React Inner Image Zoom Component"),o.a.createElement("p",null,"Great for e-commerce product images!"),o.a.createElement("p",{className:"product__price"},"$0"),o.a.createElement("a",{className:"product__btn",href:"https://github.com/laurenashpole/react-inner-image-zoom"},"View on Github"),o.a.createElement("ul",{className:"product__list"},o.a.createElement("li",null,"Details"),o.a.createElement("li",null,"Zoom + pan on hover and zoom + drag on touch"),o.a.createElement("li",null,"Can be used with other popular React components"),o.a.createElement("li",null,"Supports responsive images"),o.a.createElement("li",null,"Photo credit: ",o.a.createElement("a",{href:"https://unsplash.com/photos/jQ0CTkvlz2U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",target:"_blank",rel:"noopener noreferrer"},"Micheile Henderson")," on ",o.a.createElement("a",{href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",target:"_blank",rel:"noopener noreferrer"},"Unsplash")))))},k=function(){return o.a.createElement("div",null,o.a.createElement(b,null))},j=a(26),N=a.n(j),C=(a(60),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){a.setState(function(e){return{showCode:!e.showCode}})},a.state={showCode:!1},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.children,n=e.notes,s=e.code;return o.a.createElement("div",{className:"demo"},o.a.createElement("div",{className:"demo__main"},o.a.createElement("h3",{className:"demo__heading"},t),o.a.createElement("div",{className:"demo__content"},o.a.createElement("div",{className:"demo__example"},a),o.a.createElement("div",{className:"demo__notes"},o.a.createElement("h4",{className:"demo__notes-heading"},"Notes:"),o.a.createElement("ul",{className:"demo__notes-list"},n.map(function(e,t){return o.a.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}})})),o.a.createElement("button",{className:"demo__code-btn",onClick:this.handleClick},this.state.showCode?"Hide Code -":"Show Code +")))),this.state.showCode&&o.a.createElement("pre",{className:"demo__code"},o.a.createElement("code",null,s)))}}]),t}(n.Component)),w=(a(61),a(62),a(63),function(){return o.a.createElement(n.Fragment,null,o.a.createElement("h2",{className:"demos__heading"},"Demos"),o.a.createElement("nav",{className:"demos__nav"},o.a.createElement("span",null,"jump to:"),o.a.createElement("a",{href:"#basic"},"Basic"),o.a.createElement("a",{href:"#fullscreen"},"Fullscreen On Mobile"),o.a.createElement("a",{href:"#responsive"},"Responsive Images"),o.a.createElement("a",{href:"#slick"},"With Slick Carousel")),o.a.createElement("section",{id:"basic"},o.a.createElement(C,{name:"Basic",notes:["Simplest use case with only src prop set",'Photo credit: <a href="https://unsplash.com/photos/Kx8DDqb6Wbw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Toa Heftiba</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'],code:'<InnerImageZoom src="/path/to/image.jpg" />'},o.a.createElement(E,{src:"images/unsplash-2.jpg"}))),o.a.createElement("section",{id:"fullscreen"},o.a.createElement(C,{name:"Fullscreen On Mobile",notes:["Zoomed image is fullscreen on touch devices below a specified breakpoint",'Photo credit: <a href="https://unsplash.com/photos/1DMNn6gBbwQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Gabrielle Henderson</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'],code:'<InnerImageZoom\n\xa0\xa0src="/path/to/image.jpg"\n\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n\xa0\xa0fullscreenOnMobile={true}\n/>'},o.a.createElement(E,{src:"images/unsplash-3.jpg",zoomSrc:"images/unsplash-3-large.jpg",fullscreenOnMobile:!0}))),o.a.createElement("section",{id:"responsive"},o.a.createElement(C,{name:"Responsive Images",notes:["Accepts default srcset and sources (with srcset, media, type)",'Use with <a href="https://github.com/scottjehl/picturefill" target="_blank" rel="noopener noreferrer">Picturefill</a> for older browser support','Photo credit: <a href="https://unsplash.com/photos/eQ2PUDrwSx0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Brittany Neale</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>'],code:'<InnerImageZoom\n\xa0\xa0src="/path/to/default-image.jpg"\n\xa0\xa0srcSet="/path/to/small-image.jpg, /path/to/small-image-2x.jpg 2x"\n\xa0\xa0sources={[{\n\xa0\xa0\xa0\xa0srcSet=\'/path/to/large-image.jpg, /path/to/large-image-2x.jpg 2x\',\n\xa0\xa0\xa0\xa0media: \'(min-width: 768px)\'\n\xa0\xa0}]}\n\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n/>'},o.a.createElement(E,{src:"images/unsplash-4.jpg",srcSet:"images/unsplash-4-305.jpg, images/unsplash-4-610.jpg 2x",sources:[{srcSet:"images/unsplash-4-740.jpg, images/unsplash-4-1480.jpg 2x",media:"(min-width: 375px)"}],zoomSrc:"images/unsplash-4-large.jpg"}))),o.a.createElement("section",{id:"slick"},o.a.createElement(C,{name:"With Slick Carousel",notes:['Integration with <a href="https://github.com/akiran/react-slick" target="_blank">React Slick</a>',"Recommend using with fullscreenOnMobile",'Photo credits: <a href="https://unsplash.com/photos/zbPDL84kvRg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Martin Adams</a>, <a href="https://unsplash.com/photos/Nv4QHkTVEaI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Nordwood Themes</a>, and <a href="https://unsplash.com/photos/ZLRRiyrmALA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Jordan Madrid</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'],code:'<Slick dots={true}>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-1.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-1-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-2.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-2-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-3.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-3-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n</Slick>'},o.a.createElement(N.a,{dots:!0},o.a.createElement(E,{src:"images/unsplash-5.jpg",zoomSrc:"images/unsplash-5-large.jpg",fullscreenOnMobile:!0}),o.a.createElement(E,{src:"images/unsplash-6.jpg",zoomSrc:"images/unsplash-6-large.jpg",fullscreenOnMobile:!0}),o.a.createElement(E,{src:"images/unsplash-7.jpg",zoomSrc:"images/unsplash-7-large.jpg",fullscreenOnMobile:!0})))))}),S=function(){return o.a.createElement("div",null,"Docs")},M=function(){return o.a.createElement("div",null,"Support")};var T=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c,null),o.a.createElement(m,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:k}),o.a.createElement(i.a,{path:"/demos",component:w}),o.a.createElement(i.a,{path:"/docs",component:S}),o.a.createElement(i.a,{path:"/support",component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(l.a,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.edd8f33f.chunk.js.map