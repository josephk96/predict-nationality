(window["webpackJsonppredict-nationality"]=window["webpackJsonppredict-nationality"]||[]).push([[0],{38:function(n,t,e){n.exports=e(72)},72:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(29),o=e.n(i),c=e(6),l=e(7),u=e(11),f=e(9),m=e(10),s=e(2),b=e(1),d=e(32);function h(){var n=Object(s.a)(["\n    color: white;\n    font-size: 4rem;\n    text-align: center;\n    margin-bottom: 1.5rem;\n"]);return h=function(){return n},n}function p(){var n=Object(s.a)(["\n    color: #FECE00;\n    width: 3rem;\n    height: 3rem;\n    align-self: center;\n"]);return p=function(){return n},n}function v(){var n=Object(s.a)(['\n  display: flex;\n  flex-direction: column;\n  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");\n  font-family: "Montserrat", sans-serif;\n']);return v=function(){return n},n}var g=b.c.nav(v()),y=Object(b.c)(d.a)(p()),w=b.c.h1(h());var j=function(){return a.a.createElement(g,null,a.a.createElement(w,null,"Nationality Predictor"),a.a.createElement(y,null))},O=e(8);function x(){var n=Object(s.a)(["\n  height: 4rem;\n  width: 20rem;\n  text-align: center;\n  margin-top: 3rem;\n  font-size: 1.5rem;\n  border: 0.3rem solid #ffce00;\n  border-radius: 0.5rem;\n  transition-duration: 0.1s;\n\n  :focus {\n    border-color: #09aded;\n  }\n"]);return x=function(){return n},n}function E(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n"]);return E=function(){return n},n}var k=b.c.div(E()),S=b.c.input(x());var z=function(n){return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:n.handleSubmit},a.a.createElement(k,null,a.a.createElement(S,{id:"searchbar",type:"text",name:"firstName",placeholder:"Input the first name to search",ref:n.input}))))},X=e(13);function N(){var n=Object(s.a)(['\n  font-family: "Luckiest Guy", cursive;\n  font-size: 1.5rem;\n  padding-top: 1rem;\n  color: #09aded;\n']);return N=function(){return n},n}function B(){var n=Object(s.a)(['\n  display: flex;\n  flex-direction: column;\n  font-family: "Lobster", cursive;\n  font-weight: 800;\n  font-size: 1.5rem;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.5rem;\n  margin-top: 2rem;\n']);return B=function(){return n},n}function R(){var n=Object(s.a)(["\n    min-width: 30%;\n  "]);return R=function(){return n},n}function C(){var n=Object(s.a)(["\n  height: 25rem;\n  background-color: white;\n  flex: 0 0 1;\n  max-width: 80%;\n  ","\n  margin: 3rem;\n  border-radius: 0.5rem;\n  text-align: center;\n  -webkit-box-shadow: 3px 5px 25px 8px rgba(0, 0, 0, 0.57);\n  box-shadow: 3px 5px 25px 8px rgba(0, 0, 0, 0.57);\n"]);return C=function(){return n},n}var F=b.c.div(C(),Object(X.a)("tablet")(R())),I=b.c.div(B()),L=b.c.p(N());var Y=function(n){return a.a.createElement(F,null,a.a.createElement(I,null,"There is a",a.a.createElement(L,null,n.probability),"Probability that",a.a.createElement(L,null,n.name),"is from :",a.a.createElement(L,null,n.country),a.a.createElement(L,null,n.flag)))},G=e(33),J=e.n(G),M=e(34),P=e.n(M);function W(){var n=Object(s.a)(["\n    flex-direction: row;\n    flex-wrap: wrap;\n  "]);return W=function(){return n},n}function D(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  ","\n  justify-content: center;\n"]);return D=function(){return n},n}function H(){var n=Object(s.a)(["\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n"]);return H=function(){return n},n}function K(){var n=Object(s.a)(["\n  div {\n      -webkit-animation: "," 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n      animation: "," 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  }\n"]);return K=function(){return n},n}function T(){var n=Object(s.a)(["\n  0% {\n    -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\n            transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-filter: blur(40px);\n            filter: blur(40px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0) scaleY(1) scaleX(1);\n            transform: translateX(0) scaleY(1) scaleX(1);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-filter: blur(0);\n            filter: blur(0);\n    opacity: 1;\n  }\n\n"]);return T=function(){return n},n}var $=Object(b.d)(T()),_=b.c.span(K(),$,$),q=b.c.div(H()),A=b.c.div(D(),Object(X.a)("tablet")(W())),Q=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(f.a)(t).call(this,n))).state={firstName:"",countries:[],probability:[]},e.handleSubmit=e.handleSubmit.bind(Object(O.a)(e)),e.input=a.a.createRef(),e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"handleSubmit",value:function(n){var t=this,e=this.input.current.value;if(n.preventDefault(),e.length>0){var r="https://api.nationalize.io/?name=".concat(e);return J.a.get(r).then((function(n){var r=n.data.country.map((function(n){return n.country_id})),a=n.data.country.map((function(n){return n.probability.toFixed(4)}));t.setState({firstName:e,countries:r,probability:a})})),void document.getElementById("searchbar").blur()}document.getElementById("searchbar").blur(),this.setState({firstName:""})}},{key:"render",value:function(){var n=this,t=this.state.countries.map((function(n){return P.a.countries[n].name})),e=[];return this.state.firstName.length>0&&t.map((function(t,r){return e.push(a.a.createElement(Y,{country:t,name:n.state.firstName,probability:n.state.probability[r],key:r}))})),a.a.createElement(q,null,a.a.createElement(z,Object.assign({handleSubmit:this.handleSubmit,input:this.input},this.state)),a.a.createElement(_,null,a.a.createElement(A,null,e)))}}]),t}(r.Component),U=e(35),V=e(36);function Z(){var n=Object(s.a)(["\n  color: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n"]);return Z=function(){return n},n}function nn(){var n=Object(s.a)(["\n  color: #fff;\n  width: 3.5rem;\n  height: 3.5rem;\n  padding-right: 2rem;\n"]);return nn=function(){return n},n}function tn(){var n=Object(s.a)([" \n  display: flex;\n  flex-direction: row;\n"]);return tn=function(){return n},n}function en(){var n=Object(s.a)(['\n    display: flex;\n    font-family: "Roboto";\n    font-size: 1.2rem;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: column;\n    height: 20vh;\n    margin-top: 2rem;\n    margin-bottom: 5rem;\n']);return en=function(){return n},n}var rn=b.c.footer(en()),an=b.c.div(tn()),on=Object(b.c)(U.a)(nn()),cn=Object(b.c)(V.a)(Z());var ln=function(){return a.a.createElement(rn,null,a.a.createElement("h4",null,"Created in 2019 by Soo Hwan Kim"),a.a.createElement(an,null,a.a.createElement("a",{href:"https://github.com/josephk96"},a.a.createElement(on,null)),a.a.createElement("a",{href:"https://www.linkedin.com/in/soo-hwan-kim-39645898"},a.a.createElement(cn,null))))};function un(){var n=Object(s.a)(["\n    body {\n        @import url('https://fonts.googleapis.com/css?family=Lobster|Luckiest+Guy|Roboto&display=swap');\n        font-family: font-family: 'Roboto', sans-serif;\n        margin: 0;\n        padding: 0;\n        font-size: 62.5%;\n        background-color: #0375B4;\n    }\n"]);return un=function(){return n},n}var fn=Object(b.a)(un()),mn=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(fn,null),a.a.createElement(j,null),a.a.createElement(Q,null),a.a.createElement(ln,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(mn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.88c25127.chunk.js.map