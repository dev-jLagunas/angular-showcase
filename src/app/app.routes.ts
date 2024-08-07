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
    path: 'components/:id',
    loadComponent: () =>
      import(
        './concepts-main/angular-components/angular-components.component'
      ).then((m) => m.AngularComponentsComponent),
    title: 'Angular Showcase - Components',
  },
  {
    path: 'components/:id/component-essentials',
    loadComponent: () =>
      import(
        './concepts-main/angular-components/component-essentials/component-essentials.component'
      ).then((m) => m.ComponentEssentialsComponent),
    title: 'Component Essentials',
  },
  {
    path: 'components/:id/component-communication',
    loadComponent: () =>
      import(
        './concepts-main/angular-components/component-communication/component-communication.component'
      ).then((m) => m.ComponentCommunicationComponent),
    title: 'Component Communication',
  },
  {
    path: 'components/:id/content-projection',
    loadComponent: () =>
      import(
        './concepts-main/angular-components/content-projection/content-projection.component'
      ).then((m) => m.ContentProjectionComponent),
    title: 'Content Projection',
  },
  {
    path: 'components/:id/host-elements',
    loadComponent: () =>
      import(
        './concepts-main/angular-components/host-elements/host-elements.component'
      ).then((m) => m.HostElementsComponent),
    title: 'Host Elements',
  },
  {
    path: 'components/:id/lifecycle-hooks',
    loadComponent: () =>
      import(
        './concepts-main/angular-components/lifecycle-hooks/lifecycle-hooks.component'
      ).then((m) => m.LifecycleHooksComponent),
    title: 'Lifecycle Hooks',
  },
  {
    path: 'directives/:id',
    loadComponent: () =>
      import(
        './concepts-main/angular-directives/angular-directives.component'
      ).then((m) => m.AngularDirectivesComponent),
    title: 'Angular Showcase - Directives',
  },
  {
    path: 'forms/:id',
    loadComponent: () =>
      import('./concepts-main/angular-forms/angular-forms.component').then(
        (m) => m.AngularFormsComponent
      ),
    title: 'Angular Showcase - Forms',
  },
  {
    path: 'routing/:id',
    loadComponent: () =>
      import('./concepts-main/angular-routing/angular-routing.component').then(
        (m) => m.AngularRoutingComponent
      ),
    title: 'Angular Showcase - Routing',
  },
  {
    path: 'signals/:id',
    loadComponent: () =>
      import('./concepts-main/angular-signals/angular-signals.component').then(
        (m) => m.AngularSignalsComponent
      ),
    title: 'Angular Showcase - Signal',
  },
  {
    path: 'dependency-injection/:id',
    loadComponent: () =>
      import(
        './concepts-main/dependency-injection/dependency-injection.component'
      ).then((m) => m.DependencyInjectionComponent),
    title: 'Angular Showcase - Dependency',
  },
  {
    path: 'http-client/:id',
    loadComponent: () =>
      import('./concepts-main/http-client/http-client.component').then(
        (m) => m.HttpClientComponent
      ),
    title: 'Angular Showcase - Http',
  },
  {
    path: 'template-syntax/:id',
    loadComponent: () =>
      import('./concepts-main/template-syntax/template-syntax.component').then(
        (m) => m.TemplateSyntaxComponent
      ),
    title: 'Angular Showcase - Template',
  },
];
