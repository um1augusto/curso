import { Pessoa } from './segunda1Atividade'
import * as leitor from 'readline-sync'

const nomePessoa = leitor.question("qual seu nome? ")

const idadePessoa = leitor.questionInt("qual sua idade? ")

const novaPessoa = new Pessoa(nomePessoa, idadePessoa);

novaPessoa.cumprimentar();