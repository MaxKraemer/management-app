import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { 
  }

  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    console.log(this.tasks, 'tasks');  
  }

  

}
