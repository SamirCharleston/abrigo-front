import { Cachorro } from "../cachorro/cachorro";
import { Tutor } from "../tutor/tutor";

export class Requerimento {
    id!: number;
    dataDoRequerimento!: Date;
    autorDoRequerimento!: Tutor;
    caesRequeridos!: Cachorro[];
}
