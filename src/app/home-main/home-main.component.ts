import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFaqComponent } from './home-faq/home-faq.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';

interface Category {
  id: string;
  name: string;
  description: string;
  borderColor: string;
}

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [HomeHeaderComponent, HomeFaqComponent, HomeCategoriesComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {
  categories: Category[] = [
    {
      id: '1',
      name: 'Components',
      description: `Here you can find information about components. Things like, how to style components, how to communicate between components,
      content projection among components, lifecycle hooks, and other important information related to components.`,
      borderColor: 'border-l-green-500',
    },
    {
      id: '2',
      name: 'Template Syntax',
      description: `Here you'll find information related to component templates. Things like, text interpolation, data binding, class binding,
      event binding, control flow, pipes, and other import information related to Angular templates.`,
      borderColor: 'border-l-orange-500',
    },
    {
      id: '3',
      name: 'Directives',
      description:
        'This section covers directives. You will find information on attribute and structural directives.',
      borderColor: 'border-l-yellow-500',
    },
    {
      id: '4',
      name: 'Dependency Injection',
      description: `This section will go in depth with dependency injection. There will be information on how to create an injectable service, injection context,
      and other important concepts related to dependency injection.`,
      borderColor: 'border-l-blue-500',
    },
    {
      id: '5',
      name: 'Signals',
      description: `Here you'll find information on signals. You can learn what signals are, how to use them, their benefits, and other information related to signals.`,
      borderColor: 'border-l-purple-500',
    },
    {
      id: '6',
      name: 'Routing',
      description:
        'Here you can find information about routing. Things like, how to route to different pages, routing parameters, and other information related to routing.',
      borderColor: 'border-l-emerald-500',
    },
    {
      id: '7',
      name: 'Forms',
      description: `Here you'll find a breakdown of forms. Reactive forms, template-driven forms, validating forms, and other important form information.`,
      borderColor: 'border-l-indigo-500',
    },
    {
      id: '8',
      name: 'Http Client',
      description: `This section will give an overview on HTTP client. Things like setting up an http client, making the request, working with the data, and other important concepts
      related to HTTP client.`,
      borderColor: 'border-l-pink-500',
    },
  ];
}
