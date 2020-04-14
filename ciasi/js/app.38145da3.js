(function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/ciasi/",n(n.s=0)})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("8bbf"),l=n.n(i),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Main")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-col",{attrs:{offset:2,span:20}},[n("el-container",[n("el-header",[n("el-row",{attrs:{type:"flex",justify:"center"}},[e._v(e._s(e.title))])],1),n("el-main",[n("el-row",[e._l(e.visibleColumns,(function(t){return[n("el-checkbox",{key:t.key,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"column.isVisible"}},[e._v(e._s(t.label))])]}))],2),n("el-divider"),n("el-row",[n("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.getTableData}},[e._l(e.visibleColumns,(function(t){return[t.isVisible?n("el-table-column",{key:t.key,attrs:{prop:t.key,label:t.label}}):e._e()]}))],2)],1)],1)],1)],1)},a=[],c=n("5f72"),u=n.n(c),f={name:"Main",props:{},data:()=>({title:"中国保险汽车安全指数汇总 (中保研碰撞测试汇总)",search:"",tableData:[],visibleColumns:[{key:"year",label:"年份",isVisible:!0},{key:"brand",label:"品牌",isVisible:!0},{key:"manufacturer",label:"生产厂家",isVisible:!1},{key:"serial",label:"测评车型",isVisible:!0},{key:"level",label:"车辆级别",isVisible:!0},{key:"model",label:"车辆型号",isVisible:!1},{key:"sf1",label:"耐撞性与维修经济性",isVisible:!0},{key:"sf2",label:"车内乘员",isVisible:!0},{key:"sf3",label:"车外行人",isVisible:!0},{key:"sf4",label:"辅助安全",isVisible:!0}],default:{provinceName:"江苏省",cityName:"南通"},lastUpdateTime:"--",_db:{},_collection:collect([]),test:null,dbUrl:"https://3.test.xy-jit.cc/safety.json"}),computed:{getTableData:function(){return this.search?collect(this.tableData).filter(e=>{let t=this.search.split(" ");for(let n=0;n<t.length;n++)if(!this._contains(e,t[n]))return!1;return!0}).toArray():collect(this.tableData).toArray()}},methods:{_contains:function(e,t){if(""!==t&&void 0!==t){t=t.toLowerCase();for(let n=0;n<this.visibleColumns.length;n++){let i=this.visibleColumns[n];if(i.isVisible&&e[i.key].toLowerCase().includes(t))return!0}return!1}return!0},fetchDb:function(){console.log(this._db),this._collection=collect(this._db).sortByDesc("year"),this.tableData=this._collection.toArray(),console.log(this._collection)},formatTimestamp:function(e,t="YYYY-MM-DD"){return moment(e).format(t)}},created:function(){},mounted:function(){const e=this.$loading({lock:!0,text:"数据加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});let t=this;axios.get(t.dbUrl).then(n=>{e.close(),t._db=n.data,t.fetchDb(),t.$emit(t.tableData)})}},b=f;function d(e,t,n,i,l,r,o,s){var a,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=a):l&&(a=s?function(){l.call(this,this.$root.$options.shadowRoot)}:l),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(e,t){return a.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:c}}var p=d(b,s,a,!1,null,"03a87f3a",null),_=p.exports,h={name:"App",components:{Main:_}},y=h,m=d(y,r,o,!1,null,null,null),v=m.exports;l.a.use(u.a),l.a.config.productionTip=!1,new l.a({render:function(e){return e(v)}}).$mount("#app")},"5f72":function(e,t){e.exports=ELEMENT},"8bbf":function(e,t){e.exports=Vue}});