import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Part } from '../models/part';


@Injectable({
    providedIn: 'root'
})
export class PartService {

    url = 'https://api-webparts.herokuapp.com/part/';

    partToEdit: Part;

     // Headers
     httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjQzZjQ5ZTZhOTRiMDAwNGZkYWE1MSIsImlhdCI6MTYwNTY1NTUwMCwiZXhwIjoxNjA1NzQxOTAwfQ.pI689BGxOD4TZimesHMtMv1tFj2bbrtXFQWbrhokgPg'})
    }

    // injetando o HttpClient
    constructor(private httpClient: HttpClient) {
     }


    //adicionar peças
    addpart(part: Part): Observable<Part> {
        return this.httpClient.post<Part>(this.url+'newpart', JSON.stringify(part), this.httpOptions)
        .pipe(retry(0), 
        catchError(this.handleError)
        )
    };

    //pegar todas as peças
    allpart(): Observable<Part> {
        return this.httpClient.get<Part>(this.url+'allpart', this.httpOptions)
        .pipe(retry(1), 
        catchError(this.handleError)
        )
    };

    //editar uma peça
    update(part: Part): Observable<Part> {
        return this.httpClient.post<Part>(this.url+'editionpart', JSON.stringify(part), this.httpOptions)
        .pipe(retry(0),
        catchError(this.handleError)
        )
    };

    //pegar peça para edição
    takePartToEdit(part: Part){
        this.partToEdit = part;
    }

    //remover peça
    removePart(idPart): Observable<Part>{
        return this.httpClient.delete<Part>(this.url+idPart, this.httpOptions)
        .pipe(retry(0),
        catchError(this.handleError)
        )
    };

    //pesquisar peça pelo id
    foundPart(idPart): Observable<Part>{
        return this.httpClient.post<Part>(this.url+'found/'+idPart, this.httpOptions)
        .pipe(retry(0),
        catchError(this.handleError)
        )
    };



    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };



}