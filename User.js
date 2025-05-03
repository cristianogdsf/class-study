import { Cursos } from "./Cursos.js";
export const alunos = []

export class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
        this.cursosMatriculados = [];
    }
    criarPerfil(){
        if (!alunos.find(aluno => aluno.nome === this.nome && aluno.nascimento === this.nascimento)){
            alunos.push({
                id: alunos.length +1,
                nome: this.nome,
                email: this.email,
                nascimento: this.nascimento,
                role: this.role || 'estudante',
                ativo: this.ativo,
                cursosMatriculados: [],
            });
            console.log('Perfil Criado.')
        } else {
            console.log('Você já tem um perfil criado.');
        }
    }
    apagarPerfil(){
        if (alunos.find(aluno => aluno.nome === this.nome && aluno.nascimento === this.nascimento)){
            const indexAluno = alunos.findIndex(aluno => aluno.nome === this.nome && aluno.nascimento === this.nascimento);
            delete alunos[indexAluno];
            console.log('Perfil apagado.');
        } else {
            console.log('Você ainda não tem um perfil.');
        }
    }
    exibirInfos(){
        console.log(`Seus dados:
            Nome: ${this.nome}
            E-mail: ${this.email}
            DN: ${this.nascimento}
            Cargo: ${this.role}`);
    }
    exibirListaCursos(){
        console.log('Cursos  -  Vagas');
        for(let i = 0; i < Cursos.length; i++){
            console.log(`${i+1}. ${Cursos[i].curso} - ${Cursos[i].vagas}`);
        }
    }
    matricularEmCurso(nomeCurso){
        const aluno = alunos.find(aluno => aluno.nome === this.nome && aluno.nascimento === this.nascimento);        
        if (aluno){
            const cursoProcurado = Cursos.find(curso => curso.curso === nomeCurso.toLowerCase());       
            if(cursoProcurado && cursoProcurado.vagas > 0 && !aluno.cursosMatriculados.includes(nomeCurso.toLowerCase())){
                aluno.cursosMatriculados.push(nomeCurso.toLowerCase());
                console.log(`Matriculado no curso de ${nomeCurso}`);
                cursoProcurado.vagas -= 1;
        } else {
            console.log('Não foi possível se cadastrar neste curso. Verifique se o curso está disponível');
        }} else {
            console.log('Verifique se você já tem perfil criado.');
        } 
    }
    exibirCursosMatriculados(){
        const aluno = alunos.find(aluno => aluno.nome === this.nome && aluno.nascimento === this.nascimento);
        if (!aluno.cursosMatriculados == ''){
            console.log('Matriculado nos cursos:');
            aluno.cursosMatriculados.forEach((curso) => console.log(curso));
        } else {
            console.log('Não há mátriculas.');
        }  
    }
}

const novoAluno = new User('Juliana', 'j@j.com', '2024-01-01');
const segundoAluno = new User('Lulinha', 'l@l.com', '2020-04-07');
novoAluno.criarPerfil()
novoAluno.matricularEmCurso('Python');