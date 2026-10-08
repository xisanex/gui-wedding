import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetApiMockService } from '../budget-api-mock.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense, PercentageAndValue } from '../types/expense.types';

interface ExpensesForm {
  name: FormControl<string | null>;
  category: FormControl<string | null>;
  cost: FormControl<string | null>;
  status: FormControl<string | null>;
  paymentDeadline: FormControl<string | null>;
  dateOfPayment: FormControl<string | null>;
}

interface AddEditBudgetForm {
  budgetTotal: FormControl<string | null>;
  expenses: FormArray<FormGroup<ExpensesForm>>;
}

@Component({
  selector: 'app-add-edit-budget',
  imports: [],
  templateUrl: './add-edit-budget.component.html',
  styleUrl: './add-edit-budget.component.scss',
})
export class AddEditBudgetComponent implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly budgetApiMockService: BudgetApiMockService = inject(BudgetApiMockService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  protected remainBudget: PercentageAndValue = { percentage: 0, value: 0 };
  protected spentBudget: PercentageAndValue = { percentage: 0, value: 0 };
  protected expenseCategories: string[] = [];
  protected readonly isEdit: boolean = this.router.url.includes('/edit');
  protected readonly form: FormGroup<AddEditBudgetForm> = new FormGroup<AddEditBudgetForm>({
    budgetTotal: new FormControl(null, Validators.required),
    expenses: new FormArray<FormGroup<ExpensesForm>>([
      new FormGroup<ExpensesForm>({
        name: new FormControl(null, Validators.required),
        category: new FormControl(null, Validators.required),
        cost: new FormControl(null, Validators.required),
        status: new FormControl(null, Validators.required),
        paymentDeadline: new FormControl(null, Validators.required),
        dateOfPayment: new FormControl(null, Validators.required),
      }),
    ]),
  });

  public ngOnInit() {
    this.getCategories();
    if (this.isEdit) {
      this.downloadBudgetAndFillOutForm();
    }
  }

  protected addExpense(expense: Partial<Expense>): void {
    this.form.controls.expenses.push(
      new FormGroup<ExpensesForm>({
        name: new FormControl(expense.name ?? null, Validators.required),
        category: new FormControl(expense.category ?? null, Validators.required),
        cost: new FormControl(expense.cost ?? null, Validators.required),
        status: new FormControl(expense.status ?? null, Validators.required),
        paymentDeadline: new FormControl(expense.paymentDeadline ?? null, Validators.required),
        dateOfPayment: new FormControl(expense.dateOfPayment ?? null, Validators.required),
      }),
    );
  }

  private getCategories(): void {
    this.budgetApiMockService
      .getCategories()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((categories) => (this.expenseCategories = categories ?? [])),
      )
      .subscribe();
  }

  private downloadBudgetAndFillOutForm(): void {
    this.budgetApiMockService
      .getBudget()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((budget) => {
          if (budget?.budgetBalance) {
            this.remainBudget = budget.budgetBalance.remain;
            this.spentBudget = budget.budgetBalance.spent;
          }
          if (budget?.expenses?.length) {
            budget.expenses.forEach((expense) => this.addExpense(expense));
          } else {
            this.addExpense({});
          }
        }),
      )
      .subscribe();
  }
}
