import{a as I,c as T,e as E}from"./chunk-NYLWRNIY.js";import{g as k}from"./chunk-W6RIRVWT.js";import{Aa as c,Ba as m,Pa as g,Sa as f,Ta as C,Ua as b,V as p,Va as r,Wa as s,Xa as x,Ya as v,Za as h,_a as y,ab as l,ba as d,bb as _,ca as u,cb as w,eb as S}from"./chunk-E6IX27NE.js";import"./chunk-5FZOKLP6.js";function L(o,t){if(o&1){let i=v();r(0,"article",4)(1,"h3",5),h("click",function(){let e=d(i).$implicit,a=y();return u(a.navigateToSubcategory(e))}),l(2),s(),r(3,"p",6),l(4),s()()}if(o&2){let i=t.$implicit;g("ngClass",i.borderColor),c(2),w(" ",i.name," "),c(2),_(i.description)}}var $=(()=>{let t=class t{constructor(n,e){this.router=n,this.route=e,this.subcategories=[{id:"1-1",name:"Component Essentials",description:"Learn the basics of components.",borderColor:"border-l-red-500"},{id:"1-2",name:"Component Communication",description:"Learn how components communicate.",borderColor:"border-l-green-500"},{id:"1-3",name:"Content Projection",description:"Learn about content projection.",borderColor:"border-l-blue-500"},{id:"1-4",name:"Lifecycle Hooks",description:"Understand lifecycle hooks.",borderColor:"border-l-yellow-500"}]}navigateToSubcategory(n){let e=this.route.snapshot.paramMap.get("id"),a=n.name.toLowerCase().replace(/ /g,"-");this.router.navigate([`/components/${e}/${a}`])}};t.\u0275fac=function(e){return new(e||t)(m(T),m(I))},t.\u0275cmp=p({type:t,selectors:[["app-angular-components"]],standalone:!0,features:[S],decls:8,vars:0,consts:[[1,"w-90vw","mx-auto"],["src","assets/angular-svgrepo-com.svg","alt","angular-logo",1,"h-28","mx-auto"],[1,"text-3xl","text-center","font-bold","mb-4"],[1,"flex","flex-col","gap-4"],[1,"border-l-4","px-2","rounded-sm",3,"ngClass"],[1,"font-semibold","underline","underline-offset-2","hover:cursor-pointer",3,"click"],[1,"text-slate-800","text-sm","pr-1"]],template:function(e,a){e&1&&(r(0,"section",0)(1,"div"),x(2,"img",1),r(3,"h2",2),l(4," Components & Related Concepts "),s()(),r(5,"div",3),C(6,L,5,3,"article",4,f),s()()),e&2&&(c(6),b(a.subcategories))},dependencies:[k,E]});let o=t;return o})();export{$ as AngularComponentsComponent};
