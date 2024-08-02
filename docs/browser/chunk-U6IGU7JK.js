import{c as Q}from"./chunk-NYLWRNIY.js";import{g as T}from"./chunk-W6RIRVWT.js";import{$a as M,Aa as a,Ba as p,K as q,Ka as D,L as $,N,Oa as F,Pa as u,Qa as W,Sa as x,Ta as C,U as v,Ua as E,V as h,Va as o,W as L,Wa as s,X as A,Xa as l,Ya as k,Za as b,_a as V,a as O,aa as P,ab as d,ba as g,ca as _,cb as f,db as j,e as S,eb as m,fb as z,ia as y,mb as R,ob as I}from"./chunk-E6IX27NE.js";var U=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["app-home-header"]],standalone:!0,features:[m],decls:5,vars:0,consts:[[1,"w-90vw","mx-auto"],["src","assets/angular_gradient.png","alt","Angular logo",1,"h-28","mx-auto"],[1,"text-5xl","font-bold","text-center","mb-4"]],template:function(t,r){t&1&&(o(0,"section",0)(1,"div"),l(2,"img",1),o(3,"h1",2),d(4,"Angular Showcase"),s()()())}});let n=e;return n})();var Y=(()=>{let e=class e{constructor(){this._listeners=[]}notify(i,t){for(let r of this._listeners)r(i,t)}listen(i){return this._listeners.push(i),()=>{this._listeners=this._listeners.filter(t=>i!==t)}}ngOnDestroy(){this._listeners=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=q({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ie=0,H=new N("CdkAccordion"),B=(()=>{let e=class e{constructor(){this._stateChanges=new S,this._openCloseAllActions=new S,this.id=`cdk-accordion-${ie++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(i){this._stateChanges.next(i)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=A({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[v.HasDecoratorInputTransform,"multi","multi",I]},exportAs:["cdkAccordion"],standalone:!0,features:[j([{provide:H,useExisting:e}]),D,P]});let n=e;return n})(),ne=0,G=(()=>{let e=class e{get expanded(){return this._expanded}set expanded(i){if(this._expanded!==i){if(this._expanded=i,this.expandedChange.emit(i),i){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(i,t,r){this.accordion=i,this._changeDetectorRef=t,this._expansionDispatcher=r,this._openCloseAllSubscription=O.EMPTY,this.closed=new y,this.opened=new y,this.destroyed=new y,this.expandedChange=new y,this.id=`cdk-accordion-child-${ne++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=r.listen((Z,ee)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===ee&&this.id!==Z&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(i=>{this.disabled||(this.expanded=i)})}};e.\u0275fac=function(t){return new(t||e)(p(H,12),p(R),p(Y))},e.\u0275dir=A({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[v.HasDecoratorInputTransform,"expanded","expanded",I],disabled:[v.HasDecoratorInputTransform,"disabled","disabled",I]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[j([{provide:H,useValue:void 0}]),D]});let n=e;return n})(),K=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=L({type:e}),e.\u0275inj=$({});let n=e;return n})();var se=(n,e)=>({"fa-chevron-right":n,"fa-chevron-down":e});function re(n,e){if(n&1){let c=k();o(0,"cdk-accordion-item",4,0)(2,"div",5),b("click",function(){g(c);let t=M(1);return _(t.toggle())}),d(3),o(4,"span",6),l(5,"i",7),s()(),o(6,"div",8),d(7),s()()}if(n&2){let c=e.$implicit,i=e.$index,t=M(1);F("id","accordion-header-"+i)("aria-expanded",t.expanded)("aria-controls","accordion-body-"+i),a(3),f(" ",c.question," "),a(2),u("ngClass",z(10,se,t.expanded,!t.expanded)),a(),W("display",t.expanded?"":"none"),F("id","accordion-body-"+i)("aria-labelledby","accordion-header-"+i),a(),f(" ",c.answer," ")}}var J=(()=>{let e=class e{constructor(){this.items=[{question:"What is the purpose of this project?",answer:`While going through the Angular documentation I realized that I was having a really difficult time truly grasping and internalizing the concepts on a deeper level.
        There were a lot of reasons for this but one of the most prominent was the fact that the documentation was written in a really technical manner and there were not enough
        real world examples. Unfortunately, this meant I kept forgetting a lot of concepts I had already learned. That is where this project came to mind. The purpose of this
        project is to provide me a way to truly understand all these concepts by "re-teaching" them to myself but in a simple, straightforward way that I can truly understand and internalize.`},{question:"As a visitor of this project, what can I expect?",answer:`I am building this project mainly for myself, but I feel that there are definitely other people out there like me. People that are willing to put in the work to improve their skills but
        are coming from non-technical backgrounds. As a person that came from a non-technical background, I learn in a much different way. If you are the same, then you may be able to grasp all the
        concepts more easily if they are taught to you in a much simpler way. Simply put, visitors of this project can expect simple but concise explanations and examples 
        of all the must know Angular features.`},{question:'Can I expect everything to be precise and at a "professional developer" level?',answer:`I do think its important to let visitors of my site know that this quick guide to Angular was written by an aspiring self-taught frontend developer. So even though I will mainly
        be using the actual Angular team documentation as reference, I may still make errors. Nonetheless, the reality is I am working towards becoming a professional at this craft so I will put in
        the effort to make sure I am providing the accurate information because in the end its extremely important to me that I do my best.`},{question:"What Angular versions are covered?",answer:`Angular has recently released a lot of new features that may be considered more modern. Such as a new control flow syntax, signals, standalone components, etc. I have more experience in these
      modern features so the majority of the focus will be placed on these features. I will provide notes and a quick rundown of how certain things have changed, but there is already a lot of great
      information out there on the more established Angular features. Furthermore, this project is by no means going to be a full-fledged Angular tutorial so covering all these changes is not as important
      to me. Like I mentioned earlier, I really mainly needed a way to re-learn Angular while also contributing back to the developer community in my own way.`}],this.expandedIndex=0}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["app-home-faq"]],standalone:!0,features:[m],decls:6,vars:0,consts:[["accordionItem","cdkAccordionItem"],[1,"text-sm","w-90vw","mx-auto","md:w-full"],[1,"text-3xl","font-bold","my-2","w-max"],[1,"block"],["role","button","tabindex","0",1,"mb-2","block"],[1,"mb-1","flex","justify-between","pr-2",3,"click"],[1,""],[1,"fas",3,"ngClass"],["role","region",1,"py-1","border-b-2"]],template:function(t,r){t&1&&(o(0,"div",1)(1,"h2",2),d(2,"ABOUT"),s(),o(3,"cdk-accordion",3),C(4,re,8,13,"cdk-accordion-item",4,x),s()()),t&2&&(a(4),E(r.items))},dependencies:[K,B,G,T]});let n=e;return n})();function ae(n,e){if(n&1){let c=k();o(0,"article",2)(1,"div",3)(2,"h3",4),b("click",function(){let t=g(c).$implicit,r=V();return _(r.navigateToCategory(t))}),d(3),s(),o(4,"p",5),d(5),s()(),o(6,"button",6),b("click",function(){let t=g(c).$implicit,r=V();return _(r.navigateToCategory(t))}),l(7,"i",7),s()()}if(n&2){let c=e.$implicit;u("ngClass",c.borderColor),a(3),f(" ",c.name," "),a(2),f(" ",c.description," ")}}var X=(()=>{let e=class e{constructor(i){this.router=i,this.categories=[]}navigateToCategory(i){let t=i.name.toLowerCase().replace(/ /g,"-");this.router.navigate([`${t}/${i.id}`])}};e.\u0275fac=function(t){return new(t||e)(p(Q))},e.\u0275cmp=h({type:e,selectors:[["app-home-categories"]],inputs:{categories:"categories"},standalone:!0,features:[m],decls:5,vars:0,consts:[[1,"w-90vw","mx-auto","md:w-full"],[1,"text-3xl","font-bold","my-4","w-max"],[1,"border-l-4","rounded-l-sm","flex","justify-between","items-center","px-2","mb-4",3,"ngClass"],[1,"w-full"],[1,"font-semibold","underline","underline-offset-2","hover:cursor-pointer",3,"click"],[1,"text-slate-800","text-sm","pr-1"],[1,"text-red-500","p-1","rounded-sm",3,"click"],[1,"fa-solid","fa-magnifying-glass","text-xl"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"h2",1),d(2,"CATEGORIES"),s(),C(3,ae,8,3,"article",2,x),s()),t&2&&(a(3),E(r.categories))},dependencies:[T]});let n=e;return n})();var Te=(()=>{let e=class e{constructor(){this.categories=[{id:"1",name:"Components",description:`Here you can find information about components. Things like, how to style components, how to communicate between components,
      content projection among components, lifecycle hooks, and other important information related to components.`,borderColor:"border-l-green-500"},{id:"2",name:"Template Syntax",description:`Here you'll find information related to component templates. Things like, text interpolation, data binding, class binding,
      event binding, control flow, pipes, and other import information related to Angular templates.`,borderColor:"border-l-orange-500"},{id:"3",name:"Directives",description:"This section covers directives. You will find information on attribute and structural directives.",borderColor:"border-l-yellow-500"},{id:"4",name:"Dependency Injection",description:`This section will go in depth with dependency injection. There will be information on how to create an injectable service, injection context,
      and other important concepts related to dependency injection.`,borderColor:"border-l-blue-500"},{id:"5",name:"Signals",description:"Here you'll find information on signals. You can learn what signals are, how to use them, their benefits, and other information related to signals.",borderColor:"border-l-purple-500"},{id:"6",name:"Routing",description:"Here you can find information about routing. Things like, how to route to different pages, routing parameters, and other information related to routing.",borderColor:"border-l-emerald-500"},{id:"7",name:"Forms",description:"Here you'll find a breakdown of forms. Reactive forms, template-driven forms, validating forms, and other important form information.",borderColor:"border-l-indigo-500"},{id:"8",name:"Http Client",description:`This section will give an overview on HTTP client. Things like setting up an http client, making the request, working with the data, and other important concepts
      related to HTTP client.`,borderColor:"border-l-pink-500"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["app-home-main"]],standalone:!0,features:[m],decls:7,vars:1,consts:[[1,"md:w-5/6","md:mx-auto"],[3,"categories"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"section"),l(2,"app-home-header"),s(),o(3,"section"),l(4,"app-home-faq"),s(),o(5,"section"),l(6,"app-home-categories",1),s()()),t&2&&(a(6),u("categories",r.categories))},dependencies:[U,J,X]});let n=e;return n})();export{Te as a};
