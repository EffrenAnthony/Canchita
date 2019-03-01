import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  termino = "";
  
  // router:any;

  constructor(private _router:Router) { 
    
  }

  ngOnInit() {
    // this.router = Router;
    // this.router.navigateByUrl('/login');
  }
  
  buscar(){
    this._router.navigateByUrl('/busqueda/'+this.termino);
  }

  
  


  
}
