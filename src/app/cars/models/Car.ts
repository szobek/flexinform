import { Service } from "./Service"

export class Car {
   id: number
    client_id:number
    car_id:string
    type: string
    registered: string
    ownbrand: boolean
    accidents: number
    created_at: string
    updated_at: string
    latest_service: Service
   
    constructor(
        id: number,
        client_id: number,
        car_id: string,
        type: string,
        registered: string,
        ownbrand: boolean,
        accidents: number,
        created_at: string,
        updated_at: string,
        latest_service: Service
    ) {
        this.id = id;
        this.client_id = client_id;
        this.car_id = car_id;
        this.type = type;
        this.registered = registered;
        this.ownbrand = ownbrand;
        this.accidents = accidents;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.latest_service = latest_service;
    }
}