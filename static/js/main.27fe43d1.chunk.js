(this.webpackJsonpexamples=this.webpackJsonpexamples||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(2),o=n.n(l),r=(n(15),n(3)),c=n(4),s=n(8),m=n(5),u=n(9),g=n(6),h=n.n(g),d=n(7),p=n.n(d),f=(n(16),[{name:"item1"},{name:"item2______________"},{name:"item3"},{name:"item4"},{name:"item5"},{name:"item6"},{name:"item7______________"},{name:"item8"},{name:"item9"},{name:"item10"},{name:"item11"},{name:"item12"},{name:"item13"},{name:"item14______________"},{name:"item15"},{name:"item16"},{name:"item17"},{name:"item18"},{name:"item19"},{name:"item20"},{name:"item21"},{name:"item22______________"},{name:"item23"},{name:"item24"},{name:"item25"}]),w=function(e){var t=e.text,n=e.selected;return i.a.createElement("div",{className:"menu-item ".concat(n?"active":"")},t)},_=function(e,t){return e.map((function(e){var n=e.name;return i.a.createElement(w,{text:n,key:n,selected:t,onClick:function(){return console.log("original onClick ",n)}})}))},v=function(e){var t=e.text,n=e.className;return i.a.createElement("div",{className:n},t)},b=v({text:"<",className:"arrow-prev"}),E=v({text:">",className:"arrow-next"}),S=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={alignCenter:!0,clickWhenDrag:!1,dragging:!0,hideArrows:!0,hideSingleArrow:!0,itemsCount:f.length,selected:"item1",scrollToSelected:!1,translate:void 0,transition:.4,wheel:!0,showList:!0,inertiascrolling:!1,slowdownFactor:.25},n.onUpdate=function(e){var t=e.translate;console.log("onUpdate: translate: ".concat(t)),n.setState({translate:t})},n.onFirstItemVisible=function(){console.log("first item is visible")},n.onLastItemVisible=function(){console.log("last item is visible");var e=Array(5).fill(1).map((function(e,t){return{name:"item".concat(f.length+t+1)}}));f=f.concat(e),n.menuItems=_(f,f.slice(-1)[0].name),n.setState({itemsCount:f.length,selected:n.state.selected})},n.onSelect=function(e){console.log("onSelect: ".concat(e)),n.setState({selected:e})},n.setItemsCount=function(e){var t=n.state,a=t.itemsCount,i=void 0===a?f.length:a,l=t.selected,o=+e.target.value,r=!isNaN(o)&&o<=f.length&&o>=0?+e.target.value:f.length;i!==r&&(n.menuItems=_(f.slice(0,r),l),n.setState({itemsCount:r}))},n.setSlowdownFactor=function(e){n.setState({slowdownFactor:e.target.value})},n.setSelected=function(e){var t=e.target.value;n.setState({selected:String(t)})},n.toggle=function(){n.setState({showList:!n.state.showList})},n.menu=null,n.menuItems=_(f.slice(0,f.length),n.state.selected),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.alignCenter!==this.state.alignCenter&&this.menu&&(this.menu.setInitial(),this.menu.forceUpdate(),this.forceUpdate())}},{key:"render",value:function(){var e=this,t=this.state,n=t.alignCenter,a=t.clickWhenDrag,l=t.hideArrows,o=t.dragging,r=t.hideSingleArrow,c=t.itemsCount,s=t.selected,m=t.translate,u=t.transition,g=t.wheel,d=t.showList,w=t.scrollToSelected,_=t.inertiascrolling,v=t.slowdownFactor,S=this.menuItems,y={margin:"5px 10px"},k={margin:"5px 10px",display:"inline-block"};return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),i.a.createElement("h1",{className:"App-title"},"React horizontal scrolling menu")),i.a.createElement("p",{className:"App-intro"},"Horizontal scrolling menu example. Click arrow or drag items."),i.a.createElement("button",{onClick:this.toggle},"Toggle Show/hide"),d&&i.a.createElement(p.a,{alignCenter:n,arrowLeft:b,arrowRight:E,clickWhenDrag:a,data:S,dragging:o,hideArrows:l,hideSingleArrow:r,inertiaScrolling:_,inertiaScrollingSlowdown:v,onFirstItemVisible:this.onFirstItemVisible,onLastItemVisible:this.onLastItemVisible,onSelect:this.onSelect,onUpdate:this.onUpdate,ref:function(t){return e.menu=t},rtl:!1,scrollBy:0,scrollToSelected:w,selected:s,transition:+u,translate:m,useButtonRole:!0,wheel:g}),i.a.createElement("form",{className:"properties"},i.a.createElement("label",{style:y},"Align center",i.a.createElement("input",{name:"alignCenter",type:"checkbox",checked:n,onChange:function(){return e.setState({alignCenter:!n})}})),i.a.createElement("label",{style:y},"Dragging",i.a.createElement("input",{name:"dragging",type:"checkbox",checked:o,onChange:function(){return e.setState({dragging:!o})}})),i.a.createElement("label",{style:y},"Click when drag end",i.a.createElement("input",{name:"clickWhenDrag",type:"checkbox",checked:a,onChange:function(){return e.setState({clickWhenDrag:!a})}})),i.a.createElement("label",{style:y},"Scroll to selected item",i.a.createElement("input",{name:"scrollToSelected",type:"checkbox",checked:w,onChange:function(){return e.setState({scrollToSelected:!w})}})),i.a.createElement("label",{style:y},"Use mouse wheel",i.a.createElement("input",{name:"wheel",type:"checkbox",checked:g,onChange:function(){return e.setState({wheel:!g})}})),i.a.createElement("label",{style:y},"Hide arrows if items width less than menu width",i.a.createElement("input",{name:"hideArrows",type:"checkbox",checked:l,onChange:function(){return e.setState({hideArrows:!l})}})),i.a.createElement("label",{style:y},"Hide left/right arrows if first/last item visible",i.a.createElement("input",{name:"hideSingleArrow",type:"checkbox",checked:r,onChange:function(){return e.setState({hideSingleArrow:!r})}})),i.a.createElement("br",null),i.a.createElement("div",{style:k},"Translate: ",(m||0).toFixed(2)),i.a.createElement("label",{style:k},"Selected:",i.a.createElement("input",{style:{margin:"0 5px"},name:"selected",type:"text",value:s,onChange:this.setSelected})),i.a.createElement("label",{style:k},"Transition duration:",i.a.createElement("input",{style:{margin:"0 5px"},name:"transition",type:"number",value:u||0,min:0,max:10,onChange:function(t){return e.setState({transition:isNaN(+t.target.value)?0:+t.target.value})}})),i.a.createElement("label",{style:k},"Items count:",i.a.createElement("input",{style:{margin:"0 5px"},name:"itemsCount",type:"number",value:c,min:0,max:f.length,onChange:this.setItemsCount})),i.a.createElement("label",{style:y},"Inertia Scrolling",i.a.createElement("input",{name:"inertiascrolling",type:"checkbox",checked:_,onChange:function(){return e.setState({inertiascrolling:!_})}})),i.a.createElement("label",{style:k},"Inertia scrolling slowdown:",i.a.createElement("input",{style:{margin:"0 5px"},name:"slowdownFactor",type:"number",value:v,onChange:this.setSlowdownFactor}))),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu"},"Project on GitHub")))}}]),t}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-horizontal-scrolling-menu",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-horizontal-scrolling-menu","/service-worker.js");y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):k(e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.27fe43d1.chunk.js.map