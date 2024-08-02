import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss',
})
export class ComponentCommunicationComponent {}
