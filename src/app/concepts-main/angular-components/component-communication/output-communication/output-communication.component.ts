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
}
