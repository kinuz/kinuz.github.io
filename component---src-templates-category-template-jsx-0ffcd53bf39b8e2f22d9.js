(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),u=a(163),l=a(196),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(o.a.createElement(l.a,{data:t,key:t.node.fields.slug}))}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},t),o.a.createElement("div",{className:"page__body"},e))))},t}(o.a.Component);a.d(t,"pageQuery",function(){return f});var s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.category;return o.a.createElement(u.a,{pageTitle:""+e},o.a.createElement(c,this.props))},t}(o.a.Component),f=(t.default=s,"281703132")},161:function(e,t,a){var n=a(176).Symbol;e.exports=n},162:function(e,t,a){"use strict";a(191);var n=a(165),r=a(0),i=a.n(r),o=a(56),u=a(7),l=a.n(u),c=(a(192),function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data,t=i.a.createElement("ul",{className:"menu__list"},e.map(function(e){return i.a.createElement("li",{className:"menu__list-item",key:e.path},i.a.createElement(o.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),s=(a(193),a(194),function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.telegram,e.twitter,e.github),a=e.linkedin,n=(e.facebook,e.vk,e.rss,e.email);return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-linkedin"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"mailto:"+n},i.a.createElement("i",{className:"icon-mail"})))))},t}(i.a.Component)),f=a(166),m=a.n(f),p=(a(195),t.a=function(){return i.a.createElement(o.StaticQuery,{query:p,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,u=t.menu,l=i.a.createElement("div",null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:m.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},n));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},l),i.a.createElement("div",null,i.a.createElement(c,{data:u}),i.a.createElement(s,{data:a}),i.a.createElement("p",{className:"sidebar__copyright"},r))))},data:n})},"2195177324")},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(168),u=a.n(o),l=(a(189),a(190),a(56)),c=a(162);t.a=function(e){var t=e.children,a=e.pageTitle,r=e.hideSidebar;return i.a.createElement(l.StaticQuery,{query:s,render:function(e){var n=e.site.siteMetadata,o=n.title,l=n.subtitle,s=r?"":i.a.createElement(c.a,null);return i.a.createElement("div",{className:"layout"},i.a.createElement(u.a,null,i.a.createElement("title",null,o," - ",a),i.a.createElement("meta",{name:"description",content:l})),s,t)},data:n})};var s="696331148"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},166:function(e,t,a){e.exports=a.p+"static/photo-268c2854102385c2f67aeb93d020af3c.png"},167:function(e,t,a){var n=a(175);e.exports=function(e){return null==e?"":n(e)}},169:function(e,t,a){var n=a(170)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});e.exports=n},170:function(e,t,a){var n=a(171),r=a(172),i=a(185),o=RegExp("['’]","g");e.exports=function(e){return function(t){return n(i(r(t).replace(o,"")),e,"")}}},171:function(e,t){e.exports=function(e,t,a,n){var r=-1,i=null==e?0:e.length;for(n&&i&&(a=e[++r]);++r<i;)a=t(a,e[r],r,e);return a}},172:function(e,t,a){var n=a(173),r=a(167),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,n).replace(o,"")}},173:function(e,t,a){var n=a(174)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},174:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},175:function(e,t,a){var n=a(161),r=a(178),i=a(179),o=a(180),u=1/0,l=n?n.prototype:void 0,c=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(o(t))return c?c.call(t):"";var a=t+"";return"0"==a&&1/t==-u?"-0":a}},176:function(e,t,a){var n=a(177),r="object"==typeof self&&self&&self.Object===Object&&self,i=n||r||Function("return this")();e.exports=i},177:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(77))},178:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}},179:function(e,t){var a=Array.isArray;e.exports=a},180:function(e,t,a){var n=a(181),r=a(184),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&n(e)==i}},181:function(e,t,a){var n=a(161),r=a(182),i=a(183),o="[object Null]",u="[object Undefined]",l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:o:l&&l in Object(e)?r(e):i(e)}},182:function(e,t,a){var n=a(161),r=Object.prototype,i=r.hasOwnProperty,o=r.toString,u=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),a=e[u];try{e[u]=void 0;var n=!0}catch(l){}var r=o.call(e);return n&&(t?e[u]=a:delete e[u]),r}},183:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},184:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},185:function(e,t,a){var n=a(186),r=a(187),i=a(167),o=a(188);e.exports=function(e,t,a){return e=i(e),void 0===(t=a?void 0:t)?r(e)?o(e):n(e):e.match(t)||[]}},186:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},187:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},188:function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",r="\\d+",i="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+a+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+o+"|"+u+")",m="(?:"+s+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",d="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,c].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[i,l,c].join("|")+")"+d,x=RegExp([s+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,s,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,h].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},196:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),u=a(56),l=a(198),c=a.n(l),s=(a(203),a(220)),f=a(169),m=a.n(f),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,i=e.tags,l=this.props.data.node.fields,f=l.slug,p=l.categorySlug;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:c()(a).format("MMMM D, YYYY")},c()(a).format("MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:p},o.a.createElement(u.Link,{to:p,className:"post__meta-category-link"},n))),o.a.createElement("h2",{className:"post__title"},o.a.createElement(u.Link,{className:"post__title-link",to:f},t)),o.a.createElement("p",{className:"post__description"},r),i.map(function(e){return o.a.createElement(u.Link,{to:"/tags/"+m()(e)+"/"},o.a.createElement(s.a,{color:"primary mr-1"},e))}))},t}(o.a.Component);t.a=p}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-0ffcd53bf39b8e2f22d9.js.map