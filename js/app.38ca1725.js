(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)o=s[p],n[o]&&d.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0596":function(t,e,a){},"21bb":function(t,e,a){"use strict";var i=a("bcc9"),n=a.n(i);n.a},5452:function(t,e,a){"use strict";var i=a("0596"),n=a.n(i);n.a},b868:function(t,e,a){t.exports=a.p+"img/empty.88947139.gif"},bcc9:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=a("ce5b"),r=a.n(n);a("bf40");i["default"].use(r.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("the-header"),a("router-view"),a("v-footer",{staticClass:"pa-3"},[a("v-spacer"),a("div",[t._v("© "+t._s((new Date).getFullYear())+" Papers.ink")])],1)],1)],1)},s=[],l=a("d225"),c=a("308d"),u=a("6bb5"),p=a("4e2b"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"the-header"},[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"subheading text-uppercase"},[a("span",[t._v("Notes ")]),a("span",{staticClass:"font-weight-light"},[t._v("For Paper Reading")])]),a("v-spacer"),a("v-avatar",{attrs:{size:"30px",color:"grey lighten-4"},on:{click:t.showAboutDialog}},[a("img",{attrs:{src:t.avatarUrl,alt:"avatar"}})])],1),a("v-dialog",{attrs:{"max-width":"250px"},model:{value:t.aboutDialog,callback:function(e){t.aboutDialog=e},expression:"aboutDialog"}},[a("v-card",[a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{staticClass:"text-align-center"},[a("div",{staticStyle:{"margin-top":"20px"}},[a("v-badge",{attrs:{size:"50px",overlap:"",color:"black"},scopedSlots:t._u([{key:"badge",fn:function(){return[a("span",[t._v("\n                    "+t._s(t.count)+"\n                  ")])]},proxy:!0}])},[a("v-avatar",{attrs:{shadow:"",size:"90px"}},[a("v-img",{attrs:{src:t.avatarUrl}})],1)],1)],1),a("a",{staticClass:"black-a",attrs:{href:t.weibo.url,target:"blank"}},[a("div",{staticClass:"title font-weight-black margin-top"},[t._v("\n                "+t._s(t.weibo.name)+"\n              ")])]),a("div",{staticClass:"body-3 font-weight-light",staticStyle:{"line-height":"18px",color:"dimgrey","padding-top":"5px"}},[t._v("\n              "+t._s(t.briefIntro)+"\n            ")]),a("v-card-actions",[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("div",{staticClass:"text-xs-center margin-top"},t._l(t.chips,function(e,i){return a("v-chip",{key:i,attrs:{color:"black",small:"","text-color":"white"}},[e.link?a("div",[a("a",{attrs:{href:e.link,target:"blank"}},[e.icon?a("v-icon",{attrs:{color:"white"}},[t._v("\n                          "+t._s(e.icon)+"\n                        ")]):t._e(),t._v("\n                        "+t._s(e.label)+"\n                      ")],1)]):a("div",[e.icon?a("v-icon",[t._v("\n                        "+t._s(e.icon)+"\n                      ")]):t._e(),t._v("\n                      "+t._s(e.label)+"\n                    ")],1)])}),1)])],1)],1)],1)],1)],1)],1)],1)},v=[],f=a("b0b4"),b=a("9ab4"),h=a("60a3"),g=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.aboutDialog=!1,t.avatarUrl="http://cdn.unoiou.com/avatar_paper3",t.weibo={name:"Latina_XXX",url:"https://weibo.com/cmsax"},t.briefIntro="这是一个PWA应用，你可以将它贴到桌面上。它依赖于浏览器缓存存储数据，未来将支持云端数据同步。",t.email="i@unoiou.com",t.chips=[{label:"Graduate"},{icon:"code"},{label:"NLP"},{label:"MSFT"},{icon:"email",link:"mailto:i@unoiou.com"}],t}return Object(p["a"])(e,t),Object(f["a"])(e,[{key:"showAboutDialog",value:function(){this.aboutDialog=!0}},{key:"count",get:function(){return this.$store.getters.paperCount}}]),e}(h["c"]);g=b["a"]([Object(h["a"])({})],g);var m,y,k=g,_=k,w=(a("5452"),a("2877")),x=Object(w["a"])(_,d,v,!1,null,null,null),P=x.exports,D=(m=Object(h["a"])({components:{TheHeader:P}}),m(y=function(t){function e(){return Object(l["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(h["c"]))||y),O=D,j=Object(w["a"])(O,o,s,!1,null,null,null),C=j.exports,A=a("8c4f"),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[t.showAlert?i("div",{staticClass:"empty"},[i("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[i("v-img",{attrs:{center:"","max-width":"200px",src:a("b868")}})],1),i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("div",{staticClass:"text-xs-center"},[i("div",{staticClass:"title font-weight-light",staticStyle:{color:"rgb(99, 111, 111)","padding-top":"30px"}},[t._v("\n            you are having a rest\n          ")])])])],1):i("div",[i("v-subheader",[t._v("\n        Papers: "+t._s(t.allPapers.length)+" / 10, Started at "+t._s(t.startDate)+".\n      ")]),i("v-layout",{attrs:{row:"","align-center":"","justify-space-around":"","fill-height":"",wrap:""}},t._l(t.allPapers,function(e,a){return i("v-card",{key:a,staticClass:"margin-bottom",attrs:{"max-width":"400px",light:""}},[i("v-card",{staticClass:"black--text padding-bottom",attrs:{color:"white"}},[i("v-card-title",[i("v-layout",[i("a",{staticClass:"black-a",on:{click:function(e){return t.openDetailCard(a)}}},[i("v-flex",{staticStyle:{"text-align":"left"},attrs:{"align-start":"","justify-start":""}},[i("div",{staticClass:"title font-weight-bold",staticStyle:{"line-height":"30px !important"}},[t._v("\n                      "+t._s(e.title)+"\n                    ")])])],1)])],1),i("v-card-actions",[i("span",{staticClass:"padding-left black-bg"},[i("v-icon",{attrs:{small:"",dark:""}},[t._v("library_books")])],1),t._v("\n              "+t._s(e.finishDate)+"\n            ")])],1)],1)}),1)],1),i("v-btn",{staticClass:"add",attrs:{fab:"",dark:"",color:"black",fixed:"",small:"",bottom:"",right:"","data-test":"add-btn"},on:{click:t.onAddBtnClick}},[i("v-icon",{attrs:{dark:""}},[t._v("add")])],1),i("v-snackbar",{staticStyle:{"text-align":"left"},attrs:{timeout:0,bottom:"","multi-line":"","auto-height":""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.welcomeMsg)+"\n      "),i("v-btn",{attrs:{color:"pink",flat:""},on:{click:t.snackbarConfirm}},[t._v("\n        好的\n      ")])],1)],1),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"black"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:t.onDetailClose}},[i("v-icon",[t._v("close")])],1),i("v-toolbar-title",[t._v("Paper Detail")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{icon:"",dark:""},on:{click:t.onDetailEditOrSave}},[i("v-icon",[t._v("\n              "+t._s(t.editable?"save":"edit")+"\n            ")])],1)],1),i("v-menu",{attrs:{bottom:"",right:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{dark:"",icon:""}},a),[i("v-icon",[t._v("more_vert")])],1)]}}])},[i("v-list",[i("v-list-tile",{on:{click:t.removePaper}},[i("v-list-tile-title",[i("span",[i("v-icon",[t._v("delete_sweep")]),t._v(" REMOVE\n                ")],1)])],1)],1)],1)],1),i("div",[i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[t._v("Meta info")]),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Title")]),i("v-list-tile-sub-title",[i("v-text-field",{attrs:{disabled:!t.editable,rules:t.inputRules},model:{value:t.paper.title,callback:function(e){t.$set(t.paper,"title",e)},expression:"paper.title"}})],1)],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Keywords")]),i("v-list-tile-sub-title",[i("v-combobox",{attrs:{items:t.suggestKeywords,disabled:!t.editable,label:"Keywords",rules:t.arrayRules,chips:"",solo:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",{attrs:{selected:e.selected,close:"",small:"",color:"black","text-color":"white"},on:{input:function(a){return t.removeKeyword(e.item)}}},[i("strong",[t._v(t._s(e.item))]),t._v(" \n                    ")])]}}]),model:{value:t.paper.keywords,callback:function(e){t.$set(t.paper,"keywords",e)},expression:"paper.keywords"}})],1)],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Source")]),i("v-list-tile-sub-title",[i("v-text-field",{attrs:{disabled:!t.editable,rules:t.inputRules},model:{value:t.paper.source,callback:function(e){t.$set(t.paper,"source",e)},expression:"paper.source"}})],1)],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",{staticStyle:{"padding-bottom":"20px"}},[t._v("Finish Date")]),i("v-list-tile-sub-title",[i("v-dialog",{ref:"dialog",attrs:{"return-value":t.paper.finishDate,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){return t.$set(t.paper,"finishDate",e)},"update:return-value":function(e){return t.$set(t.paper,"finishDate",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-text-field",t._g({attrs:{label:"Picker in dialog","prepend-icon":"event",readonly:""},model:{value:t.paper.finishDate,callback:function(e){t.$set(t.paper,"finishDate",e)},expression:"paper.finishDate"}},a))]}}]),model:{value:t.finishDatePickerModal,callback:function(e){t.finishDatePickerModal=e},expression:"finishDatePickerModal"}},[i("v-date-picker",{attrs:{scrollable:"",disabled:!t.editable},model:{value:t.paper.finishDate,callback:function(e){t.$set(t.paper,"finishDate",e)},expression:"paper.finishDate"}},[i("v-spacer"),i("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.finishDatePickerModal=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.paper.finishDate)}}},[t._v("OK")])],1)],1)],1)],1)],1)],1),i("v-divider"),i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[t._v("Detail Info")]),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",{staticStyle:{"padding-bottom":"20px"}},[t._v("Methodology")]),i("v-list-tile-sub-title",{staticStyle:{height:"auto"}},[i("v-textarea",{attrs:{disabled:!t.editable,rules:t.inputRules,rows:"10"},model:{value:t.paper.methodology,callback:function(e){t.$set(t.paper,"methodology",e)},expression:"paper.methodology"}})],1)],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",{staticStyle:{"padding-bottom":"20px"}},[t._v("Solved Problem")]),i("v-list-tile-sub-title",[i("v-textarea",{attrs:{disabled:!t.editable,rules:t.inputRules},model:{value:t.paper.solvedProblem,callback:function(e){t.$set(t.paper,"solvedProblem",e)},expression:"paper.solvedProblem"}})],1)],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",{staticStyle:{"padding-bottom":"20px"}},[t._v("Reflection")]),i("v-list-tile-sub-title",[i("v-textarea",{attrs:{disabled:!t.editable,rules:t.inputRules},model:{value:t.paper.reflection,callback:function(e){t.$set(t.paper,"reflection",e)},expression:"paper.reflection"}})],1)],1)],1)],1),i("v-divider"),i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[t._v("\n            Attachment\n          ")]),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-action",[i("v-icon",[t._v("attach_file")])],1),i("v-list-tile-content",[i("v-list-tile-content",[t.editable?i("v-textarea",{attrs:{disabled:!t.editable,hint:"点击输入下载链接",rules:t.inputRules},model:{value:t.paper.download,callback:function(e){t.$set(t.paper,"download",e)},expression:"paper.download"}}):i("a",{attrs:{href:t.paper.download,target:"blank"}},[t._v("\n                  "+t._s(t.paper.download)+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},E=[],R=a("f499"),$=a.n(R),M={startDate:"2019-03-28"},F=a("2f62"),I=a("0e44");i["default"].use(F["a"]);var T={download:"",finishDate:"",keywords:[],methodology:"",reflection:"",solvedProblem:"",source:"",title:""},L={config:{darkTheme:!1,readLicense:!0},papers:[]},N=new F["a"].Store({state:L,mutations:{INIT_PAPER:function(t){t.papers.push({download:"https://unoiou.com/papers.pdf",keywords:["Deep Learning"],methodology:"解决了一个问题",reflection:"这个问题实际上没有多少",solvedProblem:"岭回归",source:"AAAI 2019",title:"Distant unsupervised learning in spatio temporal database.",finishDate:"2019-03-30"})},READ_LICENSE:function(t){t.config.readLicense=!1},ADD_PAPER:function(t,e){t.papers.push(e)},UPDATE_PAPER:function(t,e){t.papers[e.index]=e.newPaper},REMOVE_PAPER:function(t,e){t.papers.splice(e,1)}},actions:{},getters:{paperCount:function(t){return t.papers.length}},plugins:[Object(I["a"])()]}),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paper-card"},[a("div",{staticClass:"text-xs-center"},[a("v-chip",{attrs:{color:"indigo","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("account_circle")])],1),t._v("\n      Ranee\n    ")],1),a("v-chip",{attrs:{color:"orange","text-color":"white"}},[t._v("\n      Premium\n      "),a("v-icon",{attrs:{right:""}},[t._v("star")])],1),a("v-chip",{attrs:{color:"primary","text-color":"white"}},[t._v("\n      1 Year\n      "),a("v-icon",{attrs:{right:""}},[t._v("cake")])],1),a("v-chip",{attrs:{color:"green","text-color":"white"}},[a("v-avatar",{staticClass:"green darken-4"},[t._v("1")]),t._v("\n      Years\n    ")],1),a("v-chip",{attrs:{close:"",color:"teal","text-color":"white"}},[a("v-avatar",[a("v-icon",[t._v("check_circle")])],1),t._v("\n      Confirmed\n    ")],1)],1)])},U=[],z=function(t){function e(){return Object(l["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(h["c"]);b["a"]([Object(h["b"])()],z.prototype,"title",void 0),b["a"]([Object(h["b"])()],z.prototype,"source",void 0),z=b["a"]([Object(h["a"])({})],z);var B=z,V=B,J=Object(w["a"])(V,K,U,!1,null,null,null),X=J.exports,Y=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.startDate=M.startDate,t.indeterminate=!0,t.show=!1,t.paper={download:"",keywords:[],methodology:"",reflection:"",solvedProblem:"",source:"",title:"",finishDate:""},t.snackbar=!1,t.editable=!1,t.suggestKeywords=["Deep Learning","Entity relation extraction"],t.isAddAction=!1,t.finishDatePickerModal=!1,t.welcomeMsg="你似乎是第一次打开这个应用，我们为您增加一条示例内容，你可以点击标题查看详细内容，接着在顶端菜单中删除它。",t}return Object(p["a"])(e,t),Object(f["a"])(e,[{key:"removePaper",value:function(){this.$store.commit("REMOVE_PAPER",this.currentPaperIndex),this.show=!1}},{key:"removeKeyword",value:function(t){this.paper.keywords.splice(this.paper.keywords.indexOf(t),1)}},{key:"openDetailCard",value:function(t){this.paper=this.allPapers[t],this.show=!0}},{key:"onAddBtnClick",value:function(){this.isAddAction=!0,this.paper=JSON.parse($()(T)),this.editable=!0,this.show=!0}},{key:"onDetailEditOrSave",value:function(){this.editable=!this.editable}},{key:"onDetailClose",value:function(){this.paper.title.length>0&&(this.show=!1,this.editable=!1,this.$store.commit("UPDATE_PAPER",{index:this.currentPaperIndex,newPaper:this.paper})),this.isAddAction&&(this.$store.commit("ADD_PAPER",this.paper),this.isAddAction=!1)}},{key:"snackbarConfirm",value:function(){this.$store.commit("INIT_PAPER"),this.$store.commit("READ_LICENSE"),this.snackbar=!1}},{key:"mounted",value:function(){var t=this;this.shouldReadLicense&&setTimeout(function(){t.snackbar=!0},1e3)}},{key:"allPapers",get:function(){return this.$store.state.papers}},{key:"inputRules",get:function(){return[function(t){return t&&t.length>0||"不能为空"}]}},{key:"currentPaperIndex",get:function(){return this.allPapers.indexOf(this.paper)}},{key:"arrayRules",get:function(){return[function(t){return t&&t.length>0||"不能为空"}]}},{key:"showAlert",get:function(){return!(this.allPapers.length>0)}},{key:"shouldReadLicense",get:function(){return this.$store.state.config.readLicense}},{key:"progress",get:function(){return this.allPapers.length/10*100}}]),e}(h["c"]);Y=b["a"]([Object(h["a"])({components:{PaperCard:X}})],Y);var q=Y,G=q,H=(a("21bb"),Object(w["a"])(G,S,E,!1,null,null,null)),W=H.exports;i["default"].use(A["a"]);var Q=new A["a"]({routes:[{path:"/",name:"home",component:W}]}),Z=a("9483");Object(Z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d5e8"),a("d1e7");i["default"].config.productionTip=!1,new i["default"]({router:Q,store:N,render:function(t){return t(C)}}).$mount("#app")}});