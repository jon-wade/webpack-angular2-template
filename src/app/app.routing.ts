import { Routes, RouterModule } from '@angular/router';

//import components here

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);