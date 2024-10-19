import{u as k,r as x,o as $,a as f,b as u,e as _,j as e,w as s,i as t,k as a,C as g,I as w,J as b,d as C,g as r,K as R,R as c,L as E}from"./app-CmCiYzWS.js";const j={class:"bg-white hidden lg:block"},L={class:"flex items-center justify-between"},T={class:"w-2/6"},A=t("img",{class:"w-72 h-20",src:w,alt:""},null,-1),O={class:"w-4/6"},S={class:"flex items-center justify-center gap-5 text-base text-black font-bold"},N={class:"relative group"},V={class:"relative group"},B={__name:"Header",setup(p){const{sendRequest:o,loading:m,error:l}=k(),d=x([]),h=async()=>{const n=await o({url:"/frontend/service",method:"GET"});console.log("res",n),d.value=n==null?void 0:n.data},v=x([]),y=async()=>{const n=await o({url:"/v1/package",method:"GET"});v.value=n==null?void 0:n.data};return $(()=>{y(),h()}),(n,Z)=>{const i=f("RouterLink");return u(),_("nav",j,[e(g,null,{default:s(()=>[t("div",L,[t("div",T,[e(i,{to:"/"},{default:s(()=>[A]),_:1})]),t("div",O,[t("ul",S,[t("li",null,[e(i,{to:"/",class:"p-2 hover:text-primary transition-all ease-in-out duration-500"},{default:s(()=>[a("HOME")]),_:1})]),t("li",null,[e(i,{to:"/about",class:"p-2 hover:text-primary transition-all ease-in-out duration-500"},{default:s(()=>[a("ABOUT US")]),_:1})]),t("li",null,[e(i,{to:"/all-services",class:"p-2 hover:text-primary transition-all ease-in-out duration-500"},{default:s(()=>[a("SERVICES")]),_:1})]),t("li",N,[e(i,{to:"/work",class:"p-2 hover:text-primary transition-all ease-in-out duration-500"},{default:s(()=>[a("WORK")]),_:1})]),t("li",V,[e(i,{to:"/career",class:"p-2 hover:text-primary transition-all ease-in-out duration-500"},{default:s(()=>[a("CAREER")]),_:1})]),t("li",null,[e(i,{to:"/contact",class:"p-2 hover:text-primary transition-all ease-in-out duration-500"},{default:s(()=>[a("CONTACT")]),_:1})])])])])]),_:1})])}}},I={class:"border-t border-gray-300"},H={class:"flex flex-col lg:flex-row justify-between pt-3 pb-8"},M=t("p",{class:"text-sm text-gray-400"},"Newsletter | Copywrites:Design Vision Associate Ltd. 2024",-1),U={class:"flex gap-3 items-center justify-center lg:justify-normal pt-5 lg:pt-0 text-xl text-gray-400"},G={__name:"Footer",setup(p){return(o,m)=>{const l=f("RouterLink");return u(),_("footer",null,[t("section",null,[t("div",I,[e(g,null,{default:s(()=>[t("div",H,[M,t("div",U,[e(l,{to:"Facebook- https://www.facebook.com/designvision.com.bd/"},{default:s(()=>[e(b,{name:"lucide:facebook"})]),_:1}),e(l,{to:"Linkedin- https://www.linkedin.com/in/design-vision-associates-ltd-b26092153/"},{default:s(()=>[e(b,{name:"ri:linkedin-fill"})]),_:1})])])]),_:1})])])])}}},K={class:"lg:hidden"},z=t("img",{class:"w-52 h-auto",src:w,alt:""},null,-1),F={class:"flex flex-col gap-5 pl-5 pt-10 font-medium"},W={class:"pt-1"},q={class:"pt-1"},D={class:"pt-1"},J={class:"pt-1"},P={class:"pt-2"},Q={class:"pt-1"},X=C({__name:"MobileHeader",setup(p){const o=x(!1);return(m,l)=>{const d=f("Icon"),h=f("Container");return u(),_("section",K,[e(h,{class:"flex items-center justify-between"},{default:s(()=>[e(r(c),{to:"/"},{default:s(()=>[z]),_:1}),o.value?(u(),_("button",{key:0,onClick:l[0]||(l[0]=v=>o.value=!o.value),class:"w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center"},[e(d,{name:"material-symbols:close-rounded",class:"text-2xl"})])):(u(),_("button",{key:1,onClick:l[1]||(l[1]=v=>o.value=!o.value),class:"w-10 h-10 border border-gray-700 flex items-center justify-center"},[e(d,{name:"ic:baseline-menu",class:"text-2xl"})]))]),_:1}),t("div",{class:R(["fixed top-0 left-0 bottom-0 h-screen w-64 bg-white z-50 shadow transition-all duration-700",{"-translate-x-0":o.value,"-translate-x-64":!o.value}])},[t("ul",F,[t("li",W,[e(r(c),{to:"/home"},{default:s(()=>[a("HOME")]),_:1})]),t("li",q,[e(r(c),{to:"/about"},{default:s(()=>[a("ABOUT US")]),_:1})]),t("li",D,[e(r(c),{to:"/all-services"},{default:s(()=>[a("SERVICES")]),_:1})]),t("li",J,[e(r(c),{to:"/work"},{default:s(()=>[a("WORK")]),_:1})]),t("li",P,[e(r(c),{to:"/career"},{default:s(()=>[a("CAREER")]),_:1})]),t("li",Q,[e(r(c),{to:"/contact"},{default:s(()=>[a("CONTACT")]),_:1})])])],2)])}}}),Y={class:"w-full"},et={__name:"GuestLayout",setup(p){return(o,m)=>(u(),_("div",Y,[t("header",null,[e(X),e(B)]),t("main",null,[E(o.$slots,"default")]),t("footer",null,[e(G)])]))}};export{et as _};
