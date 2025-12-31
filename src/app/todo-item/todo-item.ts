import { Component, EventEmitter, Input, Output } from '@angular/core';
import TodoInterface from '../../interfaces/TodoInterface';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
})
export class TodoItem {

  @Input() todo!: TodoInterface;
  @Output() delete = new EventEmitter<void>();
  @Output() complete = new EventEmitter<void>();

  onDelete(): void {
    this.delete.emit();
  }

  onComplete(): void {
    this.complete.emit();
  }


}
