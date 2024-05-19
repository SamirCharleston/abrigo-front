import { Cachorro } from "../cachorro/cachorro";
import { Tutor } from "../tutor/tutor";

export class Requerimento {
    id!: number;
    tutor!: Tutor;
    cachorros!: Cachorro[];
}
