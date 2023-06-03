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
  @Input() commenti:{id:number,autore:string,testo:string,idPost:number}[];

  constructor(public gestorePost:GestorePostService){}
}
