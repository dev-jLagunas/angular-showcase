import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-component-usage',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './component-usage.component.html',
  styleUrl: './component-usage.component.scss',
})
export class ComponentUsageComponent {
  codeSelector: string = `
   @Component({
      selector: 'my-component',
      templateUrl: 'my-component.html',
      styleUrls: ['my-component.css'],
      standalone: true,
    })
    export class MyComponent { }
  `;
}
