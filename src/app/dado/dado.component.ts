import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  valor: number;
  @Output() selectValor = new EventEmitter<any>();
  constructor() {
    this.valor = this.aleatorio();
   }

  ngOnInit(): void {
    // this.valor = Math.trunc(Math.random()*6)+1;
  }

  classDado(index:number){
    return `dot dot${index}`
  }

  array(){
    return Array.from({length: this.valor}, (_, i) => i + 1)
  }

  classContainer(){
    switch (this.valor) {
      case 1:
        return "front";
      case 2:
        return "back";

      case 3:
        return "right";
        case 4:
      return "left";
      case 5:
      return "top";
      case 6:
      return "bottom";
      default:
        return ""
    }
  }

  aleatorio(){
    return Math.trunc(Math.random()*6)+1;
  }

  lanzar(){
    this.valor = this.aleatorio();
    return this.valor;
  }

  onSelectValor(valor: number){
    this.selectValor.emit(valor);
  }

  public getValor(){
    return this.valor;
  }
}
