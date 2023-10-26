import { Component, OnInit } from '@angular/core';
import { AutheticationService } from 'src/app/authetication.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
email:any
  constructor(private authService:AutheticationService,private toastController: ToastController,private router: Router) { }

  ngOnInit() {
  }

  reset(){
    this.authService.resetPassword(this.email).then( () =>{      
      console.log('sent'); //show confirmation dialog
      this.presentToast()
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'El link para cambiar tu contraseña ya ha sido enviado',
      duration: 2000, // Duration in milliseconds
      position: 'bottom' // Position of the toast (top, bottom, middle)
    });
  
    toast.present();
    toast.onDidDismiss().then(()=>{
      this.router.navigate(['/login']);
    })
  }
}