import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  getBooks(){
    return this.http.get('/title/Relentless');
  }
}
