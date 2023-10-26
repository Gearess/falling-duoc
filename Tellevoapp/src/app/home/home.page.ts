import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DisponiblePage } from '../disponible/disponible.page';
import { AlertController } from '@ionic/angular';
import { AutheticationService } from '../authetication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  viaje = JSON.parse(localStorage.getItem('viaje')!);
  email :any
  constructor(private router: Router,
    public alertController: AlertController,
    private authService: AutheticationService) {}

    ngOnInit(): void {
   
      this.authService.getProfile().then((user) =>{
          this.email = user?.email
          console.log(user);
          
      })
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

  signOut(){

    this.authService.signOut().then(() =>{
      this.router.navigate(['/login'])
    })
   }
}

