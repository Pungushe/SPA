(this["webpackJsonpspa-ui"]=this["webpackJsonpspa-ui"]||[]).push([[0],{30:function(t,a,e){},58:function(t,a,e){"use strict";e.r(a);var c=e(0),n=e.n(c),s=e(23),r=e.n(s),i=(e(30),e(14),e(7)),o=e(8),b=e.n(o),j=e(6),l=e(1);var d=function(){var t=Object(c.useState)([]),a=Object(i.a)(t,2),e=a[0],n=a[1];return Object(c.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsx)("div",{className:"navbar-nav",children:e.map((function(t){return Object(l.jsxs)(j.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:[t.name," "]})}))})})]})})};var h=function(t){var a=t.match,e=Object(c.useState)({}),n=Object(i.a)(e,2),s=n[0],r=n[1],o=Object(c.useState)([]),d=Object(i.a)(o,2),h=d[0],u=d[1],p=a.params.id;return Object(c.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(p,"/")}).then((function(t){r(t.data),u(t.data.posts)}))}),[p]),Object(l.jsxs)("div",{children:["Category with id ",s.id,Object(l.jsxs)("p",{children:["Category: ",Object(l.jsx)("strong",{children:s.name})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{class:"row",children:h.map((function(t){t.title,t.content,t.id,j.b,"/post/".concat(t.id),t.id}))})]})};var u=function(t){var a=t.match,e=Object(c.useState)({}),n=Object(i.a)(e,2),s=n[0],r=n[1],o=a.params.id;return Object(c.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/post/".concat(o,"/")}).then((function(t){r(t.data)}))}),[o]),Object(l.jsxs)("div",{children:["Post with id ",s.id,Object(l.jsxs)("p",{children:["Title:",Object(l.jsx)("strong",{children:s.title})]})]})},p=e(2);var v=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{path:"/posts/:id",exact:!0,component:u}),Object(l.jsx)(p.a,{path:"/category/:id",exact:!0,component:h})]})]})})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,59)).then((function(a){var e=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;e(t),c(t),n(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),O()}},[[58,1,2]]]);
//# sourceMappingURL=main.8ed427da.chunk.js.map