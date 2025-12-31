import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface TodoInterface {
  title: string;
  subTitle: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.html',
})
export class TodosComponent {

  formData: TodoInterface = {
    title: '',
    subTitle: '',
    isCompleted: false
  }


  todos: TodoInterface[] = [

  ];

  addTodo(): void {
    if (!this.formData.title || !this.formData.subTitle) {
      return;
    }
    this.todos.push({ ...this.formData });
    this.formData = {
      title: '',
      subTitle: '',
      isCompleted: false
    };
  }

  get countCompletedTodos(): number {
    return this.todos.filter(todo => todo.isCompleted).length;
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  markAsCompleted(index: number): void {
    this.todos[index].isCompleted = true;
  }
}
