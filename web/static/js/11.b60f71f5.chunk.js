(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[11],{617:function(e,t,a){"use strict";a.r(t);var n=a(73),r=a.n(n),c=a(123),l=a(24),i=a(0),o=a.n(i),u=a(42),s=a(28),m=a(535),d=a.n(m),p=a(531),f=a(614),h=a(615),E=a(527),v=a(525),b=a(624),g=a(620),x=a(71),O=a(36),y=a(532),j=a(522),w=a(34),I=p.a.Item,S=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(0),c=Object(l.a)(r,2),u=c[0],s=c[1];return o.a.createElement(p.a,{layout:"inline",style:{marginBottom:"20px"}},o.a.createElement(x.a,{gutter:{md:8,lg:24,xl:48}},o.a.createElement(O.a,{md:24,sm:24},o.a.createElement(I,null,o.a.createElement(y.a,{placeholder:"\u7528\u6237\u540d",value:a,onChange:function(e){n(e.target.value)}})),o.a.createElement(j.a,{style:{width:200,marginRight:20},placeholder:"\u9009\u62e9\u7c7b\u578b",onChange:function(e){s(e)}},o.a.createElement(j.a.Option,{value:""},"\u6240\u6709"),o.a.createElement(j.a.Option,{value:"0"},"\u5176\u4ed6\u7528\u6237"),o.a.createElement(j.a.Option,{value:"1"},"\u7ba1\u7406\u5458")),o.a.createElement("span",null,o.a.createElement(w.a,{onClick:function(){console.log(u,a)},style:{marginTop:"3px"},type:"primary",icon:"search"},"\u641c\u7d22")))))};t.default=function(e){var t=[{title:"\u7528\u6237\u540d",dataIndex:"username"},{title:"\u624b\u673a",dataIndex:"phone"},{title:"\u5934\u50cf",dataIndex:"avatar",render:function(e){return e?o.a.createElement("img",{src:"http://localhost:3000/img/".concat(e),style:{height:"50px",width:"50px"}}):""}},{title:"\u4e2a\u4eba\u4ecb\u7ecd",width:250,dataIndex:"introduce",render:function(e){return o.a.createElement("p",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"200px"}},e)}},{title:"\u7c7b\u578b",dataIndex:"type",render:function(e){return e?o.a.createElement(f.a,{color:"blue"},"\u7ba1\u7406\u5458"):o.a.createElement(f.a,{color:"green"},"\u5176\u4ed6\u7528\u6237")}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"create_time",sorter:!0,render:function(e){return d()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u64cd\u4f5c",render:function(e,t){return o.a.createElement("span",null,o.a.createElement(s.b,{to:{pathname:"/article/articleList",query:{userId:t._id}}},"\u67e5\u770b\u6587\u7ae0"),o.a.createElement(h.a,{type:"vertical"}),o.a.createElement(E.a,{title:"\u786e\u5b9a\u5220\u9664\u5417",onConfirm:function(){k({id:t._id})}},o.a.createElement("a",{href:"#"},"\u5220\u9664")))}}],a=Object(i.useState)([]),n=Object(l.a)(a,2),m=n[0],p=n[1],x=Object(i.useState)(0),O=Object(l.a)(x,2),y=O[0],j=O[1];function w(){return I.apply(this,arguments)}function I(){return(I=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)({method:"post",url:"/user/userList"}).then((function(e){var t=e.data;console.log(t),p(t.data.list),j(t.data.auth)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(i.useEffect)((function(){w()}),[]);var k=function(e){Object(u.a)({method:"post",url:"/user/userRemove",data:e}).then((function(e){var t=e.data;0===t.code?(v.a.success(t.message),w()):v.a.error(t.message)}))};return o.a.createElement("div",null,o.a.createElement(b.a,{title:"\u7528\u6237\u7ba1\u7406"}),o.a.createElement(S,null),y?o.a.createElement(g.a,{columns:t,rowKey:function(e){return e._id},bordered:!0,dataSource:m}):o.a.createElement("span",null,"\u60a8\u6682\u65e0\u6743\u9650\u67e5\u770b\u7528\u6237\u4fe1\u606f"))}}}]);
//# sourceMappingURL=11.b60f71f5.chunk.js.map