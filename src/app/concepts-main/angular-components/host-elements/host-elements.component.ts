import { Component } from '@angular/core';
import { HostElementsOverviewComponent } from './host-elements-overview/host-elements-overview.component';
import { HostDecoratorsComponent } from './host-decorators/host-decorators.component';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [HostElementsOverviewComponent, HostDecoratorsComponent],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
})
export class HostElementsComponent {}
