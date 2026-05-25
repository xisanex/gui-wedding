import { Routes } from '@angular/router';
import { budgetRoutes } from './pages/budget/budget.routes';
import { GuestsComponent } from './pages/guests/guests.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { noteroutes } from './pages/notes/notes.routes';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ServiceProvidersComponent } from './pages/service-providers/service-providers.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'budget',
    loadChildren: () => budgetRoutes,
  },
  {
    path: 'notes',
    loadChildren: () => noteroutes,
  },
  {
    path: 'guests',
    loadComponent: () => GuestsComponent,
  },
  {
    path: 'service-providers',
    loadComponent: () => ServiceProvidersComponent,
  },
  {
    path: 'notifications',
    loadComponent: () => NotificationsComponent,
  },
  {
    path: 'settings',
    loadComponent: () => SettingsComponent,
  },
];
