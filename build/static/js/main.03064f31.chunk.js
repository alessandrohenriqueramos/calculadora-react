(this["webpackJsonpcalculadora-react"]=this["webpackJsonpcalculadora-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var o=s(0),a=s(1),c=s(7),l=s.n(c),n=s(2),b=s(3),r=s(5),u=s(4),j=(s(13),function(t){Object(r.a)(s,t);var e=Object(u.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{className:this.props.classe,children:Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:this.props.classebt,onClick:function(){return t.props.M\u00e9todo(t.props.value)},children:this.props.value})})})}}]),s}(a.Component)),i=(s(14),function(t){Object(r.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(n.a)(this,s);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).M\u00e9todo=function(e){t.props.M\u00e9todo(e)},t}return Object(b.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"Buttons",children:[Object(o.jsx)(j,{classe:"bt",classebt:"number","M\xe9todo":this.M\u00e9todo,value:"AC"}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"+/-","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"%","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"dividir",value:"/","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)("br",{}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"9","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"8","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"7","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"multiplicar",value:"*","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)("br",{}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"6","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"5","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"4","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"subtrair",value:"-","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)("br",{}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"3","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"2","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:"1","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"somar",value:"+","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)("br",{}),Object(o.jsx)(j,{classe:"bt",classebt:"zero",value:"0","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"number",value:".","M\xe9todo":this.M\u00e9todo}),Object(o.jsx)(j,{classe:"bt",classebt:"resultado",value:"=","M\xe9todo":this.M\u00e9todo})]})}}]),s}(a.Component)),d=(s(15),function(t){Object(r.a)(s,t);var e=Object(u.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"principal",children:Object(o.jsx)("div",{className:"num",children:this.props.num})})}}]),s}(a.Component)),m=(s(16),function(t){Object(r.a)(s,t);var e=Object(u.a)(s);function s(){var t;return Object(n.a)(this,s),(t=e.call(this)).Set=function(e){var s=t.state.num,o=t.state.total,a=t.state.opera\u00e7\u00e3o;"AC"===e&&t.setState({num:0,total:0,"opera\xe7\xe3o":null}),e>=0||e<=9?(0===s||s===a?(t.setState({num:null}),t.setState({num:e,total:e})):t.setState({num:s+=e,total:o+=e}),"+"===a?t.setState({total:Number(o)+Number(e),"opera\xe7\xe3o":null}):"-"===a?t.setState({total:Number(o)-Number(e),"opera\xe7\xe3o":null}):"*"===a?t.setState({total:Number(o)*Number(e),"opera\xe7\xe3o":null}):"/"===a&&t.setState({total:Number(o)/Number(e),"opera\xe7\xe3o":null})):"+"===e||"-"===e||"*"===e||"/"===e?t.setState({"opera\xe7\xe3o":e,num:e}):"="===e?t.setState({num:o,"opera\xe7\xe3o":"AC"}):"+/-"!==e&&"%"!==e&&"."!==e||alert("Fun\xe7\xe3o em desenvolvimento.")},t.state={num:0,total:0,"opera\xe7\xe3o":null},t}return Object(b.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{num:this.state.num}),Object(o.jsx)(i,{"M\xe9todo":this.Set})]})}}]),s}(a.Component));l.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.03064f31.chunk.js.map