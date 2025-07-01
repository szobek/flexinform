import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full'
    },
    {
        path: 'clients',
        loadChildren: () => import('./clients/client.routes').then(m => m.clientRoutes)
    },
     {
        path: '**',
        pathMatch: 'full',
        component:NotFound
    },
];
