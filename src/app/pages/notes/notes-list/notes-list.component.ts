import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoteComponent } from './_components/note/note.component';
@Component({
  selector: 'app-notes-list',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, NoteComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
})
export class NotesListComponent {}
