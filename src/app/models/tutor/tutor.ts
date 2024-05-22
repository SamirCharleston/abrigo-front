import { Requerimento } from '../requerimento/requerimento';

export class Tutor {
  id!: number;
  nome!: string;
  cpf!: string;
  dataRequerimento!: Date;
  contato!: string;
  idade!: number;
  endereco!: string;
  requerimentos!: Requerimento[];
}
