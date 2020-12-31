import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html'
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private fb: FormBuilder, private UsuarioService: UsuarioService) { }

  CadastrarUsuarioForm = this.fb.group({  email: ['', Validators.required], 
                                          telefone: ['', Validators.required],
                                          senha: ['', Validators.required], 
                                          nome: ['', Validators.required],
                                          nomeUsuario: ['', Validators.required], 
                                          dataNascimento: ['', Validators.required]});

  onSubmit(){
    var objUserForm = this.CadastrarUsuarioForm.value;
    var usuarioParaCadastro = new User(objUserForm.email, objUserForm.telefone, objUserForm.senha, objUserForm.nome, objUserForm.nomeUsuario, objUserForm.dataNascimento);

    this.cadastrarUsuario(usuarioParaCadastro);

    this.CadastrarUsuarioForm.reset();

  }

  public cadastrarUsuario(usuario: User){
    this.UsuarioService.realizarCadastroUsuario(usuario);
  }


  ngOnInit(): void {
  }

}
