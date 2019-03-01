import {Injectable} from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class BusquedaService{

    canchitas: Observable<any[]>;
    
      constructor(private _DB:AngularFirestore){
          this._DB.collection('canchitas').valueChanges();

      }         

   
}