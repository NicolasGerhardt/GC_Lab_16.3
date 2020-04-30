import { Component } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GC-Lab-Angular';
  tasks: Task[] = [
    { text: "Do the Dishes", completed: false },
    { text: "Take Dog for a walk", completed: true },
    { text: "GC Lab 16.3 Task list", completed: true },
    { text: "Clean Fish Tank", completed: false },
    { text: "Eat Dinner", completed: true },
  ];


  toggleTask = (task: Task) => {
    task.completed = !task.completed;
  };


  newTask: string = "";
  addTask = () => {
    if (this.newTask.length > 0) {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = "";
    }
  }

  removeTask = (task:Task) => {
    this.tasks = this.tasks.filter( t => t != task);
  }

  editIndex:number = -1;

  editTask = (index:number) => {
    if (this.editIndex == -1) {
      this.editIndex = index;
    } else {
      this.editIndex = -1;
    }
  }

  hideCompletedTasks:boolean = true;

  toggleCompletedTasks = () => {
    this.hideCompletedTasks = !this.hideCompletedTasks;
    console.log(this.hideCompletedTasks);
  }

  getNumberOfUnfinishedTasks = ():number => {
    let numberOfUnfinishedTasks = 0;

    for (const task of this.tasks) {
      if(!task.completed) {
        numberOfUnfinishedTasks++;
      }
    }

    return numberOfUnfinishedTasks;
  }

  taskFilterText = '';
}
