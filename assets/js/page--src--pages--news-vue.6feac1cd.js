(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(t,a){},175:function(t,a,e){"use strict";var i=e(173),n=e.n(i);a.default=n.a},178:function(t,a,e){"use strict";e.r(a);e(0);var i=e(79),n=(e(82),e(37),e(80),e(133),e(29),e(81),e(17)),r=e(5),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,l=a.data,o=a.parent,u=e.info,c=e.showLinks,g=e.showNavigation,d=e.ariaLabel,p=function(t,a){var e=t.currentPage,i=void 0===e?1:e,n=t.totalPages,r=void 0===n?1:n,l=Math.ceil(a/2),s=Math.floor(i-l),o=Math.floor(i+l);r<=a?(s=0,o=r):i<=l?(s=0,o=a):i+l>=r&&(s=r-a,o=r);for(var u=[],c=s+1;c<=o;c++)u.push(c);return{current:i,total:r,start:s,end:o,pages:u}}(u,e.range),f=p.current,v=p.total,b=p.pages,m=p.start,L=p.end,x=Object(r.d)(o.$route),y=function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;a===f&&(l=e.ariaCurrentLabel);var o={to:s(x,a),exact:!0};return e.activeLinkClass&&(o.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(o.exactActiveClass=e.exactActiveLinkClass),t(i.a,{class:e.linkClass,attrs:Object(n.a)({},o,{"aria-label":l.replace("%n",a),"aria-current":f===a})},[r])},C=c?b.map((function(t){return y(t,t,e.ariaLinkLabel)})):[];if(g){var h=e.firstLabel,w=e.prevLabel,k=e.nextLabel,P=e.lastLabel,S=e.ariaFirstLabel,N=e.ariaPrevLabel,j=e.ariaNextLabel,O=e.ariaLastLabel;f>1&&C.unshift(y(f-1,w,N)),m>0&&C.unshift(y(1,h,S)),f<v&&C.push(y(f+1,k,j)),L<v&&C.push(y(v,P,O))}return C.length<2?null:t("nav",Object(n.a)({},l,{attrs:{role:"navigation","aria-label":d}}),C)}};function s(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(r.g)(t)+"/".concat(a).concat(e):t}e(83);var o={metaInfo:{title:"Latest News"},components:{Pager:l}},u=e(36),c=e(175),g=Object(u.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("div",{staticClass:"container mx-auto px-4"},[e("h1",{staticClass:"text-center ml-0 sm:text-left sm:ml-3 mt-24 font-medium text-3xl text-blue-900"},[t._v("\n      Latest\n      "),e("span",{staticClass:"text-blue-500"},[t._v("news")])]),e("div",{staticClass:"mt-12 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-2"},t._l(t.$page.allPosts.edges,(function(a){return e("div",{key:a.node.title,staticClass:"max-w-sm rounded overflow-hidden shadow-lg mb-8 mx-auto"},[e("g-image",{staticClass:"w-full",attrs:{src:a.node.urlToImage,alt:"Article image"}}),e("div",{staticClass:"px-6 py-4"},[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"font-medium text-lg text-blue-900 mb-2",domProps:{innerHTML:t._s(a.node.title)}}),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"font-light text-blue-900 text-base mb-4",domProps:{innerHTML:t._s(a.node.description)}})])],1)})),0),e("Pager",{attrs:{info:t.$page.allPosts.pageInfo}})],1)])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(g);a.default=g.exports}}]);