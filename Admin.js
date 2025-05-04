import { User } from "./User.js";
import { alunos } from "./User.js";
import { docentes } from "./Docente.js";
import { Cursos } from "./Cursos.js";
const admins = [];

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    criarPerfil(){
        if (!admins.find(admin => admin.nome === this.nome && admin.nascimento === this.nascimento)){
            admins.push({
                id: admins.length +1,
                nome: this.nome,
                email: this.email,
                nascimento: this.nascimento,
                role: this.role || 'admin',
                ativo: this.ativo,
            });
            console.log('Perfil Criado.')
        } else {
            console.log('Você já tem um perfil criado.');
        }
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
    desativarPerfil(role, id, nome){
        if(role.toLowerCase() === 'docente'){
            const docenteProcurado = docentes.find(docente => docente.id === id && docente.nome.toLowerCase() === nome.toLowerCase());
            if (docenteProcurado){
                docenteProcurado.ativo = false;
                console.log('Perfil docente desativado.');
            } else {
                console.log('Verifique os dados do usuário.');
            };
            
        } else if (role.toLowerCase() === 'aluno'){
            const alunoProcurado = alunos.find(aluno => aluno.id === id && aluno.nome.toLowerCase() === nome.toLowerCase());
            if (alunoProcurado){
                alunoProcurado.ativo = false;
                console.log('Perfil aluno desativado.');
            } else {
                console.log('Verifique os dados do usuário.');
            }
        } else {
            console.log('Verifique os dados do usuário.');
        }
    }
}

const novoAdmin = new Admin('Beronildo', 'b@b.com', '2021-06-04');

novoAdmin.desativarPerfil('aluno', 2, 'juliana');
console.log(alunos);