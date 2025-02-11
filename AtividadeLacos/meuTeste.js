import * as leitor from 'readline-sync';
let icontadorcliente = 0
let icontadorlivro = 0
const cpfs = []
const nomes = []
const livros = []
const SitCliente = []
const SitLivro = []
function menu() {
 console.log("\n==== BIBLIOTECA ====")
 console.log("\n 1- Cadastrar cliente")
 console.log("\n 2- Listar clientes")
 console.log("\n 3- Cadastrar livro")
 console.log("\n 4- Listar livros")
 console.log("\n 5- Emprestar livro")
 console.log("\n 6- Devolver livro")
 console.log("\n 7- Sair\n")
 const opcao = leitor.questionInt("ESCOLHA ALGUMA OPCAO: ")
 switch (opcao) {
 
case 1:
 
// Cadastrar o cliente
 
digsenha()
 
cadCliente()
 
break
 
case 2:
 
// Listar os clientes
 
digsenha()
 
listClientes()
 
break
 
case 3:
 
// Cadastrar livro
 
digsenha()
 
cadLivro()
 
break
 
case 4:
 
// Listar livro
 
digsenha()
 
listLivro()
 
break
 
case 5:
 
// Emprestar livro
 
digsenha()
 
emprestLivro()
 
break
 
case 6:
 
// Devolver livro
 
digsenha()
 
devolLivro()
 
break
 
case 7:
 
// Sair
 
console.log("Voce escolheu a opção de SAIR")
 
break;
 
default:
 
// Opção inválida
 
console.log("Opção inválida")
 
setTimeout(
() => {
 
menu();
 
}, 500);
 }
}
function digsenha() {
 const senha = leitor.question("Digite a senha: ")
 if (senha !== "admin") {
 
console.log("Senha incorreta\n")
 
menu()
 } else {
 
console.log("Senha aprovada\n")
 
setTimeout(
() => {}, 1000)
 }
}
function cadCliente()
{
 console.log("\n===== CADASTRO DE CLIENTES =====")
 if (icontadorcliente < 5) {
 
const nome = leitor.question("Qual seu nome: ")
 
const cpf = leitor.question("Qual seu CPF: ")
 
nomes.push(nome)


 
cpfs.push(cpf)
 
SitCliente.push(false)
 
icontadorcliente++
 
setTimeout(
() => {
 
menu();
 
}, 1000);
 } else {
 
console.log("Você já cadastrou o MÁXIMO de clientes")
 
menu()
 }
}
function cadLivro()
{
 console.log("\n### CADASTRO DE LIVROS ###");
 if (icontadorlivro < 10) {
 
const nomeLivro = leitor.question("Digite o nome do livro: ");
 
livros.push(nomeLivro);
 
SitLivro.push(false);
 
icontadorlivro++;
 
setTimeout(
() => {
 
menu();
 
}, 1000);
 } else {
 
console.log("Você já cadastrou o MÁXIMO de livros")
 
menu()
 }
}
function listClientes()
{
 console.log("\nLISTA DE CLIENTES:\n")
 for (let j = 0; j < icontadorcliente; j++) {
 
console.log("Código do cliente:", j , "Nome do cliente:", nomes[j] , "CPF:" ,cpfs[j] ,"STATUS: ", SitCliente[j] ? "Esta com o livro" : 
"Nao esta com o livro")
 
}
 
setTimeout(
() => {
 
menu()
 
}, 1000)
}
function listLivro()
{
 
console.log(
'\nLISTA DE LIVROS:\n'
)
 
for(let j = 0; j <icontadorlivro; j++)
{
 
console.log(
'Código do livro: ',j, 'Nome do livro: ',livros[j], 'STATUS:
', SitLivro[j] ? 'Emprestado' : 'Disponivel' )
 
}
 
setTimeout(
() => {
 
menu()
 
}, 1000)
}
function emprestLivro() {
 let numeroDoLivro = leitor.question(
'Digite o código do livro que quer pegar emprestado: '
);
 let numeroDoCliente = leitor.question(
'\nDigite o código do cliente: '
);
 if (numeroDoLivro < 0 |
| numeroDoLivro >= icontadorlivro |
| numeroDoCliente < 0 |
| numeroDoCliente >= icontadorcliente) {
 
console.log(
'\nCódigo de livro ou cliente inválido\n'
);
 
setTimeout(
() => {
 
menu();
 
}, 1000);
 
return;
 }
 if (SitLivro[numeroDoLivro]
) {
 
console.log(
'\nO livro já está emprestado\n'
);
 
setTimeout(
() => {
 
menu();
 
}, 1000);
 
return;
 }
 if (SitCliente[numeroDoCliente]
) {
 
console.log(
'\nO cliente já possui um livro emprestado\n'
);
 
setTimeout(
() => {
 
menu();
 
}, 1000);
 
return;
 }
 console.log(
'\nO livro pode ser retirado\n'
);
 SitLivro[numeroDoLivro] = true;
 SitCliente[numeroDoCliente] = true;
 setTimeout(
() => {
 
menu();
}, 1000);


}
function devolLivro() {
 let codCliente, codLivro, diasAtraso, atraso;
 console.log("Digite o código do livro que quer devolver: ");
 codLivro = leitor.questionInt();
 console.log("Digite o código do cliente: ");
 codCliente = leitor.questionInt();
 if (SitLivro[codLivro] === true && SitCliente[codCliente] === true) {
 
console.log("PODE DEVOLVER O LIVRO");
 
SitLivro[codLivro] = false;
 
SitCliente[codCliente] = false;
 } else {
 
console.log("O LIVRO NÃO ESTÁ COM O CLIENTE");
 }
 console.log("O LIVRO ESTÁ COM ATRASO?");
 console.log("1 - Está com atraso");
 console.log("2 - Não está com atraso");
 atraso = leitor.questionInt();
 if (atraso === 1) {
 
console.log("Quantos dias de atraso está o livro?");
 
diasAtraso = leitor.questionInt();
 
diasAtraso = diasAtraso * 5;
 
console.log(`\nVOCÊ TERÁ QUE PAGAR ${diasAtraso} REAIS DE ATRASO`);
 }
}
menu()
