
import { Component } from '@angular/core';
import { GestorePostService } from './gestore-post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public gestorePost:GestorePostService){}
}