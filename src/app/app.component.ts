import { Component } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GC-Lab-Angular';
  tasks:Task[] = [
    {text:"Do the Dishes", completed:false},
    {text:"Take Dog for walke", completed:true},
    {text:"GC Lab 16.3 Task list", completed:false},
    {text:"Eat Dinner", completed:true},
  ];
  toggleTask = (task:Task) => {
    task.completed = !task.completed;
  } 
}
