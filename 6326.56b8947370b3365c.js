"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6326],{6326:(E,d,a)=>{a.r(d),a.d(d,{DashboardPageModule:()=>S});var h=a(9808),u=a(2382),r=a(877),c=a(9249),s=a(655),e=a(1223),m=a(8343),f=a(520),p=a(3),v=a(6955),b=a(99);function P(t,i){if(1&t&&(e.TgZ(0,"option",10),e._uU(1),e.qZA()),2&t){const o=i.$implicit,n=e.oxw();e.Q6J("selected",o===n.global.selectedExchange)("value",o),e.xp6(1),e.hij(" ",o," ")}}function x(t,i){if(1&t&&(e.TgZ(0,"ion-item")(1,"ion-label",11),e._uU(2),e.TgZ(3,"p"),e._uU(4),e.qZA()(),e.TgZ(5,"ion-label",12)(6,"h6"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Open -> "),e.qZA()(),e.TgZ(10,"ion-label",13)(11,"h6"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"p"),e._uU(15),e.ALo(16,"number"),e.qZA()()()),2&t){const o=i.$implicit;e.xp6(2),e.Oqu(o.EX),e.xp6(2),e.hij("[",o.SNAME,"]"),e.xp6(3),e.hij("",o.PAIR," "),e.xp6(5),e.Oqu(e.xi3(13,5,o.PL,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(16,8,o.INPOS_AMT,"1.2-2"))}}function Z(t,i){if(1&t&&(e.TgZ(0,"ion-item")(1,"ion-label",11),e._uU(2),e.qZA(),e.TgZ(3,"ion-label",13)(4,"h6"),e._uU(5),e.ALo(6,"number"),e.qZA()()()),2&t){const o=i.$implicit;e.xp6(2),e.Oqu(o.EX),e.xp6(3),e.hij("",e.xi3(6,2,o.USDT,"1.2-2")," USDT")}}const A=[{path:"",component:(()=>{class t{constructor(o,n,l,g,y,D){this.global=o,this.http=n,this.oAPIService=l,this.router=g,this.oStorage=y,this.auth=D,this.oSummary=[],this.oCurrentBalance=[],this.oBotPL=[],this.dProfit=0}ionViewWillEnter(){0==this.global.bExchangesLoaded&&this.oAPIService.send2ServerP("exchanges",!1).then(o=>{this.global.userExchanges=["Summary"];for(var n=0;n<o.result.length;n++)this.global.userExchanges.push(o.result[n].EX);this.global.userExchanges.length>0&&(this.global.selectedExchange=this.global.userExchanges[0]),this.global.bExchangesLoaded=!0}),this.oAPIService.send2ServerP("summary",!1).then(o=>(0,s.mG)(this,void 0,void 0,function*(){if(this.oSummary=o.result,this.dProfit=0,void 0!==this.oSummary)for(var n=0;n<this.oSummary.length;n++)this.dProfit+=+this.oSummary[n].PL})),this.oAPIService.send2ServerP("current_balance",!1).then(o=>(0,s.mG)(this,void 0,void 0,function*(){this.oCurrentBalance=o.result}))}onLogout(){return(0,s.mG)(this,void 0,void 0,function*(){this.auth.logout(),yield this.router.navigateByUrl("")})}onCreateBot(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.router.navigateByUrl("bot-strategy")})}onChangeOfExchange(o){var n;return(0,s.mG)(this,void 0,void 0,function*(){this.global.selectedPair="",this.global.selectedExchange=null===(n=o.target)||void 0===n?void 0:n.value,yield this.router.navigateByUrl("bot-list")})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.O),e.Y36(f.eN),e.Y36(p.D),e.Y36(c.F0),e.Y36(v.V),e.Y36(b.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:20,vars:7,consts:[["color","dark"],[1,"ion-text-capitalize"],["slot","end"],["id","DropdownOptions",1,"form-control",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],["name","add",3,"click"],["name","exit",3,"click"],[2,"width","100%","border-bottom","1px solid black","text-align","left"],[2,"font-size","10px","background-color","#F3F5F6","padding","0 5px"],[4,"ngFor","ngForOf"],[3,"selected","value"],["item-start","",1,"ion-text-left"],[1,"ion-text-center"],[1,"ion-text-right"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e._uU(3,"Botv1.2"),e.qZA(),e.TgZ(4,"ion-buttons",2)(5,"select",3),e.NdJ("change",function(g){return n.onChangeOfExchange(g)}),e.YNc(6,P,2,3,"option",4),e.qZA(),e.TgZ(7,"ion-icon",5),e.NdJ("click",function(){return n.onCreateBot()}),e.qZA(),e.TgZ(8,"ion-icon",6),e.NdJ("click",function(){return n.onLogout()}),e.qZA()()()(),e.TgZ(9,"ion-content",0)(10,"ion-list")(11,"div",7)(12,"span",8),e._uU(13),e.ALo(14,"number"),e.qZA()(),e.YNc(15,x,17,11,"ion-item",9),e.qZA(),e.TgZ(16,"div",7)(17,"span",8),e._uU(18," Balance "),e.qZA()(),e.YNc(19,Z,7,5,"ion-item",9),e.qZA()),2&o&&(e.xp6(6),e.Q6J("ngForOf",n.global.userExchanges),e.xp6(7),e.hij(" Profit ",e.xi3(14,4,n.dProfit,"1.2-2")," "),e.xp6(2),e.Q6J("ngForOf",n.oSummary),e.xp6(4),e.Q6J("ngForOf",n.oCurrentBalance))},dependencies:[h.sg,u.YN,u.Kr,r.Sm,r.W2,r.Gu,r.gu,r.Ie,r.Q$,r.q_,r.sr,r.wd,h.JJ]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(A),c.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,u.u5,r.Pc,T]}),t})()}}]);