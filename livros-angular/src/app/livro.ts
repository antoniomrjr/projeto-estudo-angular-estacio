export class Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor() {
    this.codigo = 0;
    this.codEditora = 0;
    this.titulo = '';
    this.resumo = '';
    this.autores = [];
  }
}

/*export class Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}*/