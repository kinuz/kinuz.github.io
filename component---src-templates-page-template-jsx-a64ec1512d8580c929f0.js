(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=(a(168),a(163)),c=(a(215),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark;return l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content__inner"},l.a.createElement("div",{className:"page"},l.a.createElement("h1",{className:"page__title"},e.frontmatter.title),l.a.createElement("div",{className:"page__body",dangerouslySetInnerHTML:{__html:e.html}}))))},t}(l.a.Component));a.d(t,"pageQuery",function(){return o});var m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=(e.title,e.subtitle),a=this.props.data.markdownRemark.frontmatter,n=a.title,r=a.description,i=null!==r?r:t;return l.a.createElement(s.a,{pageTitle:n,descriptio:i,menu:this.props["*"]},l.a.createElement(c,this.props))},t}(l.a.Component),o=(t.default=m,"178699593")},162:function(e,t,a){"use strict";a(172);var n=a(165),r=a(0),i=a.n(r),l=a(56),s=a(7),c=a.n(s),m=(a(173),function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props.menu,t=i.a.createElement("ul",{className:"menu__list"},this.props.data.map(function(t){var a=_.lowerCase(t.label)===e?" menu__list-item-link--active":"";return i.a.createElement("li",{className:"menu__list-item",key:t.path},i.a.createElement(l.Link,{to:t.path,className:"menu__list-item-link"+a,activeClassName:"menu__list-item-link menu__list-item-link--active"},t.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component)),o=(a(174),a(175),function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.telegram,e.twitter,e.github),a=e.linkedin,n=(e.facebook,e.vk,e.rss,e.email);return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-linkedin"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"mailto:"+n},i.a.createElement("i",{className:"icon-mail"})))))},t}(i.a.Component)),u=a(166),p=a.n(u),d=(a(176),t.a=function(e){return i.a.createElement(l.StaticQuery,{query:d,render:function(t){var a=t.site.siteMetadata,n=a.author,r=a.subtitle,s=a.copyright,c=a.menu,u=i.a.createElement("div",null,i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:p.a,className:"sidebar__author-photo",width:"75",height:"75",alt:n.name})),i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(l.Link,{className:"sidebar__author-title-link",to:"/"},n.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},r));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},u),i.a.createElement("div",null,i.a.createElement(m,{data:c,menu:e.menu}),i.a.createElement(o,{data:n}),i.a.createElement("p",{className:"sidebar__copyright"},s))))},data:n})},"2195177324")},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),l=a(168),s=a.n(l),c=(a(170),a(171),a(56)),m=a(162);t.a=function(e){var t=e.children,a=e.pageTitle,r=e.hideSidebar,l=e.menu;return i.a.createElement(c.StaticQuery,{query:o,render:function(e){var n=e.site.siteMetadata,c=n.title,o=n.subtitle,u=r?"":i.a.createElement(m.a,{menu:l});return i.a.createElement("div",{className:"layout"},i.a.createElement(s.a,null,i.a.createElement("title",null,c," - ",a),i.a.createElement("meta",{name:"description",content:o})),u,t)},data:n})};var o="696331148"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},166:function(e,t,a){e.exports=a.p+"static/photo-268c2854102385c2f67aeb93d020af3c.png"}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-a64ec1512d8580c929f0.js.map