import { Routes } from '@angular/router';
import { TreeComponent } from './components/tree/tree.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';

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
    {
        path: 'list',
        component: ListComponent,
    },
];
