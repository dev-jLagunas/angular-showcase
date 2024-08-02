import { Component } from '@angular/core';
import { AcceptingInputComponent } from './accepting-input/accepting-input.component';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [AcceptingInputComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss',
})
export class ComponentCommunicationComponent {}
