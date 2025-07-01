export class Client {
    card_number: string;
    id: number;
    name: string;
    car_count?: number;
    service_count?: number;

    constructor(card_number: string, id: number, name: string) {
        this.card_number = card_number;
        this.id = id;
        this.name = name;
    }
}