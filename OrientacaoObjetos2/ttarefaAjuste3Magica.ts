import { Data } from "./ttarefaAjuste1Magica";
import * as leitor from 'readline-sync';

let data: Data;

function opcao() {
    console.log("\n========");
    console.log("\n 1-  Criar a data");
    console.log("\n2-  Comparar datas;");
    console.log("\n3-  Print do Dia / Mês / Ano;");
    console.log("\n4- Verificar se é bissexto");
    console.log("\n5 Clonar cartao");

    const escolha = leitor.questionInt("Escolha uma opção: ");

    switch (escolha) {

        case 1:
            const dia = leitor.questionInt('Qual dia voce quer cadastrar: ')
            const mes = leitor.questionInt('Qual mes voce quer cadastrar: ')
            const ano = leitor.questionInt('Qual ano voce quer cadastrar: ')

            if (dia > 1 || dia < 31 || mes > 1 || mes < 12 || ano > 1) {
                data = new Data(dia, mes, ano)
                data.cadastroData(dia, mes, ano);
                return opcao();
            } else {
                console.log("Data invalida");
            }
            break;
        case 2:
            const dia1 = leitor.questionInt('Qual dia voce quer comparar: ')
            const mes1 = leitor.questionInt('Qual mes voce quer comparar: ')
            const ano1 = leitor.questionInt('Qual ano voce quer comparar: ')
            let outraData = new Data(dia1, mes1, ano1)

            if (data.dia === dia1 && data.mes === mes1 && data.ano === ano1) {
                console.log(data.compararData(outraData));
                return opcao();
            } else {
                console.log("Essa data nao é comparavel");
            }
            break;
            case 3:
                if (data) {
                    data.printData();
                    return opcao();
                } else {
                    console.log("Data ainda não foi cadastrada. Por favor, escolha a opção 1 para criar a data.");
                }
                break;
        case 4:
    };
}
opcao()