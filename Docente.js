import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    aprovarEstudante(nomeEstudante){
        console.log(`Estudante ${nomeEstudante} aprovado(a).`); 
    }
    reprovarEstudante(nomeEstudante){
        console.log(`Estudante ${nomeEstudante} reprovado(a).`);
    }
}