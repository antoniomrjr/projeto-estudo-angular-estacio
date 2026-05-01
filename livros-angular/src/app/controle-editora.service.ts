import { Injectable } from '@angular/core';
import { Editora } from './editora'; //importei a classe editora

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [ //defindo o atributo editoras como array e contendo 3 elementos em JSON
    { codEditora: 1, nome: 'Editora Abril' },
    { codEditora: 2, nome: 'Companhia das Letras' },
    { codEditora: 3, nome: 'Editora Saraiva' }
  ];

  constructor() {}
  

  //adicionando os métodos 'getEditoras' e 'getNomeEditora'
  getEditoras(): Array<Editora> {  
    return this.editoras; //retornando vetor editoras
  }

  
  getNomeEditora(codEditora: number): string { //recebe codEditora em numérico
    const resultado = this.editoras.filter( //retorna o 'nome' da editora com 'filter' no ventor 'editoras'
      e => e.codEditora === codEditora
    );

    return resultado.length > 0 ? resultado[0].nome : '';
  }
}