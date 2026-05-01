import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Livro A',
      resumo: 'Resumo do Livro A',
      autores: ['Autor 1']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Livro B',
      resumo: 'Resumo do Livro B',
      autores: ['Autor 2', 'Autor 3']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Livro C',
      resumo: 'Resumo do Livro C',
      autores: ['Autor 4']
    }
  ];

  constructor() {}

  obterLivros(): Array<Livro> { //retorna todos os livros
    return this.livros;
  }

  incluir(livro: Livro): void { //incluindo um novo livro
    const maiorCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codigo))
      : 0;

    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void { //excluindo um livro pelo código
    const index = this.livros.findIndex(
      l => l.codigo === codigo
    );

    if (index !== -1) {
      this.livros.splice(index, 1); //usando splice
    }
  }
}