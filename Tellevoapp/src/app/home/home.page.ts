import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DisponiblePage } from '../disponible/disponible.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario = JSON.parse(localStorage.getItem('usuario')!) ?? { nombre: '', password: 0 };

  viaje = JSON.parse(localStorage.getItem('viaje')!);
  
  constructor(private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  async p(){
    if (this.viaje !== null){
        this.router.navigateByUrl('/disponible')
    }
    else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}

