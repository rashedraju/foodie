(this.webpackJsonpfoodie=this.webpackJsonpfoodie||[]).push([[7],{359:function(e,r,t){"use strict";t.r(r);var o=t(1),a=t.n(o),n=t(30),c=t(153),s=t(155),u=t(32);r.default=Object(n.b)((function(e){return{searchQuery:e.search.query,foods:e.search.foods,cartItems:e.cart.cartItems,loading:e.search.loader,error:e.search.error}}),(function(e){return{onQueryChange:function(r){return e(u.e(r))},onSearchFood:function(r,t){return e(u.f(r,t))},onToggleToCart:function(r,t){return e(u.h(r,t))}}}))((function(e){var r,t=e.searchQuery,n=e.location,u=e.history,f=e.onQueryChange,l=e.onSearchFood,h=e.cartItems,i=e.loading,g=e.foods,d=e.error,m=e.onToggleToCart;return Object(o.useEffect)((function(){var e=new URLSearchParams(n.search);if(e.has("q")&&""!==e.get("q")){var r=e.get("q");f(r)}else u.replace("./");l(t,h)}),[h,u,n.search,f,l,t]),g.length>0&&(r=a.a.createElement(c.a,{foods:g,toggleToCart:m})),i&&(r=a.a.createElement(c.a,{foods:new Array(10).fill({})})),d&&(r=a.a.createElement("p",{style:{textAlign:"center"}},"Foods not found!")),a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{center:!0,queryChange:f}),r)}))}}]);
//# sourceMappingURL=7.9a81a860.chunk.js.map