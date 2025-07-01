export class Service{
    id:number
    client_id:number
    car_id: number
    log_number: number
    event: string
    event_time: string
    document_id: string
    created_at: string
    updated_at: string

    constructor(
        id:number,
        client_id:number,
        car_id: number, 
        log_number: number,
        event: string,
        event_time: string,
        document_id: string,
        created_at: string,
        updated_at: string
    ){
        this.id=id
        this.client_id=client_id
        this.car_id=car_id
        this.log_number=log_number
        this.event=event
        this.event_time=event_time
        this.document_id=document_id
        this.created_at=created_at
        this.updated_at=updated_at
    }
}