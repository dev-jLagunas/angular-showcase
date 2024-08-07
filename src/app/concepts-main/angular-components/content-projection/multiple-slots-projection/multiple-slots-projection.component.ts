import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-multiple-slots-projection',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './multiple-slots-projection.component.html',
  styleUrl: './multiple-slots-projection.component.scss',
})
export class MultipleSlotsProjectionComponent {
  codeMultipleProjections: string = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-custom-greeting',
      template: \`
        <div class="greeting">
          <ng-content select="greeting-title"></ng-content>
          <ng-content select="greeting-body"></ng-content>
        </div>
      \`,
      standalone: true
    })
    export class CustomGreetingComponent {}
`;

  codeMultipleProjectionsParent: string = `
  import { Component } from '@angular/core';
  import { CustomGreetingComponent } from './custom-greeting.component';

  @Component({
    selector: 'app-parent',
    template: \`
      <app-custom-greeting>
        <greeting-title>Hello, User!</greeting-title>
        <greeting-body>Welcome to our website. We hope you enjoy your visit.</greeting-body>
      </app-custom-greeting>
    \`,
    standalone: true,
    imports: [CustomGreetingComponent]
  })
  export class ParentComponent {}
  `;

  codeMutipleSelectors: string = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-custom-greeting',
      template: \`
        <div class="greeting">
          <ng-content select="greeting-title"></ng-content>
          <ng-content select="greeting-body"></ng-content>
        </div>
        <div class="greeting-extra-content">
          <ng-content></ng-content>
          <!-- above tag captures all unmatched content -->
        </div>
      \`,
      standalone: true
    })
    export class CustomGreetingComponent {}
  `;
}
