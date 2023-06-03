import { Component, Input } from '@angular/core';
import { GestorePostService } from '../gestore-post.service';

@Component({
  selector: 'app-new-commento',
  templateUrl: './new-commento.component.html',
  styleUrls: ['./new-commento.component.css']
})
export class NewCommentoComponent {
  @Input() idPost:number;
  autore:string = "";
  testo = "";

  constructor(public gestorePost:GestorePostService){}
}
