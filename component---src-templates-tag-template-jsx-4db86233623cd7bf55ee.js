(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"tagQuery",function(){return u});var n=a(0),r=a.n(n),i=a(164),l=a(165),s=a.n(l),c=a(181),m=a.n(c),o=a(203);t.default=function(e){var t=e.data,a=e.pageContext,n=a.tag,l=a.tag,c=t.allMarkdownRemark.edges;return r.a.createElement(i.a,{pageTitle:'All Posts tagged as "'+n+'"',menu:"tags"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__inner"},r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},'All Posts tagged as "',l,'"'),r.a.createElement("div",{className:"page__body"},s.a.map(c,function(e){return r.a.createElement("div",{key:e.node.id},m()(e.node.frontmatter.date).format("YYYY-MM-DD")," ",r.a.createElement(o.a,e))}))))))};var u="3516682482"},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"Try to write what I'm doing and 've done..",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Kinuz Blog",subtitle:"Try to write what I'm doing and 've done..",copyright:"© All rights reserved.",menu:[{label:"Posts",path:"/"},{label:"Tags",path:"/tags/"},{label:"Category",path:"/categories/"},{label:"About",path:"/about/"}],author:{name:"Kinuz",email:"kinuzy@gmail.com",telegram:"#",twitter:"#",github:"kinuz",linkedin:"kinuz",facebook:"#",rss:"#",vk:"#"}}}}}},163:function(e,t,a){e.exports=a.p+"static/photo-268c2854102385c2f67aeb93d020af3c.png"},164:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),l=a(167),s=a.n(l),c=(a(168),a(169),a(56)),m=(a(170),a(162)),o=a(7),u=a.n(o),d=(a(171),a(165)),p=a.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.menu,t=i.a.createElement("ul",{className:"menu__list"},this.props.data.map(function(t){var a=p.a.lowerCase(t.label)===e?" menu__list-item-link--active":"";return i.a.createElement("li",{className:"menu__list-item",key:t.path},i.a.createElement(c.Link,{to:t.path,className:"menu__list-item-link"+a,activeClassName:"menu__list-item-link menu__list-item-link--active"},t.label))}));return i.a.createElement("nav",{className:"menu"},t)},t}(i.a.Component),g=(a(172),a(173),function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.telegram,e.twitter,e.github),a=e.linkedin,n=(e.facebook,e.vk,e.rss,e.email);return i.a.createElement("div",{className:"links"},i.a.createElement("ul",{className:"links__list"},i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-github"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/"+a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"icon-linkedin"}))),i.a.createElement("li",{className:"links__list-item"},i.a.createElement("a",{href:"mailto:"+n},i.a.createElement("i",{className:"icon-mail"})))))},t}(i.a.Component)),E=a(163),b=a.n(E),_=(a(174),function(e){return i.a.createElement(c.StaticQuery,{query:f,render:function(t){var a=t.site.siteMetadata,n=a.author,r=a.subtitle,l=a.copyright,s=a.menu,m=i.a.createElement("div",null,i.a.createElement(c.Link,{to:"/"},i.a.createElement("img",{src:b.a,className:"sidebar__author-photo",width:"75",height:"75",alt:n.name})),i.a.createElement("h2",{className:"sidebar__author-title"},i.a.createElement(c.Link,{className:"sidebar__author-title-link",to:"/"},n.name)),i.a.createElement("p",{className:"sidebar__author-subtitle"},r));return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__inner"},i.a.createElement("div",{className:"sidebar__author"},m),i.a.createElement("div",null,i.a.createElement(h,{data:s,menu:e.menu}),i.a.createElement(g,{data:n}),i.a.createElement("p",{className:"sidebar__copyright"},l))))},data:m})}),f="2195177324",k=(t.a=function(e){var t=e.children,a=e.pageTitle,r=e.hideSidebar,l=e.menu;return i.a.createElement(c.StaticQuery,{query:k,render:function(e){var n=e.site.siteMetadata,c=n.title,m=n.subtitle,o=r?"":i.a.createElement(_,{menu:l});return i.a.createElement("div",{className:"layout"},i.a.createElement(s.a,null,i.a.createElement("title",null,c," - ",a),i.a.createElement("meta",{name:"description",content:m})),o,t)},data:n})},"696331148")},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.node,a=t.fields.slug;return r.a.createElement("a",{href:a,rel:"noreferrer noopener"},t.frontmatter.title)}}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-4db86233623cd7bf55ee.js.map