import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

    userLogado;

    constructor(private fb: FormBuilder, private UserService: UserService) {} 

    // Config Form Group
    loginForm = this.fb.group({ 
      email: ['', Validators.required], 
      password: ['', Validators.required] 
    });


    // Função para envio dos dados do input
    onSubmit(){
        var objUserForm = this.loginForm.value;
        var objUser = new User(null, null, objUserForm.email, objUserForm.password, null);

        this.doLogin(objUser);

        
    
    }

    doLogin(user: User){
      this.UserService.login(user).subscribe((user) => {this.userLogado = user; console.log(this.userLogado)});
      
    }  

}
