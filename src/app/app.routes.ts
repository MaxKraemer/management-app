import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';



export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'create-task', component: CreateTaskComponent}

   
];
