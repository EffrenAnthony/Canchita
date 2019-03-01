import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { NgForm } from "@angular/forms";
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { CanchaInterfaces } from '../../interface/cancha.interfaces';
import { FirebaseService } from '../../service/firebase.service';
// import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  canchitas: Observable<any[]>;

  constructor(private _sFirebase:FirebaseService,
              private toastr: ToastrService) {
  }
  ngOnInit() {
    this.canchitas = this._sFirebase.getCanchas().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }
  enviar(){
    console.log(this._sFirebase.nuevaCancha);
    if(!this._sFirebase.nuevaCancha.id ){
      this._sFirebase.crearCancha(this._sFirebase.nuevaCancha)
                      .then((response)=>{
                        console.log("canchita creada");
                      });
                      this.toastr.success("El envío fue satisfactorio", "Operacion Exitosa");
                      
    }
    else{
      this._sFirebase.editarCancha(this._sFirebase.nuevaCancha.id);
    }
    this.limpiarFrm();
  }

  editarCancha(cancha:CanchaInterfaces){
    this._sFirebase.nuevaCancha = Object.assign({},cancha);
  }

  borrar(id:string){
    if(confirm("¿Está seguro que desea borrar el objeto?")){      
        this._sFirebase.borrarCancha(id);
    }
  }

  limpiarFrm(){
    this._sFirebase.nuevaCancha={
      nombre: "",
      direccion: ""
    }
  }
}




// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import {map} from 'rxjs/operators';
// import { FirebaseService } from '../../service/firebase.service';
// import { CanchaInterfaces } from '../../interface/cancha.interfaces';
// import { CanchaInterface } from '../../../../../../../../clone crud/canchita-mon/src/app/interfaces/cancha.interfaces';


// @Component({
//   selector: 'app-firebase',
//   templateUrl: './firebase.component.html',
//   styleUrls: ['./firebase.component.css']
// })
// export class FirebaseComponent implements OnInit {

//   canchitas: Observable<any[]>;
//   nuevaCancha = {
//     nombre:'',
//     direccion:''
//   }
//   selectedCacha = {
//     nombre:'',
//     direccion:'',
//     id:''
//   };
//   constructor(private _sFirebase:FirebaseService) {
//   }
//   ngOnInit() {
//     // la funcion map ejecuta una funcion y la ejecuta en una variable y lo devuelve como un observable
//     this.canchitas = this._sFirebase.getCanchas().pipe(
//       map(actions => actions.map(a => {
//         const data = a.payload.doc.data();
//         const id = a.payload.doc.id;
//         return {id,...data};
//         // los tres puntos retorna data como si fuecen elementos infependientes
//       })));
//   }
//   crearCancha(){
//     console.log(this.nuevaCancha);
//     this._sFirebase.crearCancha(this.nuevaCancha)
//                     .then((response)=>{
//                       console.log("La canchita se creó");
//                     });
//     }   

//     onSelect(cancha:any){
//       this.selectedCacha = cancha;
//       console.log(this.selectedCacha);
      
//     }

    
    

//     updateCancha(){
//       console.log(this.nuevaCancha);
//       this._sFirebase.updateCancha( this.nuevaCancha)
//                     .then((response)=>{
//                         console.log(response);
                        
//                     })

//         }     
    
//     deleteCancha(){
//       this._sFirebase.deleteCancha(this.selectedCacha)
//                       .then((response)=>{
//                         console.log(this.selectedCacha);
                        
//                         console.log("Cancha eliminada exitosamente");                       

//                       }).catch((error)=>{
//                         console.log("No existe esa cancha");
                        
//                       })
//     }
    
// }

