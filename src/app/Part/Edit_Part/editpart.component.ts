import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Part } from 'src/app/models/part';
import { PartService } from '../part.service';


@Component({
  selector: 'app-editpartcomponent',
  templateUrl: './editpart.component.html'
})
export class EditPartComponent {

    modalRef: BsModalRef;

    partForEdit: Part;

    constructor(private fb: FormBuilder, private modalService: BsModalService, private partService: PartService){
        this.partForEdit = partService.partToEdit;
    }

    // Config Form Group
    editpartForm = this.fb.group({  
        description: ['', Validators.required], 
        item: ['', Validators.required], 
        price: ['', Validators.required], 
        color: ['', Validators.required],
        urlPicture: ['', Validators.required], 
    });

    
    onSubmit() {
        var objPartForm = this.editpartForm.value;
        var objPart = new Part(objPartForm.description, objPartForm.item, objPartForm.price, "1", objPartForm.color, objPartForm.urlPicture, this.partForEdit.id);
        
        this.updatePart(objPart);

    }

    updatePart(part: Part){
        this.partService.update(part).subscribe(result => {console.log(result)});
    }

     //modal
     openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

}
