import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../task';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  tasks: Task[] = [];

constructor(private router: Router , private taskService: TaskService ) { }

taskForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(''),
    priority: new FormControl('')
});

createTasks() {
  if (this.taskForm.valid) {
    let taskData = this.taskForm.value;
    let task: Task = {
      id: Number(taskData.id),
      name: taskData.name ?? '',
      description: taskData.description ?? '',
      dueDate: taskData.dueDate ?? '',
      priority: taskData.priority ?? ''
    };
    this.taskService.addTask(task);
    localStorage.setItem('tasks', JSON.stringify(this.taskService.getTasks()));
    this.router.navigate(['/dashboard']);
  } else {
    alert('Please fill all the fields');
  }
}
}
