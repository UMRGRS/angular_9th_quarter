import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { MainPage } from './main-page/main-page';
import { SharedData } from './global/services/shared-data';

export const routes: Routes = [
    {
        path: '',
        component: LandingPage,
        title: 'Welcome'
    },
    {
        path: 'player',
        component: MainPage,
        title: 'Player',
        canActivate: [SharedData]
    },
];
