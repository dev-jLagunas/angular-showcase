import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home-faq',
  standalone: true,
  imports: [CdkAccordionModule, NgClass],
  templateUrl: './home-faq.component.html',
  styleUrl: './home-faq.component.scss',
})
export class HomeFaqComponent {
  items = [
    {
      question: 'What is the purpose of this project?',
      answer: `While going through the Angular documentation I realized that I was having a really difficult time truly grasping and internalizing the concepts on a deeper level.
        There were a lot of reasons for this but one of the most prominent was the fact that the documentation was written in a really technical manner and there were not enough
        real world examples. Unfortunately, this meant I kept forgetting a lot of concepts I had already learned. That is where this project came to mind. The purpose of this
        project is to provide me a way to truly understand all these concepts by "re-teaching" them to myself but in a simple, straightforward way that I can truly understand and internalize.`,
    },
    {
      question: 'As a visitor of this project, what can I expect?',
      answer: `I am building this project mainly for myself, but I feel that there are definitely other people out there like me. People that are willing to put in the work to improve their skills but
        are coming from non-technical backgrounds. As a person that came from a non-technical background, I learn in a much different way. If you are the same, then you may be able to grasp all the
        concepts more easily if they are taught to you in a much simpler way. Simply put, visitors of this project can expect simple but concise explanations and examples 
        of all the must know Angular features.`,
    },
    {
      question:
        'Can I expect everything to be precise and at a "professional developer" level?',
      answer: `I do think its important to let visitors of my site know that this quick guide to Angular was written by an aspiring self-taught frontend developer. So even though I will mainly
        be using the actual Angular team documentation as reference, I may still make errors. Nonetheless, the reality is I am working towards becoming a professional at this craft so I will put in
        the effort to make sure I am providing the accurate information because in the end its extremely important to me that I do my best.`,
    },
    {
      question: 'What Angular versions are covered?',
      answer: `Angular has recently released a lot of new features that may be considered more modern. Such as a new control flow syntax, signals, standalone components, etc. I have more experience in these
      modern features so the majority of the focus will be placed on these features. I will provide notes and a quick rundown of how certain things have changed, but there is already a lot of great
      information out there on the more established Angular features. Furthermore, this project is by no means going to be a full-fledged Angular tutorial so covering all these changes is not as important
      to me. Like I mentioned earlier, I really mainly needed a way to re-learn Angular while also contributing back to the developer community in my own way.`,
    },
  ];

  expandedIndex = 0;
}
