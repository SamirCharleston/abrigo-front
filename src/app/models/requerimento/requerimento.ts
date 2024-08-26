import { Cachorro } from "../cachorro/cachorro";
import { Tutor } from "../tutor/tutor";

export class Requerimento {
    id!: number;
    criadoPor!: string;
    dataDaCriacao!: Date;
    atualizadoPor!: string;
    dataDeAtualizacao!: Date;
    dataDoRequerimento!: Date;
    autorDoRequerimento!: Tutor;
    caesRequeridos!: Cachorro[];
}
