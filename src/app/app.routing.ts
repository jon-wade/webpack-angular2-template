import { Routes, RouterModule } from '@angular/router';

//import components here
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);