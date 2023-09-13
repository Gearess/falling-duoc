import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DisponiblePage } from '../disponible/disponible.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario = JSON.parse(localStorage.getItem('usuario')!) ?? { nombre: '', password: 0 };

  costo = JSON.parse(localStorage.getItem('precio')!) ?? {precio: 0};
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  p(){
    if (this.costo =! null){
        this.router.navigateByUrl('/disponible')
    }
  }

}

