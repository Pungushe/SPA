(this["webpackJsonpspa-ui"]=this["webpackJsonpspa-ui"]||[]).push([[0],{30:function(a,e,t){},58:function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),r=t(23),s=t.n(r),i=(t(30),t(14),t(8)),l=t(7),b=t.n(l),o=t(9),d=t(1);var j=function(){var a=Object(n.useState)([]),e=Object(i.a)(a,2),t=e[0],c=e[1];return Object(n.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/categories/"}).then((function(a){c(a.data)}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(d.jsx)("div",{className:"navbar-nav",children:t.map((function(a){return Object(d.jsxs)(o.b,{className:"nav-link",to:{pathname:"/category/".concat(a.id,"/"),fromDashboard:!1},children:[a.name," "]})}))})})]})})};var u=function(a){var e=a.match,t=Object(n.useState)([]),c=Object(i.a)(t,2),r=c[0],s=c[1],l=e.params.id;return Object(n.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/${id}"}).then((function(a){s(a.data)}))}),[l]),Object(d.jsxs)("div",{children:["Category with id ",r.id,Object(d.jsxs)("p",{children:["Category: ",Object(d.jsx)("strong",{children:r.name})]})]})},h=t(2);var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(h.c,{children:Object(d.jsx)(h.a,{path:"/category/:id",exact:!0,component:u})})]})})},v=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(a),n(a),c(a),r(a),s(a)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),v()}},[[58,1,2]]]);
//# sourceMappingURL=main.af2c55d7.chunk.js.map