(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var n=a(179),r=a.n(n),i=a(0),u=a.n(i),l=a(56),o=a(163);t.default=function(e){var t=e.data.allMarkdownRemark.group;return u.a.createElement(o.a,{pageTitle:"All Categories"},u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"content__inner"},u.a.createElement("div",{className:"page"},u.a.createElement("h1",{className:"page__title"},"Categories"),u.a.createElement("div",{className:"page__body"},u.a.createElement("div",{className:"categories"},u.a.createElement("ul",{className:"categories__list"},t.map(function(e){return u.a.createElement("li",{key:e.fieldValue,className:"categories__list-item"},u.a.createElement(l.Link,{to:"/categories/"+r()(e.fieldValue)+"/",className:"categories__list-item-link"},e.fieldValue," (",e.totalCount,")"))}))))))))};var c="1749855860"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},162:function(e,t,a){e.exports=a.p+"static/photo-268c2854102385c2f67aeb93d020af3c.png"},163:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),u=a(166),l=a.n(u),o=(a(167),a(168),a(56)),c=(a(169),a(161)),s=a(7),f=a.n(s),m=(a(170),a(164)),d=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.menu,t=i.a.createElement("ul",{className:"menu__list"},this.props.data.map(function(t){var a=d.a.lowerCase(t.label)===e?" menu__list-item-link--active":"";return i.a.createElement("li",{className:"menu__list-item",key:t.path},i.a.createElement(o.Link,{to:t.path,className:"menu__list-item-link"+a,activeClassName:"menu__list-item-link menu__list-item-link--active"},t.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component),x=(a(171),a(172),function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.telegram,e.twitter,e.github),a=e.linkedin,n=(e.facebook,e.vk,e.rss,e.email);return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-linkedin"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"mailto:"+n},i.a.createElement("i",{className:"icon-mail"})))))},t}(i.a.Component)),b=a(162),g=a.n(b),v=(a(173),function(e){return i.a.createElement(o.StaticQuery,{query:h,render:function(t){var a=t.site.siteMetadata,n=a.author,r=a.subtitle,u=a.copyright,l=a.menu,c=i.a.createElement("div",null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:g.a,className:"sidebar__author-photo",width:"75",height:"75",alt:n.name})),i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},n.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},r));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},c),i.a.createElement("div",null,i.a.createElement(p,{data:l,menu:e.menu}),i.a.createElement(x,{data:n}),i.a.createElement("p",{className:"sidebar__copyright"},u))))},data:c})}),h="2195177324",E=(t.a=function(e){var t=e.children,a=e.pageTitle,r=e.hideSidebar,u=e.menu;return i.a.createElement(o.StaticQuery,{query:E,render:function(e){var n=e.site.siteMetadata,o=n.title,c=n.subtitle,s=r?"":i.a.createElement(v,{menu:u});return i.a.createElement("div",{className:"layout"},i.a.createElement(l.a,null,i.a.createElement("title",null,o," - ",a),i.a.createElement("meta",{name:"description",content:c})),s,t)},data:n})},"696331148")},165:function(e,t,a){var n=a(186).Symbol;e.exports=n},174:function(e,t,a){var n=a(185);e.exports=function(e){return null==e?"":n(e)}},179:function(e,t,a){var n=a(180)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},180:function(e,t,a){var n=a(181),r=a(182),i=a(195),u=RegExp("['’]","g");e.exports=function(e){return function(t){return n(i(r(t).replace(u,"")),e,"")}}},181:function(e,t){e.exports=function(e,t,a,n){var r=-1,i=null==e?0:e.length;for(n&&i&&(a=e[++r]);++r<i;)a=t(a,e[r],r,e);return a}},182:function(e,t,a){var n=a(183),r=a(174),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,n).replace(u,"")}},183:function(e,t,a){var n=a(184)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},184:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},185:function(e,t,a){var n=a(165),r=a(188),i=a(189),u=a(190),l=1/0,o=n?n.prototype:void 0,c=o?o.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(u(t))return c?c.call(t):"";var a=t+"";return"0"==a&&1/t==-l?"-0":a}},186:function(e,t,a){var n=a(187),r="object"==typeof self&&self&&self.Object===Object&&self,i=n||r||Function("return this")();e.exports=i},187:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(77))},188:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}},189:function(e,t){var a=Array.isArray;e.exports=a},190:function(e,t,a){var n=a(191),r=a(194),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&n(e)==i}},191:function(e,t,a){var n=a(165),r=a(192),i=a(193),u="[object Null]",l="[object Undefined]",o=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:u:o&&o in Object(e)?r(e):i(e)}},192:function(e,t,a){var n=a(165),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),a=e[l];try{e[l]=void 0;var n=!0}catch(o){}var r=u.call(e);return n&&(t?e[l]=a:delete e[l]),r}},193:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},194:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},195:function(e,t,a){var n=a(196),r=a(197),i=a(174),u=a(198);e.exports=function(e,t,a){return e=i(e),void 0===(t=a?void 0:t)?r(e)?u(e):n(e):e.match(t)||[]}},196:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},197:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},198:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",r="\\d+",i="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+u+"|"+l+")",m="(?:"+s+"|"+l+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",o,c].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),x="(?:"+[i,o,c].join("|")+")"+p,b=RegExp([s+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,s,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,x].join("|"),"g");e.exports=function(e){return e.match(b)||[]}}}]);
//# sourceMappingURL=component---src-pages-categories-jsx-6884f4467c2473bd8b2d.js.map