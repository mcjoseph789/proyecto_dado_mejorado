import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-dados';
  valor1: Array<any> = [];
  resultado:string = "";
  @ViewChild('selector1') dado1!:DadoComponent;
  @ViewChild('selector2') dado2!:DadoComponent;
  @ViewChild('selector3') dado3!:DadoComponent;

  constructor(private cdRef:ChangeDetectorRef){
  }

  ngAfterViewChecked(){
    this.valor1 = [];
    this.valor1.push(this.dado1.getValor());
    this.valor1.push(this.dado2.getValor());
    this.valor1.push(this.dado3.getValor());
    this.resultado = this.verificar() ? "Ganó!" : "Perdió";
    this.cdRef.detectChanges(); // ??
  }
  asignar(valor: any){
    this.valor1.push(valor);
  }

  lanzar(){
    this.valor1 = [];
    this.valor1.push(this.dado1.lanzar());
    this.valor1.push(this.dado2.lanzar());
    this.valor1.push(this.dado3.lanzar());
    this.resultado = this.verificar() ? "Ganó!" : "Perdió";
  }

  verificar(){
    if(!this.valor1.length) return false;
    const [dado] = this.valor1 // Primer valor del array
    return this.valor1.every((e) => e == dado)
  }


}
