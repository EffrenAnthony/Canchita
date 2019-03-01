import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { CanchaInterfaces } from '../interface/cancha.interfaces';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  termino:string;

  nuevaCancha:CanchaInterfaces = {
    nombre:'',
    direccion:''
  }

  db:AngularFirestoreCollection;
  constructor(private _db:AngularFirestore) {
    this.db = _db.collection('canchitas');
  }
  getCanchas():Observable<any[]>{
    // valueChanges, trae la data interna del documento unicamente
    // return this.db.valueChanges();
    return this.db.snapshotChanges();
  }

  //! Buscador  -- Falta completar
  buscarCancha(term){
    this.termino = term;
  }

  //! CRUD
  crearCancha(cancha:any):Promise<any>{
    // en caso se desee guardar el id previamente
    // const id = this._db.createId();
    // this.db.doc(id).set(cancha);
    return this.db.add(cancha);
  }
  editarCancha(id:any):Promise<any>{
    //set reemplaza los valores antiguos por los nuevos enviados
    //update actualiza solo los valores enviados
    let canchaFinal = {
      nombre:this.nuevaCancha.nombre,
      direccion:this.nuevaCancha.direccion
    }
    return this.db.doc(id).update(canchaFinal);
  }
  borrarCancha(id:any):Promise<any>{
    return this.db.doc(id).delete();
  }
}



// import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
// import {Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirebaseService {

//   // par poder guardar la coleccion de base de dtos de firestore
//   db:AngularFirestoreCollection;
//   constructor(private _db:AngularFirestore) {
//     this.db = _db.collection('canchitas');
//   }
//   // value change representa a los pares ordenados de los arreglos de la funcion
//   // por esto value change trae la data interna del documento unicamente
//   getCanchas():Observable<any[]>{
//     // return this.db.valueChanges();
//     // snapshotChanges trae todo el documento no solo los valores
//     return this.db.snapshotChanges();
//   }
//   crearCancha(cancha:any):Promise<any>{
//     // en caso se desee guardar el id previamente
//     // const id = this._db.createId();
//     // this.db.doc(id).set(cancha);
//     return this.db.add(cancha);
//   }
  
  

//   updateCancha(cancha:any):Promise<any>{
//     // ser reemplaza los valores antigups por los nuevos enviados
//     // update actualiza solo los valores enviados
//       let canchaFinal = {
//       nombre:cancha.nombre,
//       direccion:cancha.direccion
//       }

//     return this.db.doc(cancha.id).update(canchaFinal);
//   }

//   deleteCancha(cancha:any):Promise<any>{
//     return this.db.doc(cancha.id).delete();
//   }
// }
