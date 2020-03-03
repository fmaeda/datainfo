(this.webpackJsonpponto=this.webpackJsonpponto||[]).push([[0],{26:function(n,e,t){n.exports=t(35)},31:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(19),c=t.n(o),i=(t(31),t(3)),l=t(4),u=t(13),s=t(16),d=t.n(s),f=t(2),m=t(17),p=t(14),v=t(22),b=t(7),O=t(8),h=t(9),g=t(11),j=t(10),E=t(12),y=t(25);function x(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: 20px;\n"]);return x=function(){return n},n}function k(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: dashed gray;\n  border-radius: 8px;\n  width: 40vw;\n  height: 40vh;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(i.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return S=function(){return n},n}var w,M,R=l.a.div(S()),C=l.a.div(k()),A=l.a.div(x());!function(n){n.JANEIRO="01",n.FEVEREIRO="02",n.MARCO="03",n.ABRIL="04",n.MAIO="05",n.JUNHO="06",n.JULHO="07",n.AGOSTO="08",n.SETEMBRO="09",n.OUTUBRO="10",n.NOVEMBRO="11",n.DEZEMBRO="12"}(M||(M={}));var B=(w={},Object(f.a)(w,M.JANEIRO,"Janeiro"),Object(f.a)(w,M.FEVEREIRO,"Fevereiro"),Object(f.a)(w,M.MARCO,"Mar\xe7o"),Object(f.a)(w,M.ABRIL,"Abril"),Object(f.a)(w,M.MAIO,"Maio"),Object(f.a)(w,M.JUNHO,"Junho"),Object(f.a)(w,M.JULHO,"Julho"),Object(f.a)(w,M.AGOSTO,"Agosto"),Object(f.a)(w,M.SETEMBRO,"Setembro"),Object(f.a)(w,M.OUTUBRO,"Outubro"),Object(f.a)(w,M.NOVEMBRO,"Novembro"),Object(f.a)(w,M.DEZEMBRO,"Dezembro"),w);function U(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  border: solid lightgray 1px;\n  border-radius: 4px;\n  margin: 0 8px;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n  padding: 8px;\n  background: ",";\n\n  > span {\n    font-size: 12px;\n    :first-child {\n      font-size: 20px;\n    }\n  }\n\n  :hover {\n    background: silver;\n  }\n"]);return U=function(){return n},n}var J=l.a.div(U(),(function(n){return n.active?"silver":"unset"})),D=function(n){function e(){return Object(O.a)(this,e),Object(g.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=this.props,e=n.active,t=n.onClick,a=n.filtro;return r.a.createElement(J,{active:e,onClick:function(){return t(a)}},r.a.createElement("span",null,B[a.mes]),r.a.createElement("span",null,a.ano))}}]),e}(r.a.Component),I=t(24),F=t.n(I);function N(){var n=Object(i.a)(["\n  flex: 1;\n  th {\n    background: lightgray;\n    padding: 4px 8px;\n    min-width: 80px;\n  }\n  td {\n    padding: 4px 8px;\n    cursor: copy;\n  }\n"]);return N=function(){return n},n}function T(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return T=function(){return n},n}l.a.div(T());var _=l.a.table(N()),H=function(n){function e(){var n,t;Object(O.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(g.a)(this,(n=Object(j.a)(e)).call.apply(n,[this].concat(r)))).handleClick=function(n){return function(e){F()(n);var t=e.target;"tomato"===t.style["background-color"]?t.style="background-color: transparent":t.style="background-color: tomato"}},t}return Object(E.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=this,e=this.props.marcacoes,t=Math.max.apply(Math,Object(p.a)(Object.values(e).map((function(n){return n.length})))),a=Array.from({length:t},(function(n,e){return e%2===0?"Entrada":"Sa\xedda"}));return t>0&&r.a.createElement(_,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Data"),a.map((function(n,e){return r.a.createElement("th",{key:"head_".concat(e)},e%2===0?"Entrada":"Sa\xedda")})))),r.a.createElement("tbody",null,Object.entries(e).sort((function(n,e){var t=Object(b.a)(n,1)[0],a=Object(b.a)(e,1)[0];return t.localeCompare(a)})).map((function(e){var t=Object(b.a)(e,2),a=t[0],o=t[1];return r.a.createElement("tr",{key:"r_".concat(a)},r.a.createElement("th",null,a),o.map((function(e){return r.a.createElement("td",{key:"h_".concat(e),onClick:n.handleClick(e)},e)})))}))))}}]),e}(r.a.Component),L=function(n){function e(){var n,t;Object(O.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(g.a)(this,(n=Object(j.a)(e)).call.apply(n,[this].concat(o)))).state={filtrosMes:[],usuarios:[],mesSelecionado:null,usuarioSelecionado:null,marcacoes:{},marcacoesSelecionadas:{}},t.handleDrop=function(n){var e=Object(b.a)(n,1)[0],a=new FileReader;a.onload=function(){var n=Object(v.a)(d.a.mark((function n(e){var a,r,o,c,i,l,u;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=null===(a=e.target)||void 0===a?void 0:a.result,i=null===c||void 0===c?void 0:c.toString().split("\n"),l=null!==(r=null===i||void 0===i?void 0:i.filter((function(n){return 107===n.length})).map((function(n){return{nome:n.substring(35,87).trim(),pis:n.substring(23,35)}})).reduce((function(n,e){return n.some((function(n){return n.pis===e.pis}))?n:[].concat(Object(p.a)(n),[e])}),[]).filter((function(n){return!n.pis.includes("0000")})).sort((function(n,e){return n.nome.localeCompare(e.nome)})))&&void 0!==r?r:[],u=null!==(o=null===i||void 0===i?void 0:i.filter((function(n){return 39===n.length})).map((function(n){return{pis:n.substring(22,34),data:"".concat(n.substring(10,12),"/").concat(n.substring(12,14),"/").concat(n.substring(14,18)),hora:"".concat(n.substring(18,20),":").concat(n.substring(20,22))}})).reduce((function(n,e){var t,a,r,o=e.pis,c=e.data,i=e.hora;return Object(m.a)({},n,Object(f.a)({},o,Object(m.a)({},null!==(t=n[o])&&void 0!==t?t:[],Object(f.a)({},c,[].concat(Object(p.a)(null!==(a=(null!==(r=n[o])&&void 0!==r?r:[])[c])&&void 0!==a?a:[]),[i])))))}),{}))&&void 0!==o?o:{},t.setState({usuarios:l,marcacoes:u});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a.readAsText(e)},t.handleUserChange=function(n){var e;console.log("change",n.target.value);var a=t.state,r=a.usuarios,o=(a.marcacoes,n.target.value),c=null!==(e=r.find((function(n){return n.pis===o})))&&void 0!==e?e:null;if(t.setState({usuarioSelecionado:c}),c){var i=new Date,l=i.getFullYear(),u=i.getMonth()+1,s=[{mes:(1===u?12:u-1).toString().padStart(2,"0"),ano:1===u?l-1:l},{mes:u.toString().padStart(2,"0"),ano:l}];t.setState({marcacoesSelecionadas:{},filtrosMes:s})}},t.renderUserSelect=function(n){return r.a.createElement("select",{onChange:t.handleUserChange},r.a.createElement("option",null),n.map((function(n){var e=n.nome,t=n.pis;return r.a.createElement("option",{value:t,key:"opt_".concat(t)},e)})))},t.handleMesClick=function(n){console.log("mes",n);var e=t.state,a=e.marcacoes,r=e.usuarioSelecionado;if(r){var o=Object.fromEntries(Object.entries(a[r.pis]).filter((function(e){return Object(b.a)(e,1)[0].includes("/".concat(n.mes,"/"))})));console.log("marcacoesSelecionadas",o),t.setState({mesSelecionado:n,marcacoesSelecionadas:o})}},t.renderFiltros=function(){var n=t.state,e=n.filtrosMes,a=n.mesSelecionado;return r.a.createElement(A,null,e.map((function(n){return r.a.createElement(D,{key:"btn_".concat(n.ano+n.mes),onClick:t.handleMesClick,active:a===n,filtro:n})})))},t.renderData=function(){var n=t.state.marcacoesSelecionadas;return r.a.createElement(H,{marcacoes:n})},t}return Object(E.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=this.state.usuarios;return r.a.createElement(R,null,0===n.length?r.a.createElement(y.a,{onDrop:this.handleDrop},(function(n){var e=n.getRootProps,t=n.getInputProps;return r.a.createElement(C,e(),r.a.createElement("input",t()),r.a.createElement("p",null,"Arraste o arquivo"))})):r.a.createElement(r.a.Fragment,null,this.renderUserSelect(n),this.renderFiltros(),this.renderData()))}}]),e}(r.a.Component);function V(){var n=Object(i.a)(["\n          body {\n            display: flex;\n            flex-direction: column;\n            width: 100vw;\n            height: 100vh;\n            background: white;\n          }\n          #root {\n            display: flex;\n            flex-direction: column;\n            flex: 1;\n            background: white;\n          }\n        "]);return V=function(){return n},n}function z(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"]);return z=function(){return n},n}var G=l.a.div(z());var P=function(){return r.a.createElement(G,null,r.a.createElement(u.a,{styles:Object(u.c)(V())}),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6ea724ee.chunk.js.map