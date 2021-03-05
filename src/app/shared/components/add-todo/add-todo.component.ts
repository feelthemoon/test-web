import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/todo.model';
import baseTodos from '../../../todo.model';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todo: string;
  constructor() {}

  ngOnInit(): void {}
  onAddTodo() {
    baseTodos.push({ title: this.todo });
  }
}
