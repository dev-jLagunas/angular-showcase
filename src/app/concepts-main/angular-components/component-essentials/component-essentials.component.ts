import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentBasicsComponent } from './component-basics/component-basics.component';

@Component({
  selector: 'app-component-essentials',
  standalone: true,
  imports: [RouterModule, ComponentBasicsComponent],
  templateUrl: './component-essentials.component.html',
  styleUrl: './component-essentials.component.scss',
})
export class ComponentEssentialsComponent {}
