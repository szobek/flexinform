import { Route } from "@angular/router";
import { ListComponent } from "./components/list/list";
import { Client } from "./models/Client";
import { ClientCarList } from "./components/client-car-list/client-car-list";

export const ownerRoutes:Route[]=[
    {
        path: '',
        component:ListComponent
    },
    {
        path: ':id',
        component:ClientCarList
    }
]