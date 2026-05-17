import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { NotesComponent } from './pages/notes/notes.component';
import { GuestsComponent } from './pages/guests/guests.component';
import { ServiceProvidersComponent } from './pages/service-providers/service-providers.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'budget',
    loadComponent: () => BudgetComponent,
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
