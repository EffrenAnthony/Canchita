import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {

  userPost:any = {
    name:'',
    job:''
  }
  

  usuario:any = {
    nombre:'',
    apellido:'',
    email:''
  }

  constructor(private _sHttpService:HttpService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario);
    
  }

  onPost(){
    
    this._sHttpService.createUser(this.userPost.name,this.userPost.job).subscribe((respuesta)=>{

      console.log(respuesta);   
      
    },(error)=>{   
      console.log(error);
      
    });
  }

}
