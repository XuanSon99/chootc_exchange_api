(function(t){function e(e){for(var o,r,c=e[0],s=e[1],l=e[2],u=0,h=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},i=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-294b8482":"5e7b0c1b","chunk-2d0cfb23":"5a9cfbc2","chunk-2d22996d":"5a42260c","chunk-747f5e75":"e4fd4ebf","chunk-2d217357":"6f990430","chunk-2f00a150":"aa7fe6de","chunk-44286f26":"f3717986","chunk-6d9c90d2":"d48bc46d","chunk-7e157718":"ed536dc3"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(t);var l=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"49f8":function(t,e,n){var o={"./en.json":"edd4","./vi.json":"aced"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=i,t.exports=a,a.id="49f8"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("99af");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{"data-app":""}},[t.$route.meta.header?n("Header"):t._e(),n("router-view"),n("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{color:"#ffffff",height:"68px",fixed:""}},[n("v-container",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:"/"}},[n("v-img",{staticClass:"logo",attrs:{src:"/img/logo-header.png"}})],1),n("v-spacer"),t.mobile?n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-menu")])],1):n("div",{staticClass:"d-flex align-center"},[n("v-btn",{attrs:{text:"",color:"black"},on:{click:function(e){return t.$router.push("/buy/usdt")}}},[t._v(" Giao dịch mua ")]),n("v-btn",{attrs:{text:"",color:"black"},on:{click:function(e){return t.$router.push("/sell/usdt")}}},[t._v(" Giao dịch bán ")]),n("v-btn",{attrs:{text:"",color:"black"},on:{click:function(e){return t.$router.push("/history")}}},[t._v(" Lịch sử giao dịch ")])],1),t.account?n("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),o),[t.noti_count?n("v-badge",{attrs:{content:t.noti_count,color:"error",overlap:""}},[n("v-icon",{attrs:{size:"30"}},[t._v("mdi-bell-outline")])],1):n("v-icon",{attrs:{size:"30"}},[t._v("mdi-bell-outline")])],1)]}}],null,!1,3797021348)},[n("div",{staticClass:"noti-title"},[n("h3",[t._v("Thông báo")]),n("span",{on:{click:function(e){return t.readAll()}}},[t._v(" Đánh dấu đã đọc "),n("v-icon",{attrs:{size:"16",color:"primary"}},[t._v("mdi-check-decagram")])],1)]),n("div",{staticClass:"notification"},t._l(t.notifications,(function(e,o){return n("div",{key:o,class:{item:!0,unread:!e.is_readed},on:{click:function(n){return t.readNoti(e,o)}}},[n("v-icon",{attrs:{size:"30",color:e.color}},[t._v("mdi-bell-circle")]),n("div",{staticClass:"content ml-3"},[n("span",[t._v(t._s(e.content))]),n("div",{staticClass:"time mt-1"},[t._v(t._s(t.formatDate(e.created_at)))])])],1)})),0)]):t._e(),t.account?n("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"ml-4",attrs:{icon:"",outlined:"",color:"primary"}},"v-btn",a,!1),o),[n("v-icon",[t._v(" mdi-account ")])],1)]}}],null,!1,3086098089)},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"}},[t.account.verify?n("v-list-item",{on:{click:function(e){return t.$router.push("/profile")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Thông tin tài khoản")])],1)],1):n("v-list-item",{on:{click:function(e){return t.$router.push("/profile")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-shield-account-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Xác minh danh tính")])],1)],1),n("v-list-item",{on:{click:function(e){t.dialog=!0}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-lock-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Đổi mật khẩu")])],1)],1),n("v-divider"),n("v-list-item",{on:{click:t.logout}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-arrow-right")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Đăng xuất")])],1)],1)],1)],1)],1):t._e(),t.account||t.mobile?t._e():n("v-btn",{staticClass:"ml-4",attrs:{color:"primary"},on:{click:function(e){return t.$router.push("/login")}}},[t._v("Đăng nhập")]),t.account||t.mobile?t._e():n("v-btn",{staticClass:"ml-4",attrs:{color:"primary",outlined:""},on:{click:function(e){return t.$router.push("/register")}}},[t._v("Đăng ký")])],1)],1),t._m(0),n("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"pa-4"},[n("v-img",{staticClass:"logo",attrs:{src:"/img/logo-header.png"}})],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(n){return t.$router.push(e.url)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",[t._v("Thay đổi mật khẩu")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("v-divider"),n("div",{staticClass:"pa-6"},[n("label",[t._v("Mật khẩu cũ")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Nhập mật khẩu cũ","append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.current_password,callback:function(e){t.current_password=e},expression:"current_password"}}),n("label",{staticClass:"mt-6"},[t._v("Mật khẩu mới")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Nhập mật khẩu mới","append-icon":t.show2?"mdi-eye":"mdi-eye-off",type:t.show2?"text":"password"},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("label",{staticClass:"mt-6"},[t._v("Xác nhận mật khẩu")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Xác nhận mật khẩu","append-icon":t.show3?"mdi-eye":"mdi-eye-off",type:t.show3?"text":"password"},on:{"click:append":function(e){t.show3=!t.show3}},model:{value:t.re_password,callback:function(e){t.re_password=e},expression:"re_password"}})],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"default",on:{click:function(e){t.dialog=!1}}},[t._v(" Hủy ")]),n("v-btn",{attrs:{color:"primary"},on:{click:t.changePassword}},[t._v(" Xác nhận ")]),n("v-spacer")],1)],1)],1)],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-note"},[n("a",{attrs:{target:"_blank",href:"https://t.me/chootcvn"}},[t._v(" Bạn có nhu cầu giao dịch số lượng lớn, tham gia ngay @chootcvn. ")])])}],s=n("5530"),l=n("2f62"),u={data:function(){return{dialog:!1,drawer:!1,notifications:[],noti_count:0,current_password:"",password:"",re_password:"",show1:"",show2:"",show3:""}},computed:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["account"])),{},{items:function(){var t=[{text:"Giao dịch mua",icon:"mdi-alpha-b-circle",url:"/buy/usdt"},{text:"Giao dịch bán",icon:"mdi-sack ",url:"/sell/usdt"}];return this.account?t.push({text:"Lịch sử",icon:"mdi-history ",url:"/history"},{text:"Thông tin tài khoản",icon:"mdi-account",url:"/profile"}):t.push({text:"Đăng nhập",icon:"mdi-account-circle ",url:"/login"},{text:"Đăng ký",icon:"mdi-account",url:"/register"}),t},mobile:function(){return this.$vuetify.breakpoint.width<1025}}),mounted:function(){this.getProfile()},methods:{changePassword:function(){var t=this;this.current_password&&this.password?this.password==this.re_password?this.password.length<6?this.$toast.error("Mật khẩu tối thiểu 6 ký tự"):this.CallAPI("post","change-password",{current_password:this.current_password,password:this.password},(function(e){t.$toast.success("Đổi mật khẩu thành công"),t.dialog=!1,t.current_password="",t.password="",t.re_password=""}),(function(e){t.$toast.error("Mật khẩu cũ không chính xác")})):this.$toast.error("Xác nhận mật khẩu không chính xác"):this.$toast.error("Vui lòng nhập đủ mật khẩu")},getProfile:function(){var t=this;this.CallAPI("get","profile",{},(function(e){t.$store.dispatch("setAccount",e.data)}),(function(t){return localStorage.clear()}))},logout:function(){localStorage.clear(),this.$store.dispatch("setAccount","")},getNotification:function(){var t=this;this.CallAPI("get","notifications",{},(function(e){t.notifications=e.data}))},getAmountNoti:function(){var t=this;this.CallAPI("get","count-noti",{},(function(e){t.noti_count=e.data}))},readNoti:function(t,e){var n=this;t.url&&this.$router.push(t.url),t.is_readed||this.CallAPI("put","read-noti",{id:t.id},(function(t){n.getAmountNoti(),n.notifications[e].is_readed=1}))},readAll:function(){var t=this;this.CallAPI("get","read-all",{},(function(e){t.getAmountNoti()}))},formatDate:function(t){var e=new Date(t);return e.toLocaleString()}},watch:{account:function(){this.account.phone&&(this.getNotification(),this.getAmountNoti())}}},d=u,h=n("2877"),f=Object(h["a"])(d,r,c,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("v-container",[n("v-divider",{staticClass:"mb-3"}),n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",md:"4"}},[t._v(" © 2023 chootc.com. All rights reserved ")]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"d-flex justify-center"},[n("a",{staticClass:"px-5",attrs:{href:"https://chootc.gitbook.io/exchange/huong-dan-giao-dich/mua-tien-dien-tu",target:"_blank"}},[t._v("Hướng dẫn")]),n("a",{staticClass:"px-5",attrs:{href:"https://chootc.gitbook.io/exchange/dieu-khoan-su-dung",target:"_blank"}},[t._v("Điều khoản sử dụng")])])]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"d-flex justify-end"},[n("v-btn",{attrs:{icon:"",size:"35",variant:"text",href:"https://t.me/chootcvn",target:"_blank","aria-label":"Telegram"}},[n("v-icon",{attrs:{size:"22"}},[t._v("fa-brands fa-telegram")])],1),n("v-btn",{attrs:{icon:"",size:"35",variant:"text",href:"https://www.facebook.com/Chootcvietnam",target:"_blank","aria-label":"Facebook"}},[n("v-icon",{attrs:{size:"22"}},[t._v("fa-brands fa-facebook")])],1),n("v-btn",{attrs:{icon:"",size:"35",variant:"text",href:"https://twitter.com/chootcvn",target:"_blank","aria-label":"Twitter"}},[n("v-icon",{attrs:{size:"22"}},[t._v("fa-brands fa-twitter")])],1),n("v-btn",{attrs:{icon:"",size:"35",variant:"text",href:"https://www.tiktok.com/@chootcvietnam",target:"_blank","aria-label":"Tiktok"}},[n("v-icon",{attrs:{size:"22"}},[t._v("fa-brands fa-tiktok")])],1)],1)])],1),n("div",{staticClass:"chat"},[n("v-btn",{staticClass:"elevation-0",attrs:{fab:"",color:"primary",href:"https://t.me/ChoOTCVN_support",target:"_blank"}},[n("v-icon",{attrs:{size:"30"}},[t._v("mdi-facebook-messenger")])],1)],1)],1)],1)},m=[],g={},b=g,_=Object(h["a"])(b,v,m,!1,null,null,null),k=_.exports,w={components:{Header:p,Footer:k}},y=w,x=(n("034f"),Object(h["a"])(y,a,i,!1,null,null,null)),P=x.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),A=n("58ca");o["default"].use(C["a"]),o["default"].use(A["a"]);var O=[{name:"Home",path:"/",component:function(){return n.e("chunk-7e157718").then(n.bind(null,"54ec"))},meta:{header:!0}},{name:"Buy",path:"/buy/:id",component:function(){return n.e("chunk-7e157718").then(n.bind(null,"54ec"))},meta:{header:!0}},{name:"Sell",path:"/sell/:id",component:function(){return Promise.all([n.e("chunk-2d0cfb23"),n.e("chunk-747f5e75")]).then(n.bind(null,"753a"))},meta:{header:!0}},{name:"Login",path:"/login",component:function(){return n.e("chunk-6d9c90d2").then(n.bind(null,"a55b"))},meta:{header:!0},beforeEnter:function(t,e,n){localStorage.getItem("access_token")&&n({name:"Home"}),n()}},{name:"History",path:"/history",component:function(){return n.e("chunk-44286f26").then(n.bind(null,"e4bb"))},meta:{header:!0}},{name:"Profile",path:"/profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))},meta:{header:!0}},{name:"Kyc",path:"/kyc/:id",component:function(){return n.e("chunk-294b8482").then(n.bind(null,"3ea9"))},meta:{header:!1}},{name:"Error",path:"/error",component:function(){return Promise.all([n.e("chunk-2d0cfb23"),n.e("chunk-2d22996d")]).then(n.bind(null,"dda8"))},meta:{header:!0}},{name:"Register",path:"/register",component:function(){return n.e("chunk-2f00a150").then(n.bind(null,"73cf"))},meta:{header:!0},beforeEnter:function(t,e,n){localStorage.getItem("access_token")&&n({name:"Home"}),n()}}],E=new C["a"]({mode:"history",base:"/",routes:O,scrollBehavior:function(){return{x:0,y:0,behavior:"smooth"}}});E.beforeEach((function(t,e,n){"History"!=t.name||localStorage.getItem("access_token")||n({name:"Login"}),"Error"!=t.name||localStorage.getItem("access_token")||n({name:"Login"}),"Profile"!=t.name||localStorage.getItem("access_token")||n({name:"Login"}),n()}));var S=E;o["default"].use(l["a"]);var L=new l["a"].Store({state:{account:""},mutations:{setAccount:function(t,e){t.account=e}},actions:{setAccount:function(t,e){var n=t.commit;n("setAccount",e)}},getters:{account:function(t){return t.account}}}),j=n("bc3a"),N=n.n(j),$=(n("159b"),n("ac1f"),n("466d"),n("a925"));function T(){var t=n("49f8"),e={};return t.keys().forEach((function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];e[a]=t(n)}})),e}o["default"].use($["a"]);var z=new $["a"]({locale:Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://exchange.chootc.com",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"vi",fallbackLocale:Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://exchange.chootc.com",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"vi",messages:T()}),I=n("ce5b"),B=n.n(I);n("bf40"),n("5363");o["default"].use(B.a);var M={theme:{dark:!1,themes:{light:{primary:"#01c77d"}}},options:{customProperties:!0},icons:{iconfont:"mdi"}},U=new B.a(M),H=(n("becf"),n("6c42"));n("da96"),n("6672"),n("f176");o["default"].config.productionTip=!1,o["default"].config.silent=!0,o["default"].use(H["a"],{transition:"Vue-Toastification__bounce",maxToasts:20,newestOnTop:!0,position:"top-right"}),o["default"].prototype.image=function(t){return"https://exchange.chootc.com/storage/"+t},o["default"].prototype.CallAPI=function(t,e,n,o,a){var i={headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}},r="https://exchange.chootc.com",c="".concat(r,"/api/").concat(e);switch(t){case"post":N.a.post(c,n,i).then((function(t){o(t)})).catch((function(t){try{a(t)}catch(t){}}));break;case"get":N.a.get(c,i).then((function(t){o(t)})).catch((function(t){try{a(t)}catch(t){}}));break;case"put":N.a.put(c,n,i).then((function(t){o(t)})).catch((function(t){try{a(t)}catch(t){}}));break;case"delete":N.a.delete(c,i).then((function(t){o(t)})).catch((function(t){try{a(t)}catch(t){}}));break}},new o["default"]({vuetify:U,router:S,store:L,i18n:z,render:function(t){return t(P)}}).$mount("#app")},6672:function(t,e,n){},"85ec":function(t,e,n){},aced:function(t){t.exports=JSON.parse('{"news":"Tin Tức","search":"Tìm kiếm","readmore":"Đọc Thêm","contact":{"title":"Liên hệ","text":"Đăng ký nhận tin nhắn","signup":"Đăng ký"},"LastestPosts":"Bài viết mới nhất","RelatedPosts":"Bài viết liên quan","notresult":"Không tìm thấy kết quả nào"}')},edd4:function(t){t.exports=JSON.parse('{"header":{"home":"Home","solution":"Solution","partnership":"Partnership","portfolio":"Portfolio","ourteam":"Our Team","news":"News","mediakit":"Media Kit"},"news":"News","search":"Search","readmore":"Read More","contact":{"title":"Contact","text":"Sign up receive message","signup":"Sign Up"},"LastestPosts":"Lastest Posts","RelatedPosts":"Related Posts","notresult":"No result was found"}')},f176:function(t,e,n){}});