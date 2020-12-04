export class Part {

    description: string;
    item: string;
    price: string;
    amount: string;
    color: string;
    urlPicture: string;
    id?: string;

    constructor(description: string, item: string, price: string, amount: string, color: string, urlPicture: string, id?: string){
        this.description = description;
        this.item = item;
        this.price = price;
        this.amount = amount;
        this.color = color;
        this.urlPicture = urlPicture;
        this.id = id;
    }
}