import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'card-usuario',
  templateUrl: './card-usuario.component.html',
  styles: []
})
export class CardUsuarioComponent implements OnInit {

  @Input() user:any;
  constructor() { }

  ngOnInit() {
    
  }

}
