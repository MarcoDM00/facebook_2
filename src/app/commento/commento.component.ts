import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent {
  @Input() autore:string;
  @Input() testo:string;

  constructor() {
    alert("Ciao");
    console.log(this.autore);
  }
}
