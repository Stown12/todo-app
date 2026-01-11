import { Injectable } from '@angular/core';
import TodoInterface from '../../interfaces/TodoInterface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //* Behavior Subject es un Observable que guarda el ultimo valor emitido y lo emite a nuevos suscriptores
  private todosSubject = new BehaviorSubject<TodoInterface[]>([]);

  //* Observable publico que expone el Behavior Subject a los componentes que se suscriban
  todos$: Observable<TodoInterface[]> = this.todosSubject.asObservable();


  private get currentTodos(): TodoInterface[] {
    return this.todosSubject.value;
  }

  get completedTodos(): number {
    return this.currentTodos.filter(todo => todo.isCompleted).length;
  }

  addTodo(todo: TodoInterface): void {
    if (todo === null) return;
    const updated = [...this.currentTodos, { ...todo }];
    this.todosSubject.next(updated);
  }

  deleteTodo(index: number): void {
    const updated = [...this.currentTodos];
    updated.splice(index, 1);
    this.todosSubject.next(updated);
  }

  markAsCompleted(index: number): void {
    const updated = [...this.currentTodos];
    updated[index].isCompleted = true;
    this.todosSubject.next(updated);
  }





}
