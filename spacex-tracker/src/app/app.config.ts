import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'past',
    pathMatch: 'full',
  },
  {
    path: 'upcoming',
    loadComponent: () =>
      import('./pages/upcoming-launches/upcoming-launches').then(
        (m) => m.UpcomingLaunches
      ),
  },
  {
    path: 'past',
    loadComponent: () =>
      import('./pages/past-launches/past-launches').then(
        (m) => m.PastLaunches
      ),
  },
  {
    path: 'launch/:id',
    loadComponent: () =>
      import('./pages/launch-details/launch-details').then((m) => m.LaunchDetails),
  }

];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
