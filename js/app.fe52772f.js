(function(e){function t(t){for(var s,o,l=t[0],i=t[1],c=t[2],d=0,m=[];d<l.length;d++)o=l[d],r[o]&&m.push(r[o][0]),r[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/librecrm/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("1356"),r=a.n(s);r.a},1356:function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=a("bb71");a("da64");s["default"].use(r["a"],{iconfont:"md"});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{attrs:{dark:""}},[s("v-toolbar",{attrs:{app:"",color:"#555555"}},[s("v-toolbar-title",{staticClass:"headline text-uppercase"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a("cf05"),width:"150px"}})])],1),s("v-spacer"),s("v-toolbar-items",[s("v-btn",{attrs:{flat:""}},[s("router-link",{attrs:{to:"/agenda"}},[e._v("Minha Agenda")])],1),s("v-btn",{attrs:{flat:""}},[s("router-link",{attrs:{to:"/cdashboard"}},[e._v("Carteira de Clientes")])],1),s("v-btn",{attrs:{flat:""}},[s("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")])],1)],1),s("v-btn",{attrs:{flat:""}},[s("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1)],1),s("v-content",[s("Home")],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("router-view")],1)},i=[],c={data:function(){return{}},created:function(){(function(e,t,a,s){e.RocketChat=function(t){e.RocketChat._.push(t)},e.RocketChat._=[],e.RocketChat.url=s;var r=t.getElementsByTagName(a)[0],n=t.createElement(a);n.async=!0,n.src="https://rocketchat.temposerver.ml/packages/rocketchat_livechat/assets/rocketchat-livechat.min.js?_=201702160944",r.parentNode.insertBefore(n,r)})(window,document,"script","https://rocketchat.temposerver.ml/livechat")}},u=c,d=a("2877"),m=a("6544"),f=a.n(m),b=a("a523"),v=Object(d["a"])(u,l,i,!1,null,null,null),p=v.exports;f()(v,{VContainer:b["a"]});var h={name:"App",components:{Home:p},data:function(){return{}}},j=h,_=(a("034f"),a("7496")),x=a("8336"),g=a("549c"),y=a("9910"),k=a("71d9"),C=a("2a7f"),w=Object(d["a"])(j,n,o,!1,null,null,null),V=w.exports;f()(w,{VApp:_["a"],VBtn:x["a"],VContent:g["a"],VSpacer:y["a"],VToolbar:k["a"],VToolbarItems:C["a"],VToolbarTitle:C["b"]});var O=a("ce5b"),$=a.n(O),S=a("8c4f"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-start":"","justify-center":"",row:""}},[a("v-flex",[a("v-sheet",{attrs:{height:"400"}},[a("v-calendar",{ref:"calendar",attrs:{type:e.type,end:e.end,color:"primary"},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}})],1)],1),a("v-btn",{attrs:{fixed:"",bottom:"",left:"",large:""}},[a("router-link",{attrs:{to:"/activity"}},[e._v("Nova Atividade")])],1)],1)},z=[],T={data:function(){return{}}},A=T,F=a("a4f6"),R=a("0e8f"),P=a("a722"),B=a("8dd9"),D=Object(d["a"])(A,E,z,!1,null,null,null),N=D.exports;f()(D,{VBtn:x["a"],VCalendar:F["a"],VFlex:R["a"],VLayout:P["a"],VSheet:B["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("h4",[e._v("Tipo da Atividade")]),a("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:e.radios,callback:function(t){e.radios=t},expression:"radios"}},[a("v-radio",{attrs:{label:"Chamada",value:"radio-1"}}),a("v-radio",{attrs:{label:"Reunião",value:"radio-2"}}),a("v-radio",{attrs:{label:"Deadline",value:"radio-3"}})],1),a("v-date-picker",{attrs:{landscape:"true",color:"green lighten-1"},model:{value:e.picker,callback:function(t){e.picker=t},expression:"picker"}}),a("v-time-picker",{attrs:{landscape:"true",format:"24hr"},model:{value:e.e7,callback:function(t){e.e7=t},expression:"e7"}}),a("v-select",{attrs:{items:e.items,label:"Solo field",solo:""}}),a("v-btn",{on:{click:e.submit}},[e._v("Criar Atividade")])],1)],1)],1)},I=[],M={data:function(){return{picker:(new Date).toISOString().substr(0,10),e7:null,items:["Foo","Bar","Fizz","Buzz"]}},methods:{submit:function(){}}},q=M,J=a("2e4b"),H=a("4bd4"),G=a("67b6"),U=a("43a6"),Z=a("b56d"),K=a("c964"),Q=Object(d["a"])(q,L,I,!1,null,null,null),W=Q.exports;f()(Q,{VBtn:x["a"],VDatePicker:J["a"],VFlex:R["a"],VForm:H["a"],VLayout:P["a"],VRadio:G["a"],VRadioGroup:U["a"],VSelect:Z["a"],VTimePicker:K["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-space-around":"",column:"","fill-height":""}},[a("v-btn",{attrs:{fixed:"",bottom:"",large:""}},[a("router-link",{attrs:{to:"/client"}},[e._v("Cadastrar Cliente")])],1),a("v-flex",{attrs:{mb12:""}},[a("h2",{staticClass:"display-1",staticStyle:{"margin-bottom":"20px",color:"#C9D010"}},[e._v(" Lista de Clientes")])]),a("v-flex",{attrs:{mb12:""}},[a("customers_table")],1)],1)},Y=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.customers},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",{on:{click:function(a){return e.changePage(t.item)}}},[a("td",[e._v(e._s(t.item.name))]),a("td",[e._v(e._s(t.item.address))]),a("td",[e._v(e._s(t.item.email))]),a("td",[e._v(e._s(t.item.cellphone))]),a("td",[e._v(e._s(t.item.cpf))]),a("td",[e._v(e._s(t.item.telegram))]),a("td",[e._v(e._s(t.item.facebook))]),a("td",[e._v(e._s(t.item.income))]),a("td",[e._v(e._s(t.item.birthdate))])])]}}])})],1)},te=[],ae=a("bc3a"),se={data:function(){return{customers:[],headers:[{text:"Name",value:"name"},{text:"Endereço",value:"address"},{text:"Email",value:"email"},{text:"Telefone",value:"cellphone"},{text:"CPF",value:"cpf"},{text:"Telegram",value:"telegram"},{text:"Facebook",value:"facebook"},{text:"Renda",value:"income"},{text:"Data de Nascimento",value:"birthdate"}]}},methods:{changePage:function(e){console.log(e),this.$router.push({name:"ShowClient",params:{customer:e}})}},created:function(){var e=this;ae.get("https://libreapi.temposerver.ml/api/customer/").then(function(t){e.customers=t.data}).catch(function(e){console.log(e)})}},re=se,ne=a("8fea"),oe=Object(d["a"])(re,ee,te,!1,null,null,null),le=oe.exports;f()(oe,{VDataTable:ne["a"]});var ie={components:{customers_table:le}},ce=ie,ue=Object(d["a"])(ce,X,Y,!1,null,null,null),de=ue.exports;f()(ue,{VBtn:x["a"],VFlex:R["a"],VLayout:P["a"]});var me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"display-1",staticStyle:{"margin-bottom":"20px",color:"#C9D010"}},[e._v("Cadastro de novo cliente")]),a("v-card",[a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Nome Completo",required:""},model:{value:e.customer.name,callback:function(t){e.$set(e.customer,"name",t)},expression:"customer.name"}}),a("v-text-field",{attrs:{label:"Endereço"},model:{value:e.customer.address,callback:function(t){e.$set(e.customer,"address",t)},expression:"customer.address"}}),a("v-text-field",{attrs:{label:"Email"},model:{value:e.customer.email,callback:function(t){e.$set(e.customer,"email",t)},expression:"customer.email"}}),a("v-text-field",{attrs:{label:"Telefone"},model:{value:e.customer.cel,callback:function(t){e.$set(e.customer,"cel",t)},expression:"customer.cel"}}),a("v-text-field",{attrs:{label:"CPF"},model:{value:e.customer.cpf,callback:function(t){e.$set(e.customer,"cpf",t)},expression:"customer.cpf"}}),a("v-text-field",{attrs:{label:"Telegram"},model:{value:e.customer.telegram,callback:function(t){e.$set(e.customer,"telegram",t)},expression:"customer.telegram"}}),a("v-text-field",{attrs:{label:"Facebook"},model:{value:e.customer.facebook,callback:function(t){e.$set(e.customer,"facebook",t)},expression:"customer.facebook"}}),a("v-text-field",{attrs:{label:"Renda",type:"number"},model:{value:e.customer.income,callback:function(t){e.$set(e.customer,"income",t)},expression:"customer.income"}})],1),a("v-flex",{staticStyle:{"margin-top":"30px"},attrs:{xs6:""}},[a("v-date-picker",{attrs:{label:"Data de Nascimento"},model:{value:e.customer.birthdate,callback:function(t){e.$set(e.customer,"birthdate",t)},expression:"customer.birthdate"}})],1)],1),a("v-btn",{staticStyle:{color:"yellow"},on:{click:e.submit}},[e._v("Adicionar Cliente")])],1)],1)],1)},fe=[],be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"display-1",staticStyle:{"margin-bottom":"20px",color:"#C9D010"}},[e._v("Informações básicas do Cliente: "+e._s(e.customer.name))]),a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",[a("strong",[e._v("Email:")]),e._v(" "+e._s(e.customer.email))]),a("div",[a("strong",[e._v("CPF:")]),e._v(" "+e._s(e.customer.cpf))]),a("div",[a("strong",[e._v("Endereço:")]),e._v(e._s(e.customer.address))]),a("div",[a("strong",[e._v("Celular:")]),e._v(e._s(e.customer.cel))])])])],1)],1),a("h2",{staticClass:"display-1",staticStyle:{margin:"20px 0px",color:"#C9D010"}},[e._v("Lista de Negócios")]),a("v-layout",{attrs:{"fill-height":""}},[a("business-table"),a("v-btn",[a("router-link",{attrs:{to:"/register_business"}},[e._v("Cadastrar Business")])],1)],1)],1)},ve=[],pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:this.business},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",{on:{click:function(a){return e.changePage(t.item)}}},[a("td",[e._v(e._s(t.item.name))]),a("td",[e._v(e._s(t.item.insurer))]),a("td",[e._v(e._s(t.item.total))]),a("td",[e._v(e._s(t.item.share))]),a("td",[e._v(e._s(t.item.paymentdate))]),a("td",[e._v(e._s(t.item.startdate))]),a("td",[e._v(e._s(t.item.enddate)+" Dias")]),a("td",[e._v(e._s(t.item.share)+" %")])])]}}])})],1)},he=[],je=a("bc3a"),_e={data:function(){return{business:[],headers:[{text:"Tipo da Apólice",value:"type"},{text:"Seguradora",value:"insurer"},{text:"Valor",value:"value"},{text:"Porcentagem %",value:"share"},{text:"Data do Pagamento",value:"paymentdate"},{text:"Data de início",value:"startdate"},{text:"Vencimento (dias)",value:"enddate"}]}},methods:{changePage:function(e){this.$router.push({name:"ShowBusiness",params:{business:e}})}},created:function(){var e=this;je.get("https://libreapi.temposerver.ml/api/sale/").then(function(t){e.business=t.data}).catch(function(e){console.log(e)})}},xe=_e,ge=Object(d["a"])(xe,pe,he,!1,null,null,null),ye=ge.exports;f()(ge,{VDataTable:ne["a"]});a("bc3a");var ke={data:function(){return{}},props:{customer:Object},methods:{submit:function(){}},components:{BusinessTable:ye}},Ce=ke,we=a("b0af"),Ve=a("12b2"),Oe=Object(d["a"])(Ce,be,ve,!1,null,null,null),$e=Oe.exports;f()(Oe,{VBtn:x["a"],VCard:we["a"],VCardTitle:Ve["a"],VFlex:R["a"],VLayout:P["a"]});var Se=a("bc3a"),Ee={data:function(){return{customer:{name:"",address:"",email:"",cellphone:"",cpf:"",telegram:"",facebook:"",income:"",birthdate:null}}},components:{show_customer:$e},methods:{submit:function(){var e=this;Se.post("https://libreapi.temposerver.ml/api/customer/",e.customer).then(function(t){console.log(t),e.$router.push({name:"ShowClient",params:{customer:e.customer}})}).catch(function(e){console.log(e)});e=this}}},ze=Ee,Te=a("2677"),Ae=Object(d["a"])(ze,me,fe,!1,null,null,null),Fe=Ae.exports;f()(Ae,{VBtn:x["a"],VCard:we["a"],VContainer:b["a"],VDatePicker:J["a"],VFlex:R["a"],VLayout:P["a"],VTextField:Te["a"]});var Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Nome",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{label:"Email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Senha",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{label:"Confirmar Senha",required:""},model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}}),a("v-btn",{on:{click:e.submit}},[e._v("Registrar")])],1)],1)],1)},Pe=[],Be=(a("7f7f"),a("bc3a")),De={data:function(){return{name:"",email:"",password:"",password_confirmation:"",valid:!1}},methods:{submit:function(){if(this.password_validation()){var e={email:this.email,password:this.password,name:this.name,password_confirmation:this.password_confirmation};Be.post("https://libreapi.temposerver.ml/api/broker/",e).then(function(e){return console.log(e.status)}).catch(function(e){return console.log(e)})}else alert("senha nao eh igual")},password_validation:function(){return this.password==this.password_confirmation}}},Ne=De,Le=Object(d["a"])(Ne,Re,Pe,!1,null,null,null),Ie=Le.exports;f()(Le,{VBtn:x["a"],VFlex:R["a"],VForm:H["a"],VLayout:P["a"],VTextField:Te["a"]});var Me,qe,Je,He,Ge,Ue,Ze,Ke,Qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"md-6":"",xs6:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[e._v("Porcentagem por tipo de apólice")]),this.loaded?a("insurances-container",{attrs:{sales:this.sales}}):e._e()],1)],1)],1),a("v-flex",{attrs:{"md-6":"",xs6:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[e._v("Valor arrecadado por bens")]),a("insurances-sell-container")],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"md-6":"",xs6:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[e._v("Rentabilidade por tipo de seguro")]),a("insurances-rentability-container")],1)],1)],1),a("v-flex",{attrs:{"md-6":"",xs6:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[e._v("Número de apólices vendidas por mês")]),a("sell-insurance-month")],1)],1)],1)],1)],1),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}})],1)},We=[],Xe=a("db0c"),Ye=a.n(Xe),et=a("a4bb"),tt=a.n(et),at=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("pie-chart",{attrs:{chartdata:e.chartdata,options:e.options}})],1)},st=[],rt=a("1fca"),nt={extends:rt["d"],props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){console.log(this.chartdata,this.options),this.renderChart(this.chartdata,this.options)}},ot=nt,lt=Object(d["a"])(ot,Me,qe,!1,null,null,null),it=lt.exports,ct={name:"InsurancesContainer",components:{PieChart:it},props:{sales:Object,loaded:Boolean},data:function(){return{chartdata:{datasets:[{data:this.sales.data,backgroundColor:["#f9e140","#ffdf60","#eae9e5","#ffce56","#777671"]}],labels:this.sales.labels},options:{responsive:!0,legend:{labels:{fontColor:"white"}},maintainAspectRatio:!1}}},mounted:function(){console.log("MOUNTED INSURANCE CONATINER"),console.log(this.sales.data)}},ut=ct,dt=Object(d["a"])(ut,at,st,!1,null,null,null),mt=dt.exports,ft=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("bar-chart",{attrs:{chartdata:e.chartdata}})],1)},bt=[],vt={extends:rt["a"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{labels:{fontColor:"white"}}}}},props:{chartdata:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},pt=vt,ht=Object(d["a"])(pt,Je,He,!1,null,null,null),jt=ht.exports,_t={name:"InsurancesSellContainer",components:{BarChart:jt},data:function(){return{loaded:!1,chartdata:{labels:["January","February","March","April","May","June","July"],datasets:[{type:"bar",label:"Valor Arrecadado",data:[8065,5048],backgroundColor:["#f9e140","#ffdf60","#eae9e5","#ffce56","#777671"]}]}}}},xt=_t,gt=Object(d["a"])(xt,ft,bt,!1,null,null,null),yt=gt.exports,kt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{fluid:""}},[a("horizontal-bar-chart",{attrs:{chartdata:e.chartdata}})],1)},Ct=[],wt=(a("96cf"),a("3b8d")),Vt={extends:rt["b"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"white"}}}}},props:{chartdata:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},Ot=Vt,$t=Object(d["a"])(Ot,Ge,Ue,!1,null,null,null),St=$t.exports,Et={name:"InsurancesRentabilityContainer",components:{HorizontalBarChart:St},data:function(){return{loaded:!1,chartdata:{labels:["Vida","Habitação","Automóvel","Saúde"],datasets:[{label:"Rentabilidade por tipo de Apólice",data:[850,600,400,350],backgroundColor:["#f9e140","#ffdf60","#eae9e5","#ffce56","#777671"]}]}}},mounted:function(){var e=Object(wt["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.loaded=!1;try{this.loaded=!0}catch(t){console.error(t)}case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},zt=Et,Tt=Object(d["a"])(zt,kt,Ct,!1,null,null,null),At=Tt.exports,Ft=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("line-chart",{attrs:{chartdata:e.chartdata}})],1)},Rt=[],Pt={data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"white"}}}}},extends:rt["c"],props:{chartdata:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},Bt=Pt,Dt=Object(d["a"])(Bt,Ze,Ke,!1,null,null,null),Nt=Dt.exports,Lt={name:"InsurancesSellContainer",components:{LineChart:Nt},data:function(){return{loaded:!1,chartdata:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Número de Apólices",data:[12,5],backgroundColor:["#f9e140"],borderColor:["#f9e140"],fill:null}]}}}},It=Lt,Mt=Object(d["a"])(It,Ft,Rt,!1,null,null,null),qt=Mt.exports,Jt=a("bc3a"),Ht={components:{InsurancesContainer:mt,InsurancesSellContainer:yt,InsurancesRentabilityContainer:At,SellInsuranceMonth:qt},data:function(){return{sales:{},loaded:!1}},mounted:function(){this.loaded=!1;var e=this;Jt.get("https://libreapi.temposerver.ml/api/sale/").then(function(t){for(var a=t.data.map(function(e){return e.name}),s={},r=0;r<a.length;r++)s[a[r]]=1+(s[a[r]]||0);console.log(tt()(s),Ye()(s)),e.sales={labels:tt()(s),data:Ye()(s)},console.log(e.sales),e.loaded=!0}).catch(function(e){console.log(e)})}},Gt=Ht,Ut=Object(d["a"])(Gt,Qe,We,!1,null,null,null),Zt=Ut.exports;f()(Ut,{VCard:we["a"],VCardTitle:Ve["a"],VContainer:b["a"],VFlex:R["a"],VLayout:P["a"]});var Kt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-card",{attrs:{"align-center":"","justify-center":""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("Login do Corretor")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("v-text-field",{attrs:{label:"Senha",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("v-btn",{on:{click:e.submit}},[e._v("Login")])],1)],1)]),a("v-card-actions",[a("router-link",{attrs:{to:"/register_broker"}},[a("a",[e._v("Cadastrar um corretor")])])],1)],1)],1)},Qt=[],Wt=a("bc3a"),Xt={data:function(){return{user:{email:"",password:""}}},methods:{submit:function(){console.log(this.user.email,this.user.password),this.$router.push({name:"ClientsDashboard"})},create_user:function(){var e=this;Wt.post("/user",e.user).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}},Yt=Xt,ea=a("99d9"),ta=Object(d["a"])(Yt,Kt,Qt,!1,null,null,null),aa=ta.exports;f()(ta,{VBtn:x["a"],VCard:we["a"],VCardActions:ea["a"],VCardTitle:Ve["a"],VForm:H["a"],VLayout:P["a"],VTextField:Te["a"]});var sa=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("v-form",{ref:"form"},[a("h3",[e._v("Nova Apólice")]),a("v-radio-group",{attrs:{row:""},model:{value:e.business.name,callback:function(t){e.$set(e.business,"name",t)},expression:"business.name"}},[a("v-radio",{attrs:{value:"Automóvel",label:"Automóvel"}}),a("v-radio",{attrs:{value:"Habitação",label:"Habitação"}}),a("v-radio",{attrs:{value:"Vida",label:"Vida"}}),a("v-radio",{attrs:{value:"Celular",label:"Celular"}}),a("v-radio",{attrs:{value:"Outros",label:"Outros"}})],1),a("v-text-field",{attrs:{label:"Seguradora"},model:{value:e.business.insurer,callback:function(t){e.$set(e.business,"insurer",t)},expression:"business.insurer"}}),a("v-text-field",{attrs:{label:"Valor"},model:{value:e.business.totalvalue,callback:function(t){e.$set(e.business,"totalvalue",t)},expression:"business.totalvalue"}}),a("v-checkbox",{attrs:{label:"Já fechou negócio?"},model:{value:e.confirmed_sale,callback:function(t){e.confirmed_sale=t},expression:"confirmed_sale"}}),e.confirmed_sale?a("div",[a("v-date-picker",{attrs:{color:"green lighten-1"},model:{value:e.business.paymentdate,callback:function(t){e.$set(e.business,"paymentdate",t)},expression:"business.paymentdate"}}),a("v-date-picker",{attrs:{color:"green lighten-1"},model:{value:e.business.startdate,callback:function(t){e.$set(e.business,"startdate",t)},expression:"business.startdate"}}),a("v-text-field",{attrs:{label:"Vencimento",type:"number"},model:{value:e.business.enddate,callback:function(t){e.$set(e.business,"enddate",t)},expression:"business.enddate"}}),a("v-text-field",{attrs:{label:"% de ganho",type:"number"},model:{value:e.business.share,callback:function(t){e.$set(e.business,"share",t)},expression:"business.share"}})],1):e._e(),a("v-btn",{on:{click:e.submit}},[e._v("Adicionar Business")])],1)],1)],1)},ra=[],na=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[a("h2",[e._v("Nome: "+e._s(e.business.name))]),a("h3",[e._v("Seguradora: "+e._s(e.business.insurer))]),a("h3",[e._v("Valor Total: "+e._s(e.business.totalvalue))]),a("h3",[e._v("Porcentagem em cima do valor: "+e._s(e.business.share))]),a("h3",[e._v("CPF: "+e._s(e.business.paymentdate))]),a("h3",[e._v("CPF: "+e._s(e.business.startdate))]),a("h3",[e._v("CPF: "+e._s(e.business.enddate))])])},oa=[],la=(a("bc3a"),{props:{business:Object}}),ia=la,ca=Object(d["a"])(ia,na,oa,!1,null,null,null),ua=ca.exports;f()(ca,{VLayout:P["a"]});var da=a("bc3a"),ma={data:function(){return{business:{name:"",insurer:"",totalvalue:"",paymentdate:"",startdate:"",enddate:"",share:0,broker:1,customer:1},confirmed_sale:!1}},components:{show_business:ua},methods:{submit:function(){var e=this;da.post("https://libreapi.temposerver.ml/api/sale/",e.business).then(function(t){e.$router.push({name:"ShowBusiness",params:{business:e.business}})}).catch(function(e){console.log(e)})}}},fa=ma,ba=a("ac7c"),va=Object(d["a"])(fa,sa,ra,!1,null,null,null),pa=va.exports;f()(va,{VBtn:x["a"],VCheckbox:ba["a"],VDatePicker:J["a"],VFlex:R["a"],VForm:H["a"],VLayout:P["a"],VRadio:G["a"],VRadioGroup:U["a"],VTextField:Te["a"]}),s["default"].use(S["a"]);var ha=new S["a"]({routes:[{path:"/agenda",name:"Agenda",component:N},{path:"/",name:"Login",component:aa},{path:"/login",name:"Login",component:aa},{path:"/cdashboard",name:"ClientsDashboard",component:de},{path:"/customers",name:"CustomersTable",component:le},{path:"/client",name:"NewClient",component:Fe},{path:"/activity",name:"NewActivity",component:W},{name:"RegisterBroken",path:"/register_broker",component:Ie},{name:"ShowClient",path:"/show_client",component:$e,props:function(e){return{customer:e.params.customer}}},{name:"Dashboard",path:"/dashboard",component:Zt},{name:"RegisterBusiness",path:"/register_business",component:pa},{name:"ShowBusiness",path:"/show_business",component:ua,props:function(e){return{business:e.params.business}}}]}),ja=ha;s["default"].use($.a,{theme:{primary:"#fee720",secondary:"#545454"}}),s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(V)},router:ja}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.1fa6964b.png"}});
//# sourceMappingURL=app.fe52772f.js.map