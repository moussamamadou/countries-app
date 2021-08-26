(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{49:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(16),s=c.n(a),r=(c(49),c(15)),i=c(4),l=c(38),j=c.n(l),o=c(39),u=c.n(o),b=c(6),d=c(2),O=Object(n.createContext)(null),h=function(e){var t=e.children,c=Object(n.useState)(!1),a=Object(b.a)(c,2),s=a[0],r=a[1],i=Object(n.useRef)(0);Object(n.useEffect)((function(){localStorage.getItem("themeDark")?r(JSON.parse(localStorage.getItem("themeDark"))):localStorage.setItem("themeDark",!1)}),[]),Object(n.useEffect)((function(){localStorage.setItem("themeDark",s),2===i.current&&l(),i.current+=1}),[s]);var l=function(){document.getElementById("root").classList.remove("no-transition")},j={themeDark:s,setThemeDark:r};return Object(d.jsx)(O.Provider,{value:j,children:Object(d.jsx)("div",{className:"App ".concat(j.themeDark?"dark":"light"),children:t})})};var x=function(e){e.darkTheme;var t=Object(n.useContext)(O);return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(r.b,{to:"/",className:"header-title",children:"Where in the world ?"}),Object(d.jsx)("div",{className:"theme-toggle",onClick:function(){t.setThemeDark(!t.themeDark)},children:t.themeDark?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.a,{})," ",Object(d.jsx)("span",{children:" Light Mode"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a,{})," ",Object(d.jsx)("span",{children:" Dark Mode "})]})})]})})},p=c(34),m=c(33),v=c.n(m),f=c(40),g=function(){var e=Object(f.a)(v.a.mark((function e(){var t,c,n,a=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"all",c="",e.prev=2,c="all"===t?"https://restcountries.eu/rest/v2/all":"https://restcountries.eu/rest/v2/alpha/"+t.toUpperCase(),e.next=6,fetch(c).then((function(e){if(e.ok)return e.json();console.log("Fetch Resolved but response not ok ! Status : ",e.status)})).then((function(e){return e})).catch((function(e){console.log("Error on fetch all countries : ",e)}));case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(2),console.log("Global Error on getCountryData() : ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();var N=function(e){var t,c=e.country;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"country-thumbnail",children:Object(d.jsxs)(r.b,{to:"/".concat(c.code),className:"country-link",children:[Object(d.jsx)("img",{src:"".concat(c.flag),alt:"USA",className:"thumbnail-image"}),Object(d.jsxs)("div",{className:"thumbnail-detail",children:[Object(d.jsx)("h3",{className:"thumbnail-title",children:c.name}),Object(d.jsxs)("p",{children:["Population : ",Object(d.jsx)("span",{children:null===(t=c.population)||void 0===t?void 0:t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")})," "]}),Object(d.jsxs)("p",{children:["Region : ",Object(d.jsx)("span",{children:c.region})]}),Object(d.jsxs)("p",{children:["Capital : ",Object(d.jsx)("span",{children:c.capital})," "]})]})]})})})},S=Object(n.createContext)(null);var y=function(e){var t=e.children,c=Object(n.useState)(""),a=Object(b.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(""),l=Object(b.a)(i,2),j={searchInput:s,setSearchInput:r,filterInput:l[0],setFilterInput:l[1]};return Object(d.jsx)(S.Provider,{value:j,children:t})},k=c(28),C=c.n(k);var I=function(){var e=Object(n.useRef)([]),t=Object(n.useState)([]),c=Object(b.a)(t,2),a=c[0],s=c[1],r=Object(n.useContext)(S),i=r.searchInput,l=r.filterInput,j=Object(n.useState)(!0),o=Object(b.a)(j,2),u=o[0],O=o[1];return Object(n.useEffect)((function(){localStorage.getItem("countries")?(e.current=Object(p.a)(JSON.parse(localStorage.getItem("countries"))),s(JSON.parse(localStorage.getItem("countries"))),O(!1)):g().then((function(t){var c=t.map((function(e){return{code:e.alpha3Code,name:e.name,population:e.population,region:e.region,capital:e.capital,flag:e.flag}}));e.current=Object(p.a)(c),s(c),localStorage.setItem("countries",JSON.stringify(c)),O(!1)}))}),[]),Object(n.useEffect)((function(){var t=e.current.filter((function(e){return!!e.name.toLowerCase().includes(i.toLowerCase())&&(""===l||"All"===l||e.region===l)}));s(t)}),[i,l]),Object(d.jsx)("div",{className:"country-list",children:u?Object(d.jsxs)("div",{className:"is-loading",children:[Object(d.jsx)(C.a,{})," "]}):0===a.length?Object(d.jsx)("div",{className:"no-country",children:" '\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb Try again. You might find it \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb'"}):null===a||void 0===a?void 0:a.map((function(e){return Object(d.jsx)(N,{country:e},e.code)}))})},D=c(43),E=c(41),A=c.n(E),w=[{value:"All",label:"All"},{value:"Africa",label:"Africa"},{value:"Americas",label:"Americas"},{value:"Asia",label:"Asia"},{value:"Europe",label:"Europe"},{value:"Oceania",label:"Oceania"}];var F=function(){var e=Object(n.useContext)(S),t=e.searchInput,c=e.setSearchInput,a=e.setFilterInput;return Object(d.jsxs)("div",{className:"search-wrapper",children:[Object(d.jsxs)("div",{className:"search-input",children:[Object(d.jsx)(A.a,{}),Object(d.jsx)("input",{type:"text",id:"search",name:"search",placeholder:"Search for a country ...",value:t,onChange:function(e){return c(e.target.value)}})]}),Object(d.jsx)("div",{className:"search-filter",children:Object(d.jsx)(D.a,{options:w,placeholder:"Filter by Region",onChange:function(e){return a(e.value)}})})]})};var R=function(){return Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(y,{children:[Object(d.jsx)(F,{}),Object(d.jsx)(I,{})]})})})},L=c(42),J=c.n(L);var T=function(){var e,t=Object(i.g)().code,c=Object(i.f)(),a=Object(n.useState)([]),s=Object(b.a)(a,2),l=s[0],j=s[1],o=Object(n.useState)([]),u=Object(b.a)(o,2),O=u[0],h=u[1],x=Object(n.useState)(""),p=Object(b.a)(x,2),m=p[0],v=p[1],f=Object(n.useState)(""),N=Object(b.a)(f,2),S=N[0],y=N[1],k=Object(n.useState)([]),I=Object(b.a)(k,2),D=I[0],E=I[1],A=Object(n.useState)(!0),w=Object(b.a)(A,2),F=w[0],R=w[1],L=Object(n.useState)(!0),T=Object(b.a)(L,2),B=T[0],P=T[1];return Object(n.useEffect)((function(){g(t).then((function(e){try{var t,c,n,a="",s="",r={code:e.alpha3Code,name:e.name,population:e.population,region:e.region,capital:e.capital,flag:e.flag,nativeName:e.nativeName,subRegion:e.subregion};null===(t=e.currencies)||void 0===t||t.forEach((function(e,t){t>0&&(a+=", "),a+=e.name})),null===(c=e.languages)||void 0===c||c.forEach((function(e,t){t>0&&(s+=", "),s+=e.name})),h(null===(n=e.topLevelDomain)||void 0===n?void 0:n.toString()),E(e.borders),v(a),y(s),j(r),R(!1)}catch(i){R(!1),P(!1)}}))}),[t]),Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"btn-container",children:Object(d.jsxs)("button",{onClick:function(){c.goBack()},className:"btn-previous",children:[Object(d.jsx)(J.a,{})," Back"]})}),F?Object(d.jsxs)("div",{className:"is-loading",children:[Object(d.jsx)(C.a,{})," "]}):Object(d.jsx)("div",{className:"country-wrapper",children:B?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"country-image",children:Object(d.jsx)("img",{src:"".concat(l.flag),alt:"France"})}),Object(d.jsxs)("div",{className:"country-details",children:[Object(d.jsx)("h2",{className:"country-title",children:l.name}),Object(d.jsxs)("div",{className:"country-infos",children:[Object(d.jsxs)("div",{className:"info-first",children:[Object(d.jsxs)("p",{children:["Native Name : ",Object(d.jsx)("span",{children:l.nativeName})," ",Object(d.jsx)("br",{})," "]}),Object(d.jsxs)("p",{children:["Population : ",Object(d.jsx)("span",{children:null===(e=l.population)||void 0===e?void 0:e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")})," ",Object(d.jsx)("br",{})]}),Object(d.jsxs)("p",{children:["Region : ",Object(d.jsx)("span",{children:l.region})," ",Object(d.jsx)("br",{})]}),Object(d.jsxs)("p",{children:["Sub Region : ",Object(d.jsx)("span",{children:l.subRegion})," ",Object(d.jsx)("br",{})]}),Object(d.jsxs)("p",{children:["Capital : ",Object(d.jsx)("span",{children:l.capital})," ",Object(d.jsx)("br",{})]})]}),Object(d.jsxs)("div",{className:"info-second",children:[Object(d.jsxs)("p",{children:["Top Level Domain : ",Object(d.jsxs)("span",{children:[" ",O]})," ",Object(d.jsx)("br",{})," "]}),Object(d.jsxs)("p",{children:["Currencies:",Object(d.jsxs)("span",{children:[" ",m]}),Object(d.jsx)("br",{})," "]}),Object(d.jsxs)("p",{children:["Languages:",Object(d.jsxs)("span",{children:[" ",S]}),"  ",Object(d.jsx)("br",{})]})]})]}),Object(d.jsxs)("div",{className:"country-borders",children:[Object(d.jsx)("p",{children:" Border Countries : "}),Object(d.jsx)("div",{className:"link-list",children:null===D||void 0===D?void 0:D.map((function(e,t){return Object(d.jsx)(r.b,{className:"country-link",to:"/".concat(e),children:e},t)}))})]})]})]}):Object(d.jsx)("div",{className:"no-country",children:"\ud83d\udc7b This country is a myth. \ud83d\udc7d"})})]})})};var B=function(){return Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"no-country",children:"\u2620\ufe0f Somebody is lost in no man's land. \u2620\ufe0f"})})})};var P=function(){return Object(d.jsx)(h,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(x,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,children:Object(d.jsx)(R,{})}),Object(d.jsx)(i.a,{path:"/:code",exact:!0,children:Object(d.jsx)(T,{})}),Object(d.jsx)(i.a,{path:"*",children:Object(d.jsx)(B,{})})]})]})})};s.a.render(Object(d.jsx)(P,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.debba031.chunk.js.map