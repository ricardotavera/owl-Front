import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsPage } from './notifications.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  },
  {
    path: 'tabs',
    loadChildren: () => import('../../layout/tablinks/tablinks.module').then(m => m.TablinksPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsPageRoutingModule {}
