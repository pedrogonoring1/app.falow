import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-adicionar-post',
  templateUrl: './adicionar-post.component.html'
})
export class AdicionarPostComponent implements OnInit {

    todosPosts: Post[] = [];

    constructor(private fb: FormBuilder, private postService: PostService) { }

    CadastrarPostForm = this.fb.group({  //tag: ['', Validators.required], 
                                          mensagem: ['', Validators.required]});
    
    onSubmit(){
      var objPostForm = this.CadastrarPostForm.value;

      var idUsuarioLogado = sessionStorage.getItem("idUsuario");
      var nomeUsuarioLogado = sessionStorage.getItem("nomeUsuario");

      var dataHora = new Date;

      var criandoNovoObjPost = new Post('objPostForm.tag', idUsuarioLogado, objPostForm.mensagem, dataHora, nomeUsuarioLogado, 0, 0, null);

      this.todosPosts.push(criandoNovoObjPost);

      this.setPost(criandoNovoObjPost);

      this.CadastrarPostForm.reset();

    }

    ngOnInit(): void {
    }

    public setPost(post: Post){
      this.postService.setPost(post);
    }

}
