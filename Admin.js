import User from "./User.js";
import { Cursos } from "./Cursos.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeCurso, vagas){
        Cursos.push({
            id: Cursos.length + 1,
            curso: nomeCurso.toLowerCase(),
            vagas: vagas,
        })
        console.log(`Curso de ${nomeCurso} criado!`);
    }
    excluirCurso(nomeCurso){
        const indexCurso = Cursos.findIndex(curso => curso.curso === nomeCurso.toLowerCase());
        delete Cursos[indexCurso];
    }
}

const novoAdmin = new Admin('Bero', 'b@b.com', '2021-06-04');
novoAdmin.criarCurso('Patrin', 4);
novoAdmin.excluirCurso('Patrin')
console.log(Cursos);
