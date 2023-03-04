import{ak as _e,r as B,x as D,s as se,m as t,I as w,n as Y,q as $e,c,G as ie,L as oe,p as j,_ as Ae,v as R,d as z,e as Pe,al as xe,t as A,l as ue,am as de,w as K,u as re,i as ce,$ as O,an as Z,V as Be,a6 as ve,E as N,W as we,j as Le,o as De,ao as ee,K as q,ap as Te,J as le,aq as Fe,y as Me,z as Oe,B as J,C as ae,D as G,N as Re,O as Ee,P as Ue}from"./index.18c419bc.js";import{a as x,k as H,V as W,R as fe,b as Ge,l as je,c as ze,y as qe,z as Ne,A as Ke,d as He,n as Je,m as We,o as Ye,f as Qe,q as Xe,r as Q,s as Ze,g as el,C as me,D as ll,E as al,h as tl,p as nl,i as sl,L as ge,t as il,v as ye,j as Ve,I as ol,M as ul,G as dl}from"./router.ca9b32dc.js";import{c as X,a as te,b as rl}from"./VAvatar.7595172e.js";import{b as cl,V as vl,a as fl}from"./VRow.347c3292.js";const ne=_e("leds",()=>{const e=B([{id:1,pin:13,isOn:!1,pwm:0},{id:2,pin:14,isOn:!1,pwm:0}]);function i(l){const s=e.value.find(n=>l===n.id);s&&(s.isOn=!s.isOn)}function a(l,s){const n=e.value.find(u=>l===u.id);n&&(n.isOn=s)}return{leds:e,toggleLed:i,setLed:a}});const ml=D({name:"VCardActions",setup(e,i){let{slots:a}=i;return se({VBtn:{variant:"text"}}),x(()=>{var l;return t("div",{class:"v-card-actions"},[(l=a.default)==null?void 0:l.call(a)])}),{}}}),gl=X("v-card-subtitle"),yl=X("v-card-title"),Vl=D({name:"VCardItem",props:{appendAvatar:String,appendIcon:w,prependAvatar:String,prependIcon:w,subtitle:String,title:String,...H()},setup(e,i){let{slots:a}=i;return x(()=>{var l,s,n,u,o;const r=!!(e.prependAvatar||e.prependIcon||a.prepend),g=!!(e.appendAvatar||e.appendIcon||a.append),b=!!(e.title||a.title),f=!!(e.subtitle||a.subtitle);return t("div",{class:"v-card-item"},[r&&t(W,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var d;return[t("div",{class:"v-card-item__prepend"},[(d=(l=a.prepend)==null?void 0:l.call(a))!=null?d:t(te,null,null)])]}}),t("div",{class:"v-card-item__content"},[b&&t(yl,{key:"title"},{default:()=>{var d;return[(d=(s=a.title)==null?void 0:s.call(a))!=null?d:e.title]}}),f&&t(gl,{key:"subtitle"},{default:()=>{var d;return[(d=(n=a.subtitle)==null?void 0:n.call(a))!=null?d:e.subtitle]}}),(u=a.default)==null?void 0:u.call(a)]),g&&t(W,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var d;return[t("div",{class:"v-card-item__append"},[(d=(o=a.append)==null?void 0:o.call(a))!=null?d:t(te,null,null)])]}})])}),{}}}),be=X("v-card-text"),bl=D({name:"VCard",directives:{Ripple:fe},props:{appendAvatar:String,appendIcon:w,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:w,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Y(),...Ge(),...H(),...je(),...ze(),...qe(),...Ne(),...Ke(),...He(),...Je(),...We(),...Ye({variant:"elevated"})},setup(e,i){let{attrs:a,slots:l}=i;const{themeClasses:s}=$e(e),{borderClasses:n}=Qe(e),{colorClasses:u,colorStyles:o,variantClasses:r}=Xe(e),{densityClasses:g}=Q(e),{dimensionStyles:b}=Ze(e),{elevationClasses:f}=el(e),{loaderClasses:d}=me(e),{locationStyles:y}=ll(e),{positionClasses:S}=al(e),{roundedClasses:C}=tl(e),p=nl(e,a),_=c(()=>e.link!==!1&&p.isLink.value),h=c(()=>!e.disabled&&e.link!==!1&&(e.link||p.isClickable.value));return x(()=>{var m,v,V;const k=_.value?"a":e.tag,I=!!(l.title||e.title),$=!!(l.subtitle||e.subtitle),T=I||$,F=!!(l.append||e.appendAvatar||e.appendIcon),E=!!(l.prepend||e.prependAvatar||e.prependIcon),L=!!(l.image||e.image),M=T||E||F,U=!!(l.text||e.text);return ie(t(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":h.value},s.value,n.value,u.value,g.value,f.value,d.value,S.value,C.value,r.value],style:[o.value,b.value,y.value],href:p.href.value,onClick:h.value&&p.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[L&&t(W,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var P;return[t("div",{class:"v-card__image"},[(P=(m=l.image)==null?void 0:m.call(l))!=null?P:t(sl,null,null)])]}}),t(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:l.loader}),M&&t(Vl,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),U&&t(be,{key:"text"},{default:()=>{var P;return[(P=(v=l.text)==null?void 0:v.call(l))!=null?P:e.text]}}),(V=l.default)==null?void 0:V.call(l),l.actions&&t(ml,null,{default:l.actions}),il(h.value,"v-card")]}),[[oe("ripple"),h.value&&e.ripple]])}),{}}});const Cl=D({name:"VLabel",props:{text:String,clickable:Boolean,...Y()},setup(e,i){let{slots:a}=i;return x(()=>{var l;return t("label",{class:["v-label",{"v-label--clickable":e.clickable}]},[e.text,(l=a.default)==null?void 0:l.call(a)])}),{}}});const Ce=Symbol.for("vuetify:selection-control-group"),he=j({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:w,trueIcon:w,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:Ae},...Y(),...H()},"v-selection-control-group");D({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...he()},emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const l=R(e,"modelValue"),s=z(),n=c(()=>e.id||`v-selection-control-group-${s}`),u=c(()=>e.name||n.value),o=new Set;return Pe(Ce,{modelValue:l,forceUpdate:()=>{o.forEach(r=>r())},onForceUpdate:r=>{o.add(r),xe(()=>{o.delete(r)})}}),se({[e.defaultsTarget]:{color:A(e,"color"),disabled:A(e,"disabled"),density:A(e,"density"),error:A(e,"error"),inline:A(e,"inline"),modelValue:l,multiple:c(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:u,falseIcon:A(e,"falseIcon"),trueIcon:A(e,"trueIcon"),readonly:A(e,"readonly"),ripple:A(e,"ripple"),type:A(e,"type"),valueComparator:A(e,"valueComparator")}}),x(()=>{var r;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],role:e.type==="radio"?"radiogroup":void 0},[(r=a.default)==null?void 0:r.call(a)])}),{}}});const ke=j({label:String,trueValue:null,falseValue:null,value:null,...he()},"v-selection-control");function hl(e){const i=ce(Ce,void 0),{densityClasses:a}=Q(e),l=R(e,"modelValue"),s=c(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),n=c(()=>e.falseValue!==void 0?e.falseValue:!1),u=c(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),o=c({get(){const f=i?i.modelValue.value:l.value;return u.value?f.some(d=>e.valueComparator(d,s.value)):e.valueComparator(f,s.value)},set(f){if(e.readonly)return;const d=f?s.value:n.value;let y=d;u.value&&(y=f?[...O(l.value),d]:O(l.value).filter(S=>!e.valueComparator(S,s.value))),i?i.modelValue.value=y:l.value=y}}),{textColorClasses:r,textColorStyles:g}=Ve(c(()=>o.value&&!e.error&&!e.disabled?e.color:void 0)),b=c(()=>o.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:a,trueValue:s,falseValue:n,model:o,textColorClasses:r,textColorStyles:g,icon:b}}const pe=ue()({name:"VSelectionControl",directives:{Ripple:fe},inheritAttrs:!1,props:ke(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:a,slots:l}=i;const{group:s,densityClasses:n,icon:u,model:o,textColorClasses:r,textColorStyles:g,trueValue:b}=hl(e),f=z(),d=c(()=>e.id||`input-${f}`),y=B(!1),S=B(!1),C=B();s==null||s.onForceUpdate(()=>{C.value&&(C.value.checked=o.value)});function p(m){y.value=!0,(!Z||Z&&m.target.matches(":focus-visible"))&&(S.value=!0)}function _(){y.value=!1,S.value=!1}function h(m){e.readonly&&s&&Be(()=>s.forceUpdate()),o.value=m.target.checked}return x(()=>{var m,v;const V=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[k,I]=de(a);return t("div",K({class:["v-selection-control",{"v-selection-control--dirty":o.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":y.value,"v-selection-control--focus-visible":S.value,"v-selection-control--inline":e.inline},n.value]},k),[t("div",{class:["v-selection-control__wrapper",r.value],style:g.value},[(m=l.default)==null?void 0:m.call(l),ie(t("div",{class:["v-selection-control__input"]},[u.value&&t(ye,{key:"icon",icon:u.value},null),t("input",K({ref:C,checked:o.value,disabled:e.disabled,id:d.value,onBlur:_,onFocus:p,onInput:h,"aria-disabled":e.readonly,type:e.type,value:b.value,name:e.name,"aria-checked":e.type==="checkbox"?o.value:void 0},I),null),(v=l.input)==null?void 0:v.call(l,{model:o,textColorClasses:r,textColorStyles:g,props:{onFocus:p,onBlur:_,id:d.value}})]),[[oe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),V&&t(Cl,{for:d.value,clickable:!0},{default:()=>[V]})])}),{isFocused:y,input:C}}});function kl(e){return re(e,Object.keys(pe.props))}const pl=D({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ol({transition:{component:rl,leaveAbsolute:!0,group:!0}})},setup(e,i){let{slots:a}=i;const l=c(()=>O(e.messages)),{textColorClasses:s,textColorStyles:n}=Ve(c(()=>e.color));return x(()=>t(ul,{transition:e.transition,tag:"div",class:["v-messages",s.value],style:n.value,role:"alert","aria-live":"polite"},{default:()=>[e.active&&l.value.map((u,o)=>t("div",{class:"v-messages__message",key:`${o}-${l.value}`},[a.message?a.message({message:u}):u]))]})),{}}}),Sl=Symbol.for("vuetify:form");function Il(){return ce(Sl,null)}const _l=j({focused:Boolean},"focus");function $l(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ve();const a=R(e,"focused"),l=c(()=>({[`${i}--focused`]:a.value}));function s(){a.value=!0}function n(){a.value=!1}return{focusClasses:l,isFocused:a,focus:s,blur:n}}const Al=j({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,..._l()},"validation");function Pl(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ve(),a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:z();const l=R(e,"modelValue"),s=c(()=>e.validationValue===void 0?l.value:e.validationValue),n=Il(),u=B([]),o=B(!0),r=c(()=>!!(O(l.value===""?null:l.value).length||O(s.value===""?null:s.value).length)),g=c(()=>!!(e.disabled||n!=null&&n.isDisabled.value)),b=c(()=>!!(e.readonly||n!=null&&n.isReadonly.value)),f=c(()=>e.errorMessages.length?O(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):u.value),d=c(()=>e.error||f.value.length?!1:e.rules.length&&o.value?null:!0),y=B(!1),S=c(()=>({[`${i}--error`]:d.value===!1,[`${i}--dirty`]:r.value,[`${i}--disabled`]:g.value,[`${i}--readonly`]:b.value})),C=c(()=>{var v;return(v=e.name)!=null?v:N(a)});we(()=>{n==null||n.register({id:C.value,validate:m,reset:_,resetValidation:h})}),Le(()=>{n==null||n.unregister(C.value)});const p=c(()=>e.validateOn||(n==null?void 0:n.validateOn.value)||"input");De(()=>n==null?void 0:n.update(C.value,d.value,f.value)),ee(()=>p.value==="input",()=>{q(s,()=>{if(s.value!=null)m();else if(e.focused){const v=q(()=>e.focused,V=>{V||m(),v()})}})}),ee(()=>p.value==="blur",()=>{q(()=>e.focused,v=>{v||m()})}),q(d,()=>{n==null||n.update(C.value,d.value,f.value)});function _(){h(),l.value=null}function h(){o.value=!0,u.value=[]}async function m(){var V;const v=[];y.value=!0;for(const k of e.rules){if(v.length>=((V=e.maxErrors)!=null?V:1))break;const $=await(typeof k=="function"?k:()=>k)(s.value);if($!==!0){if(typeof $!="string"){console.warn(`${$} is not a valid value. Rule functions must return boolean true or a string.`);continue}v.push($)}}return u.value=v,y.value=!1,o.value=!1,u.value}return{errorMessages:f,isDirty:r,isDisabled:g,isReadonly:b,isPristine:o,isValid:d,isValidating:y,reset:_,resetValidation:h,validate:m,validationClasses:S}}function xl(e){const{t:i}=Te();function a(l){var r;let{name:s}=l;const n={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],u=e[`onClick:${s}`],o=u&&n?i(`$vuetify.input.${n}`,(r=e.label)!=null?r:""):void 0;return t(ye,{icon:e[`${s}Icon`],"aria-label":o,onClick:u},null)}return{InputIcon:a}}const Se=j({id:String,appendIcon:w,prependIcon:w,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":le,"onClick:append":le,...H(),...Al()},"v-input"),Ie=ue()({name:"VInput",props:{...Se()},emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:a,slots:l,emit:s}=i;const{densityClasses:n}=Q(e),{InputIcon:u}=xl(e),o=z(),r=c(()=>e.id||`input-${o}`),g=c(()=>`${r.value}-messages`),{errorMessages:b,isDirty:f,isDisabled:d,isReadonly:y,isPristine:S,isValid:C,isValidating:p,reset:_,resetValidation:h,validate:m,validationClasses:v}=Pl(e,"v-input",r),V=c(()=>({id:r,messagesId:g,isDirty:f,isDisabled:d,isReadonly:y,isPristine:S,isValid:C,isValidating:p,reset:_,resetValidation:h,validate:m}));return x(()=>{var k,I,$,T,F;const E=!!(l.prepend||e.prependIcon),L=!!(l.append||e.appendIcon),M=!!((k=e.messages)!=null&&k.length||b.value.length),U=!e.hideDetails||e.hideDetails==="auto"&&(M||!!l.details);return t("div",{class:["v-input",`v-input--${e.direction}`,n.value,v.value]},[E&&t("div",{key:"prepend",class:"v-input__prepend"},[(I=l.prepend)==null?void 0:I.call(l,V.value),e.prependIcon&&t(u,{key:"prepend-icon",name:"prepend"},null)]),l.default&&t("div",{class:"v-input__control"},[($=l.default)==null?void 0:$.call(l,V.value)]),L&&t("div",{key:"append",class:"v-input__append"},[e.appendIcon&&t(u,{key:"append-icon",name:"append"},null),(T=l.append)==null?void 0:T.call(l,V.value)]),U&&t("div",{class:"v-input__details"},[t(pl,{id:g.value,active:M,messages:b.value.length>0?b.value:e.messages},{message:l.message}),(F=l.details)==null?void 0:F.call(l,V.value)])])}),{reset:_,resetValidation:h,validate:m}}});function Bl(e){const i=Object.keys(Ie.props).filter(a=>!Fe(a));return re(e,i)}const wl=D({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Se(),...ke()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,i){let{attrs:a,slots:l}=i;const s=R(e,"indeterminate"),n=R(e,"modelValue"),{loaderClasses:u}=me(e),{isFocused:o,focus:r,blur:g}=$l(e),b=c(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),f=z(),d=c(()=>e.id||`switch-${f}`);function y(){s.value&&(s.value=!1)}return x(()=>{const[S,C]=de(a),[p,_]=Bl(e),[h,m]=kl(e),v=B();function V(){var k,I;(k=v.value)==null||(I=k.input)==null||I.click()}return t(Ie,K({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":s.value},u.value]},S,p,{id:d.value,focused:o.value}),{...l,default:k=>{let{id:I,messagesId:$,isDisabled:T,isReadonly:F,isValid:E}=k;return t(pe,K({ref:v},h,{modelValue:n.value,"onUpdate:modelValue":[L=>n.value=L,y],id:I.value,"aria-describedby":$.value,type:"checkbox","aria-checked":s.value?"mixed":void 0,disabled:T.value,readonly:F.value,onFocus:r,onBlur:g},C),{...l,default:()=>t("div",{class:"v-switch__track",onClick:V},null),input:L=>{let{textColorClasses:M,textColorStyles:U}=L;return t("div",{class:["v-switch__thumb",M.value],style:U.value},[e.loading&&t(ge,{name:"v-switch",active:!0,color:E.value===!1?void 0:b.value},{default:P=>l.loader?l.loader(P):t(dl,{active:P.isActive,color:P.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}}),Ml=Me({__name:"Leds",setup(e){const{leds:i}=Oe(ne()),{toggleLed:a,setLed:l}=ne(),s=i.value.map(n=>({get(){return n.isOn},set(u){console.log(u),l(n.id,u)}}));return(n,u)=>(J(),ae(bl,{flat:""},{default:G(()=>[t(be,null,{default:G(()=>[t(cl,{fluid:""},{default:G(()=>[t(vl,null,{default:G(()=>[t(fl,{cols:"12",sm:"4",md:"4"},{default:G(()=>[(J(!0),Re(Ue,null,Ee(N(i),(o,r)=>(J(),ae(wl,{key:o.id,label:"id "+o.isOn,modelValue:N(s)[r],"onUpdate:modelValue":g=>N(s)[r]=g,color:"red","hide-details":""},null,8,["label","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Ml as default};