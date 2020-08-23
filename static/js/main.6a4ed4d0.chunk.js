(this.webpackJsonpdiscographiql=this.webpackJsonpdiscographiql||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(80),i=a.n(c),o=(a(97),a(35)),l=a(28),s=a(26),u=a(124),m=a(8),g=a(116),f={base:2,sm:3,lg:5},d=a(81),p=a(122),E=a(86);function v(e){var t=e.onQueryEntered;return r.a.createElement(d.a,{my:f},r.a.createElement(p.a,{size:"lg"},r.a.createElement(E.a,{type:"text",placeholder:"Search",onKeyDown:function(e){"Enter"===e.key&&t(e.currentTarget.value)}})))}var h=a(58),b=a(90),y=a(117),k=a(121),w=a(42),C=a(34),S=a(91),j=a(113),O=a(114),D=a(115);function q(e){var t=e.src,a=e.alt,c=e.fallBackSrc,i=Object(S.a)(e,["src","alt","fallBackSrc"]),l=Object(n.useState)(!1),s=Object(o.a)(l,2),u=s[0],m=s[1];return r.a.createElement(j.a,{isLoaded:u},r.a.createElement(O.a,Object.assign({},i,{backgroundColor:"gray.300"}),r.a.createElement(D.a,{src:t,alt:a,fallbackSrc:c,objectFit:"cover",opacity:u?1:0,transition:"opacity .3s",onLoad:function(){m(!0)}})))}function A(e){var t=e.node,a=e.icon,n=e.onClick,c=e.maxW,i=e.iconColor,o=void 0===i?"white":i,l=t.name,s=t.image;return r.a.createElement(m.a,{textAlign:"center",maxW:c},r.a.createElement(m.a,{pos:"relative",onClick:n,cursor:"pointer"},r.a.createElement(q,{src:s,alt:l,ratio:1}),r.a.createElement(x,{icon:a,color:o})),r.a.createElement(g.a,{size:"md",mx:0,my:f},l))}function x(e){var t=e.icon,a=e.color;return r.a.createElement(C.a,{w:"100%",h:"100%",pos:"absolute",top:0,bg:"black",color:a,opacity:0,_hover:{opacity:.8},transition:"opacity .3s"},r.a.createElement(m.a,{as:t,fontSize:"4rem",margin:"auto",height:"100%"}))}function N(){var e=Object(h.a)(["\n  query Artists($partialName: String!) {\n    queryArtists(byName: $partialName) {\n      id\n      name\n      image\n    }\n  }\n"]);return N=function(){return e},e}var z=Object(l.gql)(N());function B(e){var t=e.query,a=e.onArtistSelected,n=Object(l.useQuery)(z,{variables:{partialName:t}}),c=n.loading,i=n.error,o=n.data;return c?r.a.createElement(b.a,null):i?r.a.createElement(y.a,null,"Something went wrong. Please try again later."):o&&0!==o.queryArtists.length?r.a.createElement(k.a,{columns:{base:2,sm:3,lg:5},spacing:f},o.queryArtists.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(A,{node:e,maxW:"400px",icon:w.a,onClick:function(){a(e)}}))}))):r.a.createElement(y.a,null,"No search results.")}function F(e){var t=e.showing,a=e.onArtistSelected,c=Object(n.useState)(""),i=Object(o.a)(c,2),l=i[0],s=i[1];return r.a.createElement(m.a,{d:t?"block":"none",m:f},r.a.createElement(g.a,null,"DiscographiQL"),r.a.createElement(v,{onQueryEntered:function(e){a(void 0),s(e)}}),!!l&&r.a.createElement(B,{query:l,onArtistSelected:a}))}var W=a(120),Q=a(123),$=a(63),I=a(118),L=r.a.forwardRef((function(e,t){return r.a.createElement($.a,Object.assign({size:"md",ref:t,as:I.a},e))}));function P(e){var t=e.artist;return r.a.createElement(m.a,{w:"100%",overflow:"hidden",backgroundColor:"#2e2e2e",pos:"relative"},r.a.createElement(D.a,{src:t.image,objectFit:"cover",w:"100%",h:"30vh",opacity:.2,style:{filter:"blur(3px)"}}),r.a.createElement(Q.a,{pos:"absolute",alignItems:"center",justify:"center",w:"100%",h:"100%",top:0,spacing:3},r.a.createElement(g.a,{size:"2xl",color:"white"},t.name),r.a.createElement(L,{backgroundColor:"green.400",href:"https://open.spotify.com/artist/".concat(t.id),target:"_blank",rel:"noreferrer"},r.a.createElement(m.a,{as:w.b,mr:".5em",fontSize:"1.2em"}),"Listen")))}var _=a(89),J={sortDescending:!1,filterDuplicates:!1};function M(e,t){return!!e.find((function(e){return e.name===t.name}))?e:[].concat(Object(_.a)(e),[t])}var H=a(119);function K(e){var t=e.config,a=e.onFilterConfigChanged;return r.a.createElement(H.a,{spacing:4},r.a.createElement($.a,{variantColor:"gray",size:"sm",onClick:function(){return a({sortDescending:!t.sortDescending,filterDuplicates:t.filterDuplicates})}},t.sortDescending?"Sort ascending":"Sort descending"),r.a.createElement($.a,{variantColor:"gray",size:"sm",onClick:function(){return a({sortDescending:t.sortDescending,filterDuplicates:!t.filterDuplicates})}},t.filterDuplicates?"Show duplicate titles":"Hide duplicate titles"))}function R(){var e=Object(h.a)(["\n  query ArtistPage($fullName: String!) {\n    queryArtists(byName: $fullName) {\n      id\n      albums {\n        id\n        name\n        image\n      }\n    }\n  }\n"]);return R=function(){return e},e}var T=Object(l.gql)(R());function G(e){var t=e.artist,a=Object(l.useQuery)(T,{variables:{fullName:t.name}}),c=a.loading,i=a.error,s=a.data,u=Object(n.useState)(J),d=Object(o.a)(u,2),p=d[0],E=d[1],v=r.a.createElement(y.a,null,"No search results.");if(c)v=r.a.createElement(b.a,null);else if(i)v=r.a.createElement(y.a,null,"Something went wrong fetching this artist's discography. Please try again later.");else if(s&&s.queryArtists.length>0){var h=s.queryArtists.find((function(e){return e.id===t.id}));if(h){var C=function(e,t){var a,n,r=e;return t.filterDuplicates&&(r=e.reduce(M,[])),a=r,n=t.sortDescending,r=a.slice().sort((function(e,t){return n?t.name.localeCompare(e.name):e.name.localeCompare(t.name)}))}(h.albums,p);v=r.a.createElement(k.a,{columns:{base:2,sm:3,lg:5},spacing:f},C.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(A,{node:e,maxW:"400px",icon:w.b,iconColor:"green.400",onClick:function(){window.open("https://open.spotify.com/album/".concat(e.id))}}))})))}}return r.a.createElement(m.a,{textAlign:"center",margin:f},r.a.createElement(m.a,{my:10},r.a.createElement(g.a,{m:f},"Discography"),r.a.createElement(K,{config:p,onFilterConfigChanged:E})),v)}function U(e){var t=e.artist,a=e.onNavigateBack;return r.a.createElement(m.a,null,r.a.createElement(V,{onNavigateBack:a}),r.a.createElement(P,{artist:t}),r.a.createElement(G,{artist:t}))}function V(e){var t=e.onNavigateBack;return r.a.createElement(m.a,{pos:"absolute",zIndex:1},r.a.createElement(W.a,{"aria-label":"Back to search",icon:"arrow-back",onClick:t,variant:"ghost",size:"lg",color:"white",_hover:{bg:"transparent"},_active:{bg:"transparent"}}))}var X=new l.ApolloClient({uri:"https://spotify-graphql-server.herokuapp.com/graphql?",cache:new l.InMemoryCache});var Y=function(){var e=Object(n.useState)(void 0),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(l.ApolloProvider,{client:X},r.a.createElement(s.a,null,r.a.createElement(u.a,null),r.a.createElement(F,{onArtistSelected:function(e){c(e)},showing:!a}),a&&r.a.createElement(U,{artist:a,onNavigateBack:function(){c(void 0)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(110)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.6a4ed4d0.chunk.js.map