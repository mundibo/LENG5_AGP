import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Registrar Reunión', url: '/registrarreunion', icon: 'calendar' },
    { title: 'Reconocimiento', url: '/reconocimiento', icon: 'star' },
    { title: 'Colaboradores', url: '/colaboradores', icon: 'person' },
    { title: 'Valores', url: '/valores', icon: 'thumbs-up' }
  ];
  
  
  constructor() {}

  
}
