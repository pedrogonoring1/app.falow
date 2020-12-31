export class Post {

    tag: string;
    idUsuario: string;
    mensagem: string;
    dateTime: Date;
    nomeUsuario: string;
    curtidas?: number;
    visualizacoes?: number
    idPost?: string;

    constructor(tag: string, idUsuario: string, mensagem: string, dateTime: Date, nomeUsuario: string,curtidas?: number, visualizacoes?: number,idPost?: string){
        this.tag = tag;
        this.idUsuario = idUsuario;
        this.mensagem = mensagem;
        this.dateTime = dateTime;
        this.nomeUsuario = nomeUsuario;
        this.curtidas = curtidas;
        this.visualizacoes = visualizacoes;
        this.idPost = idPost;
    }
}