import { Component, Input } from '@angular/core';
import { GestorePostService } from '../gestore-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() id:number;
  @Input() autore:string;
  @Input() testo:string;
  @Input() like:number;

  constructor(public gestorePost:GestorePostService){}

  getCommenti() {
    let x = this.gestorePost.getCommenti(this.id);
    console.log("X: " + x);
    console.log(this.gestorePost.getCommenti(this.id) + "\n");
    return [];
  }
}
