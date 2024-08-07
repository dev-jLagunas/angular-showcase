import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';
import { BasicContentProjectionComponent } from './basic-content-projection/basic-content-projection.component';
import { MultipleSlotsProjectionComponent } from './multiple-slots-projection/multiple-slots-projection.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [
    CodeBlockComponent,
    BasicContentProjectionComponent,
    MultipleSlotsProjectionComponent,
  ],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss',
})
export class ContentProjectionComponent {}
