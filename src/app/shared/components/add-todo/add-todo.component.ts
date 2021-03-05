import { Component, EventEmitter, OnInit } from '@angular/core';
import { ITodo } from 'src/app/todo.model';
import baseTodos from '../../../todo.model';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todo: string;
  addTodo = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onAddTodo() {
    console.log(this.todo);
    baseTodos.push({ title: this.todo });
  }
}
