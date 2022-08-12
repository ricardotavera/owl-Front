import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../../views/profile/profile.component').then(m => m.ProfileComponent)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../../views/home/home.component').then(m => m.HomeComponent)
          }
        ]
      },
      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: () => import('../../views/report/report.component').then(m => m.ReportComponent)
          }
        ]
      },

      {
        path: 'noti',
        children: [
          {
            path: '',
            loadChildren: () => import('../../views/notifications/notifications.component').then(m => m.NotificationsComponent)
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () => import('../../views/info/info.component').then(m => m.InfoComponent)
          }
        ]
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
