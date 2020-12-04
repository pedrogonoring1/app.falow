import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Part } from 'src/app/models/part';
import { PartService } from '../part.service';


@Component({
  selector: 'app-allcomponent',
  templateUrl: './allpart.component.html'
})
export class AllPartComponent {

    modalRef: BsModalRef;

    allParts: Part[] = [];

    urlPicture;

    constructor(private partService: PartService, private modalService: BsModalService) {
        this.getAllParts();
       
    }


    getAllParts(){
        this.partService.allpart().subscribe(result => {this.pushObjPart(result); console.log(this.allParts)})
        
    }
    
    // for que gera os objetos para o array
    pushObjPart(result){
        for(let part of result.objResult){
            var newPart = new Part(part.description, part.item, part.price, part.amount, part.color, part.urlPicture, part._id);
            this.allParts.push(newPart);
        }
    }

    //passar o objeto peça para o service e editar posteriormente
    partToEdit(part){
        this.partService.takePartToEdit(part);
    }

    //Deletar uma peça
    deletePart(part){
        this.partService.removePart(part.id).subscribe(result => {console.log(result); this.allParts.splice(part.id); this.getAllParts()})
    }

    //ver foto
    viewPicture(part){
        this.urlPicture = part.urlPicture;
        console.log(this.urlPicture)
    }

     //modal
     openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

}
