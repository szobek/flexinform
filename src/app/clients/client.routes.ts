import { Route } from "@angular/router";
import { ListComponent } from "./components/list/list";
import { ClientCarList } from "./components/client-car-list/client-car-list";
import { CarServiceList } from "../cars/components/car-service-list/car-service-list";

export const clientRoutes:Route[]=[
    {
        path: '',
        component:ListComponent
    },
    {
        path: ':id',
        component:ClientCarList
    },
    {
        path: ':id/cars/:carId/services',
        component:CarServiceList
    }
]