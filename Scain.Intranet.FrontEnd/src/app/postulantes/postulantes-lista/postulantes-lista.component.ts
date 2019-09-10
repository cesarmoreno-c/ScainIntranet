import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postulantes-lista',
  templateUrl: './postulantes-lista.component.html'
})
export class PostulantesListaComponent implements OnInit {

  constructor() { }

  postulantes: any[] = [
    { nombre: 'Ronald', apellido: 'Dusan', identficacion: '34.567.876', ciudad: 'Bogotá D.C.', cargo: 'Ingeniero de Sistemas' },
    { nombre: 'Monica', apellido: 'Villamizar', identficacion: '25.365.806', ciudad: 'Bogotá D.C.', cargo: 'Abogado' },
    { nombre: 'Adriana', apellido: 'Casalles', identficacion: '23.501.456', ciudad: 'Medellín', cargo: 'Contador' },
    { nombre: 'Grace', apellido: 'Romero', identficacion: '22.501.301', ciudad: 'Bogotá D.C.', cargo: 'Ingeniero de Sistemas' },
    { nombre: 'Martín', apellido: 'Gonzáles', identficacion: '75.534.860', ciudad: 'Bogotá D.C.', cargo: 'Abogado' }
  ];
  
  ngOnInit() {
  }

}
