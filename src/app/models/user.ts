export class User {

    email: string;
    telefone: string;
    senha: string;
    nome: string;
    nomeUsuario: string;
    dataNascimento: Date;
    idUser?: string;

    constructor(email: string, telefone: string, senha: string, nome: string, nomeUsuario: string, dataNascimento: Date, idUser?: string){
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
        this.nome = nome;
        this.nomeUsuario = nomeUsuario;
        this.dataNascimento = dataNascimento;
        this.idUser = idUser;
    }
}