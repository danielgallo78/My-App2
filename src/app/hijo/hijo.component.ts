import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo:string = 'sin nombre';
  @Output() cambioNombreHijo = new EventEmitter<string>();
  constructor(){

  }

ngOnInit(): void {
    

}

cambiarNombreNuevo(){
this.nombreHijo = 'Daniel Genario';
this.cambioNombreHijo.emit(this.nombreHijo);
}
}