import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-postulante-nuevo',
  templateUrl: './postulante-nuevo.component.html'
})
export class PostulanteNuevoComponent implements OnInit {
  heading = 'Información básica personal';
  subheading = 'Debe incluir la información básica de la persona o postulante.';
  icon = 'pe-7s-science icon-gradient bg-happy-itmeo';

  formGroup = new FormGroup({
    primerNombre: new FormControl('', Validators.required),
    segundoNombre: new FormControl('', null),
    primerApellido: new FormControl('', Validators.required),
    segundoApellido: new FormControl('', null),
    ciudad: new FormControl('', Validators.required),
    departamento: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    tipoIdentificacion: new FormControl('', Validators.required),
    identificacion: new FormControl('', Validators.required),
    paisExpedicion: new FormControl('', Validators.required),
    ciudadExpedicion: new FormControl('', Validators.required)
  });

  constructor() { }

  paises = [
    { id: 1, name: 'Colombia' }
  ];

  departamentos = [
    { id: 1, name: 'Bogotá D.C.', paisId: 1 },
    { id: 2, name: 'Cundinamarca', paisId: 1 },
    { id: 3, name: 'Antioquia', paisId: 1 },
  ];

  ciudades = [
    { id: 1, name: 'Bogotá D.C.', departamentoId: 1 },
    { id: 2, name: 'Medellín', departamentoId: 3 },
    { id: 3, name: 'Girardot', departamentoId: 2 },
  ];

  tiposIdentificacion = [
    { id: 1, name: 'Cédula de ciudadanía' },
    { id: 2, name: 'Cédula de extranjería' },
    { id: 3, name: 'Pasaporte' },
  ]

  model = { };

  ngOnInit() {
  }

}
