import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'content-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    // Aquí puedes agregar el código para manejar el envío del formulario
    // Por ejemplo, puedes enviar los datos a un servidor o mostrar un mensaje de confirmación
  }


}
