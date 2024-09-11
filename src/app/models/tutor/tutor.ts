import { Requerimento } from '../requerimento/requerimento';

export class Tutor {
  id!: number;
  status!: boolean;
  desativadoPor!: string;
  criadoPor!: string;
  dataDaCriacao!: Date;
  atualizadoPor!: string;
  dataDeAtualizacao!: Date;
  nome!: string;
  cpf!: string;
  contato!: string;
  idade!: number;
  endereco!: string;
}
