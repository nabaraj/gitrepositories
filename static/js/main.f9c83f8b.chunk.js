(this["webpackJsonpgit-user-timeline"]=this["webpackJsonpgit-user-timeline"]||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),s=(a(26),a(2)),o=a(4),l=a.n(o);var u=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0];return a[1],Object(n.useEffect)((function(){}),[c]),r.a.createElement("div",null,r.a.createElement("ul",{className:"timeline"},e.repo.map((function(e,t){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"".concat(0===t||t%2===0?"direction-r":"direction-l")},r.a.createElement("div",{className:"flag-wrapper"},r.a.createElement("span",{className:"flag"},r.a.createElement("a",{href:e.html_url,target:"_blank"},e.name)),r.a.createElement("span",{className:"time-wrapper"},function(e){var t=new Date(e);return r.a.createElement("span",{className:"time"},t.getFullYear()," -"," ",t.toLocaleString("default",{month:"long"}))}(e.created_at))),r.a.createElement("div",{className:"desc"},e.description)))}))))},m=a(15),h=a(16),p=a(17),g=a(19),b=a(18),d=a(3),f=a(20),v=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={username:"",email:""},a.changeValue=a.changeValue.bind(Object(d.a)(a)),a.submitLogin=a.submitLogin.bind(Object(d.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"changeValue",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(m.a)({},t,a))}},{key:"submitLogin",value:function(e){e.preventDefault(),this.props.submitLogin(this.state.username,this.state.email)}},{key:"render",value:function(){var e=""===this.state.name,t=this.props.userError;return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"login-form",onSubmit:this.submitLogin},r.a.createElement("h3",null,"Provide username to view repositories"),""!==t?r.a.createElement("span",{className:"error"},this.props.userError):"",r.a.createElement("input",{type:"text",placeholder:"username",name:"username",value:this.state.name,onChange:this.changeValue}),r.a.createElement("button",{disabled:e},"Submit"))))}}]),t}(n.Component);a(44);var E=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],h=o[1],p=Object(n.useState)(""),g=Object(s.a)(p,2),b=g[0],d=g[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"text-center"},"Github Timeline"),a?r.a.createElement(u,{repo:m}):r.a.createElement(v,{submitLogin:function(e,t){l.a.get("https://api.github.com/users/".concat(e,"/repos")).then((function(e){if(console.log("ree",e),e.data.length>0){var t=e.data.sort((function(e,t){var a=new Date(e.created_at),n=new Date(t.created_at);return a.getTime()-n.getTime()}));h(t),c(!0)}else d("Check username no result found")})).catch((function(e){d("Check username no result found")}))},userError:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f9c83f8b.chunk.js.map