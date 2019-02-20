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
}
