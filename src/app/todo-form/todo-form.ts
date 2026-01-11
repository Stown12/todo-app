import { Component, inject } from '@angular/core';
import TodoInterface from '../../interfaces/TodoInterface';
import { FormsModule } from "@angular/forms";
import { TodoService } from '../services/todo-service';

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

  private todoService = inject(TodoService);

  addTodo(): void {
    if (!this.formData.title || !this.formData.subTitle) {
      return;
    }
    this.todoService.addTodo(this.formData);
    this.formData = {
      title: '',
      subTitle: '',
      isCompleted: false
    }
  }
}
