import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.component.html'
})
export class PostulantesComponent implements OnInit {

  heading = 'Postulantes';
  subheading = 'Aquí encontrará la información de postulantes registrados en el sistema.';
  icon = 'pe-7s-science icon-gradient bg-happy-itmeo';

  constructor() { }

  ngOnInit() {
  }

}
