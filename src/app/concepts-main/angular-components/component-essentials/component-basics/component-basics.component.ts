import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';
import { AdditionalResourcesComponent } from '../../../../shared/additional-resources/additional-resources.component';
import { Resource } from '../../../../interfaces/subcategory';

@Component({
  selector: 'app-component-basics',
  standalone: true,
  imports: [CodeBlockComponent, AdditionalResourcesComponent],
  templateUrl: './component-basics.component.html',
  styleUrl: './component-basics.component.scss',
})
export class ComponentBasicsComponent {
  codeSnippet: string = `
    @Component({
      selector: 'my-component',
      templateUrl: 'my-component.html',
      styleUrls: ['my-component.css'],
      standalone: true,
    })
    export class MyComponent { }
  `;

  codeSnippetInline: string = `
    @Component({
      selector: 'my-component',
      template: <p class='css-class1'>my component content goes here</p>,
      styles: [
        css-class1 {
          cssproperty: value;
        }
      ],
      standalone: true,
    })
  export class MyComponent {}
`;
}
