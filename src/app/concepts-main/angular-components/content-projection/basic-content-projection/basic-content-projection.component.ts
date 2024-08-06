import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-basic-content-projection',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './basic-content-projection.component.html',
  styleUrl: './basic-content-projection.component.scss',
})
export class BasicContentProjectionComponent {
  codeBasicProjectionChild: string = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-custom-greeting',
      template: \`
        <div class="greeting">
          <ng-content></ng-content>
        </div>
      \`,
    })
    export class CustomGreetingComponent {}

  `;

  codeBasicProjectionParent: string = `
    import { Component } from '@angular/core';
    import { CustomGreetingComponent } from './custom-greeting.component';

    @Component({
      selector: 'app-parent',
      template: \`
        <app-custom-greeting>
          <h2>Hello, User!</h2>
          <p>Welcome to our website. We hope you enjoy your visit.</p>
        </app-custom-greeting>
      \`,
      standalone: true,
      imports: [CustomGreetingComponent]
    })
    export class ParentComponent {}
  `;
}
