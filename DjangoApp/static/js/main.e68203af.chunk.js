(this["webpackJsonpspa-ui"]=this["webpackJsonpspa-ui"]||[]).push([[0],{30:function(a,t,e){},58:function(a,t,e){"use strict";e.r(t);var n=e(0),c=e.n(n),r=e(23),s=e.n(r),i=(e(30),e(14),e(8)),l=e(7),o=e.n(l),b=e(9),j=e(1);var d=function(){var a=Object(n.useState)([]),t=Object(i.a)(a,2),e=t[0],c=t[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(a){c(a.data)}))}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(j.jsx)("div",{className:"navbar-nav",children:e.map((function(a){return Object(j.jsxs)(b.b,{className:"nav-link",to:{pathname:"/category/".concat(a.id,"/"),fromDashboard:!1},children:[a.name," "]})}))})})]})})};var u=function(a){var t=a.match,e=Object(n.useState)([]),c=Object(i.a)(e,2),r=c[0],s=c[1],l=t.params.id;return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(l,"/")}).then((function(a){s(a.data)}))}),[l]),Object(j.jsxs)("div",{children:["Category with id ",r.id,Object(j.jsxs)("p",{children:["Category: ",Object(j.jsx)("strong",{children:r.name})]})]})},h=e(2);var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(h.c,{children:Object(j.jsx)(h.a,{path:"/category/:id",exact:!0,component:u})})]})})},v=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,59)).then((function(t){var e=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;e(a),n(a),c(a),r(a),s(a)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[58,1,2]]]);
//# sourceMappingURL=main.e68203af.chunk.js.map