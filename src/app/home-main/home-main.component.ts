import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFaqComponent } from './home-faq/home-faq.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';

interface Category {
  name: string;
  icon: string;
  description: string;
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
      name: 'Components',
      icon: 'component icon goes here',
      description: 'here you can find the following things.',
    },
  ];
}
