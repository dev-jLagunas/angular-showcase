import { Component, Input } from '@angular/core';

interface Category {
  name: string;
  description: string;
}

@Component({
  selector: 'app-home-categories',
  standalone: true,
  imports: [],
  templateUrl: './home-categories.component.html',
  styleUrl: './home-categories.component.scss',
})
export class HomeCategoriesComponent {
  @Input({ required: true }) categories: Category[] = [];
}
