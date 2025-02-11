import * as readlineSync from 'readline-sync';

function calcularSalarios() {
  let quantidadeFuncionarios: number;

  quantidadeFuncionarios = Number(readlineSync.question("Digite a quantidade de funcionários: "));
  const funcionarios: { nome: string, genero: string, salario: number }[] = [];
  const generos: { [key: string]: number } = { 'M': 0, 'F': 0, 'N': 0 }; // Armazena a contagem de gêneros
  const salarios: { [key: string]: number } = { 'M': 0, 'F': 0, 'N': 0 }; // Armazena a soma dos salários por gênero

  const receberDadosFuncionario = (indice: number) => {
    if (indice === quantidadeFuncionarios) {
      let totalSalarios = 0;
      let generoComMaiorSalario = '';
      let maiorSalario = 0;

      for (let genero in generos) {
        totalSalarios += salarios[genero];
        if (salarios[genero] > maiorSalario) {
          maiorSalario = salarios[genero];
          generoComMaiorSalario = genero;
        }
      }

      console.log("Quantidade de funcionários por gênero:");
      console.log("Masculino: " + generos['M']);
      console.log("Feminino: " + generos['F']);
      console.log("Não-Binário: " + generos['N']);

      console.log("Total gasto em salários: " + totalSalarios);

      console.log("Salários por gênero:");
      console.log("Masculino: " + salarios['M']);
      console.log("Feminino: " + salarios['F']);
      console.log("Não-Binário: " + salarios['N']);

      console.log("Gênero com maior salário: " + generoComMaiorSalario);
      return;
    }

    const indiceFuncionario = indice + 1;

    const nome = readlineSync.question(`Digite o nome do funcionário ${indiceFuncionario}: `);
    const genero = readlineSync.question(`Digite o gênero do funcionário ${indiceFuncionario} (M - Masculino, F - Feminino, N - Não-Binário): `);
    const salario = Number(readlineSync.question(`Digite o salário do funcionário ${indiceFuncionario}: `));

    funcionarios.push({ nome, genero, salario });
    generos[genero]++;
    salarios[genero] += salario;

    receberDadosFuncionario(indice + 1);
  };

  receberDadosFuncionario(0);
}

calcularSalarios();