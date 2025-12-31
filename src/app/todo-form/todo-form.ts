import { Component, EventEmitter, Output, } from '@angular/core';
import TodoInterface from '../../interfaces/TodoInterface';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
})
export class TodoForm {

  formData: TodoInterface = {
    title: '',
    subTitle: '',
    isCompleted: false
  }

  @Output() todoAdded = new EventEmitter<TodoInterface>();

  addTodo(): void {
    if (!this.formData.title || !this.formData.subTitle) {
      return;
    }
    this.todoAdded.emit({ ...this.formData });
    this.formData = {
      title: '',
      subTitle: '',
      isCompleted: false
    }
  }
}
