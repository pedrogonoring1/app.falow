import { Routes, RouterModule } from "@angular/router";

//import { HomeComponent } from "./home.component";
import { LoginComponent } from "./user/login/login.component";
import { SignupComponent } from "./user/signup/signup.component";
import { NewPartComponent } from './Part/New_Part/newpart.component';
import { AllPartComponent } from './Part/All_Part/allpart.component';
import { EditPartComponent } from './Part/Edit_Part/editpart.component';
import { FoundPartComponent } from './Part/Search_Part/foundpart.component';
import { HomeComponent } from './Home/home.component';

const APP_ROUTES: Routes = [
    
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    
    //{ path: 'home', component: HomeComponent},

    { path: 'signup', component: SignupComponent},

    { path: 'login', component: LoginComponent},

    { path: 'newpart', component: NewPartComponent},

    { path: 'allpart', component: AllPartComponent},

    { path: 'editpart', component: EditPartComponent },

    { path: 'foundpart', component: FoundPartComponent },

    { path: 'home', component: HomeComponent}


    
    //{ path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES},
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);