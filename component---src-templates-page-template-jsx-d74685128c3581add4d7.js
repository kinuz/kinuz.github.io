(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(164),m=(a(216),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark;return l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content__inner"},l.a.createElement("div",{className:"page"},l.a.createElement("h1",{className:"page__title"},e.frontmatter.title),l.a.createElement("div",{className:"page__body",dangerouslySetInnerHTML:{__html:e.html}}))))},t}(l.a.Component));a.d(t,"pageQuery",function(){return o});var c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=(e.title,e.subtitle),a=this.props.data.markdownRemark.frontmatter,n=a.title,r=a.description,i=null!==r?r:t;return l.a.createElement(s.a,{pageTitle:n,descriptio:i,menu:this.props["*"]},l.a.createElement(m,this.props))},t}(l.a.Component),o=(t.default=c,"178699593")},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"Try to write what I'm doing and 've done..",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"Try to write what I'm doing and 've done..",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},163:function(e,t,a){e.exports=a.p+"static/photo-268c2854102385c2f67aeb93d020af3c.png"},164:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),l=a(167),s=a.n(l),m=(a(168),a(169),a(56)),c=(a(170),a(162)),o=a(7),u=a.n(o),p=(a(171),a(165)),d=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.menu,t=i.a.createElement("ul",{className:"menu__list"},this.props.data.map(function(t){var a=d.a.lowerCase(t.label)===e?" menu__list-item-link--active":"";return i.a.createElement("li",{className:"menu__list-item",key:t.path},i.a.createElement(m.Link,{to:t.path,className:"menu__list-item-link"+a,activeClassName:"menu__list-item-link menu__list-item-link--active"},t.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component),_=(a(172),a(173),function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.telegram,e.twitter,e.github),a=e.linkedin,n=(e.facebook,e.vk,e.rss,e.email);return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-linkedin"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"mailto:"+n},i.a.createElement("i",{className:"icon-mail"})))))},t}(i.a.Component)),b=a(163),E=a.n(b),g=(a(174),function(e){return i.a.createElement(m.StaticQuery,{query:k,render:function(t){var a=t.site.siteMetadata,n=a.author,r=a.subtitle,l=a.copyright,s=a.menu,c=i.a.createElement("div",null,i.a.createElement(m.Link,{to:"/"},i.a.createElement("img",{src:E.a,className:"sidebar__author-photo",width:"75",height:"75",alt:n.name})),i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(m.Link,{className:"sidebar__author-title-link",to:"/"},n.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},r));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},c),i.a.createElement("div",null,i.a.createElement(h,{data:s,menu:e.menu}),i.a.createElement(_,{data:n}),i.a.createElement("p",{className:"sidebar__copyright"},l))))},data:c})}),k="2195177324",f=(t.a=function(e){var t=e.children,a=e.pageTitle,r=e.hideSidebar,l=e.menu;return i.a.createElement(m.StaticQuery,{query:f,render:function(e){var n=e.site.siteMetadata,m=n.title,c=n.subtitle,o=r?"":i.a.createElement(g,{menu:l});return i.a.createElement("div",{className:"layout"},i.a.createElement(s.a,null,i.a.createElement("title",null,m," - ",a),i.a.createElement("meta",{name:"description",content:c})),o,t)},data:n})},"696331148")}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-d74685128c3581add4d7.js.map