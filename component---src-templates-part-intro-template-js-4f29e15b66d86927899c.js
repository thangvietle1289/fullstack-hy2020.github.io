(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return L}),a.d(t,"partInfoQuery",function(){return S});a(456),a(67),a(46),a(226),a(458);var n=a(295),r=a(154),o=a(147),l=a(159),i=a(161),s=a(248),c=a.n(s),u=a(329),m=a(0),p=a.n(m),d=a(160),f=a(153),g=a(327),b=a.n(g),k=a(607),v=a.n(k),h=a(242),E=a.n(h),y=a(157),w=a.n(y),N=a(221),x=a.n(N),C=a(364),j=a(294),_=a.n(j),R=a(249),F=a.n(R);function L(e){var t=e.data.markdownRemark,a=t.frontmatter,s=t.html,m=a.mainImage,g=a.part,k=a.lang,h=v()(x.a[k][g])?[]:Object.keys(x.a[k][g]),y={replace:function(e){var t=e.type,a=e.attribs,n=e.children;if("tag"===t&&"intro"===a.class)return p.a.createElement("div",{className:"col-7"},b()(n,y))}};return p.a.createElement(i.a,null,p.a.createElement(d.a,{lang:k,title:"Fullstack "+("en"===k?"part":"osa")+g,description:E.a[k],keywords:[].concat(w.a,[x.a[k][g]?Object.values(x.a[k][g]):[]])}),p.a.createElement("div",{className:"spacing--after"},p.a.createElement(r.a,{className:"part-intro__banner spacing--mobile--small",style:{backgroundImage:"url("+_.a.resolve(m.publicURL)+")",backgroundColor:f[C.a[g]]}},p.a.createElement(o.a,{className:"container"},p.a.createElement(n.a,{className:"breadcrumb",content:[{backgroundColor:f[C.a[g]],text:"Fullstack",link:"/"+("en"===k?"en/":"")+"#course-contents"},{backgroundColor:f.black,text:("en"===k?"Part":"Osa")+" "+g}]}),p.a.createElement("div",{className:"part-intro col-7 col-10--mobile spacing--after-small"},c()(s,y)),h&&p.a.createElement(n.a,{wrapperClassName:"spacing--mobile--large",stack:!0,content:h.map(function(e){return{backgroundColor:f.white,letter:e,path:"/"+("en"===k?"en/part":"osa")+g+"/"+F()(x.a[k][g][e]),text:e+" "+x.a[k][g][e]}})}))),p.a.createElement(u.a,{part:g,lang:k})),p.a.createElement(l.a,{lang:k}))}var S="412899762"},153:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5"}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(28);var n=a(148),r=a.n(n),o=(a(162),a(4)),l=a.n(o),i=a(0),s=a.n(i),c=function(e){var t=e.className,a=e.backgroundColor,n=r()(e,["className","backgroundColor"]),o=a?{backgroundColor:a}:null;return s.a.createElement("div",Object.assign({className:"banner "+t,style:o},n))};c.defaultProps={className:""},c.propTypes={className:l.a.string}},157:function(e,t){e.exports=["fullstack","Full stack -websovelluskehitys","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi","university of helsinki","department of computer science","web development","software development","web","web application","single page app","programming"]},159:function(e,t,a){"use strict";a(163);var n=a(147),r=a(149),o=a(146),l=a(0),i=a.n(l),s=a(155),c=a.n(s),u=a(220),m=a(152),p=[{src:a.n(m).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(e){var t=e.lang;return i.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},i.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return i.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},i.a.createElement(r.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),i.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},i.a.createElement("div",{className:"footer__navigation-link-container"},u.b[t].map(function(e){return i.a.createElement(o.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},162:function(e,t,a){},163:function(e,t,a){},221:function(e,t){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"End to end -testaus"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria",c:"Redux-sovelluksen kommunikointi palvelimen kanssa",d:"connect"},7:{a:"React-router",b:"custom-hookit",c:"Lisää tyyleistä",d:"Webpack",e:"Luokkakomponentit, Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"}},en:{0:{a:"General info",b:"Fundamentals of Web apps"},1:{a:"Introduction to React",b:"Javascript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend",c:"User administration",d:"Token authentication"},5:{a:"Login in frontend",b:"props.children and proptypes",c:"Testing React apps",d:"End to end -testing"},6:{a:"Flux-architecture and Redux",b:"Many reducers",c:"Communicating with server in a redux application",d:"connect"},7:{a:"React-router",b:"Custom hooks",c:"More about styles",d:"Webpack",e:"Class components, Miscellaneous",f:"Exercises: extending the bloglist"},8:{a:"GraphQL-server",b:"React and GraphQL",c:"Database and user administration",d:"Login and updating the cache",e:"Fragments and subscriptions"},9:{a:"Background and introduction",b:"First steps with Typescript",c:"Typing the express app",d:"React with types"}}}},226:function(e,t,a){var n=a(30),r=a(29);a(239)("keys",function(){return function(e){return r(n(e))}})},239:function(e,t,a){var n=a(21),r=a(15),o=a(22);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],l={};l[e]=t(a),n(n.S+n.F*o(function(){a(1)}),"Object",l)}},242:function(e,t){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},295:function(e,t,a){"use strict";a(28),a(246),a(297);var n=a(148),r=a.n(n),o=(a(298),a(147)),l=a(146),i=a(4),s=a.n(i),c=a(0),u=a.n(c),m=a(153),p=function(e){var t,a=e.className,n=e.wrapperClassName,i=e.link,s=e.content,c=e.stack,p=e.bold,d=e.thickBorder,f=e.upperCase,g=r()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),b=u.a.createElement("div",{className:"arrow__container arrows--horizontal "+a},s.map(function(e,t){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement("div",Object.assign({key:"arrow"+t,className:"arrow__wrapper"},g),u.a.createElement("div",{className:"arrow__rectangle "+(p?"bold":"")+" "+(d?"arrow__rectangle--thick-border":""),style:a},e.link?u.a.createElement(l.Link,{to:e.link},f?e.text.toUpperCase():e.text):f?e.text.toUpperCase():e.text),u.a.createElement("div",{className:"arrow__point "+(d?"arrow__point--thick-border":""),style:a}))}));return c||i?!c&&i?t=u.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},u.a.createElement(l.Link,{to:i,style:{display:"inline-block"}},b)):c&&(t=u.a.createElement("div",{className:"col-10 spacing--after "+n},u.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map(function(e){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===m.black?"white":m.black};return u.a.createElement(l.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+a},g),u.a.createElement(o.a,{flex:!0,className:"arrow__rectangle",style:t},u.a.createElement("p",{className:"arrow--stacked-title"},u.a.createElement("span",null,e.text))),u.a.createElement("div",{className:"arrow__point",style:t}))})))):t=u.a.createElement("div",{className:"col-10 spacing--after"},b),t};p.propTypes={className:s.a.string,wrapperClassName:s.a.string,link:s.a.string,content:s.a.array.isRequired,stack:s.a.bool,upperCase:s.a.bool,bold:s.a.bool,thickBorder:s.a.bool},p.defaultProps={className:"",wrapperClassName:""},t.a=p},297:function(e,t,a){"use strict";a(296)("link",function(e){return function(t){return e(this,"a","href",t)}})},298:function(e,t,a){},299:function(e,t,a){"use strict";var n=a(10);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},329:function(e,t,a){"use strict";a(330),a(67),a(46),a(226),a(332),a(333),a(336);var n=a(147),r=a(146),o=a(4),l=a(0),i=a.n(l),s=a(221),c=a.n(s),u=a(249),m=a.n(u),p=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},d=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},f=function(e,t){return Object.keys(c.a[t]).includes(e.toString())},g=function(e,t,a){return d(e)in c.a[a][t]},b=function(e,t,a){return!e&&f(t+1,a)||e&&g(e,t,a)},k=function(e){return"en"===e?"Part":"Osa"},v=function(e){return"en"===e?"Previous part":"Edellinen osa"},h=function(e){return"en"===e?"Next part":"Seuraava osa"},E=function(e){return"/"+("en"===e?"en/part":"osa")},y=function(e){var t=e.part,a=e.letter,o=e.lang;return i.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!a&&f(t-1,o)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(o)+(t-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(o)," ",t-1),i.a.createElement("b",null,v(o)))),b(a,t,o)&&i.a.createElement("div",{className:"col-1--mobile separator"})):a?"a"!==a?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(o)+t+"/"+m()(c.a[o][t][p(a)]),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(o)," ",""+t+p(a)),i.a.createElement("b",null,v(o)))),b(a,t,o)&&i.a.createElement("div",{className:"col-1--mobile separator"})):f(t-1,o)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+E(o)+(t-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(o)," ",t-1),i.a.createElement("b",null,v(o)))),b(a,t,o)&&i.a.createElement("div",{className:"col-1--mobile separator"})):i.a.createElement(n.a,{className:"push-right-1"}):i.a.createElement(n.a,{className:"push-right-1"}),!a&&f(t+1,o)?i.a.createElement(r.Link,{to:""+E(o)+(t+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(o)," ",t+1),i.a.createElement("b",null,h(o)))):a?g(a,t,o)?i.a.createElement(r.Link,{to:""+E(o)+t+"/"+m()(c.a[o][t][d(a)]),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(o)," ",""+t+d(a)),i.a.createElement("b",null,h(o)))):f(t+1,o)?i.a.createElement(r.Link,{to:""+E(o)+(t+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(n.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,k(o)," ",t+1),i.a.createElement("b",null,h(o)))):i.a.createElement(n.a,{className:"push-left-1"}):i.a.createElement(n.a,{className:"push-left-1"}))};y.defaultProps={part:void 0,letter:void 0},y.propTypes={part:o.PropTypes.number,letter:o.PropTypes.string,lang:o.PropTypes.string.isRequired},t.a=y},330:function(e,t,a){"use strict";a(331);var n=a(10),r=a(299),o=a(14),l=/./.toString,i=function(e){a(16)(RegExp.prototype,"toString",e,!0)};a(22)(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=l.name&&i(function(){return l.call(this)})},331:function(e,t,a){a(14)&&"g"!=/./g.flags&&a(23).f(RegExp.prototype,"flags",{configurable:!0,get:a(299)})},332:function(e,t,a){"use strict";var n=a(21),r=a(68)(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(48)("includes")},333:function(e,t,a){"use strict";var n=a(21),r=a(334);n(n.P+n.F*a(335)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},334:function(e,t,a){var n=a(72),r=a(24);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},335:function(e,t,a){var n=a(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}},336:function(e,t,a){},364:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise",9:"light-green"}},456:function(e,t,a){var n=a(21),r=a(457)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},457:function(e,t,a){var n=a(29),r=a(32),o=a(73).f;e.exports=function(e){return function(t){for(var a,l=r(t),i=n(l),s=i.length,c=0,u=[];s>c;)o.call(l,a=i[c++])&&u.push(e?[a,l[a]]:l[a]);return u}}},458:function(e,t,a){},607:function(e,t,a){var n=a(337)("isEmpty",a(608),a(363));n.placeholder=a(311),e.exports=n},608:function(e,t,a){var n=a(353),r=a(293),o=a(317),l=a(223),i=a(354),s=a(318),c=a(319),u=a(349),m="[object Map]",p="[object Set]",d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(l(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||o(e)))return!e.length;var t=r(e);if(t==m||t==p)return!e.size;if(c(e))return!n(e).length;for(var a in e)if(d.call(e,a))return!1;return!0}}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-4f29e15b66d86927899c.js.map