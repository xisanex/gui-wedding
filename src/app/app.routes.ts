import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotesComponent } from './pages/notes/notes.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { ServiceProvidersComponent } from './pages/service-providers/service-providers.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { budgetRoutes } from './pages/budget/budget.routes';

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
    loadComponent: () => NotesComponent,
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
