import { Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos';
import { TodosView } from './todos-view/todos-view';

export const routes: Routes = [
  {
    path: '',
    component: TodosView
  }
];
