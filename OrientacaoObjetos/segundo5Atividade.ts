import { Circulo, Triangulo, Retangulo} from "./primeiro5Atividade";
import * as leitor from "readline-sync"

const raio = leitor.questionFloat('Qual o raio do Circulo');
const circulo = new Circulo (raio);

console.log (`O valor da area do circulo é: ${circulo.calcularArea().toFixed(2)}`);

const base = leitor.questionFloat ('Qual o valor da base do triangulo? :');
const altura = leitor.questionFloat('E qual altura? :');
const triangulo = new Triangulo(base,altura);

console.log (`O valor da area do triangulo é: ${triangulo.calcularArea().toFixed(2)}`);

const comprimento = leitor.questionFloat ('Qual o comprimento do retangulo? :');
const largura = leitor.questionFloat('E a largura? :');
const retangulo = new Retangulo(comprimento, largura);

console.log (`O valor da area do retangulo é: ${retangulo.calcularArea().toFixed(2)}`);
