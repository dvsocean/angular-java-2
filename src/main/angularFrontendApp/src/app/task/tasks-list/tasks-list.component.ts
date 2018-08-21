import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {



  constructor(private taskService: TaskService) { 
    //getting books from java
    taskService.getBooks().subscribe();
  }

  

  ngOnInit() {
  }

  

}
