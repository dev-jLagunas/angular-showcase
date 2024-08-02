import{e as w}from"./chunk-NYLWRNIY.js";import{a as h}from"./chunk-KW4BVBVF.js";import"./chunk-MZVAG55R.js";import"./chunk-W6RIRVWT.js";import{Aa as s,Pa as r,Sa as C,Ta as y,Ua as M,V as c,Va as t,Wa as n,Xa as a,ab as e,bb as f,eb as p,ya as x}from"./chunk-E6IX27NE.js";import"./chunk-5FZOKLP6.js";function P(l,o){if(l&1&&(t(0,"article",2)(1,"a",3),e(2),n(),t(3,"p",4),e(4),n()()),l&2){let u=o.$implicit;s(),r("href",u.link,x),s(),f(u.title),s(2),f(u.description)}}var b=(()=>{let o=class o{constructor(){this.resources=[]}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=c({type:o,selectors:[["app-additional-resources"]],inputs:{resources:"resources"},standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"mt-4"],[1,"font-semibold","underline","underline-offset-2","mb-2"],[1,"text-sm","text-slate-800","flex","flex-col"],["target","_blank","rel","noopener noreferrer",1,"text-blue-600",3,"href"],[1,"mb-2"]],template:function(i,m){i&1&&(t(0,"div",0)(1,"h3",1),e(2," Additional Resources "),n(),y(3,P,5,3,"article",2,C),n()),i&2&&(s(3),M(m.resources))}});let l=o;return l})();var S=(()=>{let o=class o{constructor(){this.codeSnippet=`
    @Component({
      selector: 'my-component',
      templateUrl: 'my-component.html',
      styleUrls: ['my-component.css'],
      standalone: true,
    })
    export class MyComponent { }
  `,this.codeSnippetInline=`
    @Component({
      selector: 'my-component',
      template: <p class='css-class1'>my component content goes here</p>,
      styles: [
        css-class1 {
          cssproperty: value;
        }
      ],
      standalone: true,
    })
  export class MyComponent {}
`}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=c({type:o,selectors:[["app-component-basics"]],standalone:!0,features:[p],decls:54,vars:2,consts:[[1,"font-semibold","underline","underline-offset-2"],[1,"text-slate-800","text-sm"],[1,"mt-4"],[1,"font-semibold","underline","underline-offset-2","mb-2"],[1,"text-slate-800","text-sm","flex","flex-col","gap-2"],[1,"indent-4"],[1,"fa-solid","fa-circle-check","pr-2"],[1,"mt-2"],[3,"code"],[1,"text-sm","text-slate-800"],[1,"font-semibold"]],template:function(i,m){i&1&&(t(0,"article")(1,"h3",0),e(2," 1. What are components? "),n(),t(3,"p",1),e(4," Components are like the individual lego blocks we use to create full applications in Angular. This means we can build a tree of components which add up to create easily maintained and scalable apps. "),n()(),t(5,"article",2)(6,"h3",3),e(7," 2. How are components defined? "),n(),t(8,"ul",4)(9,"li"),e(10,"Components must have the following:"),n(),t(11,"li",5),a(12,"i",6),e(13,"A @Component decorator with meta data and configuration "),n(),t(14,"li",5),a(15,"i",6),e(16,"The HTML template for our user interface. This may be inline or a link to separate file "),n(),t(17,"li",5),a(18,"i",6),e(19,"A CSS selector that will represent our actual component "),n(),t(20,"li",5),a(21,"i",6),e(22,"The Typescript class with our behaviors, state, input, and data "),n(),t(23,"li"),e(24," Other important metada are our styles property and a standalone property (which is now recommended by the Angular team) "),n()()(),t(25,"article",7)(26,"h3",3),e(27," 3. Here are some examples: "),n(),t(28,"div"),a(29,"app-code-block",8),t(30,"p",9),e(31," This code snippet defines an Angular standalone component named MyComponent with the "),t(32,"span",10),e(33,"selector"),n(),e(34," my-component. It uses an "),t(35,"span",10),e(36,"external "),n(),e(37,"HTML file (my-component.html) for its template and an "),t(38,"span",10),e(39,"external"),n(),e(40," CSS file (my-component.css) for its styles. The "),t(41,"span",10),e(42,"standalone:"),n(),e(43," true property indicates that this component is not part of any Angular module. "),n()(),t(44,"section",2),a(45,"app-code-block",8),t(46,"h4",9),e(47," On the contrary, here we see an example that uses "),t(48,"span",10),e(49,"inline"),n(),e(50," styles and "),t(51,"span",10),e(52,"inline"),n(),e(53," templates. I have received mixed answers to the question of up to what point should we stop using these inline options. Personally, I find it much easier to separate the the three and that does seem to be the most recommended approach. "),n()()()),i&2&&(s(29),r("code",m.codeSnippet),s(16),r("code",m.codeSnippetInline))},dependencies:[h]});let l=o;return l})();var v=(()=>{let o=class o{constructor(){this.codeSelector=`
   @Component({
      standalone: true,
      selector: 'my-component-a',
      templateUrl: 'my-component-a.html',
      styleUrls: ['my-component-a.css'],
    })
    export class MyComponent { }
  `,this.codeParent=`
    @Component({
      standalone: true,
      imports: [MyComponentA],
      selector: 'my-component-b',
      templateUrl: '
        <p>Check out my child component below!</p>
        <my-component-a></my-component-a>
      ',
      styleUrls: ['my-component-b.css'],
    })
    export class MyComponent { }
  `,this.codeImport=`
    import { Component } from '@angular/core';
    import { MyComponentA } from './path-to-my-component-a/my-component-a.component';

    @Component({
      standalone: true,
      imports: [MyComponentA],
      selector: 'my-component-b',
      templateUrl: '
        <p>Check out my child component below!</p>
        <my-component-a></my-component-a>
      ',
      styleUrls: ['my-component-b.css'],
    })
    export class MyComponent { }
  `}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=c({type:o,selectors:[["app-component-usage"]],standalone:!0,features:[p],decls:48,vars:3,consts:[[1,"custom-question-style","mb-2"],[1,"text-sm"],[1,"font-semibold"],[3,"code"],[1,"italic"],[1,"custom-question-style"],[1,"font-semibold","text-blue-600"],["href","https://angular.dev/guide/ngmodules"]],template:function(i,m){i&1&&(t(0,"article")(1,"h3",0),e(2," 4. How do we actually use/display our components? "),n(),t(3,"p",1),e(4," Remember the "),t(5,"span",2),e(6,"selector"),n(),e(7," we talked about? Well, that "),t(8,"span",2),e(9,"selector"),n(),e(10," property provides us the solution on how to use the component. "),n(),a(11,"app-code-block",3),n(),t(12,"article")(13,"p",1),e(14," Below we can see that we are working with a new "),t(15,"span",2),e(16,"component."),n(),t(17,"span",4),e(18," MyComponentB"),n(),e(19," will now be the "),t(20,"span",2),e(21,"parent "),n(),e(22,"of the above component so we are able to use the aforementioned selector as a custom HTML tag within our parents template. Of course, this also means that "),t(23,"span",4),e(24,"MyComponentA"),n(),e(25," will be a so called "),t(26,"span",2),e(27,"child"),n(),e(28," component. "),n(),a(29,"app-code-block",3),n(),t(30,"article")(31,"h3",5),e(32,"5. Do I need to import the components?"),n(),t(33,"p",1),e(34," Yes, you must import your components in order to have access to them. In this case, we are working with "),t(35,"span",2),e(36,"standalone"),n(),e(37," components. This means we directly import other components, directives, or pipes that we plan on using. You can see an example of this below. "),n(),a(38,"app-code-block",3),t(39,"p",1),e(40," Please note that "),t(41,"span",2),e(42,"standalone"),n(),e(43," components are the recommended way to work with Angular for new development. The method used before this worked with "),t(44,"span",6)(45,"a",7),e(46,"NgModule"),n()(),e(47," as the mechanism to work with components. Please see the link for more information on that as that will NOT be covered. "),n()()),i&2&&(s(11),r("code",m.codeSelector),s(18),r("code",m.codeParent),s(9),r("code",m.codeImport))},dependencies:[h]});let l=o;return l})();var B=(()=>{let o=class o{constructor(){this.resources=[{title:"Angular Documentation",description:"For more information on Angular components, visit the official Angular documentation.",link:"https://angular.io/guide/component-overview"},{title:"Freecode Camp",description:"Learn more about Angular directives here.",link:"https://angular.io/guide/attribute-directives"}]}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=c({type:o,selectors:[["app-component-essentials"]],standalone:!0,features:[p],decls:11,vars:1,consts:[[1,"w-90vw","mx-auto"],["src","assets/angular-svgrepo-com.svg","alt","angular-logo",1,"h-28","mx-auto"],[1,"text-3xl","text-center","font-bold","mb-4"],[1,"lg:w-4/5","lg:mx-auto"],[1,"lg:w-4/5","lg:mx-auto","mt-4"],[3,"resources"]],template:function(i,m){i&1&&(t(0,"div",0)(1,"header"),a(2,"img",1),t(3,"h2",2),e(4,"Components Essentials"),n()(),t(5,"section",3),a(6,"app-component-basics"),n(),t(7,"section",4),a(8,"app-component-usage"),n(),t(9,"footer",3),a(10,"app-additional-resources",5),n()()),i&2&&(s(10),r("resources",m.resources))},dependencies:[w,S,v,b],styles:[`pre[_ngcontent-%COMP%]   code.hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:1em}code.hljs[_ngcontent-%COMP%]{padding:3px 5px}.hljs[_ngcontent-%COMP%]{color:#24292e;background:#fff}.hljs-doctag[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-meta[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-template-tag[_ngcontent-%COMP%], .hljs-template-variable[_ngcontent-%COMP%], .hljs-type[_ngcontent-%COMP%], .hljs-variable.language_[_ngcontent-%COMP%]{color:#d73a49}.hljs-title[_ngcontent-%COMP%], .hljs-title.class_[_ngcontent-%COMP%], .hljs-title.class_.inherited__[_ngcontent-%COMP%], .hljs-title.function_[_ngcontent-%COMP%]{color:#6f42c1}.hljs-attr[_ngcontent-%COMP%], .hljs-attribute[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-meta[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%], .hljs-operator[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .hljs-selector-attr[_ngcontent-%COMP%], .hljs-selector-class[_ngcontent-%COMP%], .hljs-selector-id[_ngcontent-%COMP%]{color:#005cc5}.hljs-regexp[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-meta[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%]{color:#032f62}.hljs-built_in[_ngcontent-%COMP%], .hljs-symbol[_ngcontent-%COMP%]{color:#e36209}.hljs-comment[_ngcontent-%COMP%], .hljs-code[_ngcontent-%COMP%], .hljs-formula[_ngcontent-%COMP%]{color:#6a737d}.hljs-name[_ngcontent-%COMP%], .hljs-quote[_ngcontent-%COMP%], .hljs-selector-tag[_ngcontent-%COMP%], .hljs-selector-pseudo[_ngcontent-%COMP%]{color:#22863a}.hljs-subst[_ngcontent-%COMP%]{color:#24292e}.hljs-section[_ngcontent-%COMP%]{color:#005cc5;font-weight:700}.hljs-bullet[_ngcontent-%COMP%]{color:#735c0f}.hljs-emphasis[_ngcontent-%COMP%]{color:#24292e;font-style:italic}.hljs-strong[_ngcontent-%COMP%]{color:#24292e;font-weight:700}.hljs-addition[_ngcontent-%COMP%]{color:#22863a;background-color:#f0fff4}.hljs-deletion[_ngcontent-%COMP%]{color:#b31d28;background-color:#ffeef0}














`]});let l=o;return l})();export{B as ComponentEssentialsComponent};
