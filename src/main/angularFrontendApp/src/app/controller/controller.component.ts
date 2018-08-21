import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  getBook(http: Http){
    if(http.get("/title/Relentless")){
      console.log("request succussful!!!")
    }
    
  }



}
