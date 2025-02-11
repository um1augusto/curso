import { Funcionario, EmpresaDesenvolvimento  } from "./atividade3primeiro";
const empresa = new EmpresaDesenvolvimento("Minha Empresa", "Rua das Flores, 123");

const funcionario1 = new Funcionario("João", "Desenvolvedor");
const funcionario2 = new Funcionario("Maria", "Designer");

empresa.adicionarFuncionario(funcionario1);
empresa.adicionarFuncionario(funcionario2);

empresa.exibirInformacoes();

empresa.removerFuncionario(funcionario1);

empresa.exibirInformacoes();
