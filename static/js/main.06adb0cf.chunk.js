(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(17),c=a.n(s),i=a(8),u=a.n(i),o=a(18),h=a(3),l=a(4),m=a(6),p=a(5),d=a(19),j=a.n(d).a.create({baseURL:"https://api.unsplash.com/",headers:{Authorization:"Client-ID XeWVvZ58_wEpavnuhmzcSZhEAUQ3yEQn2ZLrXV4tc3k"}}),f=a(0),b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).setSpan=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpan)}},{key:"render",value:function(){var e=this.props.messCard,t=e.urls,a=e.description;return Object(f.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(f.jsx)("img",{ref:this.imageRef,src:t.regular,alt:a})})}}]),a}(r.a.Component),v=(a(44),function(e){var t=e.imgList.map((function(e){return Object(f.jsx)(b,{messCard:e},e.id)}));return Object(f.jsx)("div",{className:"style-card",children:t})}),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.handleChange=function(t){e.setState({term:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.message(e.state.term)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"ui segment",children:Object(f.jsx)("form",{className:"ui form",onSubmit:this.handleSubmit,children:Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:"Enter Search"}),Object(f.jsx)("input",{type:"text",value:this.state.term,onChange:this.handleChange})]})})})}}]),a}(r.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.handleSearch=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"ui container",children:[Object(f.jsx)(g,{message:this.handleSearch}),"Found: ",this.state.images.length," images",Object(f.jsx)(v,{imgList:this.state.images})]})}}]),a}(r.a.Component);c.a.render(Object(f.jsx)(O,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.06adb0cf.chunk.js.map