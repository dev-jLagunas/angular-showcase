import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-output-communication',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './output-communication.component.html',
  styleUrl: './output-communication.component.scss',
})
export class OutputCommunicationComponent {
  codeOutputChild: string = `
    import { Component, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: '<button (click)="sendMessage()">Send Message to Parent</button>'
    })
    export class ChildComponent {
      @Output() messageEvent = new EventEmitter<string>();

      sendMessage() {
        this.messageEvent.emit('Hello from your child');
      }
    }
  `;

  codeOutputParent: string = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-parent',
      template: \`<app-child (messageEvent)="receiveChildMessage($event)"></app-child>
      <p>Message from child: {{ message }}</p>\`
    })
    export class ParentComponent {
      childMessage: string = '';

      receiveChildMessage(message: string) {
        this.message = message;
      }
    }
  `;

  codeOutputFunction: string = `
    import { Component, output} from '@angular/core';

    @Component({
      selector: 'app-child',
      template: '<button (click)="sendMessage()">Send Message to Parent</button>'
    })
    export class ChildComponent {
      messageToParent = output<string>();

      sendMessage() {
        this.messageToParent.emit('Hello from your child');
      }
    }
  `;

  codeOuputAlias: string = `
    @Component({...})
    export class MyCoolComponent {
      @Output('somePropertyAlias') propertyName = new EventEmitter<string>();
    }

    // Template
    <my-cool-component (somePropertyAlias)="acceptChildEvent()"></my-cool-component>
  `;

  codeOutputDecorator: string = `
  @Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  outputs: ['outputProperty: outputPropertyAlias'],
  })
  export class MyComponent extends MyBaseComponent {}

  // MyComponent inherits the outputProperty property from MyBaseComponent
  `;

  codeOuputNaming: string = `
  @Component({
    selector: 'app-my-component',
    template: '<div (click)="handleClick()"></div>',
    outputs: ['click']  // This should be avoided
  })
    export class MyComponent {
      @Output() click = new EventEmitter<void>();  // This should be avoided
  }

  //DO NOT DO WHAT IS SHOW ABOVE
  `;

  codeOutputObservable: string = `
    import { outputFromObservable } from '@angular/core';

    @Component({
      selector: 'app-timer-component',
      template: '<p>{{ seconds }}</p>',
      standalone: true,
    })
    export class TimerComponent {
      seconds$ = interval(1000); // Observable emitting values every second
      seconds = outputFromObservable(this.seconds$);
    }
  `;
}
