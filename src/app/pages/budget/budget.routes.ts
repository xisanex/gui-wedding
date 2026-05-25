import { Routes } from '@angular/router';
import { EditBudgetComponent } from './edit-budget/edit-budget.component';
import { BudgetComponent } from './budget/budget.component';

export const budgetRoutes: Routes = [
  {
    path: '',
    loadComponent: () => BudgetComponent,
  },
  {
    path: 'edit',
    loadComponent: () => EditBudgetComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
