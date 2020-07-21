import { Component, OnInit } from '@angular/core';
import{Usuario} from './usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios:Usuario[]=[
  {id:1,nomuser:"jonas",clave:"123"},
  {id:1,nomuser:"jhon",clave:"453"},
  {id:1,nomuser:"juan",clave:"321"},
  {id:1,nomuser:"pepe",clave:"132"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
