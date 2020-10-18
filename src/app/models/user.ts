export class User {

    firstName: string;
    lastName: string;
    email: string;
    password: string;
    idUser?: string;

    constructor(firstName: string, lastName: string, email: string, password: string, idUser?: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.idUser = idUser;
    }
}