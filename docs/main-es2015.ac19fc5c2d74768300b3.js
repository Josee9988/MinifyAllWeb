(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(e,t,n){e.exports=n("zUnb")},fDsg:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("4MG8"),a=n("fXoL");let o=(()=>{class e{markdownToHtml(e){return i.parse(e,{gfm:!0,breaks:!0})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},kJdL:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("vkgz"),a=n("un/a"),o=n("fXoL"),r=n("tk/3");let c=(()=>{class e{constructor(e){this.http=e}getReadme(){return this.http.get("README.md",{responseType:"text"}).pipe(Object(i.a)(),Object(a.a)(2))}getChangelog(){return this.http.get("CHANGELOG.md",{responseType:"text"}).pipe(Object(i.a)(),Object(a.a)(2))}getPackage(){return this.http.get("package.json",{responseType:"json"}).pipe(Object(i.a)(),Object(a.a)(2))}}return e.\u0275fac=function(t){return new(t||e)(o.Yb(r.a))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},ujDJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("ofXK"),a=n("fXoL");let o=(()=>{class e{}return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(t){return new(t||e)},imports:[[i.c]]}),e})()},zUnb:function(e,t,n){"use strict";n.r(t),n("yLV6");var i=n("fXoL"),a=n("jhN1"),o=n("tyNb"),r=function(e){return e.error="Error",e.warning="Warning",e.success="Success",e.informational="Info",e}({}),c=n("3Pt+"),s=function(e){return e[e.HTML=1]="HTML",e[e.CSS=2]="CSS",e[e.JSON=3]="JSON",e[e.JAVASCRIPT=4]="JAVASCRIPT",e}({}),l=n("9aa0"),d=n("n9pp"),u=n("0DX0");let b=(()=>{class e{constructor(e,t){this.snackBar=e,this.zone=t}openSnackBar(e,t,n=4e3){const i=this.getConfigStyleClass(t),a=new u.b;a.panelClass=[i],this.zone.run(()=>{this.snackBar.open(e,t,{duration:n,panelClass:a.panelClass})})}getConfigStyleClass(e){switch(e){case r.error:return"snackbar-error";case r.informational:return"snackbar-info";case r.warning:return"snackbar-warning";case r.success:return"snackbar-success";default:return"snackbar-info"}}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(u.a),i.Yb(i.z))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),g=(()=>{class e{constructor(e){this.snackbarDisplayerService=e}copyToClipboard(e,t){const n=document.createElement("textarea");n.style.height="0px",n.style.width="0px",n.style.opacity="0",document.body.appendChild(n),n.value=e,n.select();const i=document.execCommand("copy");return n&&n.parentNode&&n.parentNode.removeChild(n),i?(this.snackbarDisplayerService.openSnackBar(t.toLocaleUpperCase()+"code copied to the clipboard",r.success),!0):(this.snackbarDisplayerService.openSnackBar("No se pudo copiar al portapapeles, actualiza tu navegador.",r.warning),!1)}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(b))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),f=(()=>{class e{constructor(e){this.snackbarDisplayerService=e}detectLanguage(e){return e.match(/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/)||e.match(/<(?:br|p)[^>{]*>|<\w+\s*>/gim)?s.HTML:e.match(/[#.\w\-\r\t]+(?=\s*{)/)&&e.match(/(?:\s*\S+\s*{[^}]*})+/)?(this.displayNotSureMessage(),s.CSS):e.match(/[#.\w\-\r\t]+(?=\s*{)/)?s.CSS:e.match(/(?:\s*\S+\s*{[^}]*})+/)?s.JSON:(e.match(/^(?:[\s]+)?(?:const|let|var|)?(?:[a-z0-9.]+(?:\.prototype)?)?(?:\s)?(?:[a-z0-9-_]+\s?=)?\s?(?:[a-z0-9]+\s+:\s+)?(?:function\s?)?(?:[a-z0-9_-]+)?\s?\(.*\)\s?(?:.+)?([=>]:)?{(?:(?:[^}{]+|{(?:[^}{]+|{[^}{]*})*})*}(?:\s?\(.*\)\s?\)\s?)?)?(?:;)?/gim)||this.displayNotSureMessage(),s.JAVASCRIPT)}displayNotSureMessage(){this.snackbarDisplayerService.openSnackBar("We are not 100% sure about the language, please review it manually",r.warning)}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(b))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=n("IRfi"),m=n("2+6u"),h=n("TEMH"),v=n("A2Vd"),C=n("j14s"),y=n("HELM"),k=n("gVAx"),w=n("ofXK"),S=n("Xlwt");function M(e,t){if(1&e&&(i.Ub(0,"mat-option",22),i.Qb(1,"em"),i.Ac(2),i.Tb()),2&e){const e=t.$implicit;i.lc("value",e.value),i.Cb(1),i.Eb(e.faIcon),i.Cb(1),i.Cc(" ",e.viewValue," ")}}function T(e,t){if(1&e&&i.Qb(0,"i"),2&e){const e=i.gc();i.Eb(e.getLanguageFromSelected().faIcon)}}function x(e,t){if(1&e&&(i.Ub(0,"mat-error"),i.Ac(1),i.Tb()),2&e){const e=i.gc();i.Cb(1),i.Bc(e.getErrorMessage(e.nonMinifiedCode))}}function L(e,t){1&e&&(i.Ub(0,"mat-hint"),i.Ac(1,"Please paste here your code to be minified. "),i.Tb())}function O(e,t){if(1&e&&i.Qb(0,"em"),2&e){const e=i.gc();i.Eb(e.getLanguageFromSelected().faIcon)}}function P(e,t){1&e&&i.Qb(0,"mat-progress-bar",23)}const U=function(e){return{"pallete-colored":e}},A=function(){return{standalone:!0}};let I=(()=>{class e extends class{getErrorMessage(e){return e.hasError("required")?"This field is required.":e.hasError("minlength")?`You must introduce at least ${e.errors.minlength.requiredLength} characters,\n          but we found ${e.errors.minlength.actualLength} characters.`:e.hasError("maxlength")?`You must introduce ${e.errors.maxlength.requiredLength} characters at maximum,\n            but we found the value ${e.errors.maxlength.actualLength}.`:e.hasError("min")?`You must introduce a numeric value bigger than ${e.errors.min.min},\n            but we found the value ${e.errors.min.actual}.`:e.hasError("max")?`You must introduce a numeric value smaller than ${e.errors.max.max},\n                but we found the value ${e.errors.max.actual}.`:e.hasError("email")?"You must introduce a valid email.":e.hasError("pattern")?`This field does not meet with the given specification,\n                            the value ${e.errors.pattern.actualValue} is not correct or it is wrongly formed.`:""}getProgressBarValue(){let e=100;for(const t of this.inputs)t.invalid&&(e-=100/this.inputs.length);return e}validateInputs(){let e=!0;for(const t of this.inputs)t.invalid&&(e=!1);return e}}{constructor(e,t,n,i,a){super(),this.snackbarDisplayerService=e,this.copyClipboardService=t,this.detectLanguage=n,this.title=i,this.meta=a,this.languageSelected=0,this.minifiedCode="",this.isProcessing=!1,this.languages=[{value:0,viewValue:"Auto detect on paste",faIcon:"fas fa-magic"},{value:1,viewValue:"HTML",faIcon:"fab fa-html5"},{value:2,viewValue:"CSS",faIcon:"fab fa-css3-alt"},{value:3,viewValue:"JSON/JSONC",faIcon:"fas fa-code"},{value:4,viewValue:"JavaScript (with Terser)",faIcon:"fab fa-js-square"}]}ngOnInit(){this.title.setTitle("MinifyAll - minifyall.jgracia.es"),this.meta.updateTag({name:"Online code minifier for CSS, JSON, JSONC and JavaScript. Minify instantly your programming code simple, smooth and fast!"}),this.nonMinifiedCode=new c.c("",[c.n.required,c.n.minLength(5)]),this.inputs=[this.nonMinifiedCode]}onSubmit(e=!1){this.validateInputs()?(this.isProcessing=!0,0===this.languageSelected&&this.autoDetectCode(),this.nonMinifiedCode.setValue(this.nonMinifiedCode.value.trim()),this.minifyCode(this.nonMinifiedCode.value.split("\n")),this.isProcessing=!1):e||this.snackbarDisplayerService.openSnackBar("Error while validating fields.",r.warning)}autoDetectCode(e=null){e?(e.preventDefault(),this.languageSelected=this.detectLanguage.detectLanguage(e.clipboardData.getData("text")),this.nonMinifiedCode.setValue(e.clipboardData.getData("text")),this.onSubmit(!0)):this.languageSelected=this.detectLanguage.detectLanguage(this.nonMinifiedCode.value)}onCopyText(){const e=this.getLanguageFromSelected().viewValue;this.copyClipboardService.copyToClipboard(this.minifiedCode,e)?this.snackbarDisplayerService.openSnackBar("Code copied to the clipboard",r.success):this.snackbarDisplayerService.openSnackBar("The code could not be copied to the clipboard, copy it yourself!.",r.warning)}onSelectText(e){const t=document.getElementById(e);t.focus(),t.select()}getLanguageFromSelected(){return this.languages.find(e=>e.value===this.languageSelected)}minifyCode(e){const t=new l.MinifyAllClass(this.isHexMinifierEnabled);switch(this.languageSelected){case s.HTML:this.minifiedCode=t.minifyHtml(e);break;case s.CSS:this.minifiedCode=t.minifyCssScssLessSass(e);break;case s.JSON:this.minifiedCode=t.minifyJsonJsonc(e);break;case s.JAVASCRIPT:const n=d.minify(e.join("\n"));void 0===n.error?this.minifiedCode=n.code:this.snackbarDisplayerService.openSnackBar("Error in the JavaScript code (Terser error)",r.error);break;default:this.snackbarDisplayerService.openSnackBar("Unexpected error while minifying. Please tell us how this happened!",r.error)}}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(b),i.Pb(g),i.Pb(f),i.Pb(a.g),i.Pb(a.f))},e.\u0275cmp=i.Jb({type:e,selectors:[["app-home-component"]],features:[i.zb],decls:47,vars:19,consts:[[1,"text-center"],[1,"fas","fa-feather-alt"],[1,"row"],[1,"col-md-9"],["matTooltip","Select the language in which your code will be minified",1,"text-center",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","vertical-aligned"],["color","warn","matTooltip","If the script should minify hexadecimal values or not (some colors may actually change a bit)",3,"ngModel","ngModelChange"],[1,"fas","fa-palette",3,"ngClass"],[1,"col-md-6"],["appearance","fill",1,"full-width"],[3,"class",4,"ngIf"],[1,"full-width"],["id","initialCode","matInput","","placeholder","Your code to be minified",1,"full-width",3,"formControl","blur","dblclick","paste"],[4,"ngIf"],["id","codeResult","matInput","","placeholder","Your minified code (readonly field)","readonly","",1,"full-width",3,"ngModel","ngModelOptions","dblclick","ngModelChange"],["color","accent","mat-stroked-button","","matTooltip","Copy your minified code to your clipboard",1,"hvr-pop","col-md-6",3,"disabled","click"],[1,"fas","fa-copy"],[1,"full-width","hvr-hang"],["color","primary","mat-raised-button","","matTooltip","Minify your code",1,"full-width",3,"click"],[1,"fas","fa-compress-alt"],["class","full-width","color","warn","mode","query",4,"ngIf"],[3,"value"],["color","warn","mode","query",1,"full-width"]],template:function(e,t){1&e&&(i.Ub(0,"h1",0),i.Ac(1,"MinifyAll online"),i.Tb(),i.Ub(2,"h2",0),i.Ac(3,"MinifyAll is a tool that will minify your code to make it lighter "),i.Qb(4,"em",1),i.Tb(),i.Qb(5,"br"),i.Ub(6,"div",2),i.Ub(7,"mat-form-field",3),i.Ub(8,"mat-label"),i.Ac(9,"Language mode"),i.Tb(),i.Ub(10,"mat-select",4),i.cc("valueChange",(function(){return t.onSubmit(!0)}))("valueChange",(function(e){return t.languageSelected=e})),i.zc(11,M,3,5,"mat-option",5),i.Tb(),i.Tb(),i.Ub(12,"div",6),i.Ub(13,"mat-slide-toggle",7),i.cc("ngModelChange",(function(e){return t.isHexMinifierEnabled=e})),i.Qb(14,"em",8),i.Ac(15," Minify colors "),i.Tb(),i.Tb(),i.Tb(),i.Ub(16,"div",2),i.Ub(17,"div",9),i.Ub(18,"mat-form-field",10),i.Ub(19,"mat-label"),i.zc(20,T,1,3,"i",11),i.Ac(21," Code to be minified "),i.Tb(),i.Ub(22,"label",12),i.Ub(23,"textarea",13),i.cc("blur",(function(){return t.onSubmit(!0)}))("dblclick",(function(){return t.onSelectText("initialCode")}))("paste",(function(e){return t.autoDetectCode(e)})),i.Tb(),i.zc(24,x,2,1,"mat-error",14),i.zc(25,L,2,0,"mat-hint",14),i.Tb(),i.Tb(),i.Tb(),i.Ub(26,"div",9),i.Ub(27,"mat-form-field",10),i.Ub(28,"mat-label"),i.Ac(29,"Output "),i.zc(30,O,1,3,"em",11),i.Ac(31),i.Tb(),i.Ub(32,"label",12),i.Ub(33,"textarea",15),i.cc("dblclick",(function(){return t.onSelectText("codeResult")}))("ngModelChange",(function(e){return t.minifiedCode=e})),i.Tb(),i.Tb(),i.Tb(),i.Ub(34,"div",2),i.Ub(35,"button",16),i.cc("click",(function(){return t.onSelectText("codeResult")})),i.Qb(36,"em",17),i.Ac(37," Select text "),i.Tb(),i.Ub(38,"button",16),i.cc("click",(function(){return t.onCopyText()})),i.Qb(39,"em",17),i.Ac(40," Copy text "),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Qb(41,"br"),i.Ub(42,"div",18),i.Ub(43,"button",19),i.cc("click",(function(){return t.onSubmit()})),i.Qb(44,"em",20),i.Ac(45),i.Tb(),i.zc(46,P,1,0,"mat-progress-bar",21),i.Tb()),2&e&&(i.Cb(10),i.lc("value",t.languageSelected),i.Cb(1),i.lc("ngForOf",t.languages),i.Cb(2),i.lc("ngModel",t.isHexMinifierEnabled),i.Cb(1),i.lc("ngClass",i.oc(16,U,t.isHexMinifierEnabled)),i.Cb(6),i.lc("ngIf",0!==t.languageSelected),i.Cb(3),i.lc("formControl",t.nonMinifiedCode),i.Cb(1),i.lc("ngIf",t.nonMinifiedCode.invalid&&t.nonMinifiedCode.touched),i.Cb(1),i.lc("ngIf",t.nonMinifiedCode.invalid&&t.nonMinifiedCode.touched),i.Cb(5),i.lc("ngIf",0!==t.languageSelected),i.Cb(1),i.Cc(" ",0!==t.getLanguageFromSelected().value?t.getLanguageFromSelected().viewValue:""," code "),i.Cb(2),i.lc("ngModel",t.minifiedCode)("ngModelOptions",i.nc(18,A)),i.Cb(2),i.lc("disabled",""===t.minifiedCode),i.Cb(3),i.lc("disabled",""===t.minifiedCode),i.Cb(7),i.Cc(" Minify ",0!==t.getLanguageFromSelected().value?t.getLanguageFromSelected().viewValue:""," code "),i.Cb(1),i.lc("ngIf",t.isProcessing))},directives:[p.b,p.f,m.a,k.a,w.j,h.a,c.j,c.l,w.i,w.k,v.a,c.b,c.d,S.b,C.i,p.a,p.e,y.a],styles:[".full-width[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{height:40vh}.row[_ngcontent-%COMP%]{margin-bottom:2%}mat-option[_ngcontent-%COMP%]{text-align:center}.vertical-aligned[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.pallete-colored[_ngcontent-%COMP%]{color:#2da1e6}"]}),e})();const _=[{path:"",pathMatch:"full",component:I},{path:"",component:I},{path:"info",loadChildren:()=>Promise.all([n.e(1),n.e(3)]).then(n.bind(null,"dNQg")).then(e=>e.InformationModule)},{path:"changelog",loadChildren:()=>Promise.all([n.e(1),n.e(2)]).then(n.bind(null,"jXLA")).then(e=>e.ChangelogModule)},{path:"**",component:I}];let E=(()=>{class e{}return e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},imports:[[o.g.forRoot(_,{preloadingStrategy:o.b})],o.g]}),e})();var z=n("lJxs"),j=n("UXun"),J=n("sjd8"),D=n("fDsg"),N=n("kJdL"),Q=n("RzEb"),F=n("kEI4"),V=n("J0hL");function $(e,t){if(1&e&&(i.Ub(0,"a",19),i.Qb(1,"em"),i.Ac(2),i.Tb()),2&e){const e=i.gc().$implicit;i.lc("routerLink",e.route),i.Cb(1),i.Fb("",e.icon," icon"),i.Cb(1),i.Cc(" ",e.field," ")}}function H(e,t){if(1&e&&(i.Ub(0,"a",20),i.Qb(1,"em"),i.Ac(2),i.Tb()),2&e){const e=i.gc().$implicit;i.mc("href",e.externalLink,i.uc),i.Cb(1),i.Fb("",e.icon," icon"),i.Cb(1),i.Cc(" ",e.field," ")}}function B(e,t){if(1&e&&(i.Ub(0,"li"),i.zc(1,$,3,5,"a",17),i.zc(2,H,3,5,"a",18),i.Tb()),2&e){const e=t.$implicit;i.Cb(1),i.lc("ngIf",!e.externalLink),i.Cb(1),i.lc("ngIf",e.externalLink)}}function R(e,t){if(1&e&&(i.Ub(0,"a",25),i.Qb(1,"em"),i.Ac(2),i.Tb()),2&e){const e=i.gc().$implicit;i.lc("routerLink",e.route),i.Cb(1),i.Eb(e.icon),i.Cb(1),i.Cc(" ",e.field," ")}}function Y(e,t){if(1&e&&(i.Ub(0,"a",26),i.Qb(1,"em"),i.Ac(2),i.Tb()),2&e){const e=i.gc().$implicit;i.mc("href",e.externalLink,i.uc),i.Cb(1),i.Eb(e.icon),i.Cb(1),i.Cc(" ",e.field," ")}}function q(e,t){if(1&e&&(i.Ub(0,"div",21),i.zc(1,R,3,5,"a",22),i.Ub(2,"div",23),i.zc(3,Y,3,5,"a",24),i.Tb(),i.Tb()),2&e){const e=t.$implicit;i.Cb(1),i.lc("ngIf",!e.externalLink),i.Cb(2),i.lc("ngIf",e.externalLink)}}const X=function(e){return{hidden:e}},G=["*"];let K=(()=>{class e{constructor(e,t,n){this.breakpointObserver=e,this.markdownParserService=t,this.localFilesService=n,this.isHandset$=this.breakpointObserver.observe("(max-width: 859.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)").pipe(Object(z.a)(e=>e.matches),Object(j.a)())}ngOnInit(){this.localFilesService.getPackage().subscribe(e=>{this.appName="MinifyAll v"+e.version}),this.declareNavbarElements()}declareNavbarElements(){this.navbarLinks=[{icon:"fas fa-compress-alt",field:"Minify code",route:"",order:1},{icon:"fas fa-info-circle",field:"Information",route:"info",order:2},{icon:"fas fa-clipboard-list",field:"Changelog",route:"changelog",order:3},{icon:"fab fa-github",field:"GitHub repo",route:"",order:4,externalLink:"https://github.com/Josee9988/MinifyAllWeb"},{icon:"fas fa-coffee",field:"Buy me a coffee",route:"",order:5,externalLink:"https://www.buymeacoffee.com/josee9988"}]}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(J.a),i.Pb(D.a),i.Pb(N.a))},e.\u0275cmp=i.Jb({type:e,selectors:[["app-navbar"]],ngContentSelectors:G,decls:28,vars:18,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","ngClass","opened","click"],["drawer",""],["color","primary",1,"hvr-hang"],["alt","logo","routerLink","/","routerLinkActive","active","src","../../../../assets/logo.webp",1,"logo-header"],["matSubheader",""],[4,"ngFor","ngForOf"],["color","primary"],["aria-label","Toggle sidenav","mat-icon-button","","type","button",1,"sidenav-btn",3,"click"],["aria-label","Side nav toggle icon",1,"fas","fa-bars"],[1,"minium-header-pads"],["routerLink","/","routerLinkActive","active",1,"hvr-pop"],["alt","logo","src","../../../../assets/logo.webp",1,"logo-header-white"],[1,"main-navbar-text"],[1,"fill-space"],["class","hvr-bounce-in",4,"ngFor","ngForOf"],[1,"hvr-bounce-in","top-navbar-item"],["class","hvr-bounce-in","mat-list-item","","routerLinkActive","active",3,"routerLink",4,"ngIf"],["class","hvr-bounce-in","mat-list-item","","routerLinkActive","active",3,"href",4,"ngIf"],["mat-list-item","","routerLinkActive","active",1,"hvr-bounce-in",3,"routerLink"],["mat-list-item","","routerLinkActive","active",1,"hvr-bounce-in",3,"href"],[1,"hvr-bounce-in"],["class","top-navbar-item","mat-button","","routerLinkActive","active",3,"routerLink",4,"ngIf"],[1,"external-link","hvr-bounce-in"],["class","top-navbar-item","mat-button","",3,"href",4,"ngIf"],["mat-button","","routerLinkActive","active",1,"top-navbar-item",3,"routerLink"],["mat-button","",1,"top-navbar-item",3,"href"]],template:function(e,t){if(1&e){const e=i.Vb();i.kc(),i.Ub(0,"mat-sidenav-container",0),i.Ub(1,"mat-sidenav",1,2),i.cc("click",(function(){return i.sc(e),i.qc(2).toggle()})),i.hc(3,"async"),i.hc(4,"async"),i.hc(5,"async"),i.hc(6,"async"),i.Ub(7,"mat-toolbar",3),i.Qb(8,"img",4),i.Ac(9),i.Tb(),i.Ub(10,"mat-nav-list"),i.Ub(11,"h2",5),i.Ac(12,"Elementos de navegaci\xf3n"),i.Tb(),i.Ub(13,"ul"),i.zc(14,B,3,2,"li",6),i.Tb(),i.Tb(),i.Tb(),i.Ub(15,"mat-sidenav-content"),i.Ub(16,"mat-toolbar",7),i.Ub(17,"button",8),i.cc("click",(function(){return i.sc(e),i.qc(2).toggle()})),i.Qb(18,"em",9),i.Tb(),i.Ub(19,"span",10),i.Ub(20,"a",11),i.Qb(21,"img",12),i.Ub(22,"span",13),i.Ac(23),i.Tb(),i.Tb(),i.Tb(),i.Qb(24,"span",14),i.zc(25,q,4,2,"div",15),i.Qb(26,"div",16),i.Tb(),i.jc(27),i.Tb(),i.Tb()}2&e&&(i.Cb(1),i.lc("mode",i.ic(4,10,t.isHandset$)?"over":"side")("ngClass",i.oc(16,X,1==!i.ic(5,12,t.isHandset$)))("opened",!1===i.ic(6,14,t.isHandset$)),i.Db("role",i.ic(3,8,t.isHandset$)?"dialog":"navigation"),i.Cb(8),i.Cc("",t.appName," "),i.Cb(5),i.lc("ngForOf",t.navbarLinks),i.Cb(9),i.Bc(t.appName),i.Cb(2),i.lc("ngForOf",t.navbarLinks))},directives:[Q.b,Q.a,w.i,V.a,o.d,o.e,F.d,F.c,w.j,Q.c,S.b,o.f,w.k,F.a,S.a],pipes:[w.b],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}ul[_ngcontent-%COMP%]{padding-left:5px}a[_ngcontent-%COMP%]{color:inherit}.icon[_ngcontent-%COMP%]{padding-right:7px}.minium-header-pads[_ngcontent-%COMP%]{padding-top:1%;padding-bottom:1%;padding-right:1.5%}.mat-drawer-content[_ngcontent-%COMP%]{display:contents}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-drawer-container[_ngcontent-%COMP%]{display:contents}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{min-height:38px;position:-webkit-sticky;position:sticky;top:0;z-index:2}.hidden[_ngcontent-%COMP%], .top-navbar-item[_ngcontent-%COMP%]{display:none}.fill-space[_ngcontent-%COMP%]{flex:1 1 auto}li[_ngcontent-%COMP%]{list-style:none;list-style-type:none}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:7%!important;margin-bottom:3%}.main-navbar-text[_ngcontent-%COMP%]{text-decoration:none;color:#fff}img[_ngcontent-%COMP%]{height:24px;vertical-align:middle;padding-right:2px}.logo-header[_ngcontent-%COMP%]{cursor:pointer}.mat-button[_ngcontent-%COMP%]{padding:0 6px}@media (max-width:768px){.top-navbar-item[_ngcontent-%COMP%]{display:none!important}}@media (max-width:882px) and (max-width:991.99px){.mat-button[_ngcontent-%COMP%]{padding:0 3px}}@media (min-width:850px){.sidenav[_ngcontent-%COMP%], .sidenav-btn[_ngcontent-%COMP%]{display:none!important}.top-navbar-item[_ngcontent-%COMP%]{display:inline}}@media (min-width:992px){.top-navbar-item[_ngcontent-%COMP%]{display:inline;font-size:14px}.material-icons[_ngcontent-%COMP%]{font-size:18.5px!important;padding-top:2px;vertical-align:middle}.mat-button[_ngcontent-%COMP%]{padding:0 6px}}.external-link[_ngcontent-%COMP%]{color:inherit;text-decoration:none}"]}),e})();var W=n("+TBP");let Z=(()=>{class e{constructor(e){this.router=e;const t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),this.router.navigate([t]))}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(o.c))},e.\u0275cmp=i.Jb({type:e,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"ml-4","mr-4"]],template:function(e,t){1&e&&(i.Ub(0,"app-navbar"),i.Ub(1,"div",0),i.Qb(2,"router-outlet"),i.Tb(),i.Tb(),i.Qb(3,"mga-google-analytics"))},directives:[K,o.h,W.a],styles:[""]}),e})();var ee=n("R1ws"),te=n("rKiy"),ne=n("tk/3"),ie=n("Jho9"),ae=n("ujDJ");let oe=(()=>{class e{}return e.\u0275mod=i.Nb({type:e,bootstrap:[Z]}),e.\u0275inj=i.Mb({factory:function(t){return new(t||e)},providers:[],imports:[[ae.a,a.a,E,ee.b,Q.d,V.b,k.b,F.b,S.c,te.a,p.d,C.j,m.b,v.b,c.m,c.f,u.c,h.b,y.b,ne.b,W.b.forRoot({analyticsId:"UA-165732469-1",showLog:!1}),ie.a.register("ngsw-worker.js",{enabled:!0})]]}),e})();Object(i.T)(),a.h().bootstrapModule(oe).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0,8]]]);