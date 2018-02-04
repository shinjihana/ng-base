import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './core/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './core/components/layouts/auth-layout/auth-layout.component';

import { AuthGuard } from './core/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo : '/core',
    pathMatch: 'full' 
  },
  {
    path : 'core',
    loadChildren : './core/core.module#CoreModule',
    // canActivate: [AuthGuard],
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

