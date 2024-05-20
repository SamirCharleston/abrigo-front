import { Requerimento } from "../requerimento/requerimento";

export class Tutor {
<<<<<<< HEAD
    Nome!: String;
    Contato!: Number;
    Idade!: Number;
    endereco!: String;
    constructor(Nome: String, Contato: Number,endereco: String, Idade: Number){
        this.Nome = Nome;
        this.Contato = Contato;
        this.endereco = endereco;
        this.Idade = Idade;
    }

=======
    id!: number;
    nome!: string;
    dataRequerimento!: Date;
    contato!: string;
    idade!: number;
    endereco!: string;
    requerimentos!: Requerimento[];
>>>>>>> 90fe26e03f4ffab72ef875520ab01aa02d940380
}

