(function(n){function t(t){for(var a,o,r=t[0],u=t[1],h=t[2],l=0,s=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a]);d&&d(t);while(s.length)s.shift()();return i.push.apply(i,h||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],a=!0,o=1;o<e.length;o++){var r=e[o];0!==c[r]&&(a=!1)}a&&(i.splice(t--,1),n=u(u.s=e[0]))}return n}var a={},o={app:0},c={app:0},i=[];function r(n){return u.p+"js/"+({}[n]||n)+"."+{"chunk-0ab1e2fa":"4e9d3574","chunk-2d0d6d35":"9551b1b9","chunk-2d2086b7":"7d9a1138","chunk-2d21a36a":"e35cca7d","chunk-2d2252b5":"28099340","chunk-2d2386b3":"108af861","chunk-2f878606":"dee115e9","chunk-621b3cf4":"3d2ddf11","chunk-74919be8":"5cc6ede3","chunk-7d14b663":"bd6183b1","chunk-c994c588":"f7e59f01"}[n]+".js"}function u(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(n){var t=[],e={"chunk-621b3cf4":1};o[n]?t.push(o[n]):0!==o[n]&&e[n]&&t.push(o[n]=new Promise((function(t,e){for(var a="css/"+({}[n]||n)+"."+{"chunk-0ab1e2fa":"31d6cfe0","chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d21a36a":"31d6cfe0","chunk-2d2252b5":"31d6cfe0","chunk-2d2386b3":"31d6cfe0","chunk-2f878606":"31d6cfe0","chunk-621b3cf4":"10bac7d8","chunk-74919be8":"31d6cfe0","chunk-7d14b663":"31d6cfe0","chunk-c994c588":"31d6cfe0"}[n]+".css",c=u.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var h=i[r],l=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(l===a||l===c))return t()}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){h=s[r],l=h.getAttribute("data-href");if(l===a||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[n],d.parentNode.removeChild(d),e(i)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[n]=0})));var a=c[n];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,e){a=c[n]=[t,e]}));t.push(a[2]=i);var h,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(n);var s=new Error;h=function(t){l.onerror=l.onload=null,clearTimeout(d);var e=c[n];if(0!==e){if(e){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,e[1](s)}c[n]=void 0}};var d=setTimeout((function(){h({type:"timeout",target:l})}),12e4);l.onerror=l.onload=h,document.head.appendChild(l)}return Promise.all(t)},u.m=n,u.c=a,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)u.d(e,a,function(t){return n[t]}.bind(null,a));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="/",u.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],l=h.push.bind(h);h.push=t,h=h.slice();for(var s=0;s<h.length;s++)t(h[s]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("85ec")},"49f8":function(n,t,e){var a={"./en.json":"edd4","./vi.json":"aced"};function o(n){var t=c(n);return e(t)}function c(n){if(!e.o(a,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return a[n]}o.keys=function(){return Object.keys(a)},o.resolve=c,n.exports=o,o.id="49f8"},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("99af");var a=e("2b0e"),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app","data-app":""}},[n.$route.meta.header?e("Header"):n._e(),e("router-view"),e("Footer")],1)},c=[],i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",n._l(n.tabs,(function(t,a){return e("router-link",{key:a,staticClass:"item",attrs:{to:t.url}},[e("img",{attrs:{src:t.img,alt:""}}),e("p",[n._v(n._s(t.title))])])})),1)},r=[],u={data:function(){return{tabs:[{img:"img/icon/wallet.svg",url:"/wallet",title:"Ví tiền"},{img:"img/icon/home.svg",url:"/",title:"Trang chủ"},{img:"img/icon/headphones.svg",url:"/service",title:"CSKH"},{img:"img/icon/person-fill.svg",url:"/profile",title:"Hồ sơ"}],ok:""}},mounted:function(){this.getProfile()},methods:{getProfile:function(){var n=this;this.CallAPI("get","profile",{},(function(t){n.$store.dispatch("setAccount",t.data.phone),n.$store.dispatch("setBalance",t.data.balance),n.CallAPI("get","care/"+t.data.care,{},(function(n){localStorage.setItem("cskh",n.data)}))}),(function(n){localStorage.removeItem("access_token")})),this.CallAPI("get","my-verify",{},(function(t){n.$store.dispatch("setVerify",t.data)}))}}},h=u,l=e("2877"),s=Object(l["a"])(h,i,r,!1,null,null,null),d=s.exports,p=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("footer")},g=[],f={},m=f,v=Object(l["a"])(m,p,g,!1,null,null,null),b=v.exports,k={components:{Header:d,Footer:b}},y=k,x=(e("034f"),Object(l["a"])(y,o,c,!1,null,null,null)),w=x.exports,C=(e("d3b7"),e("3ca3"),e("ddb0"),e("b0c0"),e("8c4f")),_=e("58ca");a["default"].use(C["a"]),a["default"].use(_["a"]);var A=[{path:"/",name:"Home",component:function(){return e.e("chunk-0ab1e2fa").then(e.bind(null,"bb51"))},meta:{header:!0}},{path:"/profile",name:"Profile",component:function(){return e.e("chunk-c994c588").then(e.bind(null,"c66d"))},meta:{header:!0}},{path:"/verify",name:"Verify",component:function(){return e.e("chunk-7d14b663").then(e.bind(null,"b6d1"))},meta:{header:!0}},{path:"/contract",name:"Contract",component:function(){return e.e("chunk-621b3cf4").then(e.bind(null,"e538e"))},meta:{header:!0}},{path:"/success",name:"Success",component:function(){return e.e("chunk-2d21a36a").then(e.bind(null,"bb0d"))},meta:{header:!0}},{path:"/notification",name:"Notification",component:function(){return e.e("chunk-74919be8").then(e.bind(null,"109a"))},meta:{header:!0}},{path:"/service",name:"Service",component:function(){return e.e("chunk-2d2252b5").then(e.bind(null,"e2f8"))},meta:{header:!0}},{path:"/introduce",name:"Introduce",component:function(){return e.e("chunk-2d2386b3").then(e.bind(null,"fefd"))},meta:{header:!0}},{path:"/wallet",name:"Wallet",component:function(){return e.e("chunk-2f878606").then(e.bind(null,"4dd7"))},meta:{header:!0}},{path:"/login",name:"Login",component:function(){return e.e("chunk-2d2086b7").then(e.bind(null,"a55b"))},beforeEnter:function(n,t,e){localStorage.getItem("access_token")&&e({name:"Home"}),e()}},{path:"/register",name:"Register",component:function(){return e.e("chunk-2d0d6d35").then(e.bind(null,"73cf"))},beforeEnter:function(n,t,e){localStorage.getItem("access_token")&&e({name:"Home"}),e()}}],T=new C["a"]({mode:"history",base:"/",routes:A,scrollBehavior:function(){return{x:0,y:0,behavior:"smooth"}}});T.beforeEach((function(n,t,e){"Login"===n.name||"Register"===n.name||localStorage.getItem("access_token")||e({name:"Login"}),e()}));var N=T,O=e("2f62");a["default"].use(O["a"]);var S=new O["a"].Store({state:{account:"",contract:"",balance:"",verify:"",info:""},mutations:{setAccount:function(n,t){n.account=t},setContract:function(n,t){n.contract=t},setVerify:function(n,t){n.verify=t},setInfo:function(n,t){n.info=t},setBalance:function(n,t){n.balance=t}},actions:{setAccount:function(n,t){var e=n.commit;e("setAccount",t)},setContract:function(n,t){var e=n.commit;e("setContract",t)},setVerify:function(n,t){var e=n.commit;e("setVerify",t)},setInfo:function(n,t){var e=n.commit;e("setInfo",t)},setBalance:function(n,t){var e=n.commit;e("setBalance",t)}},getters:{account:function(n){return n.account},contract:function(n){return n.contract},verify:function(n){return n.verify},info:function(n){return n.info},balance:function(n){return n.balance}}}),E=e("bc3a"),P=e.n(E),M=(e("159b"),e("ac1f"),e("466d"),e("a925"));function I(){var n=e("49f8"),t={};return n.keys().forEach((function(e){var a=e.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var o=a[1];t[o]=n(e)}})),t}a["default"].use(M["a"]);var L=new M["a"]({locale:Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://vaynhanhnhqd.com",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://vaynhanhnhqd.com",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:I()}),j=(e("becf"),e("6c42")),B=(e("da96"),e("5f5b")),V=e("b1e0"),F=e("f5af"),G=e.n(F),q=(e("e829"),e("f9e3"),e("2dd8"),e("6672"),e("f176"),e("1321")),H=e.n(q);a["default"].use(H.a),a["default"].component("apexchart",H.a),a["default"].use(B["a"]),a["default"].use(V["a"]),a["default"].config.productionTip=!1,a["default"].config.silent=!0,a["default"].use(j["a"],{transition:"Vue-Toastification__bounce",maxToasts:20,newestOnTop:!0,position:"top-center"}),a["default"].prototype.image=function(n){return"https://vaynhanhnhqd.com/storage"+n},a["default"].prototype.CallAPI=function(n,t,e,a,o){var c={headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}},i="https://vaynhanhnhqd.com",r="".concat(i,"/api/").concat(t);switch(n){case"post":P.a.post(r,e,c).then((function(n){a(n)})).catch((function(n){try{o(n)}catch(n){}}));break;case"get":P.a.get(r,c).then((function(n){a(n)})).catch((function(n){try{o(n)}catch(n){}}));break;case"put":P.a.put(r,e,c).then((function(n){a(n)})).catch((function(n){try{o(n)}catch(n){}}));break;case"delete":P.a.delete(r,c).then((function(n){a(n)})).catch((function(n){try{o(n)}catch(n){}}));break}},new a["default"]({created:function(){G.a.init()},router:N,store:S,i18n:L,render:function(n){return n(w)}}).$mount("#app")},6672:function(n,t,e){},"85ec":function(n,t,e){},aced:function(n){n.exports=JSON.parse('{"menu":{"home":"Trang chủ","about":"Giới thiệu","service":"Dịch vụ","portfolio":"Đầu tư","contact":"Liên hệ"},"banner":{"span1":"Ươm tạo","span2":"Hỗ trợ","span3":"Tập trung","and":"và","text1":"các dự án Blockchain tiềm năng toàn cầu","text2":"vào công nghệ và các ứng dụng của Blockchain"},"about":{"span1":"Sứ Mệnh","span2":"Tầm Nhìn","span3":"Giá Trị","title":"Về chúng tôi","p1":"MaxxCapital Ventures","p2":"Chúng tôi tập trung","p3":"Mối quan tâm","text1":"là quỹ đầu tư và trung tâm thông tin cho ngành công nghiệp blockchain quy mô toàn cầu.","text2":"cung cấp tin tức, giáo dục cộng đồng, ươm tạo và hỗ trợ các dự án Blockchain tiềm năng toàn cầu nhằm góp phần cho thế giới trở nên minh bạch hơn và văn minh hơn, từ đó tối đa hóa giá trị cộng đồng nhà đầu tư.","text3":"của chúng tôi tập trung vào công nghệ blockchain và mọi ứng dụng của công nghệ này, như Defi, NFT, Metaverse, Play To Earn... và chúng tôi luôn cố gắng mang lại sự phát triển rõ rệt & củng cố các tổ chức trên thế giới."},"work":{"title":"Lĩnh vực","p1":"Research","p2":"Đầu tư","p3":"Trading","p4":"Academy/Education","p5":"Marketing Agency","p6":"Game Guild","text1":"Mục tiêu chính của chúng tôi là tìm kiếm những dự án tiềm năng, đảm bảo tính minh bạch trong thế giới blockchain toàn cầu.","text2":"Chúng tôi sở hữu hơn 20 cho chi hội, hơn 90,000 thành viên và các nhà đầu tư lớn và tin tưởng vào cuộc cách mạng Blockchain.","text3":"Luôn cập nhật tình hình thị trường, dựa vào những kinh nghiệm phân tích lâu năm và đưa ra những tín hiệu giao dịch hiệu quả.","text4":"Nền tảng giáo dục của chúng tôi cung cấp cho bạn trọn bộ kỹ năng, kiến thức cần thiết trong lĩnh vực blockchain.","text5":"Chúng tôi sẽ giúp tìm ra giải pháp phù hợp và tư vấn chiến lược Marketing hiệu quả cho chiến lược xuất hiện doanh nghiệp của bạn.","text6":"Chúng tôi xây dựng Guild Game với vai trò quan trọng kết nối các gamer - Hướng tới việc tìm kiếm những cách thức vừa chơi game vừa kiếm tiền trong các dự án Gamefi tiềm năng."},"reason":{"title":"TẠI SAO LẠI LỰA CHỌN CHÚNG TÔI?","text1":"MaxxCapital Ventures có một cộng đồng nhà đầu tư lớn và tin tưởng vào cuộc cách mạng Blockchain.","text2":"Với đội ngũ nhân sự giàu kinh nghiệm, chúng tôi tin tưởng sẽ hỗ trợ tốt các dự án khởi nghiệp trên toàn cầu.","text3":"Tài trợ, kết nối, cố vấn và quảng bá sản phẩm của các doanh nhân đến cộng đồng nhà đầu tư của chúng tôi là một phần trong những gì chúng tôi làm khi làm việc với một dự án.","text4":"Chúng tôi kết hợp một bộ kỹ năng đa dạng từ khởi nghiệp, tiếp thị sản phẩm, quản lý hoạt động, chiến lược công nghệ, thực hiện giao dịch và gây quỹ.","text5":"Mạng lưới rộng khắp của chúng tôi sẽ mở ra cánh cửa cho các đối tác và khách hàng tiềm năng. Nếu bạn nghĩ rằng mình đã phù hợp, hãy bắt đầu ngay hôm nay."},"service":{"title":"Dịch vụ","p1":"Ươm mầm và bệ phóng","p2":"Marketing Agency","p3":"Gói PR theo yêu cầu","p4":"Đào tạo về Blockchain","text1":"Maxx Capital đang tập trung phát triển các dự án khác biệt và hiệu quả cao ứng dụng công nghệ Security NFT hay Maxx Cashflow Fomulate cho Gamefi 2.0.","text2":"AMA cộng đồng Việt Nam và Quốc Tế","text3":"Social Media Content","text4":"Promo Video, Comunity training","text5":"Maxx Capital là đại lý tiếp thị Crypto & NFT được hàng đầu giúp nhận thức về thương hiệu dự án của bạn, tiếp xúc với những người có ảnh hưởng và các phương tiện truyền thông.","text6":"Cung cấp kiến thức từ cơ bản đến nâng cao cho cộng đồng về các lĩnh vực ứng dụng Blockchain: Đầu tư, trading, Defi, NFT."},"portfolio":"Danh mục đầu tư","partner":"Đối tác","contact":{"title":"LIÊN HỆ VỚI CHÚNG TÔI","p1":"Tên","p2":"Họ","p3":"Công ty","p4":"Nội dung","p5":"Gửi"},"footer":{"company":"Công ty","social":"Mạng xã hội","contact":"Liên hệ"}}')},edd4:function(n){n.exports=JSON.parse('{"menu":{"home":"Home","about":"About Us","service":"Services","portfolio":"Portfolio","contact":"Contact"},"banner":{"span1":"Incubate","span2":"Support","span3":"Focus","and":"and","text1":"potential global Blockchain projects","text2":"on Blockchain technology and applications"},"about":{"span1":"Mission","span2":"Vision","span3":"Value","title":"About us","p1":"MaxxCapital Ventures","p2":"We focus","p3":"Our interest","text1":"is an investment fund and information hub for the global blockchain industry.","text2":"on providing news, promoting the community, incubating and supporting potential global Blockchain projects to contribute to a more transparent and civilized world, thereby maximizing value investor community.","text3":"is focused on blockchain technology and every application of this technology, like Defi, NFT, Metaverse, Play To Earn... and we always strive to bring tangible development & consolidation organizations around the world."},"work":{"title":"Our Works","p1":"Research","p2":"Investment","p3":"Trading","p4":"Academy/Education","p5":"Marketing Agency","p6":"Game Guild","text1":"Our main goal is to find potential projects, ensure transparency in the global blockchain world.","text2":"We own more than 20 for the association, more than 90,000 members and big investors and believe in Blockchain revolution.","text3":"Always update the market situation, based on long-term analysis experience and give effective trading signals.","text4":"Our educational platform provides you with a complete set of skills and knowledge needed in the blockchain field.","text5":"We will help find the right solution and advise you on effective marketing strategies for your business appearance strategy.","text6":"We build Game Guild with an important role connecting gamers - Towards finding ways to both play games and earn money in potential Gamefi projects."},"reason":{"title":"Why choose us?","text1":"MaxxCapital Ventures has a large community of investors and believes in the Blockchain revolution.","text2":"With a team of experienced staff, we believe that we will well support startup projects around the globe.","text3":"Funding, networking, mentoring and promoting entrepreneurs\' products to our investor community is part of what we do when we work on a project.","text4":"We combine a diverse skill set from entrepreneurship, product marketing, operations management, technology strategy, deal execution and fundraising.","text5":"Our extensive network opens doors to potential partners and customers. If you think you\'re a good fit, get started today."},"service":{"title":"Our Services","p1":"Incubator and launch pad","p2":"Marketing Agency","p3":"PR package on request","p4":"Blockchain Training","text1":"Maxx Capital is focusing on developing different and highly effective projects using Security NFT technology or Maxx Cashflow Formulate for Gamefi 2.0.","text2":"Vietnamese and International Community AMA","text3":"Social Media Content","text4":"Promo Video, Comunity training","text5":"Maxx Capital is a leading Crypto & NFT marketing agency that helps your project brand awareness, influencers and media exposure. KOL systems and thought leaders can help your project grow.","text6":"Provide basic to advanced knowledge for the community about Blockchain application areas: Investment, trading, Defi, NFT."},"portfolio":"Portfolio","partner":"Partner","contact":{"title":"CONTACT US","p1":"First Name","p2":"Last Name","p3":"Company","p4":"Message","p5":"Send"},"footer":{"company":"Company","social":"Social Network","contact":"Contact"}}')},f176:function(n,t,e){}});