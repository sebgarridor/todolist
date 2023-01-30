import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {


  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task ("Go to the gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
  ]

  addNewTask(newTask: string){
    this.tasks.push(new Task(newTask));
  }

  removeTask(existingTask: Task){

    //creating a warning message to the user
    var userConfirmed = confirm(`Are you sure you wanna remove the following task? \n "${existingTask.title}"`)
    

    //validation. if the user said 'yes', we proceed.
    if(userConfirmed == true) {

      //we filter the entire array so it returns the same array but without the value of "existingTask"
      this.tasks = this.tasks.filter(task => task !=existingTask)
    }
  }


}

class Task {
  constructor(public title: string){
    
  }

  toggleIsDone(){
    
    this.isDone = !this.isDone;
  }

  public isDone = false;

}


