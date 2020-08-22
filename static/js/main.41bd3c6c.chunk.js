(this.webpackJsonpdiscographiql=this.webpackJsonpdiscographiql||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(76),l=a.n(c),i=(a(93),a(40)),o=a(27),s=a(25),u=a(118),m=a(8),g=a(113),E={base:2,sm:3,lg:5},d=a(78),v=a(117),f=a(83);function h(e){var t=e.onQueryEntered;return r.a.createElement(d.a,{my:E},r.a.createElement(v.a,{size:"lg"},r.a.createElement(f.a,{type:"text",placeholder:"Search",onKeyDown:function(e){"Enter"===e.key&&t(e.currentTarget.value)}})))}var p=a(55),b=a(86),y=a(112),w=a(116),k=a(87),j=a(109),q=a(110),A=a(111);function S(e){var t=e.src,a=e.alt,c=e.fallBackSrc,l=Object(k.a)(e,["src","alt","fallBackSrc"]),o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1];return r.a.createElement(j.a,{isLoaded:u},r.a.createElement(q.a,Object.assign({},l,{backgroundColor:"gray.300"}),r.a.createElement(A.a,{src:t,alt:a,fallbackSrc:c,objectFit:"cover",opacity:u?1:0,transition:"opacity .3s",onLoad:function(){m(!0)}})))}function N(){var e=Object(p.a)(["\n  query Artists($partialName: String!) {\n    queryArtists(byName: $partialName) {\n      id\n      name\n      image\n    }\n  }\n"]);return N=function(){return e},e}var O=Object(o.gql)(N());function x(e){var t=e.query,a=e.onArtistSelected,n=Object(o.useQuery)(O,{variables:{partialName:t}}),c=n.loading,l=n.error,i=n.data;return c?r.a.createElement(b.a,null):l?r.a.createElement(y.a,null,"Something went wrong. Please try again later."):i&&0!==i.queryArtists.length?r.a.createElement(w.a,{columns:{base:2,sm:3,lg:5},spacing:E},i.queryArtists.map((function(e){return r.a.createElement(m.a,{key:e.id,textAlign:"center",onClick:function(){a(e)},cursor:"pointer"},r.a.createElement(S,{src:e.image,alt:e.name,ratio:1,maxW:"400px"}),r.a.createElement(g.a,{size:"sm",m:E},e.name))}))):r.a.createElement(y.a,null,"No search results.")}function B(e){var t=e.showing,a=e.onArtistSelected,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],s=l[1];return r.a.createElement(m.a,{d:t?"block":"none",m:E},r.a.createElement(g.a,null,"DiscographiQL"),r.a.createElement(h,{onQueryEntered:function(e){a(void 0),s(e)}}),!!o&&r.a.createElement(x,{query:o,onArtistSelected:a}))}var z=a(115),C=a(114);function Q(e){var t=e.artist;return r.a.createElement(m.a,{w:"100%",overflow:"hidden",backgroundColor:"#2e2e2e",pos:"relative"},r.a.createElement(A.a,{src:t.image,objectFit:"cover",w:"100%",h:"30vh",opacity:.2,style:{filter:"blur(3px)"}}),r.a.createElement(C.a,{pos:"absolute",alignItems:"center",justify:"center",w:"100%",h:"100%",top:0},r.a.createElement(g.a,{size:"2xl",color:"white"},t.name)))}function $(){var e=Object(p.a)(["\n  query ArtistPage($fullName: String!) {\n    queryArtists(byName: $fullName) {\n      id\n      albums {\n        id\n        name\n        image\n      }\n    }\n  }\n"]);return $=function(){return e},e}var I=Object(o.gql)($());function P(e){var t=e.artist,a=Object(o.useQuery)(I,{variables:{fullName:t.name}}),n=a.loading,c=a.error,l=a.data;if(n)return r.a.createElement(b.a,null);if(c)return r.a.createElement(y.a,null,"Something went wrong fetching this artist's discography. Please try again later.");if(l&&l.queryArtists.length>0){var i=l.queryArtists.find((function(e){return e.id===t.id}));if(i)return r.a.createElement(w.a,{columns:{base:2,sm:3,lg:5},spacing:E,margin:E},i.albums.map((function(e){var t=e.id,a=e.name,n=e.image;return r.a.createElement(m.a,{key:t,textAlign:"center"},r.a.createElement(S,{src:n,alt:a,ratio:1,maxW:"400px"}),r.a.createElement(g.a,{size:"md",mx:0,my:E},a))})))}return r.a.createElement(y.a,null,"No search results.")}function W(e){var t=e.artist,a=e.onNavigateBack;return r.a.createElement(m.a,null,r.a.createElement(L,{onNavigateBack:a}),r.a.createElement(Q,{artist:t}),r.a.createElement(P,{artist:t}))}function L(e){var t=e.onNavigateBack;return r.a.createElement(m.a,{pos:"absolute",zIndex:1},r.a.createElement(z.a,{"aria-label":"Back to search",icon:"arrow-back",onClick:t,variant:"ghost",size:"lg",color:"white",_hover:{bg:"transparent"},_active:{bg:"transparent"}}))}var D=new o.ApolloClient({uri:"https://spotify-graphql-server.herokuapp.com/graphql?",cache:new o.InMemoryCache});var F=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(o.ApolloProvider,{client:D},r.a.createElement(s.a,null,r.a.createElement(u.a,null),r.a.createElement(B,{onArtistSelected:function(e){c(e)},showing:!a}),a&&r.a.createElement(W,{artist:a,onNavigateBack:function(){c(void 0)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(107)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.41bd3c6c.chunk.js.map