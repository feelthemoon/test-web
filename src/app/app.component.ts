import { Component } from '@angular/core';

import baseTodos, { ITodo } from './todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos = baseTodos;
}
