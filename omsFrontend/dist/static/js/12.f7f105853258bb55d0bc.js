webpackJsonp([12,22],{"/B6Y":function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".head-lavel{padding-bottom:50px}.table-button{padding:10px 0;float:left}.table-pagination,.table-search{float:right;padding:10px 0}",""])},"8Stf":function(e,t,r){var a=r("AIUR");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("4ccccf6a",a,!0)},AIUR:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".heng{margin:20px 0;height:1px;border:0;background-color:rgba(174,127,255,.38);color:#29e11c}.addticket{margin:50px;width:80%}",""])},"CH+q":function(e,t,r){"use strict";function a(e){r("pOQ/")}Object.defineProperty(t,"__esModule",{value:!0});var s=r("Dd8w"),l=r.n(s),i=r("ZTLr"),o=r("QmSG"),n=r("GGwe"),c=r("NYxO"),u={components:{addWorkticket:n.default},data:function(){return{radio:"",tableData:[],tabletotal:0,searchdata:"",currentPage:1,limit:o.LIMIT,offset:"",ticket_status:"",pagesize:[10,25,50,100],addForm:!1,rowdata:{ticket_status:0,action_user:sessionStorage.getItem("username")},TICKET_STATUS:{0:{text:"未接收",type:"info"},1:{text:"正在处理",type:"success"},2:{text:"已解决",type:"danger"}},LEVEL:{1:{text:"A",type:"danger"},2:{text:"B",type:"warning"},3:{text:"C",type:"success"},4:{text:"D",type:"info"},5:{text:"E",type:""}},listQuery:{ticketid:"",create_user:"",action_user:"",content:""},workticketlist_btn_add:!1}},computed:l()({},Object(c.b)(["role","elements"])),created:function(){this.fetchData(),this.workticketlist_btn_add=this.elements["工单列表-新建工单按钮"]},methods:{fetchData:function(){var e=this,t={limit:this.limit,offset:this.offset,content__contains:this.listQuery.content,ticket_status:this.ticket_status,ticketid:this.listQuery.ticketid,create_user__username:this.listQuery.create_user,action_user__username:this.listQuery.action_user};Object(i.f)(null,t).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.limit=e,this.fetchData()},handleCurrentChange:function(e){this.offset=e-1,this.fetchData()},statusChange:function(e){this.ticket_status=e,this.fetchData()},showMeCreate:function(){this.listQuery.create_user=sessionStorage.getItem("username"),this.fetchData()},showMeAction:function(){this.listQuery.action_user=sessionStorage.getItem("username"),this.fetchData()},showAllTicket:function(){this.listQuery.create_user="",this.listQuery.action_user="",this.ticket_status="",this.fetchData()}}},d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("div",{staticClass:"head-lavel"},[r("div",{staticClass:"table-button"},["super"===e.role||e.workticketlist_btn_add?r("router-link",{attrs:{to:"addworkticket"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[e._v("新建工单")])],1):e._e(),e._v(" "),r("el-button-group",[r("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:e.showAllTicket}},[e._v("全部")]),e._v(" "),r("el-button",{attrs:{type:"success",plain:"",size:"small"},on:{click:e.showMeCreate}},[e._v("我创建的工单")]),e._v(" "),r("el-button",{attrs:{type:"warning",plain:"",size:"small"},on:{click:e.showMeAction}},[e._v("我处理的工单")])],1),e._v(" "),r("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:e.statusChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[r("el-radio",{attrs:{label:"0"}},[e._v("未接收")]),e._v(" "),r("el-radio",{attrs:{label:"1"}},[e._v("正在处理")]),e._v(" "),r("el-radio",{attrs:{label:"2"}},[e._v("已解决")])],1)],1),e._v(" "),r("div",{staticClass:"table-search"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"工单发起人"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.create_user,callback:function(t){e.$set(e.listQuery,"create_user",t)},expression:"listQuery.create_user"}}),e._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单编号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.ticketid,callback:function(t){e.$set(e.listQuery,"ticketid",t)},expression:"listQuery.ticketid"}}),e._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单内容"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.content,callback:function(t){e.$set(e.listQuery,"content",t)},expression:"listQuery.content"}}),e._v(" "),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.searchClick}},[e._v("搜索")])],1)]),e._v(" "),r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{prop:"ticketid",label:"工单编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticStyle:{"text-align":"center",color:"rgb(52,91,225)"},attrs:{slot:"reference"},slot:"reference"},[r("router-link",{attrs:{to:"editworkticket/"+t.row.id}},[e._v("\n                "+e._s(t.row.ticketid)+"\n              ")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),e._v(" "),r("el-table-column",{attrs:{prop:"create_user",label:"工单创建人"}}),e._v(" "),r("el-table-column",{attrs:{prop:"level",label:"工单等级",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center"},attrs:{slot:"reference"},slot:"reference"},[r("el-tag",{attrs:{type:e.LEVEL[t.row.level].type}},[e._v("\n                "+e._s(e.LEVEL[t.row.level].text)+"\n              ")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"ticket_status",label:"工单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("el-tag",{attrs:{type:e.TICKET_STATUS[t.row.ticket_status].type}},[e._v("\n                "+e._s(e.TICKET_STATUS[t.row.ticket_status].text)+"\n              ")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"action_user",label:"当前处理人"}})],1)],1),e._v(" "),r("div",{staticClass:"table-footer"},[r("div",{staticClass:"table-pagination"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.limit,layout:"prev, pager, next, sizes",total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])])],1)},p=[],f={render:d,staticRenderFns:p},m=f,h=r("VU/8"),_=a,g=h(u,m,!1,_,null,null);t.default=g.exports},GGwe:function(e,t,r){"use strict";function a(e){r("8Stf")}Object.defineProperty(t,"__esModule",{value:!0});var s=r("Dd8w"),l=r.n(s),i=r("ZTLr"),o=r("EMXe"),n=r("nSkA"),c=r("vMJZ"),u=r("QmSG"),d=r("NYxO"),p={components:{ElButton:o.a},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{title:"",type:"",content:"",create_user:sessionStorage.getItem("username"),level:2,action_user:"",follower:"",create_group:""},rules:{title:[{required:!0,message:"请输入工单标题",trigger:"blur"}],action_user:[{required:!0,message:"请选择指派者",trigger:"change"}],follower:[{required:!0,type:"array",message:"请选择工单跟踪者",trigger:"change"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}],level:[{required:!0,type:"number",message:"请确认工单等级",trigger:"blur"}]},users:[],fileList:[],count:0,enclosureFile:null,enclosureForm:{ticket:"",create_user:sessionStorage.getItem("username"),file:"",create_group:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,fullscreen:!0,help:!0},img_file:{},formDataList:[],to_list:"",cc_list:"",uploadurl:u.uploadurl}},computed:l()({},Object(d.b)(["username"])),created:function(){this.getTicketUsers()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm),Object(i.k)(t.ruleForm).then(function(e){"ok"===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"}),t.enclosureFile&&(t.enclosureForm.file=t.enclosureFile,t.enclosureForm.ticket=e.data.id,Object(i.i)(t.enclosureForm));var r={to:t.ruleForm.action_user,cc:t.ruleForm.follower.join(),sub:"【新工单】"+t.ruleForm.title,content:window.location.href};Object(n.c)(r),t.$router.push("/worktickets/workticket")})})},resetForm:function(e){this.$refs[e].resetFields()},getTicketUsers:function(){var e=this;Object(c.f)().then(function(t){e.users=t.data})},handleSuccess:function(e,t){var r=this,a=new FormData;a.append("username",this.enclosureForm.create_user),a.append("file",t.raw),a.append("create_time",this.afterFileUpload(t)),a.append("type",t.type),a.append("archive",this.route_path[1]),Object(n.d)(a).then(function(e){r.enclosureFile=e.data.filepath,"ok"===e.statusText&&(r.count+=1,r.$message({type:"success",message:"恭喜你，上传成功"}))}).catch(function(e){r.$message.error("上传失败"),r.$refs.upload.clearFiles(),console.log(e)})},afterFileUpload:function(e){var t=new Date(e.uid);return t.getFullYear().toString()+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+t.getDate()+t.getHours()+t.getMinutes()+t.getSeconds()},imgAdd:function(e,t){var r=this.$refs.md,a=new FormData;a.append("username",this.enclosureForm.create_user),a.append("file",t),a.append("create_time",this.afterUpload(t)),a.append("type",t.type),a.append("archive",this.route_path[1]),Object(n.d)(a).then(function(t){r.$imglst2Url([[e,t.data.file]])})},afterUpload:function(e){var t=new Date(e.lastModified);return t.getFullYear().toString()+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+t.getDate()+t.getHours()+t.getMinutes()+t.getSeconds()}}},f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-select",{attrs:{placeholder:"请选择指派人"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"跟踪者",prop:"follower"}},[r("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择跟踪者"},model:{value:e.ruleForm.follower,callback:function(t){e.$set(e.ruleForm,"follower",t)},expression:"ruleForm.follower"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"工单内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{default_open:"edit",code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工单等级",prop:"level"}},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}}),e._v(" "),r("div",[r("hr",{staticClass:"heng"}),e._v(" "),r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"file-list":e.fileList,disabled:e.count>0}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:e.count>0},slot:"trigger"},[e._v("\n              上传文件\n            ")]),e._v("\n            (可以不用上传)\n            "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过500kb，"),r("a",{staticStyle:{color:"red"}},[e._v("添加工单页面只能上传1个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},m=[],h={render:f,staticRenderFns:m},_=h,g=r("VU/8"),v=a,b=g(p,_,!1,v,null,null);t.default=b.exports},"pOQ/":function(e,t,r){var a=r("/B6Y");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("43ba421b",a,!0)}});