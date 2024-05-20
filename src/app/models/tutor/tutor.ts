import { Requerimento } from "../requerimento/requerimento";

export class Tutor {
<<<<<<< HEAD
    id!: number;
    nome!: string;
    dataRequerimento!: Date;
    contato!: string;
    idade!: number;
    endereco!: string;
    requerimentos!: Requerimento[];
=======
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

>>>>>>> 588ddd17933b773655032b1f671e1b8783a39021
}

