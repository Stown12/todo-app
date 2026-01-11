import { Component, inject } from '@angular/core';
import { TodoForm } from "../todo-form/todo-form";
import { TodoList } from "../todo-list/todo-list";
import { TodoService } from '../services/todo-service';
import { AsyncPipe } from '@angular/common';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos-view',
  imports: [TodoForm, TodoList, AsyncPipe],
  templateUrl: './todos-view.html',
})
export class TodosView {

  private todoService = inject(TodoService);
  error: boolean = false;

  todos$ = this.todoService.todos$.pipe(catchError(error => {
    console.log(error);
    throw new Error(error);
    this.error = true;
  }));

  get countCompletedTodos(): number {
    return this.todoService.completedTodos;
  }


}
