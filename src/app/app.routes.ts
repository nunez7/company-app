import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./modules/admin/layouts/admin-layout/admin-layout.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/admin/pages/summary/summary-page.component'),
            },
            {
                path: 'projects',
                loadComponent: () => import('./modules/admin/pages/projects/projects-page.component'),
            },
        ]
    },
    {
        path: '**',
        redirectTo: '',

    }
];
