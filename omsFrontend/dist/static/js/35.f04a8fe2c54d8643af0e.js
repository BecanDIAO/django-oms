webpackJsonp([35],{"2x9g":function(e,t,a){var o=a("gNS4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("53e471a1",o,!0)},gNS4:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".table-expand{font-size:0}.table-expand .el-form-item{margin:0;width:100%}.table-expand .el-form-item .el-form-item__label{width:90px;color:#99a9bf}.table-expand .el-form-item .el-form-item__content{width:80%}",""])},yTcb:function(e,t,a){"use strict";function o(e){a("2x9g")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("BO1k"),n=a.n(r),l=a("iVC1"),s=a("8TIX"),i={components:{sesectHosts:s.default},data:function(){return{route_path:this.$route.path.split("/"),job_id:this.$route.params.job_id,ruleForm:{name:"",code_repo:"svn",code_url:"",desc:""},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],code_url:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},addenvForm:!1,envForm:{},actionTab:"",tabIndex:-1,TabValues:[],removeenvs:[]}},created:function(){this.fetchJobData()},methods:{fetchJobData:function(){var e=this;Object(l.f)(null,this.job_id).then(function(t){e.ruleForm=t.data,e.fetchJobenvData(e.ruleForm.name)})},fetchJobenvData:function(e){var t=this,a={job__name:e};Object(l.e)(a).then(function(e){for(var a=0;a<e.data.length;a++)t.tabIndex=a,t.TabValues.push({title:e.data[a].name,name:a+"",content:e.data[a]})})},addTab:function(){this.addenvForm=!1;var e=++this.tabIndex+"";this.TabValues.push({title:this.envForm.name,name:e,content:this.envForm}),this.actionTab=e,this.envForm.job=this.ruleForm.name,Object(l.h)(this.envForm),this.envForm={}},removeTab:function(e){var t=this.TabValues,a=this.actionTab;a===e&&t.forEach(function(o,r){if(o.name===e){var n=t[r+1]||t[r-1];n&&(a=n.name)}}),this.actionTab=a,this.TabValues=t.filter(function(t){return t.name!==e});var o=t.filter(function(t){return t.name===e})[0].content.id;this.removeenvs.push(o)},submitForm:function(e){var t=this;Object(l.j)(this.ruleForm.id,e).then(function(e){t.$message({message:"恭喜你，更新成功",type:"success"});var a=!0,o=!1,r=void 0;try{for(var s,i=n()(t.removeenvs);!(a=(s=i.next()).done);a=!0){var m=s.value;Object(l.b)(m)}}catch(e){o=!0,r=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw r}}t.$router.push("/jobs/jobs")}).catch(function(e){t.$message.error("更新失败"),console.log(e)})},getHosts:function(e){this.envForm.hosts=e}}},m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",{staticStyle:{"max-width":"800px"}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代码地址",prop:"code_url"}},[a("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.code_url,callback:function(t){e.$set(e.ruleForm,"code_url",t)},expression:"ruleForm.code_url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"研发可见",prop:"showdev"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.showdev,callback:function(t){e.$set(e.ruleForm,"showdev",t)},expression:"ruleForm.showdev"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"配置环境"}},[a("el-tabs",{attrs:{type:"card",editable:""},on:{"tab-add":function(t){e.addenvForm=!0},"tab-remove":e.removeTab},model:{value:e.actionTab,callback:function(t){e.actionTab=t},expression:"actionTab"}},e._l(e.TabValues,function(t){return a("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[a("el-card",[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"right",inline:""}},[a("el-form-item",{attrs:{label:"环境名称"}},[a("span",[e._v(e._s(t.content.name))])]),e._v(" "),a("el-form-item",{attrs:{label:"发布路径"}},[a("span",[e._v(e._s(t.content.path))])]),e._v(" "),a("el-form-item",{attrs:{label:"发布主机"}},e._l(t.content.hosts,function(t){return a("el-tag",{key:t,staticStyle:{"margin-right":"5px"}},[e._v(e._s(t))])})),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("span",[e._v(e._s(t.content.desc))])])],1)],1)],1)}))],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm(e.ruleForm)}}},[e._v("更新")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addenvForm},on:{"update:visible":function(t){e.addenvForm=t}}},[a("el-form",{ref:"envForm",attrs:{"label-width":"70px"},model:{value:e.envForm,callback:function(t){e.envForm=t},expression:"envForm"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.envForm.name,callback:function(t){e.$set(e.envForm,"name",t)},expression:"envForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发布路径",prop:"path"}},[a("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.envForm.path,callback:function(t){e.$set(e.envForm,"path",t)},expression:"envForm.path"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选择主机",prop:"hosts"}},[a("sesect-hosts",{attrs:{selecthost:e.envForm.hosts},on:{gethosts:e.getHosts}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.envForm.desc,callback:function(t){e.$set(e.envForm,"desc",t)},expression:"envForm.desc"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addTab}},[e._v("确 定")])],1)],1)],1)},c=[],u={render:m,staticRenderFns:c},d=u,v=a("VU/8"),b=o,f=v(i,d,!1,b,null,null);t.default=f.exports}});