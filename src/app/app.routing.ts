import { Routes, RouterModule } from "@angular/router";

import { AdicionarPostComponent } from "./post/adicionar-post/adicionar-post.component";
import { ListarPostsComponent } from "./post/listar-posts/listar-posts.component";
import { CadastrarUsuarioComponent } from "./user/cadastrar-usuario/cadastrar-usuario.component";
import { LoginComponent } from "./user/login/login.component";


const APP_ROUTES: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'adicionar-post', component: AdicionarPostComponent},
    { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent},
    { path: 'login', component: LoginComponent},
    { path: 'posts', component: ListarPostsComponent}

];

export const myrouting = RouterModule.forRoot(APP_ROUTES);