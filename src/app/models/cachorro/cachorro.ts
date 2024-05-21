export class Cachorro {
    nome: string;
    raca: string;
    dataAtual: Date;
    porte: string;
    idade: number;
    observation: string;
  
    constructor() {
      this.nome = '';
      this.raca = '';
      this.dataAtual = new Date();
      this.porte = '';
      this.idade = 0;
      this.observation = '';
    }
  }