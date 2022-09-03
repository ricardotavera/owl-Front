import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
    children: [

      {path: 'login',
      loadChildren: () => import('../views/login/login.module').then(m => m.LoginPageModule)
      },

      {path: 'signup',
      loadChildren: () => import('../views/register/register.module').then(m => m.RegisterPageModule)
      },
      
      {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
      }
    ]
  },
  ,
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/welcome'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
