(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("main",{staticClass:"profile"},[n("v-container",[n("div",{staticClass:"d-flex mb-6 mx-6"},[n("v-avatar",{attrs:{color:"primary",size:"80"}},[n("v-icon",{attrs:{dark:"",size:"50"}},[t._v(" mdi-account-circle ")])],1),n("div",{staticClass:"account"},[n("h1",[t._v(t._s(t.account.phone))]),"success"==t.account.verify?n("div",{staticClass:"verify"},[n("v-icon",{staticClass:"mr-1",attrs:{color:"primary",size:"16"}},[t._v(" mdi-check ")]),t._v(" Đã xác minh ")],1):n("div",{staticClass:"unverify"},[n("v-icon",{staticClass:"mr-1",attrs:{color:"#ff5252",size:"16"}},[t._v(" mdi-alert-circle-outline ")]),t._v(" Chưa xác minh ")],1)])],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticClass:"mx-6"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("label",[t._v("Họ và tên")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Họ và tên"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),n("v-col",{attrs:{cols:"12",md:"7"}},[n("label",[t._v("Ngày sinh")]),n("v-text-field",{attrs:{outlined:"",placeholder:t.gender_placeholder},model:{value:t.birthday,callback:function(a){t.birthday=a},expression:"birthday"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("label",[t._v("Giới tính")]),n("v-select",{attrs:{items:["Nam","Nữ","Khác"],outlined:"",placeholder:"Giới tính"},model:{value:t.gender,callback:function(a){t.gender=a},expression:"gender"}})],1),n("v-col",{attrs:{cols:"12",md:"7"}},[n("label",[t._v("Địa chỉ")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Địa chỉ"},model:{value:t.address,callback:function(a){t.address=a},expression:"address"}})],1)],1),n("v-btn",{staticClass:"my-6",attrs:{color:"primary","x-large":"",block:""},on:{click:t.updateProfile}},[t._v("Cập nhật")]),t.account.verify?t._e():n("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[n("div",{staticClass:"d-flex align-start"},[n("v-icon",{attrs:{color:"orange"}},[t._v("mdi-alert-outline")]),n("div",{staticClass:"warning-msg ml-3"},[t._v(" Vui lòng cập nhật thông tin cá nhân. Sau đó truy cập link bên dưới bằng thiết bị di động để xác minh danh tính. ")])],1),n("v-text-field",{staticClass:"mt-3",attrs:{value:t.kyc_link,outlined:"",readonly:"","append-icon":"mdi-content-copy"},on:{"click:append":t.copyText,click:t.copyText}})],1),"pending"==t.account.verify?n("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[n("div",{staticClass:"d-flex align-start"},[n("v-icon",{attrs:{color:"orange"}},[t._v("mdi-alert-outline")]),n("div",{staticClass:"warning-msg ml-3"},[t._v(" Yêu cầu KYC của bạn đang trong quá trình xét duyệt. Bạn có thể liên hệ "),n("a",{attrs:{href:"https://t.me/ChoOTCVN_support",target:"_blank"}},[t._v("@ChoOTCVN_support")]),t._v(" để được hỗ trợ. ")])],1)]):t._e()],1)]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"faq"},[n("h3",{staticClass:"mb-3"},[t._v("Câu hỏi thường gặp")]),n("v-expansion-panels",t._l(t.faq,(function(a,e){return n("v-expansion-panel",{key:e},[n("v-expansion-panel-header",[t._v(" "+t._s(a.answer)+" ")]),n("v-expansion-panel-content",[t._v(" "+t._s(a.question)+" ")])],1)})),1)],1)])],1)],1)],1)},i=[],c=n("5530"),s=(n("b0c0"),n("2f62")),r={data:function(){return{name:"",birthday:"",gender:"Nam",address:"",faq:[{answer:"Xác minh danh tính (KYC) để làm gì?",question:"Đối với giao dịch mua, bạn cần KYC để chúng tôi xác minh ngân hàng bạn sử dụng là ngân hàng chính chủ. Còn đối với giao dịch bán thì bạn không cần phải KYC."},{answer:"Thời gian xác minh KYC?",question:"Quá trình xác minh sẽ diễn ra trong khoảng 5-10 phút."},{answer:"Tôi có thể liên hệ ai để được hỗ trợ?",question:"Bạn có thể liên hệ qua telegram @ChoOTCVN_support để được hỗ trợ."}]}},computed:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["account"])),{},{gender_placeholder:function(){var t=new Date;return t.toLocaleDateString()},kyc_link:function(){return"https://exchange.chootc.com/kyc/".concat(this.account.phone)}}),mounted:function(){this.getProfile()},methods:{getProfile:function(){var t=this;this.CallAPI("get","profile",{},(function(a){t.name=a.data.name,t.birthday=a.data.birthday,t.gender=a.data.gender,t.address=a.data.address}),(function(t){return localStorage.clear()}))},copyText:function(){this.$toast.success("Copy thành công"),navigator.clipboard.writeText(this.kyc_link)},updateProfile:function(){var t=this,a={name:this.name,birthday:this.birthday,gender:this.gender,address:this.address};this.CallAPI("post","update-profile",a,(function(a){t.$toast.success("Cập nhật thành công")}))}}},l=r,o=n("2877"),d=Object(o["a"])(l,e,i,!1,null,null,null);a["default"]=d.exports}}]);