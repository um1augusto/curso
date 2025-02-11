import * as leitor from 'readline-sync';

const taxaDolar: number = leitor.questionFloat("Digite a cotação do Dólar: ");
let totalArrecadado: number = 0;
let quantidadeConvertida: number = 0;
const moedas: string[] = ["Dólar", "Euro", "Peso Uruguaio"];
const cotacoesMoedas: number[] = [];
const valoresConvertidos: number[] = []; 


// Pergunta e armazena as cotações das moedas adicionadas
for (let i = 0; i < moedas.length; i++) {
    const cotacaoMoeda: number = leitor.questionFloat("Digite a cotação da moeda: ");
    cotacoesMoedas.push(cotacaoMoeda);
    valoresConvertidos.push(0);
}

while (totalArrecadado <= 50000) {
    const valorReais: number = leitor.questionFloat("Digite o valor em Reais a ser convertido: ");
    const moedaSelecionada: number = leitor.questionInt("Selecione a moeda de conversão (1 - Dólar, 2 - Euro, 3 - Peso Uruguaio): ");

    if (moedaSelecionada < 1 || moedaSelecionada > moedas.length) {
        console.log("Moeda inválida! Por favor, selecione uma opção válida.");
        continue;
    }

    const valorConvertido: number = valorReais / cotacoesMoedas[moedaSelecionada - 1];
    totalArrecadado += valorReais;
    quantidadeConvertida += valorConvertido;
    valoresConvertidos[moedaSelecionada - 1] += valorConvertido;

    console.log("Valor convertido para ", moedas[moedaSelecionada - 1], ":", valorConvertido);
}

console.log("\n--- Relatório ---");
console.log("Total arrecadado em Reais:", totalArrecadado);
console.log("Quantidade convertida:", quantidadeConvertida);

for (let i = 0; i < moedas.length; i++) {
    console.log("Valor convertido para", moedas[i], ":", valoresConvertidos[i]);
}