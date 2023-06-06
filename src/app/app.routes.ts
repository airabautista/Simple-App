import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full',
  },
  {
    path: 'create',
    loadComponent: () => import('./create/create.page').then( m => m.CreatePage)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
  {
    path: 'trash',
    loadComponent: () => import('./trash/trash.page').then( m => m.TrashPage)
  },
  {
    path: 'vlogs',
    loadComponent: () => import('./vlogs/vlogs.page').then( m => m.VlogsPage)
  },
];
