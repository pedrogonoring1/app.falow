import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { myrouting } from './app.routing';
import { AdicionarPostComponent } from './post/adicionar-post/adicionar-post.component';
import { ListarPostsComponent } from './post/listar-posts/listar-posts.component';
import { LoginComponent } from './user/login/login.component';
import { CadastrarUsuarioComponent } from './user/cadastrar-usuario/cadastrar-usuario.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    AdicionarPostComponent,
    ListarPostsComponent,
    LoginComponent,
    CadastrarUsuarioComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    myrouting,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
