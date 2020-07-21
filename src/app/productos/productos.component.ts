import { Component, OnInit } from '@angular/core';
import{Producto} from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:Producto[]=[
    {id:1,nomproducto:"Granolas",precio:5,cantidad:10},
    {id:2,nomproducto:"Paneton",precio:23,cantidad:35},
    {id:3,nomproducto:"Frugos",precio:7,cantidad:42},
    {id:4,nomproducto:"Zumo",precio:6,cantidad:20}
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
