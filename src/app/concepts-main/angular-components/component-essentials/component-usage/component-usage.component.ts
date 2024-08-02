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
      standalone: true,
      selector: 'my-component-a',
      templateUrl: 'my-component-a.html',
      styleUrls: ['my-component-a.css'],
    })
    export class MyComponent { }
  `;

  codeParent: string = `
    @Component({
      standalone: true,
      imports: [MyComponentA],
      selector: 'my-component-b',
      templateUrl: '
        <p>Check out my child component below!</p>
        <my-component-a></my-component-a>
      ',
      styleUrls: ['my-component-b.css'],
    })
    export class MyComponent { }
  `;

  codeImport: string = `
    import { Component } from '@angular/core';
    import { MyComponentA } from './path-to-my-component-a/my-component-a.component';

    @Component({
      standalone: true,
      imports: [MyComponentA],
      selector: 'my-component-b',
      templateUrl: '
        <p>Check out my child component below!</p>
        <my-component-a></my-component-a>
      ',
      styleUrls: ['my-component-b.css'],
    })
    export class MyComponent { }
  `;
}
