(function(){"use strict";var e={520:function(e,t,a){var i=a(963),n=a(252);const s={id:"main"};function o(e,t,a,i,o,l){const c=(0,n.up)("CvPage");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(c)])}const l={class:"cvPage"},c=(0,n._)("div",{class:"cvPage__content"},null,-1);function r(e,t){const a=(0,n.up)("CvHeader"),i=(0,n.up)("CvAbout"),s=(0,n.up)("CvSkills"),o=(0,n.up)("CvSlider"),r=(0,n.up)("CvContacts");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(a),(0,n.Wm)(i),(0,n.Wm)(s),(0,n.Wm)(o),(0,n.Wm)(r),c])}const u={class:"cvHeader"},d={class:"cvHeader__wrapper"},p={class:"cvHeader__hello"},A={class:"cvHeader__title"},m={class:"cvHeader__btns"},v=(0,n._)("a",{class:"effect effect-4",href:"mailto:har.amirkhanyan@gmail.com",target:"_blank"},"SEND EMAIL",-1);function g(e,t,a,i,s,o){const l=(0,n.up)("CvHeaderNav"),c=(0,n.up)("CvTerminal");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(l),(0,n._)("div",d,[(0,n._)("div",p,[(0,n.Wm)(c,{class:"cvHeader__text",phrases:i.hello,repeatCount:1},null,8,["phrases"])]),(0,n._)("div",A,[(0,n.Wm)(c,{phrases:i.title},null,8,["phrases"])]),(0,n._)("div",m,[(0,n._)("button",{class:"cvHeader__cv",onClick:t[0]||(t[0]=(...e)=>i.openPdf&&i.openPdf(...e))},"OPEN CV"),v])])])}var h=a(262),b=a(577);const f={class:"cvHeaderNav"},w={class:"cvHeaderNav__container"},B={class:"cvHeaderNav__wrapper"},I={class:"cvHeaderNav__terminal"},k={class:"cvHeaderNav__name"},y={class:"cvHeaderNav__menu"},M=["onClick"],x=["src"],C=(0,n._)("span",{class:"cvHeaderNav__line"},[(0,n._)("span",{class:"cvHeaderNav__scrollLine"})],-1),H={class:"cvHeaderNav__menuSidebar"},N=["onClick"];function G(e,t,a,s,o,l){const c=(0,n.up)("CvSidebar");return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("div",w,[(0,n._)("div",B,[(0,n._)("div",I,[(0,n._)("h1",k,(0,b.zw)(s.name),1)]),(0,n._)("ul",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.nav,(t=>((0,n.wg)(),(0,n.iD)("li",{class:"cvHeaderNav__item",key:t.id,onClick:a=>e.$scrollTo("."+t.id)},(0,b.zw)(t.text),9,M)))),128))]),(0,n._)("div",{class:"cvHeaderNav__imgWrapper",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>s.openSidebar&&s.openSidebar(...e)),["prevent"]))},[(0,n._)("img",{class:"cvHeaderNav__img",src:s.burgerLogo,alt:"burger",loading:"lazy"},null,8,x)])])]),C,(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("ul",H,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.nav,(t=>((0,n.wg)(),(0,n.iD)("li",{class:"cvHeaderNav__itemSidebar",key:t.id,onClick:a=>e.$scrollTo("."+t.id)},(0,b.zw)(t.text),9,N)))),128))])])),_:1})])}var T=a.p+"img/burgerLogo.dbbcc251.svg";const F={key:0,class:"sidebar"},D={class:"sidebar__content"};function S(e,t,a,i,s,o){return i.sidebar?((0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("span",{class:"sidebar__close",onClick:t[0]||(t[0]=(...e)=>i.closeSidebar&&i.closeSidebar(...e))},"×"),(0,n._)("div",D,[(0,n.WI)(e.$slots,"default")])])):(0,n.kq)("",!0)}var V=a(907),Q={setup(){const e=(0,V.oR)(),t=(0,n.Fl)((()=>e.state.sidebar)),a=()=>e.commit("closeSidebar"),i=e=>{const i=document.querySelector(".sidebar"),n=document.querySelector(".cvHeaderNav__imgWrapper");t.value&&i&&!i.contains(e.target)&&n&&!n.contains(e.target)&&a()};return(0,n.bv)((()=>{window.addEventListener("click",i)})),(0,n.Ah)((()=>{window.removeEventListener("click",i)})),{sidebar:t,closeSidebar:a}}},L=a(744);const E=(0,L.Z)(Q,[["render",S]]);var Y=E,z={name:"CvHeader",components:{CvSidebar:Y},setup(){const e=(0,h.iH)("Harutyun"),t=(0,h.iH)([{id:"cvHeader",text:"Home"},{id:"about",text:"About me"},{id:"skills",text:"Skills"},{id:"cvSlider",text:"Portfolio"},{id:"cvContacts",text:"Contacts"}]),a=()=>{const e=document.querySelector(".cvHeaderNav__scrollLine"),t=window.innerHeight,a=document.documentElement.scrollHeight,i=(a-t)/100;addEventListener("scroll",(()=>{const t=window.scrollY,a=t/i;e.style.width=a+"%"}))};(0,n.bv)((()=>{window.addEventListener("scroll",a)}));const i=(0,V.oR)();return{nav:t,name:e,line:a,burgerLogo:T,openSidebar:()=>i.commit("openSidebar")}}};const U=(0,L.Z)(z,[["render",G]]);var P=U;const X={key:0,class:"terminal__cursor"};function W(e,t){return(0,n.wg)(),(0,n.iD)("div",{class:"terminal",style:(0,b.j5)(e.myStyle)},[(0,n._)("div",{class:"terminal__letter",ref:"terminal",style:(0,b.j5)(e.letterStyle)},null,4),e.showCursor?((0,n.wg)(),(0,n.iD)("span",X)):(0,n.kq)("",!0)],4)}var j={props:{phrases:{type:[String,Array],required:!0},repeatCount:{type:Number,default:1/0},myStyle:{type:Object,default:()=>({})},letterStyle:{type:Object,default:()=>({})}},setup(e){const t=(0,h.iH)(null);let a=0,i=0,s=!1,o=100,l=!0,c=[],r=0,u=null;function d(){const n=c[a];s?(t.value.textContent=n.substring(0,i-1),i--,0===i&&(s=!1,a===c.length-1?a=0:a++)):(t.value.textContent=n.substring(0,i+1),i++,o=250,i===n.length?(r++,s=!0,o=100,l=!1):l=!l),u=setTimeout(d,o),setTimeout((()=>{l=!l}),o),r===e.repeatCount&&clearTimeout(u)}c=Array.isArray(e.phrases)?e.phrases:[e.phrases],(0,n.bv)((()=>{d()})),(0,n.Ah)((()=>{clearTimeout(d)}));const p=(0,h.iH)(c[0]);return{terminal:t,currentLine:p,showCursor:l}}};const O=(0,L.Z)(j,[["render",W]]);var K=O,q=a.p+"assets/cv.3d83baa2.pdf",R={name:"CvHeader",components:{CvHeaderNav:P,CvTerminal:K},setup(){const e=(0,h.iH)("Hello! My name is Harut and I am"),t=(0,h.iH)(["FRONTEND DEVELOPER","VUE.JS DEVELOPER"]),a=()=>{const e=window.open();e.document.write(`<iframe src="${q}" frameborder="0" style="width:100%; height:100vh;"></iframe>`)};return{title:t,hello:e,openPdf:a}}};const Z=(0,L.Z)(R,[["render",g]]);var J=Z;const _={class:"cvNavbar"},$={class:"cvNavbar__imgWrapper"},ee=["src"],te={class:"cvNavbar__title"},ae={class:"cvNavbar__text"},ie={class:"cvNavbar__title"},ne={class:"cvNavbar__text"},se={class:"cvNavbar__title"},oe={class:"cvNavbar__contacts"},le=["title","href"],ce=["src","alt"];function re(e,t,a,i,s,o){return(0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",$,[(0,n._)("img",{class:"cvNavbar__img",src:e.logo,loading:"lazy",alt:"logo"},null,8,ee)]),(0,n._)("h2",te,(0,b.zw)(i.aboutTitle),1),(0,n._)("p",ae,(0,b.zw)(i.aboutText),1),(0,n._)("h2",ie,(0,b.zw)(i.expTitle),1),(0,n._)("p",ne,(0,b.zw)(i.expText),1),(0,n._)("h2",se,(0,b.zw)(i.contactsTitle),1),(0,n._)("div",oe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.contacts,(e=>((0,n.wg)(),(0,n.iD)("a",{class:"cvNavbar__contactsWrapper",key:e.id,title:e.title,href:e.href,target:"_blank"},[(0,n._)("img",{class:"cvNavbar__img",src:e.img,loading:"lazy",alt:e.alt},null,8,ce)],8,le)))),128))])])}var ue=a.p+"img/phone.e7803154.png",de=a.p+"img/mail.36213172.png",pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB+UExURQAAACqq7Smq7Smq7Cmp7Cmp6yip6iio6Sio6Cin6Cen5////6rb9Cem5v7+/8Lm9yem5Syn5Sal5Sal5H7J7tXt+Sak4/39/qTY8iWk4iWj4SWj4CWi4M3p9ySi3zCm4PL6/SSh3iSh3SOg3SOg3COf2yKf2iKe2iKe2QAAALXllwsAAAAqdFJOU///////////////////////////////////////////////////////ADKo8FwAAAAJcEhZcwAAIdUAACHVAQSctJ0AAAGJSURBVDhPdZPJbsQgEEQtH8c5JqfWSDmB/P8/mNrAOHEKY5quRwOzbOdd+1DmQzcuyFCy0sLFXRUHmlyc34o7uaT/Kn64JJ9kwJwS9dgCijOj5FMfnKd6nsfBce62hGwZzK0Zt/lkCpDcTPzTWHBbd7214zg+xmQXN2ZLAwS99+5pgWOAqV4ZTB1HsM56Nl3TQSCIWFZvCBByrswg9FbSBuppjUG5UH1qmPlerDcm8qCqLwdzH9TDoaoWiFUSHF0mtPdNla4rgppLPuzB7b7HUrDXVbm/hKniVnDCVoduH0urZjf1tAYR+nrQFhMN38c4rTPXSXlU1JP4vel0QLiU/R0M9cQwCU5lWJMvd2N74/qXXHAsWD6vIprf5Likvfj4dwpe+3FvdQ7gsE9DPfTu/wfzMHnIXIYJpqo1Xjr/I+5Hb0BoV8B8uNPLCfYmKVTnQESc74zTNAdoenFFcdfBna4jJ8IazY0NjnfJVuuDHn9w84y/FPfiHsk40ML9IZOVbhwU5A6d5/kDQFKSsXatZk8AAAAASUVORK5CYII=",Ae="data:image/png;base64,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",me="data:image/png;base64,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",ve={name:"CvNavbar",setup(){const e=(0,h.iH)([{id:1,img:ue,href:"tel:+37477166744",title:"+374 77 166 744",alt:"phone"},{id:2,img:de,href:"mailto:har.amirkhanyan@gmail.com",title:"har.amirkhanyan@gmail.com",alt:"mail"},{id:3,img:pe,href:"https://t.me/harutyun_a",title:"Send message",alt:"telegram"},{id:4,img:Ae,href:"https://www.linkedin.com/in/harut-amirkhanyan/",title:"Linkedin page",alt:"linkedin"},{id:5,img:me,href:"https://github.com/harutamirkhanyan",title:"GitHub page",alt:"github"}]),t=(0,h.iH)(" About Me "),a=(0,h.iH)(" Front-End Developer with 1+ year  of experience . Skilled in  creating Websites, implementing new functionalities to add  widgets and templates via Vue.js. Team player with an eye for details. "),i=(0,h.iH)("Expectations"),n=(0,h.iH)("I express my interest to work for a company with a pleasant atmosphere. In my long-lasting working path I am eager to use my skills for a company and other hand enrich my knowledge from the company experience. I am ready to gain a foothold in the direction of Front-End (Vue) development to expand in it to an expert level."),s=(0,h.iH)("Contacts");return{contacts:e,phone:ue,mail:de,telegram:pe,linkedin:Ae,github:me,aboutTitle:t,aboutText:a,expTitle:i,expText:n,contactsTitle:s}}};const ge=(0,L.Z)(ve,[["render",re]]);var he=ge;const be={class:"about"},fe={class:"about__block"},we=(0,n._)("h2",{class:"about__title"},"About Me ",-1),Be=["innerHTML"],Ie=["innerHTML"],ke=(0,n._)("hr",{class:"about__line"},null,-1);function ye(e,t,a,i,s,o){return(0,n.wg)(),(0,n.iD)("div",be,[(0,n._)("div",fe,[we,(0,n._)("span",{class:"about__text",innerHTML:i.text},null,8,Be),(0,n._)("span",{class:"about__text",innerHTML:i.textTwo},null,8,Ie)]),ke])}var Me={name:"CvInfo",setup(){const e=(0,h.iH)("About Me "),t=(0,h.iH)("Front-End Developer with 1+ year of experience .<br> Skilled in creating Websites, implementing new functionalities to add widgets and templates via Vue.js.<br> Team player with an eye for details."),a=(0,h.iH)("I express my interest to work for a company with a pleasant atmosphere.<br> In my long-lasting working path i am eager to use my skills for a company and other hand enrich my knowledge from the company experience.<br> I am ready to gain a foothold in the direction of Front-End (Vue) development to expand in it to an expert level.");return{title:e,text:t,textTwo:a}}};const xe=(0,L.Z)(Me,[["render",ye]]);var Ce=xe;const He={class:"skills"},Ne=(0,n._)("h2",{class:"skills__title"},"Skills",-1),Ge={class:"skills__hard"},Te=["title"],Fe=["src","alt"];function De(e,t,a,i,s,o){return(0,n.wg)(),(0,n.iD)("div",He,[Ne,(0,n._)("div",Ge,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.imgs,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"skills__imgWrapper",key:e.id,title:e.id},[(0,n._)("img",{class:"skills__img",src:e.img,loading:"lazy",alt:e.id},null,8,Fe)],8,Te)))),128))])])}var Se=a.p+"img/js.2e436f6c.png",Ve="data:image/png;base64,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",Qe=a.p+"img/gulp.51b216b9.png",Le=a.p+"img/pug.b71658c9.png",Ee=a.p+"img/sass.6ef71d4b.png",Ye={name:"CvInfo",setup(){const e=(0,h.iH)("About Me "),t=(0,h.iH)([{id:"js",img:Se},{id:"vue",img:Ve},{id:"gulp",img:Qe},{id:"pug",img:Le},{id:"scss",img:Ee}]);return{title:e,imgs:t,js:Se,vue:Ve,gulp:Qe,pug:Le,scss:Ee}}};const ze=(0,L.Z)(Ye,[["render",De]]);var Ue=ze;const Pe={class:"cvSlider"},Xe=(0,n._)("h2",{class:"cvSlider__title"},"My portfolio",-1),We={key:0,class:"cvSlider__content"},je=["href"],Oe=["src"];function Ke(e,t,a,i,s,o){(0,n.up)("Slide"),(0,n.up)("Carousel");return(0,n.wg)(),(0,n.iD)("div",Pe,[Xe,((0,n.wg)(),(0,n.iD)("div",We,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.slideInfo,(e=>((0,n.wg)(),(0,n.iD)("a",{class:"cvSlider__imgWrapper",key:e.id,href:e.url,target:"_blank"},[(0,n._)("img",{class:"cvSlider__img",src:e.img,loading:"lazy",alt:"alt"},null,8,Oe)],8,je)))),128))]))])}var qe=a(410),Re=a.p+"img/conduit.1f5b7d23.png",Ze=a.p+"img/onlineBank.cec7e5d5.png",Je=a.p+"img/hydraFull.01eb2acd.png",_e=a.p+"img/visual.4379cad2.png",$e=a.p+"img/bb.e8ea88e5.png",et={name:"CvSlider",components:{Carousel:qe.lr,Slide:qe.Mi},setup(){const e=(0,h.iH)(null),t=(0,h.iH)([{id:1,img:_e,title:"Visual",url:"https://harutamirkhanyan.github.io/Visual/"},{id:2,img:Ze,description:"Online bank",url:"https://harutamirkhanyan.github.io/vue-online-bank/"},{id:3,img:Re,title:"Medium clone of https://demo.realworld.io/#/",url:"https://harutamirkhanyan.github.io/conduit/#/"},{id:4,img:Je,title:"OUTDOOR",url:"https://harutamirkhanyan.github.io/hydra/"},{id:5,img:$e,title:"OUTDOOR",url:"https://harutamirkhanyan.github.io/bb/"}]);return{slideInfo:t,conduit:Re,myCarousel:e,onlineBank:Ze,hydra:Je,visual:_e}}};const tt=(0,L.Z)(et,[["render",Ke]]);var at=tt;const it={class:"cvContacts"},nt=(0,n._)("h3",{class:"cvContacts__title"},"CONTACT ME",-1),st={class:"cvContacts__container"},ot={class:"cvContacts__wrapper"},lt={class:"cvContacts__wrapper"},ct={class:"cvContacts__wrapper"},rt=(0,n._)("button",{class:"cvContacts__submit",type:"submit"},"SEND MESSAGE",-1),ut={class:"cvContacts__contacts"},dt=(0,n.uE)('<div class="cvContacts__name">Harutyun Amirkhanyan</div><span class="cvContacts__proff">Front-End Developer</span><div class="cvContacts__block"><span class="cvContacts__desc">Tel:</span><span class="cvContacts__info">+374 (77) 166 744</span></div><div class="cvContacts__block"><span class="cvContacts__desc">Email:</span><span class="cvContacts__info">har.amirkhanyan@gmail.com</span></div>',4),pt={class:"cvContacts__contactsBlock"},At=["title","href"],mt=["src","alt"];function vt(e,t,a,s,o,l){return(0,n.wg)(),(0,n.iD)("div",it,[nt,(0,n._)("div",st,[(0,n._)("form",{class:"cvContacts__form",onSubmit:t[4]||(t[4]=(0,i.iM)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[(0,n._)("p",ot,[(0,n.wy)((0,n._)("input",{class:"cvContacts__input",type:"text",id:"name",placeholder:"First Name","onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e)},null,512),[[i.nr,s.name]]),(0,n.wy)((0,n._)("input",{class:"cvContacts__input",type:"email",id:"email",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e)},null,512),[[i.nr,s.email]])]),(0,n._)("p",lt,[(0,n.wy)((0,n._)("input",{class:"cvContacts__input",type:"text",id:"phone",placeholder:"Phone","onUpdate:modelValue":t[2]||(t[2]=e=>s.phone=e)},null,512),[[i.nr,s.phone]])]),(0,n._)("p",ct,[(0,n.wy)((0,n._)("textarea",{class:"cvContacts__addText",id:"message",placeholder:"Tell Me Something...","onUpdate:modelValue":t[3]||(t[3]=e=>s.message=e)},null,512),[[i.nr,s.message]])]),rt],32),(0,n._)("div",ut,[dt,(0,n._)("div",pt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.contacts,(e=>((0,n.wg)(),(0,n.iD)("a",{class:"cvContacts__contactsWrapper",key:e.id,title:e.title,href:e.href,target:"_blank"},[(0,n._)("img",{class:"cvContacts__img",src:e.img,loading:"lazy",alt:e.alt},null,8,mt)],8,At)))),128))])])])])}var gt=a.p+"img/facebook.716a49bd.png",ht=a(247);const bt=e=>ht.ZP.send("service_ydp2imy","template_m7qyhgt",e,"EqfAb7ONTlBib2ewP");var ft={sendEmail:bt};const wt=(0,h.qj)({name:"",email:"",phone:"",message:""}),Bt=e=>{wt.name=e},It=e=>{wt.email=e},kt=e=>{wt.phone=e},yt=e=>{wt.message=e},Mt=async e=>{try{const t=await ft.sendEmail(e);return wt.name="",wt.email="",wt.phone="",wt.message="",console.log("done"),t}catch(t){return t}},xt=()=>({state:(0,h.OT)(wt),updateName:Bt,updateEmail:It,updatePhone:kt,updateMessage:yt,sendEmail:Mt});var Ct={name:"CvInfo",setup(){const{state:e,updateName:t,updateEmail:a,updatePhone:i,updateMessage:s,sendEmail:o}=xt(),l=(0,h.iH)([{id:3,img:pe,href:"https://t.me/harutyun_a",title:"Send message",alt:"telegram"},{id:4,img:Ae,href:"https://www.linkedin.com/in/harut-amirkhanyan/",title:"Linkedin page",alt:"linkedin"},{id:5,img:me,href:"https://github.com/harutamirkhanyan",title:"GitHub page",alt:"github"},{id:5,img:gt,href:"https://www.facebook.com/amirkhanyan.harut",title:"Facebook page",alt:"facebook"}]),c=(0,n.Fl)({get:()=>e.name,set:e=>t(e)}),r=(0,n.Fl)({get:()=>e.email,set:e=>a(e)}),u=(0,n.Fl)({get:()=>e.phone,set:e=>i(e)}),d=(0,n.Fl)({get:()=>e.message,set:e=>s(e)}),p=async()=>{await o({name:c.value,email:r.value,phone:u.value,message:d.value}),t(""),a(""),i(""),s("")};return{contacts:l,phoneLogo:ue,mailLogo:de,telegramLogo:pe,linkedinLogo:Ae,githubLogo:me,facebookLogo:gt,name:c,email:r,phone:u,message:d,onSubmit:p}}};const Ht=(0,L.Z)(Ct,[["render",vt]]);var Nt=Ht,Gt={name:"CvPage",components:{CvNavbar:he,CvAbout:Ce,CvSkills:Ue,CvSlider:at,CvHeader:J,CvContacts:Nt}};const Tt=(0,L.Z)(Gt,[["render",r]]);var Ft=Tt,Dt={name:"App",components:{CvPage:Ft}};const St=(0,L.Z)(Dt,[["render",o]]);var Vt=St,Qt=(0,V.MT)({state:{sidebar:!1},mutations:{openSidebar(e){e.sidebar=!0},closeSidebar(e){e.sidebar=!1}},actions:{},modules:{useSubmitForm:xt}});function Lt(e){if(document.querySelector(e)){const t=document.querySelector(e);t.scrollIntoView({behavior:"smooth"})}}var Et={install(e){e.config.globalProperties.$scrollTo=Lt}};(0,i.ri)(Vt).use(Qt).use(Et).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],s=e[u][2];for(var l=!0,c=0;c<i.length;c++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[c])}))?i.splice(c--,1):(l=!1,s<o&&(o=s));if(l){e.splice(u--,1);var r=n();void 0!==r&&(t=r)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,n,s]}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/cv/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,o=i[0],l=i[1],c=i[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var u=c(a)}for(t&&t(i);r<o.length;r++)s=o[r],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},i=self["webpackChunkcv"]=self["webpackChunkcv"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(520)}));i=a.O(i)})();
//# sourceMappingURL=app.14a4c5d4.js.map