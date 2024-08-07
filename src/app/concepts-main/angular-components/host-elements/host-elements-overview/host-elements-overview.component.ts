import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-host-elements-overview',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './host-elements-overview.component.html',
  styleUrl: './host-elements-overview.component.scss',
})
export class HostElementsOverviewComponent {
  codeHostExample: string = `
    <!-- The <app-my-component> element is the host element for MyComponent -->
      app-my-component></app-my-component>
  `;

  codeHostBinding: string = `
    @Component({
      selector: 'app-clickable-box',
      template: \`<div>Click me!</div>\`,
      host: {
        '[style.border]': "'2px solid black'",
        '[style.padding]': "'10px'",
        '(click)': 'onBoxClick()',
      },
    })
    export class ClickableBoxComponent {
      onBoxClick() {
        alert('Box clicked!');
      }
    }
    `;
}
