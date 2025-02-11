
import { Aluno, Data, Voo, Prova } from "./tarefa1";
import * as leitor from "readline-sync"
const aluno = new Aluno(10, "Teste", 10, 9, 8);

console.log(aluno.media());

if (aluno.media() >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
console.log(aluno);

console.log(aluno.final());

const data1 = new Data(1, 1, 2023);
const data2 = new Data(1, 2, 2023);

console.log(data1.compara(data2));
console.log(data1.getMesExtenso());
console.log(data1.clone());

const voo = new Voo("voo-123", "22-08-2023");

console.log(voo.proximoLivre());

console.log(voo.ocupa(1));

console.log(voo.proximoLivre());

console.log(voo.verifica(1));

console.log(voo.ocupa(2));

console.log(voo.vagas());

const prova = new Prova();

for (let i = 1; i < 15; i++) {
    const resposta = leitor.question("Resposta da questão " + (i) + ": ").toUpperCase();
    prova.respostaAluno(resposta);
}

console.log(prova.acertos());
console.log(prova.nota());

const outraProva = new Prova();
for (let i = 1; i < 15; i++) {
    const resposta = leitor.question("Resposta da questão " + (i) + ": ");
    outraProva.respostaAluno(resposta);
}
console.log(outraProva.acertos());
console.log(outraProva.nota());

console.log(prova.maior(outraProva));