import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-accepting-input',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './accepting-input.component.html',
  styleUrl: './accepting-input.component.scss',
})
export class AcceptingInputComponent {
  codeChildInput: string = `
    import { Component, Input } from '@angular/core';

    @Component({
    selector: 'app-child',
    template: \`
      <p>Howdy! here is my parents message: {{ messageFromParent }}</p>
    \`,
    standalone: true
    })
    export class ChildComponent {
      @Input() messageFromParent: string = ''; // This property will receive data from the parent component
  }
  `;

  codeParentInput: string = `
    import { Component } from '@angular/core';
    import { ChildComponent } from './child.component';

    @Component({
    selector: 'app-parent',
    template: \`
      <h1>Parent Component</h1>
      <app-child [messageFromParent]="messageToChild"></app-child>
    \`,
    standalone: true,
    imports: [ChildComponent]
    })
    export class ParentComponent {
      messageToChild: string = 'Hello my child how are you?!'; // This message will be passed to the child component
  }
  `;

  codeInputSignal: string = `
    import { Component, input } from '@angular/core';

    @Component({
    standalone: true,
    selector: 'app-child',
    template: \` <p>Hi, {{ messageFromParent() }}!</p> \`,
      })
    export class WelcomeComponent {
      messageFromParent = input('friend');
    }
  `;

  codeInputRequired: string = `
    @Component({...})
    export class MyComponent {
      @Input({required: true}) value = 0;
    }
  `;

  codeInputTransform: string = `
    @Component({
      selector: 'number-display',
      template: '<p>{{ displayValue }}</p>'
    })
    export class NumberDisplay {
      @Input({transform: toNumber}) value: number = 0;
      get displayValue() {
      return this.value;
    }
  }
  `;

  codeInputAlias: string = `
    @Component({...})
    export class MyComponent {
      @Input({alias: 'coolComponent'}) someValue = 0;
    }

    // In PARENT template
    <my-component [coolComponent]="50" />
  `;
}
