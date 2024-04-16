import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-menubar',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent  {

  public Menu: MenuItem[] = [
    {title: 'INICIO', route: '/home'},
    {title: 'ACERCA', route: '/about'},
    {title: 'INSTALACIONES', route: '/instalations'},
    {title: 'SERVICIOS', route: '/activities'},
    {title: 'CONTACTO', route: '/contact'},


  ]

}

