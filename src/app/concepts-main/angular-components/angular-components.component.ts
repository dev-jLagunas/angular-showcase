import { Component } from '@angular/core';
import { Subcategory } from '../../interfaces/subcategory';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-angular-components',
  standalone: true,
  imports: [NgClass],
  templateUrl: './angular-components.component.html',
  styleUrl: './angular-components.component.scss',
})
export class AngularComponentsComponent {
  subcategories: Subcategory[] = [
    {
      id: '1-1',
      name: 'Component Essentials',
      description: 'Learn the basics of components.',
      link: '/components/essentials',
      borderColor: 'border-l-red-500',
    },
    {
      id: '1-2',
      name: 'Component Communication',
      description: 'Learn how components communicate.',
      link: '/components/communication',
      borderColor: 'border-l-green-500',
    },
    {
      id: '1-3',
      name: 'Content Projection',
      description: 'Learn about content projection.',
      link: '/components/projection',
      borderColor: 'border-l-blue-500',
    },
    {
      id: '1-4',
      name: 'Lifecycle Hooks',
      description: 'Understand lifecycle hooks.',
      link: '/components/lifecycle',
      borderColor: 'border-l-yellow-500',
    },
  ];
}
