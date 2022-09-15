import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
import { ReportInfoComponent } from '../report-info/report-info.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})


export class NotificationsPage implements OnInit {


  posts = []



  constructor(private router: Router,
    private globalService: GlobalService,
    private modalCtrl: ModalController) {

  }

  ngOnInit() {
    this.getData()
  }


  getData(){
    this.globalService.getReports().subscribe( (res) => {
      this.posts = res
    })
    this.posts.map( (item) => {
      item.fecha = new Date(item.fecha)
    })

  }


  async openInfoPanel(report) {
    const modal = await this.modalCtrl.create({
      component: ReportInfoComponent,
      componentProps: report,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
    })

    return await modal.present();
  }

}
