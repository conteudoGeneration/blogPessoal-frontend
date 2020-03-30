import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FeedComponent } from './feed/feed.component';
import { PostsComponent } from './posts/posts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletarPostagemComponent } from './deletar-postagem/deletar-postagem.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FeedComponent,
    PostsComponent,
    PutPostagemComponent,
    DeletarPostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
