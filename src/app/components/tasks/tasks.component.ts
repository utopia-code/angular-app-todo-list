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

  constructor() {
    const data = localStorage.getItem("tasks");
    this.listTasks = (data ? JSON.parse(data): []).map(
      (task: any) => new Task(task.name, task.state)
    );
  }

  _commit(listTasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(listTasks))
  }

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

    this._commit(this.listTasks)
  }

  deleteTask(index: number): void {
    this.listTasks.splice(index, 1);

    this._commit(this.listTasks)
  }

  updateTask(task: Task, index: number):void {
    this.listTasks[index].state = !task.state;

    this._commit(this.listTasks)
  }

}
