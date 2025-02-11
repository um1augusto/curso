import { Aluno } from "./exercicio1Primeiro";
import * as leitor from "readline-sync"

//matricula: number;
//  nome: string;
//  notaProva1: number
//  notaProva2: number;
//  notaTrabalho: number
//  mediaAluno: number
//  finalAluno: number

const euSouOaluno = new Aluno (10000, `rodolfo`, 1, 1, 2)

console.log(euSouOaluno.media())

