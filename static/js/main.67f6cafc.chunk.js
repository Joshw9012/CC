(this.webpackJsonpcyberlark=this.webpackJsonpcyberlark||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(14),n=s.n(a),i=(s(21),s(7)),r=s(8),l=s(10),j=s(9),h=s(15),o=s.n(h),d=(s(22),s(16)),b=s(11),u=s.n(b),O=s(2),x=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project,this.props.data.github;var e=this.props.data.name,t=this.props.data.description,s=this.props.data.description1;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(d.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsx)("ul",{id:"nav",className:"nav",children:Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("p",{className:"HBday"})})})]}),Object(O.jsxs)("div",{className:"row banner",children:[Object(O.jsx)("h1",{class:"HBD H",children:"H"}),Object(O.jsx)("h1",{class:"HBD A",children:"a"}),Object(O.jsx)("h1",{class:"HBD P",children:"p"}),Object(O.jsx)("h1",{class:"HBD P",children:"p"}),Object(O.jsx)("h1",{class:"HBD Y",children:"y"}),"\xa0\xa0\xa0\xa0",Object(O.jsx)("h1",{class:"HBD B",children:"B"}),Object(O.jsx)("h1",{class:"HBD I",children:"i"}),Object(O.jsx)("h1",{class:"HBD R",children:"r"}),Object(O.jsx)("h1",{class:"HBD T",children:"t"}),Object(O.jsx)("h1",{class:"HBD H",children:"h"}),Object(O.jsx)("h1",{class:"HBD D",children:"d"}),Object(O.jsx)("h1",{class:"HBD A",children:"a"}),Object(O.jsx)("h1",{class:"HBD Y",children:"y"}),Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:e})}),Object(O.jsxs)(u.a,{bottom:!0,duration:1200,children:[Object(O.jsx)("h3",{children:t}),Object(O.jsx)("h3",{children:s})]}),Object(O.jsx)("hr",{}),Object(O.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(O.jsx)("ul",{className:"social"})})]})]}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),m=x,p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("div",{className:"twelve columns",children:Object(O.jsx)("ul",{className:"copyright",children:Object(O.jsx)("li",{children:"\xa9 Dedicated by Josh To CC"})})})}),Object(O.jsx)("div",{id:"go-top"})]})})}}]),s}(c.Component),v=p,f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},c}return Object(r.a)(s,[{key:"getResumeData",value:function(){o.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(m,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(c.Component),D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(f,{}),document.getElementById("root")),D()}},[[35,1,2]]]);
//# sourceMappingURL=main.67f6cafc.chunk.js.map