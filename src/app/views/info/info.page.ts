import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage {

  cais = []
  telefono = '23224334'

  constructor(private alertController: AlertController,
    private globalService: GlobalService) { }



  ngOnInit() {

    this.getCais();

  }


  getCais() {
    this.globalService.getCais().subscribe((res) => {
      this.cais = res;
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Informacion',
      message: 'Los psicólogos explican que un estado de calma ante momentos de riesgo, puede transformar la escena a nuestro favor y tener buen desenlace. Por el contrario, perder el control podría desatar la ira de los delincuentes y generar mayor violencia con probabilidades de agresión física, teniendo desenlaces graves. Sabemos que es complicado y hasta imposible, anticipar el cómo reaccionaremos ante estos momentos. Una persona que afortunadamente jamás ha vivido esta terrible situación, no puede medir cómo reaccionaría; por eso queremos brindarte recomendaciones a seguir en momentos de robo, para que puedas tener control de la situación:<br> No te muestres nervioso/a. <br> Evita el contacto visual.<br>Mantén la mirada baja.<br>No grites.<br>No salgas corriendo.<br>Trata de detallar algo que esté o estén utilizando, pero con la mirada baja; puede ser su ropa, el suéter o camisa que utilice. Sino, detalla un rasgo físico particular cuando tengas la oportunidad, procura hacerlo en diferentes momentos en los que la persona no te esté observando. ',
      buttons: ['OK'],

    });
    await alert.present();


  }




}
