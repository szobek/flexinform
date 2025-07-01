import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'owners',
        pathMatch: 'full'
    },
    {
        path: 'owners',
        loadChildren: () => import('./clients/owner.routes').then(m => m.ownerRoutes)
    }
];
