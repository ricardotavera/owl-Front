import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePage,
  },
  ,
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'welcome'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
