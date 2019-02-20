import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './components/http/http.component';
import { MainComponent } from './components/main/main.component';


const routes:Routes = [
  {
    path:'http',
    component: HttpComponent
  },
  {
    path:'',
    component: MainComponent
    // asdfasdf
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
