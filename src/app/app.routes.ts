import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-page/contact-page').then(
        (m) => m.ContactPage
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about-page/about-page').then(
        (m) => m.AboutPage
      ),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing-page/pricing-page').then(
        (m) => m.PricingPage
      ),
  },  {
    path: 'pokemons/page/:page',
    loadComponent: () => import('./pages/pokemons/pokemons-page.component').then((m) => m.PokemonsPageComponent),
  },
  {
    path: 'pokemons/:id',
    loadComponent: () => import('./pages/pokemons/pokemons-page.component').then((m) => m.PokemonsPageComponent),
  },
  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];
