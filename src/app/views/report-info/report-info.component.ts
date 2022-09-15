import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Modality } from 'src/app/models/modality';
import { Report } from 'src/app/models/report';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-report-info',
  templateUrl: './report-info.component.html',
  styleUrls: ['./report-info.component.scss'],
})
export class ReportInfoComponent implements OnInit {

  report = {}      
  modality:string;
  constructor(private modalCtrl: ModalController,
    public navParams: NavParams,
    private globalService: GlobalService
    ) { }

  ngOnInit() {
    this.report = this.navParams.data;
    this.getModalities();
    
  }

  getModalities(){
    this.globalService.modalities.subscribe((res) => {
      res.map((it)=> {
        if (it.id == this.navParams.get('modalidad_id') ){
          this.modality = it.nombre;
        }
      })
      
    })

    
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
