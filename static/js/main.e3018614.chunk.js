(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(3),s=n.n(o),i=(n(12),n(4)),a=n(5),h=n(7),l=n(6),d=(n(13),n(14),n(0));var u=function(e){e.id;var t=e.name,n=e.email;return Object(d.jsxs)("div",{className:"card robo shadow width",children:[Object(d.jsx)("img",{style:{width:"12rem",height:"12rem"},src:"https://robohash.org/".concat(t,".png?size=200x200"),alt:"robot"}),Object(d.jsxs)("div",{className:"mt-3",children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)("p",{children:n})]})]})},b=function(e){var t=e.onSearchChange;return Object(d.jsx)("div",{className:"input-group col-12 w-25 mx-auto pb-6",style:{minWidth:"200px"},children:Object(d.jsx)("input",{className:"form-control",onChange:t,type:"search",placeholder:"search robots"})})},j=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onSearchChange=function(e){var t=e.target.value,n=r.state.roboList.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));r.setState({robots:n,searchField:t})},r.state={roboList:[],robots:[],searchField:""},r}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({roboList:t,robots:t})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"ROBOFRIENDS"}),Object(d.jsx)(b,{onSearchChange:this.onSearchChange}),Object(d.jsx)("hr",{})]}),Object(d.jsx)("div",{className:"container-fluid mx-auto",children:Object(d.jsx)("div",{className:"d-flex flex-row flex-wrap bd-highlight mb-3",children:this.state.robots.map((function(e){return Object(d.jsx)(u,{id:e.id,name:e.name,email:e.email},e.id)}))})})]})}}]),n}(c.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.e3018614.chunk.js.map