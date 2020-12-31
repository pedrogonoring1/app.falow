import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    
    tokenUsuarioLogado = sessionStorage.getItem("token");

    urlBase = 'https://api-falow.herokuapp.com/post';
    
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.tokenUsuarioLogado}), withCredentials: true }

    todosPostsRecebidosDoBanco: Post[] = [];

    constructor(private httpClient: HttpClient) { }

    public getTodosPosts(){
      return this.httpClient.get(this.urlBase + '/obter-todos', this.httpOptions).subscribe(data => {
        
        var response = JSON.parse(JSON.stringify(data));
        var listaDePosts = response.objetosPostsRecuperados;

        for(var obj of listaDePosts) {

          var criandoObjetoPost = new Post(obj.tag, obj.idUsuario, obj.mensagem, obj.dateTime, obj.nomeUsuario, obj.curtidas, obj.visualizacoes, obj._id);

          if (criandoObjetoPost != undefined){
            this.todosPostsRecebidosDoBanco.push(criandoObjetoPost);
          }
        }
      })
    }

    public setPost(post: Post){
      return this.httpClient.post(this.urlBase + '/add-post', JSON.stringify(post),this.httpOptions).subscribe(data => {
        
        var response = JSON.parse(JSON.stringify(data));
       
        var postRecebido = response.objetoPostGerado;

        var criandoObjetoPost = new Post(postRecebido.tag, postRecebido.idUsuario, postRecebido.mensagem, postRecebido.dateTime, postRecebido.nomeUsuario, postRecebido.curtidas, postRecebido.visualizacoes, postRecebido._id);
        
        this.todosPostsRecebidosDoBanco.push(criandoObjetoPost);

      })
    }

}
