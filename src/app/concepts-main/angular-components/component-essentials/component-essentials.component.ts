import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-component-essentials',
  standalone: true,
  imports: [RouterModule, CodeBlockComponent],
  templateUrl: './component-essentials.component.html',
  styleUrl: './component-essentials.component.scss',
})
export class ComponentEssentialsComponent {
  codeSnippet: string = `
    @Component({
      selector: 'profile-photo',
      templateUrl: 'profile-photo.html',
      styleUrls: ['profile-photo.css'],
    })
    export class ProfilePhoto { }
  `;
}
