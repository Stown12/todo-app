import { TodoService } from './../services/todo-service';
import { Component, inject, Input } from '@angular/core';
import TodoInterface from '../../interfaces/TodoInterface';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
})
export class TodoItem {

  @Input() todo!: TodoInterface;
  @Input() index!: number;

  private todoService = inject(TodoService);


  deleteTodo(index: number): void {
    this.todoService.deleteTodo(index);
  }

  markAsCompleted(index: number): void {
    this.todoService.markAsCompleted(index);
  }


}
