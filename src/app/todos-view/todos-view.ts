import { Component } from '@angular/core';
import TodoInterface from '../../interfaces/TodoInterface';
import { TodoForm } from "../todo-form/todo-form";
import { TodoList } from "../todo-list/todo-list";

@Component({
  selector: 'app-todos-view',
  imports: [TodoForm, TodoList],
  templateUrl: './todos-view.html',
})
export class TodosView {



  todos: TodoInterface[] = [

  ];

  addTodo(value: TodoInterface): void {
    if (value === undefined) return;
    this.todos.push(value);
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
