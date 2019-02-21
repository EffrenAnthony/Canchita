import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../service/http.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {
  usuarios: Array<any> = []; 
  observer:any;
  constructor(private _sHttpService:HttpService) { }

  ngOnInit() {
    this.observer = this._sHttpService.getUsers().subscribe((respuesta)=>{
      console.log(respuesta);
      this.usuarios = respuesta.data;
    },(error)=>{   
      
    });
  

  }

  crearUsuario(){
    this._sHttpService.createUser("Jorge","Garnica").subscribe((respuesta)=>{

      console.log(respuesta);   
      
    },(error)=>{   
      console.log(error);
      
    });
    
  }

  // IMPORTANTE DES SUSCRIBIRSE A LA FUNCION
  
  ngOnDestroy() {
    
    this.observer.unsubscribe();
  }

}
