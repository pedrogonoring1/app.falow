import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlBase = 'https://api-falow.herokuapp.com/user';
  
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

  constructor(private httpClient: HttpClient, private router: Router) { }
  
  public realizarLogin(credenciaisUsuario) {
    return this.httpClient.post(this.urlBase + '/login', JSON.stringify(credenciaisUsuario), this.httpOptions).subscribe(data => {
      var response = JSON.parse(JSON.stringify(data));

      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("idUsuario", response.user._id);
      sessionStorage.setItem("nomeUsuario", response.user.nomeUsuario);

      console.info("Token Coletado: " + sessionStorage.getItem("token"));

      alert('Logado com sucesso!');

      this.router.navigate(['/posts']);
    });
  }

  public realizarCadastroUsuario(usuario: User){
    return this.httpClient.post(this.urlBase + '/cadastrar-usuario', JSON.stringify(usuario), this.httpOptions).subscribe(data => {
      var response = JSON.parse(JSON.stringify(data));

      alert('Cadastrado com Sucesso!');

      this.router.navigate(['/login']);
    })
  }


}
