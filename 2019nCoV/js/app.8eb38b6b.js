(function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/2019nCoV/",n(n.s=0)})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("8bbf"),i=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Main")],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-col",{attrs:{span:12}},[e._v(" 【国内】请选择省、市（默认显示江苏省南通）： "),n("el-cascader-panel",{attrs:{options:e.domesticCascaderOptions},on:{change:e.handleChangeDomestic}})],1),n("el-col",{attrs:{span:12}},[e._v(" 【国外】请选择洲、国（默认显示亚洲中国）： "),n("el-cascader-panel",{attrs:{options:e.foreignCascaderOptions},on:{change:e.handleChangeForeign}})],1)],1),n("div",[e._v("截至 "+e._s(e.lastUpdateTime)+" 数据统计")]),n("div",{staticStyle:{width:"500px",height:"400px"},attrs:{id:"main"}})],1)},s=[],u=n("5f72"),l=n.n(u),p="累计确诊",d="治愈",m="死亡",f="疑似",v="现存确诊",h={name:"Main",props:{},data:()=>({default:{provinceName:"江苏省",cityName:"南通"},lastUpdateTime:"--",db:{},nCoVData:[],_collection:null,provinceNames:[],domesticCascaderOptions:[],foreignCascaderOptions:[],test:null,dbUrl:"https://3.test.xy-jit.cc/DXYArea.csv"}),methods:{handleChangeDomestic:function(e){var[t,n]=e;this.updateFigure("亚洲","中国",t,n),console.log(e)},handleChangeForeign:function(e){var[t,n]=e;this.updateFigure(t,n,"全国","全省"),console.log(e)},fetchNCoVData:function(){this.nCoVData=this.parseCsv(this.db),this._collection=collect(this.nCoVData).sortBy("updateTime"),this.lastUpdateTime=this._collection.last().updateTime,this.lastUpdateTime=this.formatTimestamp(this.lastUpdateTime,"YYYY-MM-DD HH:mm:ss")},fetchProvinceNames:function(){this.provinceName=new Set(this.nCoVData.map(e=>e.provinceName))},prepareCascaderOptions:function(){var e=[{value:"全国",label:"全国"}].concat(this._collection.filter((e,t)=>"中国"===e.countryName&&"中国"!==e.provinceName&&!!e.provinceName&&!!e.cityName).groupBy("provinceName").filter((e,t)=>!!t).map((e,t)=>({value:t,label:t,children:[{value:"全省",label:"全省"}].concat(e.unique("cityName").map(e=>({value:e.cityName,label:e.cityName})).values().all())})).values().all()),t=[].concat(this._collection.filter((e,t)=>!e.cityName).groupBy("continentName").filter((e,t)=>!!t).map((e,t)=>({value:t,label:t,children:[].concat(e.groupBy("countryName").filter((e,t)=>!!t).map((e,t)=>({value:t,label:t})).values().all())})).values().all());this.domesticCascaderOptions=e,this.foreignCascaderOptions=t},formatTimestamp:function(e,t="YYYY-MM-DD"){return moment(e).format(t)},parseCsv:function(e,t=",",n="\n",a=!0){var i=0;a&&(i=1);for(var o=e.split(n),r=[],c=i;c<o.length;c++){var s=o[c].split(t),[u,l,p,d,m,f,v,h,C,y,_,g,N,b,T,D,x,O,S]=s;m&&r.push({continentName:u,countryName:p,provinceName:m,cityName:g,province_confirmedCount:parseInt(h),province_suspectedCount:parseInt(C),province_curedCount:parseInt(y),province_deadCount:parseInt(_),city_confirmedCount:parseInt(T),city_suspectedCount:parseInt(D),city_curedCount:parseInt(x),city_deadCount:parseInt(O),updateTime:moment(S,"YYYY-MM-DD HH:mm:ss.SSS").valueOf()})}return r},makeSeries:function(e){var t=function(e,t){return e.map(e=>e[t])};return[{name:p,type:"line",data:t(e,"confirmedCount")},{name:d,type:"line",data:t(e,"curedCount")},{name:m,type:"line",data:t(e,"deadCount")},{name:f,type:"line",data:t(e,"suspectedCount")},{name:v,type:"line",data:t(e,"remainCount")}]},makeEchartOption:function(e,t,n){return{title:{text:e},tooltip:{},legend:{data:[p,d,m,f,v]},xAxis:{data:t},yAxis:{},series:this.makeSeries(n)}},makeAllProvinceData:function(e="中国"){var t=this,n=t._collection.filter((t,n)=>t.countryName===e&&"中国"!==t.provinceName).groupBy((e,n)=>t.formatTimestamp(e.updateTime)).filter((e,t)=>!!t).map(e=>{var t=e.groupBy("provinceName"),n=t.sum(e=>e.first().province_confirmedCount),a=t.sum(e=>e.first().province_curedCount),i=t.sum(e=>e.first().province_deadCount),o=t.sum(e=>e.first().province_suspectedCount),r=n-a;return{confirmedCount:n,curedCount:a,deadCount:i,suspectedCount:o,remainCount:r}});return this.test=n,[n.keys().all(),n.values().all()]},makeProvinceData:function(e="江苏省"){var t=this,n=collect(t.nCoVData).filter((t,n)=>t.provinceName===e).sortBy("updateTime").groupBy((e,n)=>t.formatTimestamp(e.updateTime)).filter((e,t)=>!!t).map(e=>{var t=e.first();return{confirmedCount:t.province_confirmedCount,curedCount:t.province_curedCount,deadCount:t.province_deadCount,suspectedCount:t.province_suspectedCount,remainCount:t.province_confirmedCount-t.province_curedCount}});return this.test=n,[n.keys().all(),n.values().all()]},makeCityData:function(e="江苏省",t="南通"){var n=this,a=collect(n.nCoVData).filter((n,a)=>n.provinceName===e&&n.cityName===t).sortBy("updateTime").groupBy((e,t)=>n.formatTimestamp(e.updateTime)).filter((e,t)=>!!t).map(e=>{var t=e.first();return{confirmedCount:t.city_confirmedCount,curedCount:t.city_curedCount,deadCount:t.city_deadCount,suspectedCount:t.city_suspectedCount,remainCount:t.city_confirmedCount-t.city_curedCount}});return this.test=a,[a.keys().all(),a.values().all()]},initFigure:function(){this.figure=echarts.init(document.getElementById("main"))},updateFigure:function(e="亚洲",t="中国",n="江苏省",a="南通"){var i,o,r="疫情：\n"+e+t+n;"全国"===n?[i,o]=this.makeAllProvinceData(t):"全省"===a?(r+=a,[i,o]=this.makeProvinceData(n)):(r+=a,[i,o]=this.makeCityData(n,a));var c=this.makeEchartOption(r,i,o);this.figure.setOption(c)}},created:function(){},mounted:function(){const e=this.$loading({lock:!0,text:"数据加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var t=this;t.initFigure(),axios.get(t.dbUrl).then(n=>{e.close(),t.db=n.data,this.fetchNCoVData(),this.prepareCascaderOptions(),this.fetchProvinceNames(),this.updateFigure(this.default.provinceName,this.default.cityName)})}},C=h;function y(e,t,n,a,i,o,r,c){var s,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),a&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),r?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=s):i&&(s=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(e,t){return s.call(t),l(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,s):[s]}return{exports:e,options:u}}var _=y(C,c,s,!1,null,"9064ceea",null),g=_.exports,N={name:"App",components:{Main:g}},b=N,T=y(b,o,r,!1,null,null,null),D=T.exports;i.a.use(l.a),i.a.config.productionTip=!1,new i.a({render:function(e){return e(D)}}).$mount("#app")},"5f72":function(e,t){e.exports=ELEMENT},"8bbf":function(e,t){e.exports=Vue}});