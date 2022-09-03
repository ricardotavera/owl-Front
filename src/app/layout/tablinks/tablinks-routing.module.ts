import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../../views/profile/profile.module').then(m => m.ProfilePageModule)
      }
      ,
      {
        path: 'home',
        loadChildren: () => import('../../views/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'report',
        loadChildren: () => import('../../views/report/report.module').then(m => m.ReportPageModule)
      },

      {
        path: 'noti',
        loadChildren: () => import('../../views/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../../views/info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tablinks/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
