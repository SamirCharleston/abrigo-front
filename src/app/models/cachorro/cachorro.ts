export class Cachorro {
    id!: number;
    nome: string;
    raca: string;
    porte: string;
    dataDaCriacao: Date;
    idadeAproximada: number;
    observation: string;
  
    constructor() {
      
      this.nome = '';
      this.raca = '';
      this.dataDaCriacao = new Date;
      this.porte = '';
      this.idadeAproximada = 0;
      this.observation = '';
    }
  }