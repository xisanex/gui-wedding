import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-note',
  imports: [MatIcon],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent {
  notes = [
    { title: 'Tytuł 1', text: 'Lorem ipsum dolores', creationDate: '31/01/2020' },
    { title: 'Tytuł 1', text: 'Lorem ipsum dolores', creationDate: '31/01/2020' },
    { title: 'Tytuł 1', text: 'Lorem ipsum dolores', creationDate: '31/01/2020' },
    { title: 'Tytuł 1', text: 'Lorem ipsum dolores', creationDate: '31/01/2020' },
  ];
}
