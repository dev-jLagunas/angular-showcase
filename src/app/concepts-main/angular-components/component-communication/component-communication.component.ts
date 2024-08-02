import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';
import { ComponentUsageComponent } from './component-usage/component-usage.component';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [CodeBlockComponent, ComponentUsageComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss',
})
export class ComponentCommunicationComponent {}
