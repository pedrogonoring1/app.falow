import { Routes, RouterModule } from "@angular/router";

//import { HomeComponent } from "./home.component";
import { LoginComponent } from "./user/login/login.component";
import { SignupComponent } from "./user/signup/signup.component";

const APP_ROUTES: Routes = [
    
    { path: '', redirectTo: '/signup', pathMatch: 'full'},
    
    //{ path: 'home', component: HomeComponent},

    { path: 'signup', component: SignupComponent},

    { path: 'login', component: LoginComponent},


    
    //{ path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES},
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);