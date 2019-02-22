import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {
// value es el valor y args es el parametro que podria recibir
  transform(value: any, args?: any): any {
    
    let cap = (valor)=>{
      for (let i = 0; i < valor.length; i++) {
        if(i == 0){
  
          valor[i] = valor[i].toUpperCase();
          
        }else if (valor[i-1] == " ") {
          valor[i] = valor[i].toUpperCase();
        }  
      }
      return valor;
      
    }
    return cap(value);
  }

}
