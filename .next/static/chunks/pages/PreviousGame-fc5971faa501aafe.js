(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{5315:function(r,e,t){"use strict";t.d(e,{W:function(){return o}});t(7294);var n=t(381),s=t.n(n),c=t(5893);s().locale("en-gb");var o=function(r){var e=r.unixTime,t=r.format,n=void 0===t?"DD-MM-YYYY HH:mm:ss":t;return(0,c.jsx)("span",{children:s()(e).format(n)})}},1902:function(r,e,t){"use strict";t.r(e);var n=t(2777),s=t(2262),c=t(748),o=t(5959),i=t(3553),a=t(7247),u=t(9499),d=t(7294),l=t(6628),f=t(4859),h=t(7219),p=t(1913),j=t(8356),v=t(4194),x=t(678),m=t(5315),b=t(9094),y=t(5893);function g(r){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var t,n=(0,a.Z)(r);if(e){var s=(0,a.Z)(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return(0,i.Z)(this,t)}}var O=function(r){(0,o.Z)(t,r);var e=g(t);function t(){var r;(0,n.Z)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return r=e.call.apply(e,[this].concat(o)),(0,u.Z)((0,c.Z)(r),"renderPreviousContractInformation",(function(r){return(0,y.jsx)("table",{className:"list-table",children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:"Contract address:"}),(0,y.jsx)("td",{children:(0,y.jsx)("a",{target:"_blank",href:"".concat(v.WF,"/address/").concat(r.address),children:(0,y.jsx)(x.k,{address:r.address})})})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:"Winning Number:"}),(0,y.jsx)("td",{children:r.winningNumber})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:"Last Guess Address:"}),(0,y.jsx)("td",{children:(0,y.jsx)(x.k,{address:r.lastGuessAddress})})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:"Game End Time:"}),(0,y.jsx)("td",{children:(0,y.jsx)(m.W,{unixTime:r.gameEndTime})})]})]})})})),r}return(0,s.Z)(t,[{key:"render",value:function(){var r=this.props.previousContract;return(0,y.jsx)(f.Z,{header:(0,y.jsx)(b.T,{danger:this.props.dangerMode}),contentClass:"full-width",children:(0,y.jsxs)("div",{className:"glass container bg-color-white br-5",children:[(0,y.jsx)("h1",{className:"normal display-6",children:"Previous Game"}),0===Object.keys(r).length?(0,y.jsx)("p",{children:"No previous game exists"}):this.renderPreviousContractInformation(r)]})})}}]),t}(d.Component);(0,u.Z)(O,"mapStateToProps",(function(r){return{dangerMode:r.dangerMode}})),e.default=(0,j.qC)(h.Z,p.Z,(0,l.$j)(O.mapStateToProps))(O)},678:function(r,e,t){"use strict";t.d(e,{k:function(){return i}});var n=t(9499),s=(t(7294),t(5893));function c(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function o(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,n.Z)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var i=function(r){var e=r.address,t=r.style,n=void 0===t?{}:t;return(0,s.jsx)("span",{style:o({wordBreak:"break-all"},n),children:e})}},2950:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/PreviousGame",function(){return t(1902)}])}},function(r){r.O(0,[774,543,571,885,535,5,888,179],(function(){return e=2950,r(r.s=e);var e}));var e=r.O();_N_E=e}]);