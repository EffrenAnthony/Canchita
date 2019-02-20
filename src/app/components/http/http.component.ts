import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../service/http.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {
  observer:any;
  constructor(private _sHttpService:HttpService) { }

  ngOnInit() {
    this.observer = this._sHttpService.getUsers().subscribe((respuesta)=>{
      console.log(respuesta);
    },(error)=>{   
      
    });
  

  }

  // IMPORTANTE DES SUSCRIBIRSE A LA FUNCION
  
  ngOnDestroy() {
    
    this.observer.unsuscribe();
  }

}
