"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[976],{976:function(e,t,r){r.r(t),r.d(t,{default:function(){return X}});var n,o=r(9439),a=r(2791),s=r(4087),c=r(5946),l=r(4270),i=r(3591),d=r(9911),u=r(9565),x=r(2834),p=r(3541),h=r(9683),m=r(896),j=r(176),b=r(9229),f=r(4464),g=r(7281),C=r(4224),_=r(6856),y=r(5969),v=r(3329),w=function(e){var t=e.id,r=e.name,n=e.number,o=(0,d.T)();return(0,v.jsxs)(p.HC,{className:"contactItem",p:3,border:"1px dotted",borderColor:"accent.300",borderRadius:"md",maxW:{md:"300px",lg:"500px"},minW:"250px",_hover:{borderColor:"white",transform:"translate(1px, 1px)"},_focus:{borderColor:"white",transform:"translate(1px, 1px)"},children:[(0,v.jsxs)(j.k,{className:"contactItem__name",alignItems:"center",justify:"space-between",flexWrap:"wrap",mb:3,children:[(0,v.jsx)(p.DE,{as:_.e5n,m:0}),(0,v.jsxs)(b.x,{ml:"10px",children:[r,":"]}),(0,v.jsx)(f.L,{}),(0,v.jsx)(b.x,{className:"contactItem__number",children:n})]}),(0,v.jsx)(g.i,{borderColor:"purple.700",mb:3}),(0,v.jsx)(m.M,{children:(0,v.jsx)(C.z,{type:"button",className:"contactItem__button",value:t,onClick:function(e){o((0,i.GK)(t))},leftIcon:(0,v.jsx)(y.p,{}),size:{base:"xs",md:"md"},colorScheme:"purple",_hover:{color:"purple.700",bgColor:"white",border:"1px solid purple"},_focus:{color:"purple.700",bgColor:"white",border:"1px solid purple"},children:"Delete"})})]})},k=r(6048),N=r.n(k),S=r(168),F=r(8789).ZP.div(n||(n=(0,S.Z)(["\n  padding: 20px;\n  .contactsPaginate {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 15px;\n\n    & > li {\n      list-style: none;\n      &.selected {\n        color: #805ad5;\n      }\n      &.disabled {\n        opacity: 0;\n      }\n    }\n  }\n"]))),Z=function(e){var t=e.pageCount,r=e.setPage;return(0,v.jsx)(F,{children:(0,v.jsx)(N(),{breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var t=e.selected+1;r(t)},pageRangeDisplayed:3,pageCount:t,previousLabel:"< previous",className:"contactsPaginate"})})},A=r(2240),L=r(751),I=r(3676),T=function(){return(0,v.jsxs)(L.K,{p:"[5,null,10,20]",children:[(0,v.jsx)(I.O,{h:"8",startColor:"blue.800",endColor:"gray.300"}),(0,v.jsx)(I.O,{h:"8",startColor:"blue.500",endColor:"gray.300"}),(0,v.jsx)(I.O,{h:"8",startColor:"cyan.500",endColor:"gray.300"}),(0,v.jsx)(I.O,{h:"8",startColor:"teal.300",endColor:"gray.300"}),(0,v.jsx)(I.O,{h:"8",startColor:"green.400",endColor:"gray.300"}),(0,v.jsx)(I.O,{h:"8",startColor:"pink.700",endColor:"regray.300d"}),(0,v.jsx)(I.O,{h:"8",startColor:"purple.600",endColor:"gray.300"})]})},z=function(e){return e.contacts.data},P=function(e){return e.contacts.isLoading},M=function(e){var t=e.query,r=(0,a.useState)(1),n=(0,o.Z)(r,2),c=n[0],l=n[1],i=(0,a.useState)([]),d=(0,o.Z)(i,2),x=d[0],j=d[1],b=function(e,t){return t?e.filter((function(e){return e.name.includes(t)})):e}((0,u.C)(z),t),f=(0,u.C)(P),g=Math.ceil(b.length/10);return(0,a.useEffect)((function(){var e=b.slice(0+10*(c-1),9+10*(c-1)+1);j(e)}),[c,b]),(0,v.jsx)(s.xu,{as:"section",className:"section section--contactList",children:(0,v.jsx)(A.Z,{children:(0,v.jsxs)(p.aV,{className:"contactList",p:3,spacing:2,children:[(0,v.jsxs)(h.M,{minChildWidth:"250px",spacing:{base:"2",md:"4"},children:[f&&(0,v.jsx)(T,{}),x.length>0&&x.map((function(e){var t=e.id,r=void 0===t?"":t,n=e.name,o=e.number;return(0,v.jsx)(m.M,{children:(0,v.jsx)(w,{id:r,name:n,number:o})},r)}))]}),g>1&&(0,v.jsx)(Z,{pageCount:g,setPage:l})]})})})};var O=r(7886),q=function(e){var t=e.getQuery;return(0,v.jsx)(A.Z,{children:(0,v.jsx)(m.M,{children:(0,v.jsx)(O.I,{type:"text",placeholder:"Enter your filter query",onChange:function(e){t(e.target.value)},maxW:{md:"400px",lg:"600px"},textAlign:"center",cursor:"pointer",borderRadius:"md",_hover:{color:"white",backgroundColor:"accent.500",_placeholder:{color:"white"}},_focus:{color:"white",backgroundColor:"accent.500",_placeholder:{color:"white"}}})})})},E=r(972),W=r(1016),D=r(1352),K=r(6117),R=r(8092),B=r(8206),Q=r(4585),G=function(){var e=(0,d.T)();return(0,v.jsx)(s.xu,{as:"section",className:"section section--contactForm",children:(0,v.jsx)(B.W,{className:"container",children:(0,v.jsxs)("form",{className:"contactForm",onSubmit:function(t){t.preventDefault();var r=t.currentTarget,n=r.elements.name.value,o=r.elements.number.value;n&&o&&(e((0,i.uK)({name:n,number:o})),r.reset())},children:[(0,v.jsxs)(Q.l,{mb:3,cursor:"pointer",_hover:{textShadow:"accentTextShadow2"},_focus:{textShadow:"accentTextShadow2"},children:[(0,v.jsx)(b.x,{className:"contactForm__FormLabel-text",children:"Name"}),(0,v.jsx)(O.I,{type:"text",className:"contactForm__input",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter your name",_hover:{borderColor:"accent2.700"},_focus:{borderColor:"accent2.700"}})]}),(0,v.jsxs)(Q.l,{mb:3,cursor:"pointer",_hover:{textShadow:"accentTextShadow2"},_focus:{textShadow:"accentTextShadow2"},children:[(0,v.jsx)(b.x,{className:"contactForm__FormLabel-text",children:"Number"}),(0,v.jsx)(O.I,{type:"tel",className:"contactForm__input",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter your phone number",_hover:{borderColor:"accent2.700"},_focus:{borderColor:"accent2.700"}})]}),(0,v.jsx)(m.M,{children:(0,v.jsx)(C.z,{type:"submit",className:"contactForm__button",colorScheme:"purple",_hover:{color:"purple.700",bgColor:"white",border:"1px solid purple"},_focus:{color:"purple.700",bgColor:"white",border:"1px solid purple"},children:"Add contact"})})]})})})},H=function(){return(0,v.jsx)(E.U,{allowToggle:!0,children:(0,v.jsxs)(W.Q,{pl:2,pr:2,children:[(0,v.jsxs)(D.K,{mb:[2,2,3,4],borderRadius:"md",_hover:{color:"white",backgroundColor:"accent.500"},children:[(0,v.jsx)(_.BB4,{}),(0,v.jsx)(b.x,{ml:5,children:"Add contact"}),(0,v.jsx)(f.L,{}),(0,v.jsx)(K.X,{})]}),(0,v.jsx)(R.H,{children:(0,v.jsx)(G,{})})]})})},X=function(){var e=(0,a.useState)(null),t=(0,o.Z)(e,2),r=t[0],n=t[1],p=(0,u.C)(x.nk).token,h=(0,d.T)();return(0,a.useEffect)((function(){p&&h((0,i.yF)())}),[h,p]),(0,v.jsxs)(s.xu,{className:"contactPage",pt:[3,3,4,5],fontFamily:"contactsFont",flexGrow:1,children:[(0,v.jsxs)(l.q,{children:[(0,v.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,v.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,v.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Alkatra:wght@400;700&display=swap",rel:"stylesheet"})]}),(0,v.jsxs)(A.Z,{children:[(0,v.jsx)(c.X,{mb:[2,2,3,4],fontSize:"xl",textAlign:"center",children:"Your contacts"}),(0,v.jsx)(H,{})]}),(0,v.jsx)(q,{getQuery:function(e){n(e)}}),(0,v.jsx)(M,{query:r})]})}}}]);
//# sourceMappingURL=976.2429042f.chunk.js.map