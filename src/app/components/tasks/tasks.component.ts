import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  listTasks: Task[] = [];
  nameTask = '';

  constructor() {}

  ngOnInit(): void {
    
  }

  addTask() {
    // create object task
    const task: Task = {
      name: this.nameTask,
      state: false
    }

    // add task to array
    this.listTasks.push(task);

    // reset form
    this.nameTask = '';
  }

  deleteTask(index: number): void {
    this.listTasks.splice(index, 1);
  }

  updateTask(task: Task, index: number):void {
    this.listTasks[index].state = !task.state
  }

}
