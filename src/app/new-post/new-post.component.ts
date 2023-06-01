import { Component } from '@angular/core';
import { GestorePostService } from '../gestore-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  autore:string = "";
  testo:string = "";

  constructor(public gestorePost:GestorePostService){}
}
