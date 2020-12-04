import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { myrouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { NewPartComponent } from './Part/New_Part/newpart.component';
import { AllPartComponent } from './Part/All_Part/allpart.component';
import { EditPartComponent } from './Part/Edit_Part/editpart.component';
import { FoundPartComponent } from './Part/Search_Part/foundpart.component';
import { HomeComponent } from './Home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NewPartComponent,
    AllPartComponent,
    EditPartComponent,
    FoundPartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    myrouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
