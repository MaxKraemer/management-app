import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  tasks: Task[] = [];

constructor(private router: Router) { }

taskForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(''),
    priority: new FormControl('')
});

createTask() {
  if (this.taskForm.valid) {
    const newTask: Task = {
      id: Number(this.taskForm.value.id), 
      name: this.taskForm.value.name ?? '',
      description: this.taskForm.value.description ?? '',
      dueDate: this.taskForm.value.dueDate ?? '',
      priority: this.taskForm.value.priority ?? ''
    };
    this.tasks.push(newTask);
    this.router.navigate(['/dashboard']);
    console.log(this.tasks, 'tasks');
    } else {
     alert('Please fill all the fields');
    }
}
}
