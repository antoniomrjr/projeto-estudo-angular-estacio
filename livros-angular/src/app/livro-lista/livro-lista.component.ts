//######### ESTOU USANDO O ANGULAR STANDALONE ENTÃO TENHO QUE DECLARAR OS IMPORTS EM CADA COMPONENT POIS NÃO EXISTE MÓDULO GLOBAL 
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Livro } from '../livro';
import { Editora } from '../editora';

import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

import { FormsModule } from '@angular/forms'; //adicionando a biblioteca padrão de formulários

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, FormsModule], //utilizando a biblioteca no decorador
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}