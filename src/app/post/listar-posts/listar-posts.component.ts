import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html'
})
export class ListarPostsComponent implements OnInit {

  todosPosts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getTodosPosts();
    this.todosPosts = this.postService.todosPostsRecebidosDoBanco;
  }

}
