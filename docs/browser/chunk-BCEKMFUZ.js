import{a as h}from"./chunk-KW4BVBVF.js";import"./chunk-MZVAG55R.js";import"./chunk-W6RIRVWT.js";import{Aa as m,Pa as p,V as s,Va as e,Wa as t,Xa as i,ab as n,eb as d}from"./chunk-E6IX27NE.js";import"./chunk-5FZOKLP6.js";var u=(()=>{let o=class o{constructor(){this.codeChildInput=`
    import { Component, Input } from '@angular/core';

    @Component({
    selector: 'app-child',
    template: \`
      <p>Howdy! here is my parents message: {{ messageFromParent }}</p>
    \`,
    standalone: true
    })
    export class ChildComponent {
      @Input() messageFromParent: string = ''; // This property will receive data from the parent component
  }
  `,this.codeParentInput=`
    import { Component } from '@angular/core';
    import { ChildComponent } from './child.component';

    @Component({
    selector: 'app-parent',
    template: \`
      <h1>Parent Component</h1>
      <app-child [messageFromParent]="messageToChild"></app-child>
    \`,
    standalone: true,
    imports: [ChildComponent]
    })
    export class ParentComponent {
      messageToChild: string = 'Hello my child how are you?!'; // This message will be passed to the child component
  }
  `,this.codeInputSignal=`
    import { Component, input } from '@angular/core';

    @Component({
    standalone: true,
    selector: 'app-child',
    template: \` <p>Hi, {{ messageFromParent() }}!</p> \`,
      })
    export class WelcomeComponent {
      messageFromParent = input('friend');
    }
  `}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=s({type:o,selectors:[["app-accepting-input"]],standalone:!0,features:[d],decls:81,vars:3,consts:[[1,"custom-question-style"],[1,"text-sm"],[1,"text-sm","text-slate-800","mt-2"],[1,""],[1,"mt-4"],[1,"font-semibold"],[1,"text-sm","text-slate-800","indent-4"],[1,"italic","border-b","border-orange-500"],[1,"italic","border-b","border-b-blue-400"],[1,"text-sm","text-slate-800"],[1,"indent-4","mt-2","flex","flex-col","gap-2","text-sm"],[1,"fa-solid","fa-circle-check"],[1,"pl-2","font-medium"],[3,"code"],[1,"mt-2"],[1,"text-sm","text-slate-800","mt-2","flex","flex-col","gap-2"],[1,"font-medium","pl-2"]],template:function(a,r){a&1&&(e(0,"div")(1,"header")(2,"h4",0),n(3," 1. How can I pass data from PARENT component to CHILD component? "),t(),e(4,"p",1),n(5," All right let's get into some actual code. Passing data from one component to another is extremely important. We will start with parent to child communication. Remember a child component means its selector is inside of the parents template. "),t(),e(6,"p",2)(7,"span",3),n(8,"Quick Note:"),t(),n(9," I am using inline templates because its easier to show the examples but for larger more complex projects Angular recommends seperating the view and styles "),t()(),e(10,"article",4)(11,"h5",5),n(12," We actually have 2 different ways to handle such input: "),t(),e(13,"p",6),n(14," We can use the "),e(15,"span",7),n(16,"Input decorator "),t(),n(17,"or the "),e(18,"span",8),n(19,"input function"),t()()(),e(20,"article",4)(21,"h4",0),n(22,"2. @Input decorator"),t(),e(23,"section")(24,"p",9),n(25," To do this we need to work with the parent and child component class and their respective templates. The steps themselves are not very complex but as a beginner I really struggled with this. Let's look at the steps. "),t(),e(26,"ul",10)(27,"li"),i(28,"i",11),e(29,"span",12),n(30,"Child Component Class-"),t(),n(31," import the Input decorator from angular core. "),t(),e(32,"li"),i(33,"i",11),e(34,"span",12),n(35,"Child Component Class-"),t(),n(36," create a class property/member 'decorated' with the Input. This is where our data will be stored. In other words, this is the property that we will eventually be able to display in our template. "),t(),e(37,"li"),i(38,"i",11),e(39,"span",12),n(40,"Child Component Template-"),t(),n(41," add the class property to your template with text interpolation. The double curly braces syntax. Which will be covered later. "),t(),e(42,"li"),i(43,"app-code-block",13),t(),e(44,"li"),i(45,"i",11),e(46,"span",12),n(47,"Parent Component Class-"),t(),n(48," import the child component into the parents class "),t(),e(49,"li"),i(50,"i",11),e(51,"span",12),n(52,"Parent Component Class-"),t(),n(53," create another class property/member that will hold the value we want to pass down to our child. "),t(),e(54,"li"),i(55,"i",11),e(56,"span",12),n(57,"Parent Component Template-"),t(),n(58," add the child component selector to parents template then use the class property you created in the child to then bind it to the property you just created inside your parent. "),t(),e(59,"li"),i(60,"app-code-block",13),t(),e(61,"li"),n(62," And that is it! Not too bad right? Actually, its rather straightforward but when I first started learning Angular I could not seem to grasp this. I hope it helps others that felt the same way. "),t()()()(),e(63,"article",14)(64,"h4",0),n(65,"3. The input function"),t(),e(66,"p",9),n(67," This new approach is based on signals. Signals will be discussed in detail later. For now, lets just see the small differences in how to use it. "),t(),e(68,"ul",15)(69,"li"),i(70,"i",11),e(71,"span",16),n(72,"Differences: "),t(),n(73,"there are differences in how we define the import, how we define the class member, and how we use the value in the template. "),t(),e(74,"li"),i(75,"i",11),e(76,"span",16),n(77,"Explanation: "),t(),n(78,"as you can see below we use lowercase input instead of Input. We use the input function instead of the decorator. Finally, we since the value is a signal we call it with parentheses inside of the template. Otherwise, all the other steps are the same. "),t(),e(79,"li"),i(80,"app-code-block",13),t()()()()),a&2&&(m(43),p("code",r.codeChildInput),m(17),p("code",r.codeParentInput),m(20),p("code",r.codeInputSignal))},dependencies:[h]});let l=o;return l})();var C=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=s({type:o,selectors:[["app-component-communication"]],standalone:!0,features:[d],decls:7,vars:0,consts:[[1,"w-90vw","mx-auto"],["src","assets/angular-svgrepo-com.svg","alt","angular-logo",1,"h-28","mx-auto"],[1,"text-3xl","text-center","font-bold","mb-4"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"header"),i(2,"img",1),e(3,"h2",2),n(4," Components Communication "),t()(),e(5,"section"),i(6,"app-accepting-input"),t()())},dependencies:[u]});let l=o;return l})();export{C as ComponentCommunicationComponent};
