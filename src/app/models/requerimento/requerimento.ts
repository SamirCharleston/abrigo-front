import { Cachorro } from "../cachorro/cachorro";
import { Tutor } from "../tutor/tutor";

export class Requerimento {
    id!: number;
    status!: boolean;
    desativadoPor!: string;
    criadoPor!: string;
    dataDaCriacao!: Date;
    atualizadoPor!: string;
    dataDeAtualizacao!: Date;
    dataDoRequerimento!: Date;
    autorDoRequerimento!: Tutor;
    caesRequeridos!: Cachorro[];
}
