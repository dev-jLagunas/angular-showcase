import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentBasicsComponent } from './component-basics/component-basics.component';
import { ComponentUsageComponent } from './component-usage/component-usage.component';
import { AdditionalResourcesComponent } from '../../../shared/additional-resources/additional-resources.component';
import { Resource } from '../../../interfaces/subcategory';

@Component({
  selector: 'app-component-essentials',
  standalone: true,
  imports: [
    RouterModule,
    ComponentBasicsComponent,
    ComponentUsageComponent,
    AdditionalResourcesComponent,
  ],
  templateUrl: './component-essentials.component.html',
  styleUrl: './component-essentials.component.scss',
})
export class ComponentEssentialsComponent {
  resources: Resource[] = [
    {
      title: 'Angular Documentation',
      description:
        'For more information on Angular components, visit the official Angular documentation.',
      link: 'https://angular.io/guide/component-overview',
    },
    {
      title: 'Freecode Camp',
      description: 'Learn more about Angular directives here.',
      link: 'https://angular.io/guide/attribute-directives',
    },
  ];
}
