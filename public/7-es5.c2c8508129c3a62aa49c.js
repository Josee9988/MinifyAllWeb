function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{dNQg:function(e,n,t){"use strict";t.r(n),t.d(n,"InformationModule",(function(){return b}));var i,r,o,a=t("ofXK"),s=t("tyNb"),c=t("fXoL"),l=t("fDsg"),f=t("kJdL"),u=t("ngAm"),p=t("Yrry"),d=[{path:"",component:(i=function(){function e(n,t,i){_classCallCheck(this,e),this.markdownParserService=n,this.localFilesService=t,this.seo=i}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.localFilesService.getReadme().subscribe((function(n){e.convertedText=e.markdownParserService.markdownToHtml(n)})),this.seo.generateTags({title:"MinifyAll information - minifyall.jgracia.es",description:"Informational page of MinifyAll displaying the README.md file from the Github repository.",slug:"info"})}}]),e}(),i.\u0275fac=function(e){return new(e||i)(c.Pb(l.a),c.Pb(f.a),c.Pb(u.a))},i.\u0275cmp=c.Jb({type:i,selectors:[["app-information"]],decls:2,vars:3,consts:[[1,"text-justify",3,"innerHTML"]],template:function(e,n){1&e&&(c.Qb(0,"span",0),c.hc(1,"sanitizeHtml")),2&e&&c.lc("innerHTML",c.ic(1,1,n.convertedText),c.tc)},pipes:[p.a],styles:[""]}),i)}],m=((r=function e(){_classCallCheck(this,e)}).\u0275mod=c.Nb({type:r}),r.\u0275inj=c.Mb({factory:function(e){return new(e||r)},imports:[[s.g.forChild(d)],s.g]}),r),h=t("ujDJ"),b=((o=function e(){_classCallCheck(this,e)}).\u0275mod=c.Nb({type:o}),o.\u0275inj=c.Mb({factory:function(e){return new(e||o)},imports:[[a.c,m,h.a]]}),o)}}]);