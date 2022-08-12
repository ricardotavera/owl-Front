import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { HomeModule } from '../../views/home/home.module';
import { NotificationsModule } from '../../views/notifications/notifications.module';
import { ProfileModule } from '../../views/profile/profile.module';
import { ReportModule } from '../../views/report/report.module';
import { InfoModule } from '../../views/info/info.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsRoutingModule,
    HomeModule,
    NotificationsModule,
    ProfileModule,
    ReportModule,
    InfoModule
  ]
})
export class TabsModule { }
