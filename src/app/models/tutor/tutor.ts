import { Requerimento } from "../requerimento/requerimento";

export class Tutor {
<<<<<<<<< Temporary merge branch 1
    id!: number;
    nome!: string;
    dataRequerimento!: Date;
    contato!: string;
    idade!: number;
    endereco!: string;
    requerimentos!: Requerimento[];
=========
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

>>>>>>>>> Temporary merge branch 2
}

