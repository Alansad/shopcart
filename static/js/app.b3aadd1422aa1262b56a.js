webpackJsonp([1],{102:function(t,s,e){function a(t){e(99)}var o=e(16)(e(76),e(106),a,null,null);t.exports=o.exports},103:function(t,s,e){function a(t){e(97)}var o=e(16)(e(77),e(104),a,"data-v-73339698",null);t.exports=o.exports},104:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pos"},[e("el-row",[e("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[e("el-tabs",[e("el-tab-pane",{attrs:{label:"点餐"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",showSummary:""}},[e("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.delSingleGoods(s.row)}}},[t._v("删除")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.addOrderList(s.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),e("div",{staticClass:"div-btn"},[e("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),e("el-button",{attrs:{type:"danger"},on:{click:function(s){t.delAllgoods()}}},[t._v("删除")]),t._v(" "),e("el-button",{attrs:{type:"success"},on:{click:function(s){t.checkout()}}},[t._v("结账")])],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n        挂单\n      ")]),t._v(" "),e("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n        外卖\n      ")])],1)],1),t._v(" "),e("el-col",{attrs:{span:17}},[e("div",{staticClass:"often-goods"},[e("div",{staticClass:"title"},[t._v("\n          常用商品\n        ")]),t._v(" "),e("div",{staticClass:"often-goods-list"},[e("ul",t._l(t.oftenGoods,function(s){return e("li",{on:{click:function(e){t.addOrderList(s)}}},[e("span",[t._v(t._s(s.goodsName))]),t._v(" "),e("span",{staticClass:"o-price"},[t._v("$"+t._s(s.price))])])}))])]),t._v(" "),e("div",{staticClass:"goods-type"},[e("el-tabs",[e("el-tab-pane",{attrs:{label:"汉堡"}},[e("div",{staticStyle:{overflow:"hidden"}},[e("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(s){return e("li",{on:{click:function(e){t.addOrderList(s)}}},[e("span",{staticClass:"foodImg"},[e("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),e("div",{staticClass:"span-right"},[e("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),e("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])])}))])]),t._v(" "),e("el-tab-pane",{attrs:{label:"小食"}},[e("div",{staticStyle:{overflow:"hidden"}},[e("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(s){return e("li",{on:{click:function(e){t.addOrderList(s)}}},[e("span",{staticClass:"foodImg"},[e("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),e("div",{staticClass:"span-right"},[e("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),e("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])])}))])]),t._v(" "),e("el-tab-pane",{attrs:{label:"饮料"}},[e("div",{staticStyle:{overflow:"hidden"}},[e("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(s){return e("li",{on:{click:function(e){t.addOrderList(s)}}},[e("span",{staticClass:"foodImg"},[e("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),e("div",{staticClass:"span-right"},[e("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),e("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])])}))])]),t._v(" "),e("el-tab-pane",{attrs:{label:"套餐"}},[e("div",{staticStyle:{overflow:"hidden"}},[e("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(s){return e("li",{on:{click:function(e){t.addOrderList(s)}}},[e("span",{staticClass:"foodImg"},[e("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),e("div",{staticClass:"span-right"},[e("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),e("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])])}))])])],1)],1)])],1)],1)},staticRenderFns:[]}},105:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("leftNav"),t._v(" "),e("div",{staticClass:"main"},[e("router-view")],1)],1)},staticRenderFns:[]}},106:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"left-nav"},[e("ul",[e("li",[e("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),e("div",[t._v("购买")])]),t._v(" "),e("li",[e("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),e("div",[t._v("店铺")])]),t._v(" "),e("li",[e("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),e("div",[t._v("会员")])]),t._v(" "),e("li",[e("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),e("div",[t._v("功能建议")])])])])}]}},31:function(t,s,e){"use strict";var a=e(2),o=e(107),n=e(103),i=e.n(n);a.default.use(o.a),s.a=new o.a({routes:[{path:"/",name:"Pos",component:i.a}]})},33:function(t,s){},34:function(t,s,e){function a(t){e(98)}var o=e(16)(e(75),e(105),a,null,null);t.exports=o.exports},75:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(102),o=e.n(a);s.default={name:"app",components:{leftNav:o.a}}},76:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},77:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(56),o=e.n(a);s.default={name:"pos",data:function(){return{oftenGoods:[],tableData:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[]}},created:function(){var t=this;o.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(s){t.oftenGoods=s.data}).catch(function(t){alert("网络错误，不能访问")}),o.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(s){t.type0Goods=s.data[0],t.type1Goods=s.data[1],t.type2Goods=s.data[2],t.type3Goods=s.data[3]}).catch(function(t){alert("网络错误，不能访问")})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){for(var s=!1,e=0;e<this.tableData.length;e++)this.tableData[e].goodsId==t.goodsId&&(s=!0);if(s){this.tableData.filter(function(s){return s.goodsId==t.goodsId})[0].count++}else{var a={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(a)}},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(s){return s.goodsId!=t.goodsId})},delAllgoods:function(){this.tableData=[]},checkout:function(){0!=this.tableData.length?(this.tableData=[],this.$message({message:"结账成功，谢谢您的光临",type:"success"})):this.$message.error("您还未添加商品")}}}},78:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),o=e(34),n=e.n(o),i=e(31),l=e(32),c=e.n(l),d=e(33);e.n(d);a.default.config.productionTip=!1,a.default.use(c.a),new a.default({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},97:function(t,s){},98:function(t,s){},99:function(t,s){}},[78]);
//# sourceMappingURL=app.b3aadd1422aa1262b56a.js.map