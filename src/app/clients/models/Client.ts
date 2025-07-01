export class Client {
    card_number: string;
    id: number;
    name: string;

    constructor(card_number: string, id: number, name: string) {
        this.card_number = card_number;
        this.id = id;
        this.name = name;
    }
}