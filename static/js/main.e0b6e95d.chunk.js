(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],{58:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(45),i=n.n(a),s=(n(58),n(7)),j=n(3),o=function(){return Object(j.jsx)("header",{style:{textAlign:"center"},children:Object(j.jsx)("h1",{children:"Spacestagram"})})},l=function(){var e=(new Date).getFullYear();return Object(j.jsxs)("footer",{style:{textAlign:"center"},children:[Object(j.jsx)("p",{children:"Built with the use of NASA's Astronomy Picture of the Day API service."}),Object(j.jsx)("p",{children:"Created by Daryl Nauman"}),Object(j.jsxs)("p",{children:["Copyright \xa9 ",e]})]})},u=n(89),x=n(93),h=n(92),b=n(91),d=n(88),p=n(48),O=n.n(p),f=n(47),g=n.n(f),m=function(e){var t=e.onLike,n=e.isLiked;return Object(j.jsx)(b.a,{sx:{mx:"auto",textAlign:"right",p:0},children:Object(j.jsx)(d.a,{onClick:t,"aria-label":"add to favorites",sx:{pr:1,pb:1,m:1},children:n?Object(j.jsx)(g.a,{sx:{color:"Red"},fontSize:"large"}):Object(j.jsx)(O.a,{sx:{color:"Red"},fontSize:"large"})})})},y=function(e){var t=e.title,n=e.url,r=e.explanation,a=e.date,i=Object(c.useState)(!1),o=Object(s.a)(i,2),l=o[0],b=o[1];return Object(j.jsxs)(u.a,{sx:{width:500,margin:2},children:[Object(j.jsx)(h.a,{component:"img",height:"35%",image:n,alt:t}),Object(j.jsxs)(x.a,{sx:{px:3,height:"55%"},children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("p",{children:a}),Object(j.jsx)("p",{children:r})]}),Object(j.jsx)(m,{sx:{height:"10%"},onLike:function(){b(!l)},isLiked:l})]})},v=function(e){var t=e.apods;return Object(j.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:t.map((function(e,t){return Object(j.jsx)(y,{title:e.title,url:e.url,explanation:e.explanation,date:e.date},t)}))})};n(64);var A=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),i=Object(s.a)(a,2),u=i[0],x=i[1];return Object(c.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?count=6&api_key=".concat("ErAT25DgRegQM8Gb3QHrGaVGFAi1qzINicHj2xrw")).then((function(e){return e.json()})).then((function(e){return r(e)})).then((function(){return x(!1)})).catch((function(e){return console.error(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o,{}),u?Object(j.jsx)("h1",{style:{textAlign:"center",marginTop:"2rem"},children:"Getting ready for launch! \ud83d\ude80"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{apods:n}),Object(j.jsx)(l,{})]})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.e0b6e95d.chunk.js.map