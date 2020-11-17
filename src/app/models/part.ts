export class Part {

    codigo: string;
    description: string;
    item: string;
    price: string;
    amount: string;
    color: string;
    urlPicture: string;

    constructor(codigo: string, description: string, item: string, price: string, amount: string, color: string, urlPicture: string){
        this.codigo = codigo;
        this.description = description;
        this.item = item;
        this.price = price;
        this.amount = amount;
        this.color = color;
        this.urlPicture = urlPicture;
    }
}