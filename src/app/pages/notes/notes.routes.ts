import { Routes } from '@angular/router';
import { AddEditNoteComponent } from './add-edit-note/add-edit-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';

export const noteroutes: Routes = [
  {
    path: '',
    loadComponent: () => NotesListComponent,
  },
  {
    path: 'note/:id',
    loadComponent: () => AddEditNoteComponent,
  },
];
