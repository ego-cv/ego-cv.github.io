(function(t){function e(e){for(var s,a,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/write-dash/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=(n("ba8c"),n("ecee")),r=n("c074"),a=n("ad3d"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.settings.dark?"dark":"",attrs:{id:"app"}},[n("div",{staticClass:"\n      h-screen\n      bg-white\n      dark:bg-gray-800\n      text-gray-800\n      dark:text-gray-100\n      p-4\n      md:p-10\n      flex\n    "},[n("Settings",{class:t.showSettings?"block":"hidden",on:{close:function(e){t.showSettings=!1}},model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}}),n("div",{staticClass:"flex justify-between gap-4 w-full"},[n("p",{staticClass:"p-2 w-1/6 md:block hidden"}),n("div",{staticClass:"w-full md:max-w-screen-md flex flex-col"},[n("div",{staticClass:"flex"},[n("Mode",{staticClass:"flex-grow",attrs:{mode:t.currentMode,secondsLeft:t.secondsLeft,session:t.currentSession,totalSessions:t.settings.totalSessions},on:{reset:t.reset}}),n("button",{class:"md:hidden pl-4 "+(t.started?"opacity-50 cursor-default":""),attrs:{disabled:t.started},on:{click:t.toggleSettings}},[n("icon",{attrs:{icon:"cog"}})],1)],1),n("Editor",{staticClass:"filter flex-grow overflow-auto",style:t.editorStyle,attrs:{placeholder:t.placeholder},on:{wc:t.updateWordCount},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("div",{staticClass:"\n            mx-auto\n            w-full\n            md:max-w-screen-md\n            flex\n            items-end\n            justify-between\n            p-4\n          "},[n("div",{staticClass:"text-blue-300 dark:text-gray-700 text-sm"},[t._v(" "+t._s(t.version)),n("span",{staticClass:"hidden"},[t._v(t._s(t.fullVersion))])]),n("div",{staticClass:"font-bold"},[t._v(t._s(t.wc)+" words")]),t._m(0)])],1),n("div",{staticClass:"w-1/6 py-4 content-end hidden md:block"},[n("button",{staticClass:"pr-4",on:{click:t.toggleDarkMode}},[n("icon",{attrs:{icon:t.settings.dark?"sun":"moon"}})],1),n("a",{staticClass:"pr-4",attrs:{target:"_blank",href:"https://egocv.com/write-dash-app.html"}},[n("icon",{attrs:{icon:"question-circle"}})],1),n("button",{class:t.started?"opacity-50 cursor-default":"",attrs:{disabled:t.started},on:{click:t.toggleSettings}},[n("icon",{attrs:{icon:"cog"}})],1)])])],1)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-blue-300 dark:text-gray-700 text-sm"},[n("a",{attrs:{href:"https://twitter.com/egocv"}},[t._v("contact @egocv")])])}],u=(n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("editor-content",{staticClass:"mx-auto border-0 m-10 w-full md:max-w-screen-md",attrs:{editor:t.editor}})}),l=[],d=n("1ab4"),f=n("672a"),h=n("6a8e"),p=n("795d"),g=(n("ac1f"),n("1276"),n("498a"),n("9980")),m=g["b"].create({name:"wordCount",addCommands:function(){return{getWordCount:function(){return function(t){var e=t.state,n=0;return e.doc.descendants((function(t){t.isLeaf&&(n+=t.textContent.trim().split(/\s+/).length)})),n}}}}}),v=m,b={name:"Editor",components:{EditorContent:d["b"]},data:function(){return{editor:null}},props:{value:{type:String,default:""},placeholder:{type:String,default:""}},watch:{value:function(t){this.editor.getHTML()!==t&&this.editor.commands.setContent(this.value,!1)}},methods:{onEditorUpdate:function(){var t=this.editor.getHTML();this.$emit("input",t),this.$emit("wc",this.editor.commands.getWordCount())},focusEditor:function(){this.editor.commands.focus("end")}},mounted:function(){this.editor=new d["a"]({extensions:[f["a"],h["a"],p["a"].configure({placeholder:this.placeholder}),v],content:this.value,onUpdate:this.onEditorUpdate,onCreate:this.focusEditor,autofocus:"start"}),setTimeout(this.focusEditor,2e3)},beforeDestroy:function(){this.editor.destroy()}},w=b,y=(n("8164"),n("2877")),x=Object(y["a"])(w,u,l,!1,null,null,null),C=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded flex justify-between",class:t.colours},[n("div",{staticClass:"p-4"},[n("span",{staticClass:"font-bold"},[t._v(t._s(t.modeName))]),t.started?n("span",[t._v(" - "+t._s(t.timeLeft))]):t._e()]),t.ended?n("button",{staticClass:"shadow-xl p-4 bg-green-100 text-green-800 rounded-r",on:{click:t.reset}},[t._v(" Restart ")]):n("span",{staticClass:"p-4"},[t._v("Session "+t._s(t.session)+"/"+t._s(t.totalSessions))])])},E=[],_=n("ade3"),k=(n("a9e3"),{READY:0,WRITING:1,EDITING:2,DIED:3,COMPLETE:4}),L={name:"Mode",props:{mode:{type:Number},secondsLeft:{type:Number},session:{type:Number},totalSessions:{type:Number}},methods:{reset:function(){this.$emit("reset")}},computed:{modeName:function(){var t,e=(t={},Object(_["a"])(t,k.READY,"Get ready..."),Object(_["a"])(t,k.WRITING,"SPRINT!"),Object(_["a"])(t,k.EDITING,"Pause, edit, relax"),Object(_["a"])(t,k.DIED,"What happened? Wh-where is my chapter??"),Object(_["a"])(t,k.COMPLETE,"All done!"),t);return e[this.mode]},colours:function(){var t,e=(t={},Object(_["a"])(t,k.READY,"bg-blue-700 text-blue-100"),Object(_["a"])(t,k.WRITING,"text-red-100 bg-red-700"),Object(_["a"])(t,k.EDITING,"bg-green-700 text-green-100"),Object(_["a"])(t,k.DIED,"text-gray-50 bg-black"),Object(_["a"])(t,k.COMPLETE,"bg-green-700 text-green-100"),t);return e[this.mode]},timeLeft:function(){return new Date(1e3*this.secondsLeft).toISOString().substr(14,5)},started:function(){return this.mode===k.WRITING||this.mode===k.EDITING},ended:function(){return this.mode===k.DIED||this.mode===k.COMPLETE}}},I=L,D=Object(y["a"])(I,S,E,!1,null,null,null),O=D.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"z-10 fixed inset-0 bg-black bg-opacity-60",on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[n("div",{staticClass:"\n      md:mt-20\n      opacity-100\n      mx-auto\n      bg-white\n      dark:bg-gray-800\n      w-full\n      md:max-w-lg\n      h-screen\n      md:h-auto\n      p-4\n      md:rounded\n      shadow-lg\n    "},[n("h2",{staticClass:"font-bold text-center text-lg mb-5"},[t._v("Settings")]),n("div",{staticClass:"divide-y divide-gray-200"},[n("label",{staticClass:"py-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value.dark,expression:"value.dark"}],attrs:{type:"checkbox",id:"dark-mode"},domProps:{checked:Array.isArray(t.value.dark)?t._i(t.value.dark,null)>-1:t.value.dark},on:{change:function(e){var n=t.value.dark,s=e.target,i=!!s.checked;if(Array.isArray(n)){var r=null,a=t._i(n,r);s.checked?a<0&&t.$set(t.value,"dark",n.concat([r])):a>-1&&t.$set(t.value,"dark",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.value,"dark",i)}}}),n("span",{staticClass:"ml-2"},[t._v("Dark mode")])]),n("label",{staticClass:"flex py-2 mt-5"},[n("span",{staticClass:"self-center w-2/3"},[t._v("Number of sprints")]),n("div",{staticClass:"w-1/3 border-2 rounded p-1"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value.totalSessions,expression:"value.totalSessions",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:"30"},domProps:{value:t.value.totalSessions},on:{input:function(e){e.target.composing||t.$set(t.value,"totalSessions",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("label",{staticClass:"flex py-2"},[n("span",{staticClass:"self-center w-2/3"},[t._v("Length of each sprint")]),n("div",{staticClass:"w-1/3 border-2 rounded p-1"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sprintLength,expression:"sprintLength",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:"30"},domProps:{value:t.sprintLength},on:{input:function(e){e.target.composing||(t.sprintLength=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" mins ")])]),n("label",{staticClass:"flex py-2"},[n("span",{staticClass:"self-center w-2/3"},[t._v("Length of pause between sessions")]),n("div",{staticClass:"w-1/3 border-2 rounded p-1"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.pauseLength,expression:"pauseLength",modifiers:{number:!0}}],attrs:{type:"number",min:"1",max:"30"},domProps:{value:t.pauseLength},on:{input:function(e){e.target.composing||(t.pauseLength=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" mins ")])]),n("label",{staticClass:"flex py-2"},[n("span",{staticClass:"self-center w-2/3"},[t._v("Delete text after a pause of")]),n("div",{staticClass:"w-1/3 border-2 rounded p-1"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value.deleteAfter,expression:"value.deleteAfter",modifiers:{number:!0}}],attrs:{type:"number",min:"5",max:"60"},domProps:{value:t.value.deleteAfter},on:{input:function(e){e.target.composing||t.$set(t.value,"deleteAfter",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" seconds ")])])]),n("div",{staticClass:"mt-5 flex w-full justify-end"},[n("button",{staticClass:"bg-green-300 dark:bg-green-800 p-2 px-5 rounded",on:{click:t.close}},[t._v(" Done ")])])])])},M=[],N={name:"Settings",data:function(){return{editor:null}},methods:{close:function(){this.$emit("close")}},computed:{sprintLength:{get:function(){return Math.round(this.value.sprintLength/60)},set:function(t){this.value.sprintLength=60*t}},pauseLength:{get:function(){return Math.round(this.value.pauseLength/60)},set:function(t){this.value.pauseLength=60*t}}},watch:{value:{deep:!0,handler:function(){this.$emit("input",this.value)}}},props:{value:{type:Object}}},P=N,j=(n("ef23"),Object(y["a"])(P,T,M,!1,null,null,null)),A=j.exports,$={name:"App",components:{Editor:C,Mode:O,Settings:A},data:function(){return{content:"<p></p>",wc:0,settings:{dark:!1,sprintLength:180,pauseLength:60,totalSessions:2,deleteAfter:8},sessionStart:0,state:"",timePassed:null,lastEdit:0,showSettings:!1}},created:function(){var t=this;setInterval((function(){t.setTimePassed()}),100)},mounted:function(){this.$nextTick((function(){return window.scrollTo(0,1)}))},computed:{placeholder:function(){var t=Math.round(this.settings.sprintLength/60),e=Math.round(this.settings.pauseLength/60);return"Your session will begin once you start writing!\n\nEach session will be ".concat(t," minutes of writing followed by a ").concat(e," minute break\nDon't pause for too long during a sprint, or your words will fade and be GONE FOREVER.\nF11 to open full screen, ctrl-b for bold, ctrl-i for italics, mardown headers, etc.")},version:function(){return{dirty:!0,raw:"v0.3-0-g2cc6da8-dirty",hash:"g2cc6da8",distance:0,tag:"v0.3",semver:null,suffix:"0-g2cc6da8-dirty",semverString:""}.tag},fullVersion:function(){return{dirty:!0,raw:"v0.3-0-g2cc6da8-dirty",hash:"g2cc6da8",distance:0,tag:"v0.3",semver:null,suffix:"0-g2cc6da8-dirty",semverString:""}.raw},secondsPassed:function(){return Math.floor(this.timePassed/1e3)},sessionLength:function(){return this.settings.sprintLength+this.settings.pauseLength},currentSession:function(){return Math.ceil(this.secondsPassed/this.sessionLength)||1},currentMode:function(){return"died"===this.state?k.DIED:"complete"===this.state?k.COMPLETE:this.sessionStart?this.secondsPassed%this.sessionLength<=this.settings.sprintLength?k.WRITING:k.EDITING:k.READY},started:function(){return this.currentMode===k.WRITING||this.currentMode===k.EDITING},blurAfter:function(){return Math.round(this.settings.deleteAfter/2)},secondsLeft:function(){var t=this.secondsPassed%this.sessionLength;return this.currentMode===k.WRITING?this.settings.sprintLength-t:this.sessionLength-t},editorStyle:function(){if(this.currentMode===k.WRITING){var t=(Date.now()-this.lastEdit)/1e3,e=7;if(t>this.blurAfter){var n=(t-this.blurAfter)/(this.settings.deleteAfter-this.blurAfter);return"--tw-blur: blur(".concat(e*n,"px)")}}return""}},methods:{toggleDarkMode:function(){this.settings.dark=!this.settings.dark},toggleSettings:function(){this.showSettings=!this.showSettings},reset:function(){this.state="",this.sessionStart=0},startSession:function(){this.sessionStart=Date.now(),this.state="running"},setTimePassed:function(){if(this.started){this.timePassed=Date.now()-this.sessionStart,this.timePassed/1e3>this.settings.totalSessions*this.sessionLength-this.settings.pauseLength&&(this.state="complete");var t=this.getSecondsSinceLastEdit();t>this.settings.deleteAfter&&this.delete()}},getSecondsSinceLastEdit:function(){return this.currentMode===k.WRITING?(Date.now()-this.lastEdit)/1e3:0},delete:function(){this.content="<p></p>",this.state="died"},modeChanged:function(){this.lastEdit=Date.now()},updateWordCount:function(t){this.wc=t}},watch:{currentMode:function(t,e){this.modeChanged(t,e)},content:function(){0===this.sessionStart&&this.startSession(),this.lastEdit=Date.now()}}},G=$,R=Object(y["a"])(G,o,c,!1,null,null,null),W=R.exports;i["c"].add(r["a"],r["d"],r["b"],r["c"]),s["a"].component("icon",a["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(W)}}).$mount("#app")},"5bf9":function(t,e,n){},8164:function(t,e,n){"use strict";n("5bf9")},ba8c:function(t,e,n){},c967:function(t,e,n){},ef23:function(t,e,n){"use strict";n("c967")}});
//# sourceMappingURL=app.aafee7a5.js.map