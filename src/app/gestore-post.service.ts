import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestorePostService {
  posts:Post[] = [];

  constructor(private http:HttpClient) {
    this.http.get("https://my-json-server.typicode.com/PaoloCarugati/facebook/db").subscribe(
      res => {
        let listaPost = res["posts"];
        let commenti = res["comments"];
        listaPost.forEach(x => {
          let p:Post = new Post();
          p.id = x["id"];
          p.autore = x["autore"];
          p.testo = x["testo"];
          p.like = x["like"];
          commenti.forEach(y => {
            let c:Comment = new Comment();
            if (y["idpost"] == p.id) {
              c.id = y["id"];
              c.autore = y["autore"];
              c.testo = y["testo"];
              c.idPost = y["idpost"];
              p.commenti.push(c);
            };
          this.posts.push(p);
          });
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  addPost(autore:string, testo:string) {
    let p:Post = new Post();
    let lastID:number = this.posts[this.posts.length - 1].id;
    p.id = lastID + 1;
    p.autore = autore;
    p.testo = testo;
    p.like = 0;
    this.posts.push(p);
  }

  addCommento(idPost:number, autore:string, testo:string) {
    let c:Comment = new Comment();
    c.id = 0;
    c.autore = autore;
    c.testo = testo;
    c.idPost = idPost;
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == idPost) {
        this.posts[i].commenti.push(c);
      }
    }
  }

  addLike(idPost:number) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == idPost) {
        this.posts[i].like++;
      }
    }
  }
}

class Post {
  id:number;
  autore:string;
  testo:string;
  like:number;
  commenti:Comment[] = [];
}

class Comment {
  id:number;
  autore:string;
  testo:string;
  idPost:number;
}