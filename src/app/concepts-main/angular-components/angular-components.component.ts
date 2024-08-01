import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-components',
  standalone: true,
  imports: [],
  templateUrl: './angular-components.component.html',
  styleUrl: './angular-components.component.scss',
})
export class AngularComponentsComponent implements OnInit {
  categoryId!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = params.get('id');
    });
  }
}
