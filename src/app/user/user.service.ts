import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    url = 'https://api-webparts.herokuapp.com/user/';

    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


    //Add new user
    newUser(user: User): Observable<User> {
        return this.httpClient.post<User>('https://api-webparts.herokuapp.com/user/signup', JSON.stringify(user), this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
          )
    };

    //login
    login(user: User): Observable<User> {
        return this.httpClient.post<User>('https://api-webparts.herokuapp.com/user/login', JSON.stringify(user), this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
          )
    }





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