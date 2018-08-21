import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  getBooks(){
    return this.http.get('http:localhost:8080/title/Relentless').map(res => res.json()); 
  }
}
