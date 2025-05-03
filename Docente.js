import User from "./User.js";
import { alunos } from "./User.js";
const docentes = [];

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    criarPerfil () {
        if (!docentes.find(docente => docente.nome === this.nome && docente.nascimento === this.nascimento)){
            docentes.push({
                id: docentes.length +1,
                nome: this.nome,
                email: this.email,
                nascimento: this.nascimento,
                role: this.role || 'docente',
                ativo: this.ativo,
            });
            console.log('Perfil Criado.')
        } else {
            console.log('Você já tem um perfil criado.');
        }
    }
    aprovarEstudante(nomeEstudante){
        const aluno = alunos.find(aluno => aluno.nome === nomeEstudante);
        return aluno ? console.log(`Estudante ${nomeEstudante} aprovado(a).`) : console.log('Verifique se o nome do aluno está correto');
    }
    reprovarEstudante(nomeEstudante){
        const aluno = alunos.find(aluno => aluno.nome === nomeEstudante);
        return aluno ? console.log(`Estudante ${nomeEstudante} reprovado(a).`) : console.log('Verifique se o nome do aluno está correto');
        
    }
}