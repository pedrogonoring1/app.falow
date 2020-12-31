import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  // Config Form Group
  formularioLogin = this.fb.group({ 
    email: ['', Validators.required], 
    senha: ['', Validators.required] 
  });


  // Função para envio dos dados do input
  onSubmit(){
      var credenciaisUsuarioForm = this.formularioLogin.value;
      
      this.realizarLogin(credenciaisUsuarioForm);
  }

  public realizarLogin(credenciaisUsuario){
    this.UsuarioService.realizarLogin(credenciaisUsuario);
  }

}
