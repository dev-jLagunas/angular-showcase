import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss',
})
export class ContentProjectionComponent {}
