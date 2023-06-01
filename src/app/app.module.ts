import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentoComponent } from './commento/commento.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewCommentoComponent } from './new-commento/new-commento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentoComponent,
    NewPostComponent,
    NewCommentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
