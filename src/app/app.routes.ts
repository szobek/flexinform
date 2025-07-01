import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full'
    },
    {
        path: 'clients',
        loadChildren: () => import('./clients/owner.routes').then(m => m.ownerRoutes)
    }
];
