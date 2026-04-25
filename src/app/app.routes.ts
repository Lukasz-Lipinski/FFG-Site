import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { ErrorPageComponent } from './modules/error/components/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./modules/about/components/about-page/about-page.component').then(
        (m) => m.AboutPageComponent,
      ),
  },
  {
    path: 'discography',
    loadComponent: () =>
      import('./modules/discography/components/discography-page/discography-page.component').then(
        (m) => m.DiscographyPageComponent,
      ),
  },
  {
    path: 'merch',
    loadComponent: () =>
      import('./modules/merch/components/merch-page/merch-page.component').then(
        (m) => m.MerchPageComponent,
      ),
  },
  {
    path: 'shows',
    loadComponent: () =>
      import('./modules/shows/components/shows-page/shows-page.component').then(
        (m) => m.ShowsPageComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./modules/contact/components/contact-page/contact-page.component').then(
        (m) => m.ContactPageComponent,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./modules/error/components/error-page/error-page.component').then(
        (m) => m.ErrorPageComponent,
      ),
  },
];
