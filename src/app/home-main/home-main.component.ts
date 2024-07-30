import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFaqComponent } from './home-faq/home-faq.component';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [HomeHeaderComponent, HomeFaqComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {}
