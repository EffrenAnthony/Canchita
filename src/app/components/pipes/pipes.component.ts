import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {

  nombre:string = "jorge luis";
  arreglo = [0,1,2,3,4,5,6,7,8,9];
  pi = Math.PI;
  igv= 0.18;
  sueldo:number = 8000.00;
  hoy:Date = new Date;

  perro:any = this.ladra();
  texto:string = "el peluca sape";

  objetoJson = {
    nombre: 'Jhon',
    apellido: 'Doe',
    colores: [
      {color: 'azul'},
      {color: 'rojo'}
    ]
  }

  constructor() {
    
   }

  ngOnInit() {
  }

  ladra(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve("Guau");
      },1500)
    })
  }

}
