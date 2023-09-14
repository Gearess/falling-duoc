import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router) {
    this.formularioRegistro = this.fb.group({
      'costo': new FormControl("", Validators.required),
      'puestos': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async cost(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.valid){
      var viaje = {
        puestos: f.puestos,
        costo: f.costo
      }
  
      localStorage.setItem('viaje',JSON.stringify(viaje))
      const alert = await this.alertController.create({
        header: 'Datos ingresados',
        message: 'Los datos fueron ingresados de forma exitosa.',
        buttons: ['Aceptar']
      });

      await alert.present();
      this.router.navigateByUrl('/home')
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
