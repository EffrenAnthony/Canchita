import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// observable: ejecuta diferentes funciones mientras se eejcute (como dice jorge, mientras siga observando), es una funcion asincrona
// en el observable hay que suscribirse a el para que cada vez que llegue un dato, se ejecute alguna funcion 
// es importante cerrar el observable una vez se ejecuten las funciones que se requirieron
// en resumen, una promesa solo se ejecuta una vez y un observable es una promesa que se ejcuta varias veces hastas que se detenga manualmente
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // los servicios se inyectan ene lcontructor
  constructor(private _sHttpClient:HttpClient) { }

  //Para consumir una API externa se hace uso del servicio HTTP CLIENT

  getUsers():Observable<any>{
    let url = "https://reqres.in/api/users?page=2";
    // esta funcion retornará un observable
    return this._sHttpClient.get(url);
  }

  createUser(_name:string, _job:string):Observable<any>{
    let url = "https://reqres.in/api/users";
    let usuario = {
      name: _name,
      job: _job
    }
    let usuarioJSON = JSON.stringify(usuario);
    let misHeaders = new HttpHeaders().set('Content-Type','application/json');

    // post recive una url , un json y finalmente un header o cabecera  
    
    return this._sHttpClient.post(url,usuarioJSON,{headers:misHeaders});

    
  }
}

//  Las Cabeceras HTTP son los parámetros que se envían en una petición o respuesta HTTP 
    // al cliente o al servidor para proporcionar información esencial sobre la transacción en curso.
    //  Estas cabeceras proporcionan información mediante la sintaxis 'Cabecera: Valor' y son enviadas 
    // automáticamente por el navegador o el servidor Web.
