import {Aluno} from "./primeira3Atividade"
import * as leitor from "readline-sync";

const nome = leitor.question('Qual o nome do aluno?');
const novoAluno = new Aluno(nome);

const nota1 = leitor.questionFloat (`Qual a primeira nota do ${nome} ?`)
novoAluno.adicionaNota(nota1);

const nota2 = leitor.questionFloat (`Qual a segunda nota do ${nome} ?`)
novoAluno.adicionaNota(nota2);

const nota3 = leitor.questionFloat (`Qual a terceira nota do ${nome} ?`)
novoAluno.adicionaNota(nota3);

console.log ('A media é: ', novoAluno.calcularMedia());