(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(7),r=a.n(n),i=a(0),u=a.n(i),l=a(56),o=a(170),c=a.n(o),s=a(163),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.group;return u.a.createElement(s.a,{pageTitle:"All Tags"},u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"content__inner"},u.a.createElement("div",{className:"page"},u.a.createElement("h1",{className:"page__title"},"Tags"),u.a.createElement("div",{className:"page__body"},u.a.createElement("div",{className:"tags"},u.a.createElement("ul",{className:"tags__list"},e.map(function(e){return u.a.createElement("li",{key:e.fieldValue,className:"tags__list-item"},u.a.createElement(l.Link,{to:"/tags/"+c()(e.fieldValue)+"/",className:"tags__list-item-link"},e.fieldValue," (",e.totalCount,")"))}))))))))},t}(u.a.Component);t.default=f;var m="3778218043"},161:function(e,t,a){var n=a(177).Symbol;e.exports=n},162:function(e,t,a){"use strict";a(192);var n=a(165),r=a(0),i=a.n(r),u=a(56),l=a(7),o=a.n(l),c=(a(193),a(169)),s=a.n(c),f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.menu,t=i.a.createElement("ul",{className:"menu__list"},this.props.data.map(function(t){var a=s.a.lowerCase(t.label)===e?" menu__list-item-link--active":"";return i.a.createElement("li",{className:"menu__list-item",key:t.path},i.a.createElement(u.Link,{to:t.path,className:"menu__list-item-link"+a,activeClassName:"menu__list-item-link menu__list-item-link--active"},t.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component),m=(a(194),a(195),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.telegram,e.twitter,e.github),a=e.linkedin,n=(e.facebook,e.vk,e.rss,e.email);return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-linkedin"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"mailto:"+n},i.a.createElement("i",{className:"icon-mail"})))))},t}(i.a.Component)),d=a(166),p=a.n(d),x=(a(196),t.a=function(e){return i.a.createElement(u.StaticQuery,{query:x,render:function(t){var a=t.site.siteMetadata,n=a.author,r=a.subtitle,l=a.copyright,o=a.menu,c=i.a.createElement("div",null,i.a.createElement(u.Link,{to:"/"},i.a.createElement("img",{src:p.a,className:"sidebar__author-photo",width:"75",height:"75",alt:n.name})),i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(u.Link,{className:"sidebar__author-title-link",to:"/"},n.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},r));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},c),i.a.createElement("div",null,i.a.createElement(f,{data:o,menu:e.menu}),i.a.createElement(m,{data:n}),i.a.createElement("p",{className:"sidebar__copyright"},l))))},data:n})},"2195177324")},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),u=a(168),l=a.n(u),o=(a(190),a(191),a(56)),c=a(162);t.a=function(e){var t=e.children,a=e.pageTitle,r=e.hideSidebar,u=e.menu;return i.a.createElement(o.StaticQuery,{query:s,render:function(e){var n=e.site.siteMetadata,o=n.title,s=n.subtitle,f=r?"":i.a.createElement(c.a,{menu:u});return i.a.createElement("div",{className:"layout"},i.a.createElement(l.a,null,i.a.createElement("title",null,o," - ",a),i.a.createElement("meta",{name:"description",content:s})),f,t)},data:n})};var s="696331148"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},166:function(e,t,a){e.exports=a.p+"static/photo-268c2854102385c2f67aeb93d020af3c.png"},167:function(e,t,a){var n=a(176);e.exports=function(e){return null==e?"":n(e)}},170:function(e,t,a){var n=a(171)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},171:function(e,t,a){var n=a(172),r=a(173),i=a(186),u=RegExp("['’]","g");e.exports=function(e){return function(t){return n(i(r(t).replace(u,"")),e,"")}}},172:function(e,t){e.exports=function(e,t,a,n){var r=-1,i=null==e?0:e.length;for(n&&i&&(a=e[++r]);++r<i;)a=t(a,e[r],r,e);return a}},173:function(e,t,a){var n=a(174),r=a(167),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,n).replace(u,"")}},174:function(e,t,a){var n=a(175)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},175:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},176:function(e,t,a){var n=a(161),r=a(179),i=a(180),u=a(181),l=1/0,o=n?n.prototype:void 0,c=o?o.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(u(t))return c?c.call(t):"";var a=t+"";return"0"==a&&1/t==-l?"-0":a}},177:function(e,t,a){var n=a(178),r="object"==typeof self&&self&&self.Object===Object&&self,i=n||r||Function("return this")();e.exports=i},178:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(77))},179:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}},180:function(e,t){var a=Array.isArray;e.exports=a},181:function(e,t,a){var n=a(182),r=a(185),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&n(e)==i}},182:function(e,t,a){var n=a(161),r=a(183),i=a(184),u="[object Null]",l="[object Undefined]",o=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:u:o&&o in Object(e)?r(e):i(e)}},183:function(e,t,a){var n=a(161),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),a=e[l];try{e[l]=void 0;var n=!0}catch(o){}var r=u.call(e);return n&&(t?e[l]=a:delete e[l]),r}},184:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},185:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},186:function(e,t,a){var n=a(187),r=a(188),i=a(167),u=a(189);e.exports=function(e,t,a){return e=i(e),void 0===(t=a?void 0:t)?r(e)?u(e):n(e):e.match(t)||[]}},187:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},188:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},189:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",r="\\d+",i="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+u+"|"+l+")",m="(?:"+s+"|"+l+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",o,c].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),x="(?:"+[i,o,c].join("|")+")"+p,b=RegExp([s+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,s,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,x].join("|"),"g");e.exports=function(e){return e.match(b)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-ddf316d0a8738c8a611c.js.map