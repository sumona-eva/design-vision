import{u as I,B,D as N,m as A,r as p,o as E,a as _,b as l,c as x,w as $,i as e,E as m,G as v,h as D,e as i,f as G,F as O,j as h,g as T,k as d,H as F}from"./app-CmCiYzWS.js";import{S as M}from"./SummernoteEditor-DCcXo0H7.js";const J={class:"p-4 bg-secondary shadow-md me-4"},q=e("h3",{class:"text-sm mb-5"},"Update Project",-1),z={class:"flex flex-wrap"},H={class:"w-1/2 flex flex-col gap-3 px-2"},K={class:"w-full px-2"},W=e("label",{for:"title",class:"text-xs mb-1"},"Project Name",-1),Q={class:"w-full flex items-center space-x-5 px-2"},X={class:"w-1/2"},Y=e("label",{for:"category",class:"text-xs mb-1"},"Category",-1),Z={class:"w-1/2"},ee=e("label",{for:"title",class:"text-xs mb-1"},"Order Number",-1),te={class:"w-full"},ae=e("label",{for:"title",class:"text-xs mb-1"},"Short Description",-1),se={class:"w-1/2 flex flex-col gap-4 px-2"},oe={class:"flex"},le={class:"pr-2"},re=e("label",{for:"image",class:"text-xs block mb-1"},"Cover Image",-1),ie={for:"cover_image",class:"w-52 h-36 flex items-center justify-center gap-3 p-2 border border-dashed border-primary rounded-md text-primary cursor-pointer"},de=["src"],ce={key:1},ne=e("p",{class:"text-xs"},"Upload Product Cover Image",-1),ue=[ne],pe={class:"w-full"},_e={class:"p-2 border border-primary rounded-lg"},me=e("h4",{class:"mb-3 text-sm"},"Project Images",-1),ve=e("ul",{class:"mb-2"},[e("li",{class:"text-xs"},"999 KB limit."),e("li",{class:"text-xs"},[d("Allowed types: "),e("span",{class:"text-primary"}," JPG"),d(", "),e("span",{class:"text-primary"},"JPEG"),d(", "),e("span",{class:"text-primary"},"PNG"),d(".")])],-1),he={class:"file-upload-container"},fe={class:"file-upload-container-wrapper"},be=["src"],ge=["onClick"],xe={class:"file-upload-container-wrapper__add"},ye={for:"mu-file-input",class:"file-upload-container__add-btn"},we={class:"w-full px-2 editor mt-5"},je=e("label",{for:"title",class:"text-sm mb-1 text-white py-3 block"},"Description",-1),ke={class:"editor_data"},Ce={class:"text-center pt-10"},Ie={__name:"Edit",setup(Ue){const{loading:Ve,error:Pe,sendRequest:c}=I(),y=B(),w=N(),n=A(),j=async()=>{var t;const a=await c({method:"get",url:`/v1/project/${(t=n==null?void 0:n.params)==null?void 0:t.id}`});a&&(s.value.id=a.data.data.id,s.value.title=a.data.data.title,s.value.project_category_id=a.data.data.project_category_id,s.value.project_category_id=a.data.data.project_category_id,s.value.order_number=a.data.data.order_number,s.value.short_description=a.data.data.short_description,s.value.description=a.data.data.description,r.value=a.data.data.cover_image)},u=p(null),k=async()=>{const a=await c({method:"get",url:"/v1/project-category"});u.value=a==null?void 0:a.data},r=p(null),C=a=>{const t=a.target.files[0];s.value.cover_image=t,r.value=URL.createObjectURL(t)},U=a=>{for(let t=0;t<a.target.files.length;t++)s.value.images.push({url:URL.createObjectURL(a.target.files[t]),file:a.target.files[t]})},V=a=>{let t=s.value.images[a];t.url.startsWith("blob:")&&URL.revokeObjectURL(t.url),s.value.images.splice(a,1)},s=p({id:null,title:null,project_category_id:null,cover_image:null,order_number:null,short_description:null,description:null,images:[]}),P=async a=>{const t=await c({method:"post",url:`/v1/project/${a}`,data:s.value,params:{_method:"PUT"},headers:{authorization:`Bearer ${y.user.token}`,"Content-Type":"multipart/form-data"}});t!=null&&t.data&&(F.success(" Product Added Successfully",{autoclose:1e3,theme:"dark"}),await w.push("/admin/projects"))};return E(()=>{k(),j()}),(a,t)=>{const S=_("Select"),f=_("Icon"),L=_("AppLayout");return l(),x(L,null,{default:$(()=>{var b,g;return[e("div",J,[q,e("div",z,[e("div",H,[e("div",K,[W,m(e("input",{type:"text",class:"bg-transparent p-2 border border-primary w-full rounded","onUpdate:modelValue":t[0]||(t[0]=o=>s.value.title=o)},null,512),[[v,s.value.title]])]),e("div",Q,[e("div",X,[Y,(b=u.value)!=null&&b.data?(l(),x(S,{key:0,label:"name",options:(g=u.value)==null?void 0:g.data,reduce:o=>o.id,searchable:!0,modelValue:s.value.project_category_id,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value.project_category_id=o),placeholder:"Set Category"},null,8,["options","reduce","modelValue"])):D("",!0)]),e("div",Z,[ee,m(e("input",{type:"number",class:"bg-transparent p-2 border border-primary w-full rounded","onUpdate:modelValue":t[2]||(t[2]=o=>s.value.order_number=o)},null,512),[[v,s.value.order_number]])])]),e("div",te,[ae,m(e("textarea",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.value.short_description=o),class:"bg-transparent p-2 border border-primary w-full rounded h-32"},null,512),[[v,s.value.short_description]])])]),e("div",se,[e("div",oe,[e("div",le,[re,e("label",ie,[e("input",{type:"file",id:"cover_image",hidden:"",onChange:C},null,32),r.value?(l(),i("img",{key:0,src:r.value,class:"w-full h-full object-cover"},null,8,de)):(l(),i("div",ce,ue))])])]),e("div",pe,[e("div",_e,[me,ve,e("div",he,[e("div",fe,[(l(!0),i(O,null,G(s.value.images,(o,R)=>(l(),i("div",{class:"file-upload-container-wrapper__preview",key:o.index},[e("img",{src:o.url,class:"file-upload-container-wrapper__preview-item"},null,8,be),e("button",{onClick:Se=>V(R),class:"file-upload-container-wrapper__preview-cancel",type:"button"},[h(f,{name:"material-symbols:close",class:"text-white"})],8,ge)]))),128)),e("div",xe,[e("label",ye,[e("span",null,[h(f,{name:"tabler:cloud-upload"})])]),e("input",{onChange:U,id:"mu-file-input",type:"file",accept:"image/*",multiple:"",hidden:""},null,32)])])])])])]),e("div",we,[je,e("div",ke,[h(T(M),{modelValue:s.value.description,"onUpdate:modelValue":t[4]||(t[4]=o=>s.value.description=o)},null,8,["modelValue"])])])])]),e("div",Ce,[e("button",{class:"w-1/2 mx-auto bg-primary py-3",onClick:t[5]||(t[5]=o=>P(s.value.id))},"Update Project")])]}),_:1})}}};export{Ie as default};
