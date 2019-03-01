import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../service/buqueda.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { extractDirectiveDef } from '@angular/core/src/render3/definition';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  // bd:any = this._db.canchitas
  // constructor(private _db:BusquedaService, private _termino:NavbarComponent) { }

  ngOnInit() {
    
    // let termino = this.extraer()
  }

  // extraer(){
    
  //   return new Promise((resolve,reject)=>{
  //     if(this.bd[0].nombre == this._termino.termino){
  //       resolve (this._db);
  //     }
  //       reject("este es un error");
  //   })
    
    
    
    
  }
  


