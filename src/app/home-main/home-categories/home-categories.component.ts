import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

interface Category {
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
}
