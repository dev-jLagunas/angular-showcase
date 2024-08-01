import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

interface Category {
  id: string;
  name: string;
  description: string;
  borderColor: string;
}

@Component({
  selector: 'app-home-categories',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home-categories.component.html',
  styleUrl: './home-categories.component.scss',
})
export class HomeCategoriesComponent {
  @Input({ required: true }) categories: Category[] = [];

  constructor(private router: Router) {}

  navigateToCategory(category: Category) {
    const path = category.name.toLowerCase().replace(/ /g, '-');
    this.router.navigate([`${path}/${category.id}`]);
  }
}
