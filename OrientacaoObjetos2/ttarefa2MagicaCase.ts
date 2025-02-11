import { Aluno } from "./ttarefaAjuste1Magica";
import * as leitor from 'readline-sync';

// Inicialize um array para armazenar os alunos
const alunos: Aluno[] = [];

function opcao() {
    console.log("\n==== BIBLIOTECA ====");
    console.log("\n 1- Cadastrar aluno");
    console.log(" 2- Inserir notas");
    console.log(" 3- Calcular média");

    const escolha = leitor.questionInt("Escolha uma opção: ");

    switch (escolha) {
        case 1:
            const matricula = leitor.questionInt("Informe a matrícula do aluno: ");
            const nome = leitor.question("Informe o nome do aluno: ");

            const novoAluno = new Aluno(matricula, nome);
            novoAluno.cadastroAluno(matricula, nome);

            // Adicione o aluno ao array
            alunos.push(novoAluno);
            return opcao()
        case 2:
            if (alunos.length === 0) {
                console.log("Erro: Nenhum aluno cadastrado.");
            } else {
                const index2 = leitor.questionInt("Informe o índice do aluno: ");

                if (Number.isInteger(index2) && index2 >= 0 && index2 < alunos.length) {
                    const aluno = alunos[index2];

                    const nota1 = leitor.questionFloat("Informe a primeira nota do aluno: ");
                    const nota2 = leitor.questionFloat("Informe a segunda nota do aluno: ");
                    const notaTrabalho = leitor.questionFloat("Informe a nota do trabalho do aluno: ");

                    aluno.insercaoDeNotas(nota1, nota2, notaTrabalho);
                    return opcao()
                } else {
                    console.log("Erro: Índice de aluno inválido.");
                }
            }
            break;
        case 3:
            if (alunos.length === 0) {
                console.log("Erro: Nenhum aluno cadastrado.");
            } else {
                const index3 = leitor.questionInt("Informe o índice do aluno: ");

                if (Number.isInteger(index3) && index3 >= 0 && index3 < alunos.length) {
                    const aluno = alunos[index3];

                    console.log(`Média do aluno: ${aluno.media()}`);
                    return opcao()
                } else {
                    console.log("Erro: Índice de aluno inválido.");
                }
            }
            break;
        case 4:
            if (alunos.length === 0) {
                console.log("Erro: Nenhum aluno cadastrado.")
            } else {
                const index4 = leitor.questionInt("Informe o índice do aluno: ");

                if (Number.isInteger(index4) && index4 >= 0 && index4 < alunos.length) {
                    const aluno = alunos[index4];

                    console.log(`Média do aluno: ${aluno.final()}`);
                    return opcao()
                } else {
                    console.log("Erro: Índice de aluno inválido.");
                }
            }
        default: ("Saindo")
            break;
    }
}
opcao();