import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-host-decorators',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './host-decorators.component.html',
  styleUrl: './host-decorators.component.scss',
})
export class HostDecoratorsComponent {
  codeHostBinding: string = `
    import { Component, HostBinding } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: \`<div>Content here</div>\`,
      styles: [\`div { padding: 10px; border: 1px solid black; }\`]
    })
    export class ExampleComponent {
      @HostBinding('style.backgroundColor') backgroundColor: string = 'lightblue';

      updateBackgroundColor(newColor: string) {
       this.backgroundColor = newColor;
      }
    }
  `;

  codeHostListener: string = `
    import { Component, HostListener } from '@angular/core';

    @Component({
      selector: 'app-hover-box',
      template: \`<div>Hover over this box!</div>\`,
      styles: [],
      standalone: true,
    })
    export class HoverBoxComponent {
      @HostListener('mouseenter') onMouseEnter() {
        alert('Mouse entered!');
      }

      @HostListener('mouseleave') onMouseLeave() {
        alert('Mouse left!');
      }
  }
  `;
}
