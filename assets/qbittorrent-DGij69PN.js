import"./index-BbGi8k9e.js";import{f as w,a6 as x,am as A,r as B,j as _,k as P,y as a,t,a2 as n,v as s,x as m,s as y,u as S,F as k}from"./libs-DaDHWX8D.js";import{q,G as R,az as T,aA as C,aD as I,aB as F,v as N}from"./arcoDesign-DkbNuMsn.js";const L=w({__name:"qbittorrent",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(c){var b,V;const{t:d}=x(),l=A(c,"modelValue"),h={type:"string",required:!0,validator:(r,e)=>{if(!r)return e("Please input URL");!r.startsWith("http://")&&!r.startsWith("https://")&&e(d("page.dashboard.editModal.label.endpoint.error.invalidSchema"));try{new URL(r),e()}catch{e(d("page.dashboard.editModal.label.endpoint.error.invalidUrl"))}}},i=B(!1);return((b=l.value)!=null&&b.basicAuth.pass||(V=l.value)!=null&&V.basicAuth.pass)&&(i.value=!0),(r,e)=>{const p=q,u=R,v=T,M=C,g=I,U=F,f=N;return _(),P(k,null,[a(u,{field:"config.endpoint",label:n(d)("page.dashboard.editModal.label.endpoint"),"validate-trigger":"blur",required:"",rules:h},{default:t(()=>[a(p,{modelValue:l.value.endpoint,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.endpoint=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.username",label:n(d)("page.dashboard.editModal.label.username")},{default:t(()=>[a(p,{modelValue:l.value.username,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.username=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.password",label:n(d)("page.dashboard.editModal.label.password")},{default:t(()=>[a(v,{modelValue:l.value.password,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.password=o),"allow-clear":""},null,8,["modelValue"])]),_:1},8,["label"]),a(u,null,{default:t(()=>[a(M,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=o=>i.value=o)},{default:t(()=>[s(m(n(d)("page.dashboard.editModal.label.useBasicAuth")),1)]),_:1},8,["modelValue"])]),_:1}),i.value?(_(),y(u,{key:0,"content-flex":!1},{default:t(()=>[a(u,{field:"config.basicAuth.user",label:"User"},{default:t(()=>[a(p,{modelValue:l.value.basicAuth.user,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.basicAuth.user=o)},null,8,["modelValue"])]),_:1}),a(u,{field:"config.basicAuth.pass",label:"Pass"},{default:t(()=>[a(v,{modelValue:l.value.basicAuth.pass,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.basicAuth.pass=o)},null,8,["modelValue"])]),_:1})]),_:1})):S("",!0),a(u,{field:"config.httpVersion",label:n(d)("page.dashboard.editModal.label.httpVersion")},{extra:t(()=>[s(m(n(d)("page.dashboard.editModal.label.httpVersion.description")),1)]),default:t(()=>[a(U,{modelValue:l.value.httpVersion,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.httpVersion=o)},{default:t(()=>[a(g,{value:"HTTP_1_1"},{default:t(()=>e[10]||(e[10]=[s("1.1")])),_:1}),a(g,{value:"HTTP_2"},{default:t(()=>e[11]||(e[11]=[s("2.0")])),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.incrementBan","default-checked":"",label:n(d)("page.dashboard.editModal.label.incrementBan")},{extra:t(()=>[s(m(n(d)("page.dashboard.editModal.label.incrementBan.description")),1)]),default:t(()=>[a(f,{modelValue:l.value.incrementBan,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value.incrementBan=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.verifySsl","default-checked":"",label:n(d)("page.dashboard.editModal.label.verifySsl")},{default:t(()=>[a(f,{modelValue:l.value.verifySsl,"onUpdate:modelValue":e[8]||(e[8]=o=>l.value.verifySsl=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{field:"config.ignorePrivate",label:n(d)("page.dashboard.editModal.label.ignorePrivate")},{extra:t(()=>[s(m(n(d)("page.dashboard.editModal.label.ignorePrivate.description")),1)]),default:t(()=>[a(f,{modelValue:l.value.ignorePrivate,"onUpdate:modelValue":e[9]||(e[9]=o=>l.value.ignorePrivate=o)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}});export{L as default};