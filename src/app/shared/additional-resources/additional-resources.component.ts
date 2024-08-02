import { Component, Input } from '@angular/core';
import { Resource } from '../../interfaces/subcategory';

@Component({
  selector: 'app-additional-resources',
  standalone: true,
  imports: [],
  templateUrl: './additional-resources.component.html',
  styleUrl: './additional-resources.component.scss',
})
export class AdditionalResourcesComponent {
  @Input() resources: Resource[] = [];
}
