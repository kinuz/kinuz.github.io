(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(161),c=a.n(s),m=a(162),o=a(164),u=(a(251),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark;return l.a.createElement("div",null,l.a.createElement(o.a,this.props),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content__inner"},l.a.createElement("div",{className:"page"},l.a.createElement("h1",{className:"page__title"},e.frontmatter.title),l.a.createElement("div",{className:"page__body",dangerouslySetInnerHTML:{__html:e.html}})))))},t}(l.a.Component));a.d(t,"pageQuery",function(){return d});var p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,a=e.subtitle,n=this.props.data.markdownRemark.frontmatter,r=n.title,i=n.description,s=null!==i?i:a;return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement("title",null,r+" - "+t),l.a.createElement("meta",{name:"description",content:s})),l.a.createElement(u,this.props)))},t}(l.a.Component),d=(t.default=p,"178699593")},162:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(161),c=a.n(s),m=(a(166),a(167),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"layout"},l.a.createElement(c.a,{defaultTitle:"Blog by Kinuz"}),e)},t}(l.a.Component));t.a=m},163:function(e,t,a){e.exports=a.p+"static/photo-268c2854102385c2f67aeb93d020af3c.png"},164:function(e,t,a){"use strict";a(168);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(169),c=a.n(s),m=a(56),o=(a(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=l.a.createElement("ul",{className:"menu__list"},e.map(function(e){return l.a.createElement("li",{className:"menu__list-item",key:e.path},l.a.createElement(m.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return l.a.createElement("nav",{className:"menu"},t)},t}(l.a.Component)),u=(a(171),a(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.telegram,e.twitter,e.github),a=e.linkedin,n=(e.facebook,e.vk,e.rss,e.email);return l.a.createElement("div",{className:"links"},l.a.createElement("ul",{className:"links__list"},l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/"+a,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-linkedin"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"mailto:"+n},l.a.createElement("i",{className:"icon-mail"})))))},t}(l.a.Component)),p=a(163),d=a.n(p),h=(a(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,i=t.menu,s="/"===c()(e,"pathname","/"),p=l.a.createElement("div",null,l.a.createElement(m.Link,{to:"/"},l.a.createElement("img",{src:d.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),s?l.a.createElement("h1",{className:"sidebar__author-title"},l.a.createElement(m.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):l.a.createElement("h2",{className:"sidebar__author-title"},l.a.createElement(m.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),l.a.createElement("p",{className:"sidebar__author-subtitle"},n));return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar__inner"},l.a.createElement("div",{className:"sidebar__author"},p),l.a.createElement("div",null,l.a.createElement(o,{data:i}),l.a.createElement(u,{data:a}),l.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(l.a.Component));t.a=h}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-6a6171541cf1641d383b.js.map