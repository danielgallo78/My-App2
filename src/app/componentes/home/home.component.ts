import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from '../../hijo/hijo.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HijoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

nombre:string = 'Nombre usuario';

constructor(){

}

ngOnInit(): void {
    
}

cambiarNombre() {
  this.nombre ='GalloJim';
  
}
}
