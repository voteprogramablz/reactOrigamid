(this.webpackJsonpmeuapp=this.webpackJsonpmeuapp||[]).push([[0],[,,,,,,,,,,,function(t,e,c){},,,,,,,,,function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),s=c(12),a=c.n(s),o=c(7),i=c(2),j=c(6),d=c.n(j),u=c(13),l=c(9),b=c(3),p=(c(20),c(11),c(0)),m=function(t){return r.a.useEffect((function(){document.title="Nya | "+t.title,document.querySelector("meta[name='description']").setAttribute("content",t.description)}),[t]),Object(p.jsx)(p.Fragment,{})},h=function(){var t=r.a.useState([]),e=Object(b.a)(t,2),c=e[0],n=e[1];return r.a.useEffect((function(){function t(){return(t=Object(l.a)(d.a.mark((function t(){var e,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ranekapi.origamid.dev/json/api/produto");case 2:return e=t.sent,t.next=5,e.json();case 5:c=t.sent,n(Object(u.a)(c));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"gridProdutos enterAnimation",children:[Object(p.jsx)(m,{title:"Produtos",description:"Produtos da nossa loja"}),c&&c.map((function(t){var e=t.id,c=t.fotos,n=t.nome;return Object(p.jsxs)("div",{className:"gridItem",children:[Object(p.jsx)(o.b,{to:"/produto/".concat(e),children:Object(p.jsx)("img",{src:c[0].src,alt:c[0].titulo})}),Object(p.jsx)("h1",{children:n})]},e)}))]})},x=(c(22),function(){return Object(p.jsxs)("div",{className:"gridContato enterAnimation",children:[Object(p.jsx)(m,{title:"Contato",description:"P\xe1gina para contato"}),Object(p.jsx)("div",{className:"imgContato",children:Object(p.jsx)("img",{src:"https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",alt:"Imagem ilustrativa de Contato"})}),Object(p.jsx)("div",{className:"conteudoContato",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Entre em contato."}),Object(p.jsx)("p",{children:"andrermelo1@hotmail.com"}),Object(p.jsx)("p",{children:"(41) 9 8755-5234"}),Object(p.jsxs)("a",{href:"https://github.com/voteprogramablz",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/64/2111/2111428.png",alt:"icone do github"}),"Me siga no github e veja meus projetos :D"]})]})})]})}),O=(c(23),c(24),function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{children:"Alguns direitos reservados"})})}),f=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada :("})})},g=c(14),v=(c(25),function(t){var e=t.id,c=t.fotos,n=t.nome,r=t.preco,s=t.descricao;return Object(p.jsxs)("div",{className:"gridProdutos",children:[Object(p.jsx)("div",{className:"gridItem",children:c.map((function(t){var e=t.titulo,c=t.src;return Object(p.jsx)("img",{src:c,alt:e},e)}))}),Object(p.jsxs)("div",{className:"conteudoProduto",children:[Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{className:"__preco",children:(+r).toLocaleString("pt-br",{style:"currency",currency:"BRL"})}),Object(p.jsx)("p",{className:"__descricao",children:s})]})]},e)}),N=function(){var t=Object(i.h)(),e=r.a.useState(),c=Object(b.a)(e,2),n=c[0],s=c[1],a=r.a.useState(""),o=Object(b.a)(a,2),j=o[0],u=o[1];return r.a.useEffect((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://ranekapi.origamid.dev/json/api/produto/".concat(t.id));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,s(Object(g.a)({},n)),u(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),j?Object(p.jsx)("p",{children:"Carregando..."}):Object(p.jsx)("div",{children:n&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{title:n.nome,description:"P\xe1gina para contato"}),Object(p.jsx)(v,{id:n.id,fotos:n.fotos,nome:n.nome,preco:n.preco,descricao:n.descricao})]})})},y=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(o.a,{basename:"/voteprogramablz/reactOrigamid",children:[Object(p.jsxs)("nav",{className:"navigator",children:[Object(p.jsx)(o.c,{to:"/",end:!0,className:"button",children:"Produtos"}),Object(p.jsx)(o.c,{to:"contato",className:"button",children:"Contato"})]}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/",exact:!0,element:Object(p.jsx)(h,{})}),Object(p.jsx)(i.a,{path:"contato",element:Object(p.jsx)(x,{})}),Object(p.jsx)(i.a,{path:"produto/:id/*",element:Object(p.jsx)(N,{})}),Object(p.jsx)(i.a,{path:"*",element:Object(p.jsx)(f,{})})]}),Object(p.jsx)(O,{})]})})};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.4799fb96.chunk.js.map