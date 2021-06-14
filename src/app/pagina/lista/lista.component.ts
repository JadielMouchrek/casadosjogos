import { Component, OnInit } from '@angular/core';
import {Produto} from './../../produto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


   p1:Produto = new Produto ('MegamanX', 'megamanx@teste.com.br', 50,new Date('1992-12-17'));
   p2:Produto = new Produto ('Super Mario Word', 'supermarioworld@teste.com.br', 50,new Date('1990-11-21'));
   p3:Produto = new Produto ('Resident Evil 2 Remake', 're2remake@teste.com.br', 200,new Date('2019-01-25'));
   p4:Produto =  new Produto ('Resident Evil Village', 'residentvillage@teste.com.br', 179.99,new Date('2021-05-05'));
   produtos:Produto[] = [this.p1,this.p2,this.p3,this.p4];
  constructor() { }

  ngOnInit(): void {
  }

}
