import { Cursos } from "./Cursos.js";

export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
        this.cursosMatriculados = [];
    }
    criarPerfil(){
        return this.nome !== null ? console.log('Perfil Criado.') :
        console.log('Favor, insira os dados para criar o perfil.');
    }
    apagarPerfil(){
        this.nome = null;
        this.email = null;
        this.nascimento = null;
        this.role = null;
        this.ativo = null;
        console.log('Perfil apagado.');
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
        const procuraCursoNaLista = Cursos.find(curso => curso.curso === nomeCurso);
        if(!this.cursosMatriculados.includes(nomeCurso) && procuraCursoNaLista && procuraCursoNaLista.vagas > 0){
            procuraCursoNaLista.vagas -= 1;
            this.cursosMatriculados.push(nomeCurso);
            console.log(`Matriculado no curso de ${nomeCurso}`);
        } else {
            console.log('Não foi possível se cadastrar neste curso. Verifique se o curso está disponível');
        }
    }
    exibirCursosMatriculados(){
        if (!this.cursosMatriculados == ''){
            console.log('Matriculado nos cursos:');
            this.cursosMatriculados.forEach((curso) => console.log(curso));
        } else {
            console.log('Não há mátriculas.');
        }  
    }
}

const novoAluno = new User('Juliana', 'j@j.com', '2024-01-01');
