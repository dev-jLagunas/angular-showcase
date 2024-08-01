import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home-main/home-main.component').then(
        (m) => m.HomeMainComponent
      ),
    title: 'Angular Showcase - Home',
  },
  {
    path: 'components',
    loadComponent: () =>
      import(
        './concepts-main/angular-components/angular-components.component'
      ).then((m) => m.AngularComponentsComponent),
    title: 'Angular Showcase - Components',
  },
  {
    path: 'directives',
    loadComponent: () =>
      import(
        './concepts-main/angular-directives/angular-directives.component'
      ).then((m) => m.AngularDirectivesComponent),
    title: 'Angular Showcase - Directives',
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./concepts-main/angular-forms/angular-forms.component').then(
        (m) => m.AngularFormsComponent
      ),
    title: 'Angular Showcase - Forms',
  },
  {
    path: 'routing',
    loadComponent: () =>
      import('./concepts-main/angular-routing/angular-routing.component').then(
        (m) => m.AngularRoutingComponent
      ),
    title: 'Angular Showcase - Routing',
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./concepts-main/angular-signals/angular-signals.component').then(
        (m) => m.AngularSignalsComponent
      ),
    title: 'Angular Showcase - Signal',
  },
  {
    path: 'dependency-injection',
    loadComponent: () =>
      import(
        './concepts-main/dependency-injection/dependency-injection.component'
      ).then((m) => m.DependencyInjectionComponent),
    title: 'Angular Showcase - Dependency',
  },
  {
    path: 'http',
    loadComponent: () =>
      import('./concepts-main/http-client/http-client.component').then(
        (m) => m.HttpClientComponent
      ),
    title: 'Angular Showcase - Http',
  },
  {
    path: 'template-syntax',
    loadComponent: () =>
      import('./concepts-main/template-syntax/template-syntax.component').then(
        (m) => m.TemplateSyntaxComponent
      ),
    title: 'Angular Showcase - Template',
  },
];
