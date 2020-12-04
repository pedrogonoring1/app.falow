import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Part } from 'src/app/models/part';
import { PartService } from '../part.service';


@Component({
  selector: 'app-newcomponent',
  templateUrl: './newpart.component.html'
})
export class NewPartComponent {

    modalRef: BsModalRef;

    constructor(private fb: FormBuilder, private modalService: BsModalService, private partService: PartService) {} 

     // Config Form Group
     newpartForm = this.fb.group({  
        description: ['', Validators.required], 
        item: ['', Validators.required], 
        price: ['', Validators.required], 
        color: ['', Validators.required],
        urlPicture: ['', Validators.required], });

    
    onSubmit() {
        var objPartForm = this.newpartForm.value;
        var objPart = new Part(objPartForm.description, objPartForm.item, objPartForm.price, "1", objPartForm.color, objPartForm.urlPicture);

        this.newpart(objPart);
        //this.allpart();
        
        this.newpartForm.reset();
    }

    newpart(part: Part) {
        this.partService.addpart(part).subscribe(result => {console.log(result)});
    }

    allpart() {
        this.partService.allpart().subscribe(result => {console.log(result)});
    }


     //modal
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

}
