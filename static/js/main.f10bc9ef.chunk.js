(this.webpackJsonpmeuapp=this.webpackJsonpmeuapp||[]).push([[0],[,,,,,,,,,,,function(t,e,c){},,,,,,,,,function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),a=c(12),s=c.n(a),o=c(7),i=c(2),j=c(6),d=c.n(j),u=c(13),l=c(9),b=c(3),m=(c(20),c(11),c(0)),p=function(t){return r.a.useEffect((function(){document.title="Nya | "+t.title,document.querySelector("meta[name='description']").setAttribute("content",t.description)}),[t]),Object(m.jsx)(m.Fragment,{})},h=function(){var t=r.a.useState([]),e=Object(b.a)(t,2),c=e[0],n=e[1];return r.a.useEffect((function(){function t(){return(t=Object(l.a)(d.a.mark((function t(){var e,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ranekapi.origamid.dev/json/api/produto");case 2:return e=t.sent,t.next=5,e.json();case 5:c=t.sent,n(Object(u.a)(c));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{className:"gridProdutos enterAnimation",children:[Object(m.jsx)(p,{title:"Produtos",description:"Produtos da nossa loja"}),c&&c.map((function(t){var e=t.id,c=t.fotos,n=t.nome;return Object(m.jsxs)("div",{className:"gridItem",children:[Object(m.jsx)(o.b,{to:"/produto/".concat(e),children:Object(m.jsx)("img",{src:c[0].src,alt:c[0].titulo})}),Object(m.jsx)("h1",{children:n})]},e)}))]})},O=(c(22),function(){return Object(m.jsxs)("div",{className:"gridContato enterAnimation",children:[Object(m.jsx)(p,{title:"Contato",description:"P\xe1gina para contato"}),Object(m.jsx)("div",{className:"imgContato",children:Object(m.jsx)("img",{src:"https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",alt:"Imagem ilustrativa de Contato"})}),Object(m.jsx)("div",{className:"conteudoContato",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Entre em contato."}),Object(m.jsx)("p",{children:"andrermelo1@hotmail.com"}),Object(m.jsx)("p",{children:"(41) 9 8755-5234"}),Object(m.jsxs)("a",{href:"https://github.com/voteprogramablz",target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/64/2111/2111428.png",alt:"icone do github"}),"Me siga no github e veja meus projetos :D"]})]})})]})}),x=(c(23),c(24),function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{children:"Alguns direitos reservados"})})}),f=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada :("})})},g=c(14),v=(c(25),function(t){var e=t.id,c=t.fotos,n=t.nome,r=t.preco,a=t.descricao;return Object(m.jsxs)("div",{className:"gridProdutos",children:[Object(m.jsx)("div",{className:"gridItem",children:c.map((function(t){var e=t.titulo,c=t.src;return Object(m.jsx)("img",{src:c,alt:e},e)}))}),Object(m.jsxs)("div",{className:"conteudoProduto",children:[Object(m.jsx)("h2",{children:n}),Object(m.jsx)("p",{className:"__preco",children:(+r).toLocaleString("pt-br",{style:"currency",currency:"BRL"})}),Object(m.jsx)("p",{className:"__descricao",children:a})]})]},e)}),N=function(){var t=Object(i.h)(),e=r.a.useState(),c=Object(b.a)(e,2),n=c[0],a=c[1],s=r.a.useState(""),o=Object(b.a)(s,2),j=o[0],u=o[1];return r.a.useEffect((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://ranekapi.origamid.dev/json/api/produto/".concat(t.id));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a(Object(g.a)({},n)),u(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),j?Object(m.jsx)("p",{children:"Carregando..."}):Object(m.jsx)("div",{children:n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{title:n.nome,description:"P\xe1gina para contato"}),Object(m.jsx)(v,{id:n.id,fotos:n.fotos,nome:n.nome,preco:n.preco,descricao:n.descricao})]})})},y=function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(o.a,{basename:"/reactOrigamid",children:[Object(m.jsxs)("nav",{className:"navigator",children:[Object(m.jsx)(o.c,{to:"reactOrigamid",className:"button",children:"Produtos"}),Object(m.jsx)(o.c,{to:"reactOrigamid/contato",className:"button",children:"Contato"})]}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"reactOrigamid",element:Object(m.jsx)(h,{})}),Object(m.jsx)(i.a,{path:"reactOrigamid/contato",element:Object(m.jsx)(O,{})}),Object(m.jsx)(i.a,{path:"produto/:id/*",element:Object(m.jsx)(N,{})}),Object(m.jsx)(i.a,{path:"*",element:Object(m.jsx)(f,{})})]}),Object(m.jsx)(x,{})]})})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.f10bc9ef.chunk.js.map