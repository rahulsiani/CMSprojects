import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
  {
    'path': 'authentication',
    loadChildren: () => import('./authentication/login.module').then(m => m.LoginModule)
  },
  {
    'path': 'component', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', loadChildren: () => import('./component/allcomponent.module').then(m => m.AllcomponentModule)
      }
    ]
  },
  { 'path': '', redirectTo: 'authentication', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
