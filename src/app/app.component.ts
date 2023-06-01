import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts:{id:number, autore:string, testo:string, like:number, commenti:string[]}[] = [];
  
  constructor(private http:HttpClient){

  }
}
