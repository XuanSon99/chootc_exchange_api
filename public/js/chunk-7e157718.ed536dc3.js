(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e157718"],{"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,l,u){var d=n+t.length,v=c.length,p=o;return void 0!==l&&(l=r(l),p=s),i.call(u,p,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":s=l[i.slice(1,-1)];break;default:var o=+i;if(0===o)return r;if(o>v){var u=a(o/10);return 0===u?r:u<=v?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):r}s=c[o-1]}return void 0===s?"":s}))}},1148:function(t,e,n){"use strict";var r=n("a691"),a=n("577e"),i=n("1d80");t.exports=function(t){var e=a(i(this)),n="",s=r(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(n+=e);return n}},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),s=n("1d80"),o=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("577e"),d=n("14c3"),v=n("9263"),p=n("9f7f"),h=n("d039"),f=p.UNSUPPORTED_Y,m=[].push,b=Math.min,g=4294967295,_=!h((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=u(s(this)),i=void 0===n?g:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var o,c,l,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,f=new RegExp(t.source,p+"g");while(o=v.call(f,r)){if(c=f.lastIndex,c>h&&(d.push(r.slice(h,o.index)),o.length>1&&o.index<r.length&&m.apply(d,o.slice(1)),l=o[0].length,h=c,d.length>=i))break;f.lastIndex===o.index&&f.lastIndex++}return h===r.length?!l&&f.test("")||d.push(""):d.push(r.slice(h)),d.length>i?d.slice(0,i):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(u(a),e,n)},function(t,a){var s=i(this),v=u(t),p=n(r,s,v,a,r!==e);if(p.done)return p.value;var h=o(s,RegExp),m=s.unicode,_=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(f?"g":"y"),y=new h(f?"^(?:"+s.source+")":s,_),k=void 0===a?g:a>>>0;if(0===k)return[];if(0===v.length)return null===d(y,v)?[v]:[];var x=0,C=0,w=[];while(C<v.length){y.lastIndex=f?0:C;var N,I=d(y,f?v.slice(C):v);if(null===I||(N=b(l(y.lastIndex+(f?C:0)),v.length))===x)C=c(v,C,m);else{if(w.push(v.slice(x,C)),w.length===k)return w;for(var A=1;A<=I.length-1;A++)if(w.push(I[A]),w.length===k)return w;C=x=N}}return w.push(v.slice(x)),w}]}),!_,f)},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("577e"),s=n("d039"),o=n("ad6d"),c="toString",l=RegExp.prototype,u=l[c],d=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),v=u.name!=c;(d||v)&&r(RegExp.prototype,c,(function(){var t=a(this),e=i(t.source),n=t.flags,r=i(void 0===n&&t instanceof RegExp&&!("flags"in l)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),s=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("d039"),i=n("825a"),s=n("a691"),o=n("50c4"),c=n("577e"),l=n("1d80"),u=n("8aa5"),d=n("0cb2"),v=n("14c3"),p=n("b622"),h=p("replace"),f=Math.max,m=Math.min,b=function(t){return void 0===t?t:String(t)},g=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),y=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=_?"$":"$0";return[function(t,n){var r=l(this),a=void 0==t?void 0:t[h];return void 0!==a?a.call(t,r,n):e.call(c(r),t,n)},function(t,a){var l=i(this),p=c(t);if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var h=n(e,l,p,a);if(h.done)return h.value}var g="function"===typeof a;g||(a=c(a));var _=l.global;if(_){var y=l.unicode;l.lastIndex=0}var k=[];while(1){var x=v(l,p);if(null===x)break;if(k.push(x),!_)break;var C=c(x[0]);""===C&&(l.lastIndex=u(p,o(l.lastIndex),y))}for(var w="",N=0,I=0;I<k.length;I++){x=k[I];for(var A=c(x[0]),T=f(m(s(x.index),p.length),0),E=[],M=1;M<x.length;M++)E.push(b(x[M]));var $=x.groups;if(g){var S=[A].concat(E,T,p);void 0!==$&&S.push($);var P=c(a.apply(void 0,S))}else P=d(A,p,T,E,$,a);T>=N&&(w+=p.slice(N,T)+P,N=T+A.length)}return w+p.slice(N)}]}),!y||!g||_)},"54ec":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticClass:"ml-6"},[n("v-tabs",{attrs:{color:t.tab?"error":"primary","background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{attrs:{value:"0"},on:{click:function(e){return t.$router.push("/buy/usdt")}}},[t._v("Tôi muốn mua")]),n("v-tab",{attrs:{value:"1"},on:{click:function(e){return t.$router.push("/sell/usdt")}}},[t._v("Tôi muốn bán")])],1)],1),n("v-stepper",{staticClass:"elevation-0",attrs:{vertical:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-stepper-step",{attrs:{complete:t.step>1,step:"1"}},[t._v(" MUA "+t._s(t.token.toUpperCase())+" ")]),n("v-stepper-content",{attrs:{step:"1"}},[n("div",{staticClass:"mb-6"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("div",{staticClass:"d-flex align-center"},[n("label",[t._v("Số lượng cần mua")]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"ml-1 mb-1",attrs:{size:"16"}},"v-icon",a,!1),r),[t._v(" mdi-help-circle-outline ")])]}}])},[n("div",{staticClass:"tooltip my-1"},[t._v(" Hạn mức giao dịch mua mặc định là 1 - 25 triệu. "),n("br"),t._v(" Hãy đăng ký tài khoản và xác minh danh tính "),n("br"),t._v(" để tăng hạn mức giao dịch ")])])],1),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"exchange-input",attrs:{type:"number"},domProps:{value:t.amount},on:{input:[function(e){e.target.composing||(t.amount=e.target.value)},t.inputAmount]}}),n("div",{staticClass:"unit"},[n("v-select",{attrs:{dense:"",solo:"",items:t.token_list,"menu-props":{offsetY:!0}},scopedSlots:t._u([{key:"selection",fn:function(e){return[n("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}},{key:"item",fn:function(e){return[n("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}}]),model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1)]),n("div",{staticClass:"estimated"},[t._v(" Ước tính: "),n("span",[t._v("1 "+t._s(t.token)+" ≈ "+t._s(t.formatMoney(t.price))+" VND")])])]),n("v-col",{attrs:{cols:"12",md:"7"}},[n("div",{staticClass:"d-flex align-center"},[n("label",[t._v("Số tiền cần thanh toán")]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"ml-1 mb-1",attrs:{size:"16"}},"v-icon",a,!1),r),[t._v(" mdi-help-circle-outline ")])]}}])},[n("div",{staticClass:"tooltip my-1"},[t._v(" Số tiền cần thanh toán có thể bị thay đổi "),n("br"),t._v(" do tỷ giá được cập nhật liên tục ")])])],1),n("v-text-field",{staticClass:"money",attrs:{outlined:"",value:t.money_pay,readonly:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("img",{attrs:{width:"20",height:"20",src:"/img/p2p/vnd.png",alt:""}})]},proxy:!0}])}),n("div",{staticClass:"estimated"},[t._v(" Phí blockchain: "),n("span",[t._v(t._s(t.transfer_fee)+" USDT ≈ "+t._s(t.formatMoney(t.transfer_fee*t.usdt_price))+" VND")])])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("label",[t._v("Mạng lưới")]),n("v-select",{attrs:{items:t.network_list,outlined:"","item-text":function(t){return t.name},"menu-props":{offsetY:!0},"return-object":""},model:{value:t.network,callback:function(e){t.network=e},expression:"network"}})],1),n("v-col",{attrs:{cols:"12",md:"7"}},[n("label",[t._v("Địa chỉ ví")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Nhập địa chỉ ví nhận"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1),t.error?n("div",{staticClass:"d-flex align-center"},[n("span",{staticClass:"error-msg"},[t._v(" "+t._s(t.error)+" ")]),t.error.includes("KYC")?n("v-btn",{staticClass:"fz-14 ml-1 mt-2",attrs:{color:"primary",to:"/kyc/"+t.account.phone,small:"",outlined:""}},[t._v("KYC ngay")]):t._e(),t.error.includes("đăng nhập")?n("v-btn",{staticClass:"fz-14 ml-1 mt-2",attrs:{color:"primary",to:"/login",small:"",outlined:""}},[t._v("Đăng nhập")]):t._e()],1):t._e()],1),n("v-btn",{attrs:{color:"primary",disabled:t.loading,width:"120px"},on:{click:t.orderHandle}},[t.loading?n("v-progress-circular",{attrs:{indeterminate:"",width:3,size:20}}):n("span",[t._v("Xác nhận")])],1)],1),n("v-stepper-step",{attrs:{complete:t.step>2,step:"2"}},[t._v(" THANH TOÁN ")]),n("v-stepper-content",{attrs:{step:"2"}},[n("div",{staticClass:"mb-8 pay-table"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-simple-table",{attrs:{dense:""}},[n("tbody",[n("tr",[n("td",{staticStyle:{"min-width":"130px"}},[t._v("Số lượng mua:")]),n("td",{staticClass:"upper-case"},[t._v(t._s(t.amount)+" "+t._s(t.token)+" ("+t._s(t.network.value)+")")])]),n("tr",[n("td",[t._v("Địa chỉ ví nhận:")]),n("td",[t._v(t._s(t.address))])]),n("tr",[n("td",[t._v("Tỷ giá:")]),n("td",[t._v(t._s(t.formatMoney(t.order_data.rate))+" VNĐ")])]),n("tr",[n("td",[t._v("Số tiền cần trả:")]),n("td",[t._v(" "+t._s(t.formatMoney(t.order_data.money))+" VNĐ "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{size:"20"},on:{click:function(e){return t.copyText(t.order_data.money)}}},[t._v("mdi-content-copy")])],1)],1)]),n("tr",[n("td",[t._v("STK thanh toán:")]),n("td",[t._v(" "+t._s(t.bank[2])+" - "+t._s(t.bank[1])+" "),n("br"),t._v(" "+t._s(t.bank[0])+" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{size:"20"},on:{click:function(e){return t.copyText(t.bank[2])}}},[t._v("mdi-content-copy")])],1)],1)]),n("tr",[n("td",[t._v("Nội dung CK:")]),n("td",[t._v(" "+t._s(t.order_data.code)+" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{size:"20"},on:{click:function(e){return t.copyText(t.order_data.code)}}},[t._v("mdi-content-copy")])],1)],1)])])]),n("div",{staticClass:"note"},[t._v(" * Vui lòng chuyển chính xác số tiền (kể cả số lẻ) và nội dung chuyển khoản. Quét mã QR bên trên để thanh toán nhanh hơn. ")])],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("img",{staticClass:"img-qr",attrs:{src:t.qrcode,alt:""}})])],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.step=3}}},[t._v(" Tôi đã thanh toán ")]),n("v-btn",{staticClass:"ml-3",attrs:{text:""},on:{click:function(e){t.step=1}}},[t._v(" Quay lại ")])],1),n("v-stepper-step",{attrs:{complete:t.step>3,step:"3"}},[t._v(" HOÀN THÀNH ")]),n("v-stepper-content",{attrs:{step:"3"}},[n("div",{staticClass:"mb-8"},[n("div",{staticClass:"d-flex align-start"},[n("v-icon",{staticClass:"mt-1 mr-2",attrs:{size:"20",color:"primary"}},[t._v("mdi-progress-check")]),n("div",[t._v(" Giao dịch đang được xử lý. Vui lòng chờ trong giây lát! "),n("br"),t._v(" Liên hệ "),n("a",{attrs:{href:"https://t.me/ChoOTCVN_support",target:"_blank"}},[t._v("@ChoOTCVN_support")]),t._v(" để được hỗ trợ. ")])],1)]),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.step=1}}},[t._v(" Mua thêm ")])],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",[n("div",{staticClass:"px-6 py-5 title d-flex align-center"},[n("v-icon",{staticClass:"mr-1",attrs:{color:"primary"}},[t._v("mdi-chart-box-outline ")]),n("span",[t._v("Tỷ giá trực tuyến")])],1),n("v-divider"),n("div",{staticClass:"pa-6"},[n("v-tabs",{attrs:{color:t.tab?"error":"primary","fixed-tabs":"","background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{attrs:{value:"0"}},[t._v("Mua")]),n("v-tab",{attrs:{value:"1"}},[t._v("Bán")])],1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[t._l(t.asset_list,(function(e,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.symbol!=t.token,expression:"item.symbol != token"}],key:r,staticClass:"asset",on:{click:function(n){return t.$router.push("/buy/"+e.symbol)}}},[n("img",{attrs:{src:"/img/p2p/"+e.symbol+".svg",alt:""}}),n("div",{staticClass:"name"},[t._v(t._s(e.symbol))]),n("v-spacer"),n("v-btn",{attrs:{color:"primary",width:"150px"}},[t._v(" "+t._s(t.formatMoney(e.buy_rate))+" ₫ ")])],1)})),n("div",{staticClass:"asset",on:{click:function(e){return t.$router.push("/buy/"+t.token)}}},[n("img",{attrs:{src:"/img/p2p/"+t.token+".svg",alt:""}}),n("div",{staticClass:"name"},[t._v(t._s(t.token))]),n("v-spacer"),n("v-btn",{attrs:{color:"primary",width:"150px"}},[t._v(" "+t._s(t.formatMoney(t.price))+" ₫ ")])],1)],2),n("v-tab-item",t._l(t.asset_list,(function(e,r){return n("div",{key:r,staticClass:"asset",on:{click:function(n){return t.$router.push("/sell/"+e.symbol)}}},[n("img",{attrs:{src:"/img/p2p/"+e.symbol+".svg",alt:""}}),n("div",{staticClass:"name"},[t._v(t._s(e.symbol))]),n("v-spacer"),n("v-btn",{attrs:{color:"error",width:"150px"}},[t._v(" "+t._s(t.formatMoney(e.sell_rate))+" ₫ ")])],1)})),0)],1)],1)],1)],1)],1)],1)],1)},a=[],i=n("5530"),s=(n("99af"),n("ac1f"),n("5319"),n("b680"),n("a9e3"),n("d3b7"),n("25f0"),n("159b"),n("caad"),n("fb6a"),n("1276"),n("2f62")),o={data:function(){return{tab:0,step:1,amount:100,token_list:["usdt","btc","eth","busd","bnb"],token:"usdt",money:"",price:0,network_list:[{name:"Tron (TRC20)",value:"trc20",fee:1},{name:"BNB Smartchain (BEP20)",value:"bep20",fee:1},{name:"Ethereum (ERC20)",value:"erc20",fee:4.18}],network:{name:"Tron (TRC20)",value:"trc20",fee:1},usdt_price:0,address:"",order_data:"",bank:"",asset_list:"",interval:"",error:"",loading:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["account"])),{},{qrcode:function(){return"https://img.vietqr.io/image/".concat(this.bank[0],"-").concat(this.bank[2],"-compact2.jpg?amount=").concat(this.money,"&addInfo=").concat(this.order_data.code,"&accountName=").concat(this.bank[1])},money_pay:function(){return this.$vuetify.breakpoint.width<1025?this.formatMoney(this.money):"".concat(this.amount," * ").concat(this.formatMoney(this.price)," + ").concat(this.formatMoney(this.transfer_fee*this.usdt_price)," = ").concat(this.formatMoney(this.money)).replace("+ 0 ","")},transfer_fee:function(){return"usdt"==this.token||"busd"==this.token?this.amount<1e4?this.network.fee:0:(this.network.fee-1).toFixed(2)}}),mounted:function(){this.getPrice(),this.getUsdtPrice(),this.getSetup(),this.getAsset()},methods:{orderHandle:function(){var t=this;if(this.money>25e6){if(!this.account)return void(this.error="Hạn mức mua tối đa là 25 triệu. Hãy đăng nhập để tăng hạn mức");if("success"!=this.account.verify)return void(this.error="Hạn mức mua tối đa là 25 triệu. Hãy KYC để tăng hạn mức")}if(this.money<1e6)this.error="Hạn mức giao dịch tối thiểu là 1 triệu";else if(this.amount)if(this.address)if("trc20"!=this.network.value||this.validateTrc(this.address))if("trc20"==this.network.value||this.validateErc(this.address)){this.loading=!0;var e={phone:this.account.phone,amount:this.amount,network:this.network.value,address:this.address,token:this.token,fee:Math.round(this.transfer_fee*this.usdt_price)};this.CallAPI("post","buy-order",e,(function(e){t.order_data=e.data.data,t.price=t.order_data.rate,t.step=2,t.loading=!1}))}else this.error="Địa chỉ ví không chính xác";else this.error="Địa chỉ ví không chính xác";else this.error="Vui lòng nhập địa chỉ ví";else this.error="Vui lòng nhập số lượng cần mua"},getPrice:function(){var t=this;this.price=0,this.$route.params.id&&(this.token=this.$route.params.id);var e="p2p?type=buy&asset=".concat(this.token,"&fiat=vnd");this.CallAPI("get",e,{},(function(e){t.price=Number(e.data.data[4].adv.price),"btc"==t.token&&(t.price=Number(e.data.data[4].adv.price)+5e6),"eth"==t.token&&(t.price=Number(e.data.data[4].adv.price)+3e5),"bnb"==t.token&&(t.price=Number(e.data.data[4].adv.price)+5e4),"usdt"==t.token&&(t.usdt_price=Number(e.data.data[4].adv.price)),t.inputAmount()}))},getUsdtPrice:function(){var t=this,e="p2p?type=buy&asset=usdt&fiat=vnd";this.CallAPI("get",e,{},(function(e){t.usdt_price=Number(e.data.data[4].adv.price)}))},inputAmount:function(){this.money=Number(this.amount)*this.price+this.transfer_fee*this.usdt_price},formatMoney:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0},randomNum:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},getAsset:function(){var t=this;this.CallAPI("get","asset",{},(function(e){t.asset_list=e.data,t.interval=setInterval((function(){t.asset_list=[],e.data.forEach((function(e){var n=e.buy_rate,r=e.sell_rate;["btc","eth","bnb"].includes(e.symbol)&&(n=t.dynamicNum(e.buy_rate),r=t.dynamicNum(e.sell_rate)),t.asset_list.push({symbol:e.symbol,buy_rate:n,sell_rate:r})}))}),5e3)}))},dynamicNum:function(t){var e=String(t),n=e.length<8?this.randomNum(1,3):this.randomNum(2,4),r=e.slice(0,-n-1);return r+this.randomNum(Math.pow(10,n),9*Math.pow(10,n))},getSetup:function(){var t=this;this.CallAPI("get","setup/bank",{},(function(e){t.bank=e.data.value.split("\r\n")}))},validateErc:function(t){var e=/^0x[a-fA-F0-9]{40}$/g;return e.test(t)},validateTrc:function(t){var e=/^T[A-Za-z1-9]{33}$/g;return e.test(t)},copyText:function(t){this.$toast.success("Copy thành công"),navigator.clipboard.writeText(t)}},watch:{network:function(){this.inputAmount()},token:function(){this.token!=this.$route.params.id&&this.$router.push("/buy/"+this.token)},$route:function(){this.token=this.$route.params.id?this.$route.params.id:"usdt",this.step=1,this.getPrice(),"usdt"!=this.token&&"busd"!=this.token||(this.amount=100),"btc"==this.token&&(this.amount=.01),"bnb"==this.token&&(this.amount=1),"eth"==this.token&&(this.amount=.1),this.money=0}},beforeDestroy:function(){clearInterval(this.interval)}},c=o,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("577e"),i=n("5899"),s="["+i+"]",o=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t){return function(e){var n=a(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,s;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&a(t,s),t}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("5135"),c=n("c6b6"),l=n("7156"),u=n("d9b5"),d=n("c04e"),v=n("d039"),p=n("7c73"),h=n("241c").f,f=n("06cf").f,m=n("9bf2").f,b=n("58a8").trim,g="Number",_=a[g],y=_.prototype,k=c(p(y))==g,x=function(t){if(u(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,a,i,s,o,c,l=d(t,"number");if("string"==typeof l&&l.length>2)if(l=b(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(i=l.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>a)return NaN;return parseInt(i,r)}return+l};if(i(g,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var C,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(k?v((function(){y.valueOf.call(n)})):c(n)!=g)?l(new _(x(e)),n,w):x(e)},N=r?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;N.length>I;I++)o(_,C=N[I])&&!o(w,C)&&m(w,C,f(_,C));w.prototype=y,y.constructor=w,s(a,g,w)}},b680:function(t,e,n){"use strict";var r=n("23e7"),a=n("a691"),i=n("408a"),s=n("1148"),o=n("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2===1?u(t,e-1,n*t):u(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},v=function(t,e,n){var r=-1,a=n;while(++r<6)a+=e*t[r],t[r]=a%1e7,a=l(a/1e7)},p=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=l(r/e),r=r%e*1e7},h=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=String(t[e]);n=""===n?r:n+s.call("0",7-r.length)+r}return n},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));r({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,n,r,o,c=i(this),l=a(t),f=[0,0,0,0,0,0],m="",b="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,n=e<0?c*u(2,-e,1):c/u(2,e,1),n*=4503599627370496,e=52-e,e>0){v(f,0,n),r=l;while(r>=7)v(f,1e7,0),r-=7;v(f,u(10,r,1),0),r=e-1;while(r>=23)p(f,1<<23),r-=23;p(f,1<<r),v(f,1,1),p(f,2),b=h(f)}else v(f,0,n),v(f,1<<-e,0),b=h(f)+s.call("0",l);return l>0?(o=b.length,b=m+(o<=l?"0."+s.call("0",l-o)+b:b.slice(0,o-l)+"."+b.slice(o-l))):b=m+b,b}})},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),s=n("23cb"),o=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),v=d("slice"),p=u("species"),h=[].slice,f=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var n,r,u,d=c(this),v=o(d.length),m=s(t,v),b=s(void 0===e?v:e,v);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(d,m,b);for(r=new(void 0===n?Array:n)(f(b-m,0)),u=0;m<b;m++,u++)m in d&&l(r,u,d[m]);return r.length=u,r}})}}]);