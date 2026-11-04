import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home/home').then((m) => m.Home),
    data: {
      seo: {
        titleKey: 'seo.home.title',
        descriptionKey: 'seo.home.description',
      },
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/pages/about/about').then((m) => m.About),
    data: {
      seo: {
        titleKey: 'seo.about.title',
        descriptionKey: 'seo.about.description',
      },
    },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/pages/projects/projects').then((m) => m.Projects),
    data: {
      seo: {
        titleKey: 'seo.projects.title',
        descriptionKey: 'seo.projects.description',
      },
    },
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/case-studies/pages/case-study/case-study').then((m) => m.CaseStudy),
    data: {
      seo: {
        titleKey: 'seo.caseStudy.title',
        descriptionKey: 'seo.caseStudy.description',
      },
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/pages/contact/contact').then((m) => m.Contact),
    data: {
      seo: {
        titleKey: 'seo.contact.title',
        descriptionKey: 'seo.contact.description',
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
