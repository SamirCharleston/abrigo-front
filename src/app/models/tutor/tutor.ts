export class Tutor {
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

}

