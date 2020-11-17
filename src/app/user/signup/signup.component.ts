import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {

    modalRef: BsModalRef;

    constructor(private fb: FormBuilder, private UserService: UserService, private modalService: BsModalService) {} 
    
    // Config Form Group
    loginForm = this.fb.group({  firstName: ['', Validators.required], lastName: ['', Validators.required], email: ['', Validators.required], password: ['', Validators.required] });


    // Função para envio dos dados do input
    onSubmit(){
        var objUserForm = this.loginForm.value;
        var objUser = new User(objUserForm.firstName, objUserForm.lastName, objUserForm.email, objUserForm.password);

        this.saveUser(objUser);

        this.loginForm.reset();
    
    }

    saveUser(user: User) {
        this.UserService.newUser(user).subscribe((result) => {console.log(result)});
    }


    //modal
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

}
