import { Routes } from '@angular/router';
import { TreeComponent } from './components/tree/tree.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'tree',
        component: TreeComponent,
    },
];
