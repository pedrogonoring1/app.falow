import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Part } from 'src/app/models/part';
import { PartService } from '../part.service';


@Component({
  selector: 'app-foundpartcomponent',
  templateUrl: './foundpart.component.html'
})
export class FoundPartComponent {

    foundPart: Part;

    constructor(private fb: FormBuilder, private partService: PartService){
       this.foundPart = new Part('','','','','','');
    }

    // Config Form Group
    foundpartForm = this.fb.group({  
        id: ['', Validators.required]
    });

    onSubmit() {
        var id = this.foundpartForm.value.id;
        
        this.foundPartService(id);
    }

    foundPartService(id: string){
        this.partService.foundPart(id).subscribe(result => {this.returnObjPartOfResult(result); console.log(this.foundPart)})
    }

    returnObjPartOfResult(result){
        var part = result.objResult
            var newPart = new Part(part.description, part.item, part.price, part.amount, part.color, part.urlPicture, part._id);
            this.foundPart = newPart;
    }

    //Deletar uma peça
    deletePart(part){
        this.partService.removePart(part.id).subscribe(result => {console.log(result)})
        this.foundpartForm.reset();
        this.foundPart = new Part('','','','','','');
    }

    //passar o objeto peça para o service e editar posteriormente
    partToEdit(part){
        this.partService.takePartToEdit(part);
    }

}
