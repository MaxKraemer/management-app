import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'toDo', component: TodoComponent }
   
];
