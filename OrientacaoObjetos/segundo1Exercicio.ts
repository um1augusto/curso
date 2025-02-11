import{Carro} from "./primeiro1exercicio";
import * as leitor from 'readline-sync';

const marca = leitor.question ('Qual a marca ?');
const modelo = leitor.question ('Qual o modelo?');
const ano = leitor.questionInt('Qual o ano do carro ?');

const civic = new Carro (marca, modelo, ano);

console.log(civic);

civic.ligar ();

const velocidade = leitor.questionInt ('Digite a velocidade do carro em km/h: ');
civic.acelerar (velocidade);

civic.desligar();
