import { TodoService } from './../services/todo-service';
import { Component, inject } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem, AsyncPipe],
  templateUrl: './todo-list.html',
})
export class TodoList {

  private todoService = inject(TodoService);

  todos$ = this.todoService.todos$;

}
