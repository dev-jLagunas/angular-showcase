import { Component } from '@angular/core';
import { Subcategory } from '../../interfaces/subcategory';
import { NgClass } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-components',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './angular-components.component.html',
  styleUrl: './angular-components.component.scss',
})
export class AngularComponentsComponent {
  subcategories: Subcategory[] = [
    {
      id: '1-1',
      name: 'Component Essentials',
      description: 'Learn the basics of components.',
      borderColor: 'border-l-red-500',
    },
    {
      id: '1-2',
      name: 'Component Communication',
      description: 'Learn how components communicate.',
      borderColor: 'border-l-green-500',
    },
    {
      id: '1-3',
      name: 'Content Projection',
      description: 'Learn about content projection.',
      borderColor: 'border-l-blue-500',
    },
    {
      id: '1-4',
      name: 'Host Elements',
      description: 'Understand how to work with host elements.',
      borderColor: 'border-l-orange-500',
    },
    {
      id: '1-5',
      name: 'Lifecycle Hooks',
      description: 'Understand lifecycle hooks.',
      borderColor: 'border-l-yellow-500',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToSubcategory(subcategory: Subcategory) {
    const parentId = this.route.snapshot.paramMap.get('id');
    const path = subcategory.name.toLowerCase().replace(/ /g, '-');
    this.router.navigate([`/components/${parentId}/${path}`]);
  }
}
