import { Component, EventEmitter, Input, Output } from '@angular/core';
import TodoInterface from '../../interfaces/TodoInterface';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
})
export class TodoList {


  @Input() todos!: TodoInterface[];
  @Output() todoDeleted = new EventEmitter<number>();
  @Output() todoCompleted = new EventEmitter<number>();


  onDeleted(id: number): void {
    this.todoDeleted.emit(id);
  }

  onCompleted(index: number): void {
    this.todoCompleted.emit(index);
  }

}
