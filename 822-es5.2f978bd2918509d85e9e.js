!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[822],{822:function(n,o,r){"use strict";r.r(o),r.d(o,{BotStrategyPageModule:function(){return v}});var i,u,s=r(1116),a=r(1462),c=r(6611),f=r(2782),p=r(4762),m=r(8619),l=r(2693),h=r(8993),b=[{path:"",component:(i=function(){function n(e,o,r){t(this,n),this.oLocation=e,this.router=o,this.http=r}return e(n,[{key:"onBack",value:function(){return(0,p.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.oLocation.back();case 1:case"end":return t.stop()}},t,this)}))}},{key:"ngOnInit",value:function(){var t=this;this.http.get("/assets/strategy-select.json").subscribe(function(n){return(0,p.mG)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(n),this.formData=n;case 1:case"end":return t.stop()}},t,this)}))})}},{key:"onFormSubmit",value:function(t){return(0,p.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),t.isNew=!0,n.next=4,this.router.navigateByUrl("bot-setup",{state:t});case 4:case"end":return n.stop()}},n,this)}))}}]),n}(),i.\u0275fac=function(t){return new(t||i)(m.Y36(s.Ye),m.Y36(f.F0),m.Y36(l.eN))},i.\u0275cmp=m.Xpm({type:i,selectors:[["app-bot-strategy"]],decls:8,vars:1,consts:[["slot","start"],[1,"ion-padding"],[3,"jsonFormData","formSubmission"]],template:function(t,n){1&t&&(m.TgZ(0,"ion-header"),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-title"),m._uU(3,"New Bot Setup"),m.qZA(),m.TgZ(4,"ion-buttons",0),m._UZ(5,"ion-back-button"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(6,"ion-content",1),m.TgZ(7,"app-json-form",2),m.NdJ("formSubmission",function(t){return n.onFormSubmit(t)}),m.qZA(),m.qZA()),2&t&&(m.xp6(7),m.Q6J("jsonFormData",n.formData))},directives:[c.Gu,c.sr,c.wd,c.Sm,c.oU,c.cs,c.W2,h.u],styles:[""]}),i)}],g=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=m.oAB({type:n}),n.\u0275inj=m.cJS({imports:[[f.Bz.forChild(b)],f.Bz]}),n}(),d=r(6737),v=((u=e(function n(){t(this,n)})).\u0275fac=function(t){return new(t||u)},u.\u0275mod=m.oAB({type:u}),u.\u0275inj=m.cJS({imports:[[s.ez,a.u5,a.UX,c.Pc,g,l.JF,d.G]]}),u)}}])}();