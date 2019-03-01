import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './components/http/http.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsComponent } from './components/forms/forms.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const routes:Routes = [
  {
    path:'http',
    component: HttpComponent
  },
  {
    path:'',
    component: MainComponent   
  },
  {
    path:'forms',
    component: FormsComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'firebase',
    component: FirebaseComponent
  },
  {
    path: 'busqueda/:termino',
    component: BusquedaComponent
  },
  {
    path:'**',
    component: ErrorComponent  
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
