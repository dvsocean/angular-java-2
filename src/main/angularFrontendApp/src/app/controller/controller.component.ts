import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
  providers: [TaskService]
})

export class ControllerComponent implements OnInit {

  testData = 'THIS IS A TEST';
  data: Array<{title: string}>;
  getData: string;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
  }

  getBook(){
   
    this.taskService.getBooks().subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log("Request complete")
    );
    
  }



}
