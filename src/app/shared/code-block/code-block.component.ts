import { Component, Input } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [HighlightAuto, Highlight],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss',
})
export class CodeBlockComponent {
  @Input({ required: true }) code: string = '';
}
