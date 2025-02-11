export class Funcionario {
    nome: string;
    cargo: string;
  
    constructor(nome: string, cargo: string) {
      this.nome = nome;
      this.cargo = cargo;
    }
  }
  
  export class EmpresaDesenvolvimento {
    nome: string;
    endereco: string;
    funcionarios: Funcionario[];
  
    constructor(nome: string, endereco: string) {
      this.nome = nome;
      this.endereco = endereco;
      this.funcionarios = [];
    }
  
    adicionarFuncionario(funcionario: Funcionario): void {
      this.funcionarios.push(funcionario);
      console.log(`O funcionário "${funcionario.nome}" foi adicionado à empresa.`);
    }
  
    removerFuncionario(funcionario: Funcionario): void {
      const index = this.funcionarios.indexOf(funcionario);
      if (index !== -1) {
        this.funcionarios.splice(index, 1);
        console.log(`O funcionário "${funcionario.nome}" foi removido da empresa.`);
      } else {
        console.log(`O funcionário "${funcionario.nome}" não está disponível na empresa.`);
      }
    }
  
    exibirInformacoes(): void {
      console.log(`Informações da empresa ${this.nome}:`);
      console.log(`Endereço: ${this.endereco}`);
      console.log(`Funcionários:`);
      for (const funcionario of this.funcionarios) {
        console.log(`- ${funcionario.nome} (Cargo: ${funcionario.cargo})`);
      }
    }
  }