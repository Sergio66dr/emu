(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3Q5U":function(t,e,i){"use strict";i.d(e,"a",function(){return n});class n{constructor(){}ngOnInit(){}}},R4SG:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i("u+Mh"),i("OuSF");var n=i("d7Ac"),o=(i("nql9"),i("CFIy"),i("qzbh"),i("rbVQ"),i("AytR"));class r{constructor(t,e,i,o,r,a,l,s,m,d,c,u){this.router=t,this.auth=e,this.http=i,this.workflow=o,this.obser=r,this.formBuilder=a,this.rules=l,this.catalogo=s,this.deviceService=m,this.route=d,this.postMessagesService=c,this.sanitizer=u,this.prefix="data:image/png;base64,",this.disableButton=!1,this.stepId="",this.aliado=this.obser.lastValue(n.b),this.pais=this.obser.lastValue(n.t),this.modulo=this.obser.lastValue(n.q),this.canal=this.obser.lastValue(n.e),this.lenguaje=this.obser.lastValue(n.l),this.faceImage=this.obser.lastValue(n.j),this.formulario=this.formBuilder.group({}),this.payloadSubscription=this.obser.getData(n.u).subscribe(this.responsePayload()),this.router.data.subscribe(this.responseRouteData()),this.obser.getData(n.s).subscribe(t=>{this.disableButton=!!t})}responsePayload(){return t=>{t&&(this.payload=t,setTimeout(()=>this.obser.unSubscribe(this.payloadSubscription),150))}}responseRouteData(){return t=>{this.stepId=t.stepId}}onBack(t){this.workflow.workflow(this.stepId,t())}onCall(t){this.formulario.valid&&this.workflow.workflow(this.stepId,t())}onRedirect(t){this.route.navigate([this.workflow.getRoute(t)])}setRules(t,e={}){this.formulario=this.formBuilder.group(t,e)}params(t){const e={};return t.map(t=>(e[t]=this.obser.lastValue(t),t)),e.limit||(e.limit="-1"),e}get deviceInfo(){return this.deviceService.getDeviceInfo()}get isMobile(){return this.deviceService.isMobile()}get isTablet(){return this.deviceService.isTablet()}get isDesktopDevice(){const t=navigator.userAgent.toLowerCase();return!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))}get serverEnrollmentKey(){return this.obser.lastValue(n.z)}set serverEnrollmentKey(t){this.obser.sendData(t,n.z)}appReady(){return this.obser.sendData(!1,n.d),this.postMessagesService.appReady(),this.obser.getData(n.d)}setTitle(){this.postMessagesService.setTitle()}registerPath(t){return this.obser.sendData(!1,n.y),this.postMessagesService.registerPath(t),this.obser.getData(n.y)}captureFrontDocument(t){return this.obser.sendData(!1,n.h),this.postMessagesService.captureFrontDocument(this.serverEnrollmentKey,t),this.obser.getData(n.h)}captureBackDocument(){return this.obser.sendData(!1,n.f),this.postMessagesService.captureBackDocument(this.serverEnrollmentKey),this.obser.getData(n.f)}captureFace(){return this.obser.sendData(!1,n.g),this.postMessagesService.captureFace(this.serverEnrollmentKey),this.obser.getData(n.g)}appFinish(){return this.obser.sendData(!1,n.c),this.postMessagesService.appFinish(this.serverEnrollmentKey),this.obser.getData(n.c)}saveImages(t){const e=new FormData;t.clientId=this.auth.getClientId(),e.append("clientId",t.clientId),Object.keys(t.images).map(i=>e.append("img_"+i,t.images[i]));const i=this.auth.headerTokenInjectorMultipart();return this.http.post(o.a.soporteUploadImage,e,{headers:i})}hasProperty(t,e){return 0!==Object.keys(t).length&&(!!t.hasOwnProperty(e)||Object.keys(t).map(i=>"object"==typeof t[i]?this.hasProperty(t[i],e):i===e).reduce((t,e,i,n)=>t||e))}}},TzXv:function(t,e,i){"use strict";var n=i("8Y7J");i("3Q5U"),i.d(e,"a",function(){return o}),i.d(e,"b",function(){return r});var o=n.mb({encapsulation:0,styles:[[""]],data:{}});function r(t){return n.Ib(0,[(t()(),n.ob(0,0,null,null,3,"div",[["style","display: none;"]],null,null,null,null,null)),(t()(),n.ob(1,0,null,null,0,"img",[["alt",""],["src","./assets/cam/img/icon/flecha_izquierda_rojo.svg"]],null,null,null,null,null)),(t()(),n.ob(2,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),n.Gb(-1,null,["Atr\xe1s"]))],null,null)}},YEFQ:function(t,e,i){"use strict";i.r(e);var n=i("8Y7J");class o{}var r=i("pMnS");class a{constructor(){this.selectOption=new n.m}ngOnInit(){}onSelect(){this.disableIf||this.selectOption.emit(this.id)}get getRedTitle(){return this.title?this.title.split(" ")[0]:""}get getBlackTitle(){return this.title?this.title.replace(this.getRedTitle||"","").trim():""}}var l=n.mb({encapsulation:0,styles:[[""]],data:{}});function s(t){return n.Ib(0,[(t()(),n.ob(0,0,null,null,4,"div",[["class","card__header"]],null,null,null,null,null)),(t()(),n.ob(1,0,null,null,3,"h4",[],null,null,null,null,null)),(t()(),n.ob(2,0,null,null,1,"strong",[],null,null,null,null,null)),(t()(),n.Gb(3,null,["",""])),(t()(),n.Gb(4,null,[" "," "])),(t()(),n.ob(5,0,null,null,1,"div",[["class","card__body"]],null,null,null,null,null)),n.xb(null,0),(t()(),n.ob(7,0,null,null,3,"div",[["class","card__footer"],["style","cursor: pointer;"]],null,[[null,"click"]],function(t,e,i){var n=!0;return"click"===e&&(n=!1!==t.component.onSelect()&&n),n},null,null)),(t()(),n.ob(8,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),n.Gb(-1,null,["Quiero esta opci\xf3n"])),(t()(),n.ob(10,0,null,null,0,"img",[["alt",""],["src","./assets/cam/img/icon/flecha_derecha_dos.svg"]],null,null,null,null,null))],null,function(t,e){var i=e.component;t(e,3,0,i.getRedTitle),t(e,4,0,i.getBlackTitle)})}var m=i("SVse"),d=i("TzXv"),c=i("3Q5U"),u=i("R4SG"),b=i("d7Ac");class p extends u.a{ngOnInit(){this.tieneCuentaDigital=!!this.hasProperty(this.payload,"tieneCuentaDigital")&&this.payload.tieneCuentaDigital,this.catalogo.data("TPC001",this.params([b.t,b.q,b.l])).subscribe(t=>{this.tipoCuenta=t||[],this.tipoCuenta.length>0&&this.tieneCuentaDigital&&"PA"===this.pais&&(this.tipoCuenta=this.tipoCuenta.filter(t=>"0"!==t.id))})}ngOnDestroy(){}getDataToPayload(t){return this.disableButton=!0,()=>({codSubProducto:t.id})}getDataToBackButton(t){return()=>({})}}var f=i("iInd"),g=i("rbVQ"),h=i("IheW"),x=i("u+Mh"),w=i("OuSF"),y=i("s7LF"),_=i("nql9"),C=i("CFIy"),k=i("ARm4"),z=i("qzbh"),v=i("cUpR"),T=n.mb({encapsulation:3,styles:[[""],['html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,optgroup,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;border:0;margin:1em 0;border-bottom:2px solid #fff}pre,textarea{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{font-family:MyriadPro!important}body{font-size:1em;line-height:1.3125em;font-weight:100;font-style:normal;margin:auto;padding:0;position:relative;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.isHidden{display:none}@font-face{font-family:MyriadPro;font-style:italic;font-weight:100;src:url(/front/assets/cam/fonts/MyriadPro-It.eot?) format("eot"),url(/front/assets/cam/fonts/MyriadPro-It.woff) format("woff"),url(/front/assets/cam/fonts/MyriadPro-It.ttf) format("truetype"),url(/front/assets/cam/fonts/MyriadPro-It.svg#MyriadPro) format("svg")}@font-face{font-family:MyriadPro;font-style:normal;font-weight:100;src:url(/front/assets/cam/fonts/MyriadPro-Regular.eot?) format("eot"),url(/front/assets/cam/fonts/MyriadPro-Regular.woff) format("woff"),url(/front/assets/cam/fonts/MyriadPro-Regular.ttf) format("truetype"),url(/front/assets/cam/fonts/MyriadPro-Regular.svg#MyriadPro) format("svg")}@font-face{font-family:MyriadPro;font-style:normal;font-weight:700;src:url(/front/assets/cam/fonts/MyriadPro-Bold.eot?) format("eot"),url(/front/assets/cam/fonts/MyriadPro-Bold.woff) format("woff"),url(/front/assets/cam/fonts/MyriadPro-Bold.ttf) format("truetype"),url(/front/assets/cam/fonts/MyriadPro-Bold.svg#MyriadPro) format("svg")}.h1,h1{color:#323c47;font-family:MyriadPro;font-size:3.5625em;font-weight:900;line-height:1.33333333em;margin-top:.36842105em;margin-bottom:.73684211em;font-style:normal}.h2,h2{color:#323c47;font-family:MyriadPro;font-size:2.25em;font-weight:900;line-height:1.16666667em;margin-top:.19444444em;margin-bottom:.5em;font-style:normal}.h3,h3{color:#323c47;font-family:MyriadPro;font-size:1.625em;font-weight:300;line-height:.80769231em;margin-top:0;margin-bottom:.80769231em;font-style:normal}.h4,h4{color:#323c47;font-family:MyriadPro;font-size:1.125em;font-weight:600;line-height:1.16666667em;margin-top:0;margin-bottom:1em;font-style:normal}.h5,h5{color:#323c47;font-family:MyriadPro;font-size:1em;font-weight:300;line-height:1.3125em;margin-top:0;margin-bottom:1.3125em;font-style:normal}.h6,h6{color:#323c47;font-family:MyriadPro;font-size:.75em;font-weight:300;line-height:1.33333333em;margin-top:0;margin-bottom:.83333333em;font-style:normal}p{color:#2f3337;font-family:MyriadPro;font-size:1em;font-weight:100;line-height:1.3125em;margin-top:0;margin-bottom:1.3125em;font-style:normal}ul li{color:#323c47;font-family:MyriadPro;font-size:.9375em;font-weight:200;line-height:1.06666667em;margin-top:.46666667em;margin-bottom:0;font-style:normal}em{color:#323c47;font-family:MyriadPro;font-size:.6875em;font-weight:300;line-height:1.36363636em;margin-top:.90909091em;margin-bottom:0;font-style:normal}.text__color--light{color:#fff!important}.text__color--dark{color:#22262a!important}.text__color{color:#323c47}.text__color--primary{color:#ee3124}.text__align--left{display:block;text-align:left}.text__align--right{display:block;text-align:right}.text__align--center{display:block;text-align:center}.text__weight--regular{font-weight:400!important}.text__margin--bottom0{margin-bottom:0}.formContainer{width:100%;display:block;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.formContainer__columnContainer{margin:2.5em 0;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:space-around;-o-justify-content:space-around;-ms-justify-content:space-around;justify-content:space-around;-moz-align-items:flex-start;-o-align-items:flex-start;-ms-align-items:flex-start;-webkit-box-align:start;align-items:flex-start;-moz-flex-direction:column;-o-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.formContainer__columnContainer--noMargin{margin:0!important}.formContainer__columnContainer .centerText{text-align:center}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-o-flex-wrap:wrap;flex-wrap:wrap}.formContainer__columnContainer .centerText{width:80%}}@media (min-width:992px){.formContainer{padding:2.1875em 2.5em;border:1px solid #bdbdbd;background-image:url(/front/assets/cam/img/layout/curve_bg.png);background-position:right bottom;background-repeat:no-repeat;background-color:rgba(189,189,189,.04);border-radius:2.625em;-o-box-shadow:0 0 .5em rgba(47,51,55,.17);-ms-box-shadow:0 0 .5em rgba(47,51,55,.17);box-shadow:0 0 .5em rgba(47,51,55,.17)}.formContainer__columnContainer{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-o-flex-wrap:wrap;flex-wrap:wrap}.formContainer__columnContainer .centerText{width:80%}}.formContainer__columnContainer .centerText--small{width:70%;margin:.5rem auto}@media (min-width:576px) and (max-width:768px){.formContainer__columnContainer .centerText--small{width:60%}}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .centerText--small{width:100%}}@media (min-width:992px){.formContainer__columnContainer .centerText--small{width:80%}}.formContainer__columnContainer .centerText--info{width:100%;margin:.5rem auto}@media (min-width:576px) and (max-width:768px){.formContainer__columnContainer .centerText--info{width:60%}}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .centerText--info{width:70%}}@media (min-width:992px){.formContainer__columnContainer .centerText--info{width:45%}}.formContainer__columnContainer .centerText--colorPrimary{color:#ee3124}.formContainer__columnContainer .formColumn{width:100%;margin:0;padding:0}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .formColumn{width:45%}}@media (min-width:992px){.formContainer__columnContainer .formColumn{width:35%}}.formContainer__columnContainer .formColumn--center{margin:auto}.formContainer__columnContainer .formColumn--small{width:60%;text-align:center;margin:auto}@media (min-width:992px){.formContainer__columnContainer .formColumn--small{width:20%;margin:2.5em auto}}.formContainer__columnContainer .formColumn__content{width:70%;margin:auto;padding:.625em .625em 0;border:2px solid #ee3124;border-radius:5px}.formContainer__columnContainer .formColumn__content--large{width:90%;text-align:center;margin-bottom:2rem}.formContainer__columnContainer .formColumn__contentCenter{text-align:center}.formContainer__columnContainer .formColumn__contentCenter a{cursor:pointer;color:#ee3124!important;display:inline-block;margin:0 .3125em;font-weight:700;pointer-events:auto!important}.formContainer__columnContainer .formColumn__contentCenter img{margin:30% auto 5%}.formContainer__columnContainer .formColumnPrincipal{width:100%;margin:0;padding-top:1em}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .formColumnPrincipal{width:95%}}@media (min-width:992px){.formContainer__columnContainer .formColumnPrincipal{width:85%}}.formContainer__columnContainer .formColumnPrincipal p{text-align:justify}.formContainer__columnContainer .formColumnMiddle{width:100%;margin:0;padding-top:1em;text-align:center}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .formColumnMiddle{width:70%}}@media (min-width:992px){.formContainer__columnContainer .formColumnMiddle{width:60%}}.formContainer__columnContainer .indications{display:-webkit-box;display:flex;width:100%}.formContainer__columnContainer .indications ul{width:100%;margin:auto}.formContainer__buttonContainer{width:100%;margin:2.5em auto;display:block}.formContainer__buttonContainer--dualButton{-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:space-between;-o-justify-content:space-between;-ms-justify-content:space-between;-webkit-box-pack:justify;justify-content:space-between;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;-webkit-box-align:center;align-items:center}.formContainer__buttonContainer--dualButton app-button-continue{width:100%;margin:0 .3125em;padding:0;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:center;-o-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;justify-content:center;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;-webkit-box-align:center;align-items:center;-o-box-shadow:none;-ms-box-shadow:none;box-shadow:none;-webkit-outline:none;-moz-outline:none;-o-outline:none;-ms-outline:none;outline:0;-webkit-transition:.3s;transition:ease all .3s}.formContainer__buttonContainer--dualButton app-button-continue button{width:100%}.formContainer__buttonContainer--dualButton button{margin:0 .3125em;width:100%}@media (min-width:768px) and (max-width:992px){.formContainer__columnContainer .indications ul{width:60%}.formContainer__buttonContainer{padding:0 25%}}@media (min-width:1200px){.formContainer__buttonContainer{padding:0 30%}}.cardsContainer{width:100%;display:block;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.cardsContainer__row{margin:2.5em 0;width:100%;min-height:100px;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:center;-o-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;justify-content:center;-moz-align-items:flex-start;-o-align-items:flex-start;-ms-align-items:flex-start;-webkit-box-align:start;align-items:flex-start;-moz-flex-direction:column;-o-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}@media (min-width:768px) and (max-width:992px){.cardsContainer__row{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-o-flex-wrap:wrap;flex-wrap:wrap}}@media (min-width:992px){.formContainer__columnContainer .indications ul{width:40%}.formContainer__buttonContainer{padding:0 30%}.cardsContainer{padding:2.1875em 2.5em;border:1px solid #bdbdbd;background-image:url(/front/assets/cam/img/layout/curve_bg.png);background-position:right bottom;background-repeat:no-repeat;background-color:rgba(189,189,189,.04);border-radius:2.625em;-o-box-shadow:0 0 .5em rgba(47,51,55,.17);-ms-box-shadow:0 0 .5em rgba(47,51,55,.17);box-shadow:0 0 .5em rgba(47,51,55,.17)}.cardsContainer__row{-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-o-flex-wrap:wrap;flex-wrap:wrap}}.cardsContainer__row .card{padding:1.5625em 1.875em;border-radius:1.25em;background:#e4e4e4;margin:1rem 0;width:100%;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}@media (min-width:768px) and (max-width:992px){.cardsContainer__row .card{font-size:1.15em;width:45%;margin:1rem}.cardsContainer__row .card__body{min-height:13rem}}@media (min-width:992px){.cardsContainer__row .card{font-size:1.15em;width:30%;margin:1rem}}.cardsContainer__row .card__header{border-bottom:3px solid #ee3124;width:100%}.cardsContainer__row .card__header h4{font-weight:700}.cardsContainer__row .card__header h4 strong{color:#ee3124}.cardsContainer__row .card__body{margin:.75em 0}.cardsContainer__row .card__body ul{padding:0 .9375em;list-style:none}.cardsContainer__row .card__body ul li:before{content:"\\2022";color:#ee3124;font-weight:700;display:inline-block;width:1em;margin-left:-1em}.cardsContainer__row .card__footer{margin-top:1.25em;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:flex-end;-o-justify-content:flex-end;-ms-justify-content:flex-end;-webkit-box-pack:end;justify-content:flex-end;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;-webkit-box-align:center;align-items:center}.cardsContainer__row .card__footer span{color:#ee3124;margin-right:.625em}.cardsContainer__row .card__footer img{width:20px}.cardsContainer__buttonContainer{width:100%;margin:2.5em 0;display:block}.container{width:100%;background-color:#fff;position:relative;padding:2em 1.25em;min-height:100vh;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:flex-start;-o-justify-content:flex-start;-ms-justify-content:flex-start;-webkit-box-pack:start;justify-content:flex-start;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;-webkit-box-align:center;align-items:center;-moz-flex-direction:column;-o-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}@media (min-width:992px){.cardsContainer__row .card__body{min-height:14rem}.container--menu{width:50%;margin:0 auto}}@media (min-width:1200px){.container--menu{width:50%;margin:0 auto}}.backButton{width:100%;height:2.5em;text-align:center;margin-bottom:.9375em;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:flex-start;-o-justify-content:flex-start;-ms-justify-content:flex-start;-webkit-box-pack:start;justify-content:flex-start;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;-webkit-box-align:center;align-items:center;-moz-flex-direction:row;-o-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.backButton img{height:20px;width:20px}.backButton span{font-weight:700;font-family:MyriadPro!important;font-size:1.125em;color:#22262a;margin:0 .4375em;padding:0}.initialTitle{padding:0 10%;text-align:center}.initialTitle--top{margin-top:2rem}.initialTitle--center{display:block;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}@media (min-width:992px){.backButton{margin-bottom:2em}.initialTitle--center{display:-webkit-box;display:flex}}.initialTitle--center h3{margin:0}.initialTitle--isHidden{display:none}.initialTitle--isHiddenSmall{display:block}@media (min-width:992px){.initialTitle--isHidden{display:block}.initialTitle--isHiddenSmall{display:none}}@media (min-width:1200px){.initialTitle--isHiddenSmall{display:none}}.initialTitle--primary{color:#ee3124}.initialTitle__textLhc{font-weight:400!important;font-size:1.5em}.initialTitle__textLhc b{font-weight:400!important;color:#ee3124}.initialTitle h2{font-weight:700;margin-bottom:.125em}.initialTitle h3{font-weight:700}.initialTitle p{padding:0}.initialTitle__stepsCounter{width:100%;margin:0 0 .9375em;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:center;-o-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;justify-content:center;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;-webkit-box-align:center;align-items:center}.initialTitle__stepsCounter .step{background-color:#bdbdbd;width:1.75em;height:1.75em;color:#fff;margin-right:2.5em;position:relative;border-radius:50%;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;-webkit-display:flex;-moz-display:flex;-o-display:flex;-ms-display:flex;display:-webkit-box;display:flex;-moz-justify-content:center;-o-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;justify-content:center;-moz-align-items:center;-o-align-items:center;-ms-align-items:center;-webkit-box-align:center;align-items:center}.initialTitle__stepsCounter .step:before{content:\'\';top:0;bottom:0;right:1.75em;width:2.5em;height:2px;background-color:#bdbdbd;margin:auto 0;position:absolute;z-index:0}.initialTitle__stepsCounter .step:first-child:before{display:none}.initialTitle__stepsCounter .step:last-child{margin-right:0}.initialTitle__stepsCounter .step--active,.initialTitle__stepsCounter .step--active:before{background-color:#ee3124}@media (min-width:768px) and (max-width:992px){.initialTitle img{width:2.8125em}.initialTitle__stepsCounter .step{font-size:30px}}.initialTitle__stepsCounter .bar{border:3px solid #bdbdbd;width:25%;margin:.5rem}@media (min-width:992px){.initialTitle__textLhc{font-size:1.875em}.initialTitle__stepsCounter .bar{width:10%}}.initialTitle__stepsCounter .bar--active{border:3px solid #ee3124}']],data:{}});function j(t){return n.Ib(0,[(t()(),n.ob(0,0,null,null,1,"li",[],null,null,null,null,null)),(t()(),n.Gb(1,null,["",""]))],null,function(t,e){t(e,1,0,e.context.$implicit.descripcion)})}function M(t){return n.Ib(0,[(t()(),n.ob(0,0,null,null,4,"app-card-account-type",[["class","card"]],null,[[null,"selectOption"]],function(t,e,i){var n=!0,o=t.component;return"selectOption"===e&&(n=!1!==o.onCall(o.getDataToPayload(i))&&n),n},s,l)),n.nb(1,114688,null,0,a,[],{title:[0,"title"],id:[1,"id"],disableIf:[2,"disableIf"]},{selectOption:"selectOption"}),(t()(),n.ob(2,0,null,0,2,"ul",[],null,null,null,null,null)),(t()(),n.fb(16777216,null,null,1,null,j)),n.nb(4,278528,null,0,m.m,[n.M,n.J,n.q],{ngForOf:[0,"ngForOf"]},null)],function(t,e){var i=e.component;t(e,1,0,e.context.$implicit.titulo,e.context.$implicit,i.disableButton||i.formulario.invalid),t(e,4,0,e.context.$implicit.caracteristicas)},null)}function P(t){return n.Ib(0,[(t()(),n.ob(0,0,null,null,11,"section",[["class","container"]],null,null,null,null,null)),(t()(),n.ob(1,0,null,null,1,"app-button-back",[["class","backButton"]],null,null,null,d.b,d.a)),n.nb(2,114688,null,0,c.a,[],null,null),(t()(),n.ob(3,0,null,null,8,"div",[["class","cardsContainer"]],null,null,null,null,null)),(t()(),n.ob(4,0,null,null,4,"div",[["class","initialTitle"]],null,null,null,null,null)),(t()(),n.ob(5,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),n.Gb(-1,null,["\xbfQu\xe9 tipo de cuenta desea abrir?"])),(t()(),n.ob(7,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),n.Gb(-1,null,["Seleccione la opci\xf3n que desea:"])),(t()(),n.ob(9,0,null,null,2,"div",[["class","cardsContainer__row"]],null,null,null,null,null)),(t()(),n.fb(16777216,null,null,1,null,M)),n.nb(11,278528,null,0,m.m,[n.M,n.J,n.q],{ngForOf:[0,"ngForOf"]},null)],function(t,e){var i=e.component;t(e,2,0),t(e,11,0,i.tipoCuenta||n.bb)},null)}function I(t){return n.Ib(0,[(t()(),n.ob(0,0,null,null,1,"app-tpc001",[],null,null,null,P,T)),n.nb(1,245760,null,0,p,[f.a,g.a,h.c,x.a,w.a,y.f,_.a,C.a,k.b,f.k,z.a,v.c],null,null)],function(t,e){t(e,1,0)},null)}var D=n.kb("app-tpc001",p,I,{},{},[]);class S{}var B=i("wI5O");const O={stepId:"CUE001"};class R{}i.d(e,"TpcModuleNgFactory",function(){return F});var F=n.lb(o,[],function(t){return n.vb([n.wb(512,n.j,n.Z,[[8,[r.a,D]],[3,n.j],n.v]),n.wb(4608,m.p,m.o,[n.s,[2,m.x]]),n.wb(1073742336,m.b,m.b,[]),n.wb(1073742336,S,S,[]),n.wb(1073742336,B.a,B.a,[]),n.wb(1073742336,f.l,f.l,[[2,f.r],[2,f.k]]),n.wb(1073742336,R,R,[]),n.wb(1073742336,o,o,[]),n.wb(1024,f.i,function(){return[[{path:"tpc001",component:p,data:O}]]},[])])})},wI5O:function(t,e,i){"use strict";i.d(e,"a",function(){return n});class n{}}}]);