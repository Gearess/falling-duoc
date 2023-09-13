import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-disponible',
  templateUrl: './disponible.page.html',
  styleUrls: ['./disponible.page.scss'],
})
export class DisponiblePage implements OnInit {
  viaje = JSON.parse(localStorage.getItem('viaje')!) ?? {puestos: 0, costo: 0};
  constructor(public alertController: AlertController,
    private router: Router) {
   }

  ngOnInit() {
  }
  async alert(){
    const alert = await this.alertController.create({
      header: 'Todo Listo',
      message: 'Disfrute su Viaje',
      buttons: ['Aceptar']
    });

    await alert.present();
    this.router.navigateByUrl('/home')
  }
}
