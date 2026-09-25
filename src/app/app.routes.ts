import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/pages/about/about').then((m) => m.About),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/case-studies/pages/case-study/case-study').then((m) => m.CaseStudy),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
