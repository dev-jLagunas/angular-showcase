import { Component } from '@angular/core';
import { AcceptingInputComponent } from './accepting-input/accepting-input.component';
import { OutputCommunicationComponent } from './output-communication/output-communication.component';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [AcceptingInputComponent, OutputCommunicationComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss',
})
export class ComponentCommunicationComponent {}
