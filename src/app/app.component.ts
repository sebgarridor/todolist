import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks: string[] = [
    "Visit Ann",
    "Call Dad",
    "Go to the gym",
    "Wash the dishes",
    "Shop for the party"
  ]

  addNewTask(newTask: string){
    this.tasks.push(newTask);
  }

  removeTask(existingTask: string){

    //creating a warning message to the user
    var userConfirmed = confirm(`Are you sure you wanna remove the following task? \n "${existingTask}"`)
    

    //validation. if the user said 'yes', we proceed.
    if(userConfirmed == true) {

      //we filter the entire array so it returns the same array but without the value of "existingTask"
      this.tasks = this.tasks.filter(task => task !=existingTask)
    }
  }

  markAsDone(task: string){
    alert('The task: "' + task + '" is done')
  }
}

class Task {
  constructor(public title: string){
    this.title = title;
  }

}
