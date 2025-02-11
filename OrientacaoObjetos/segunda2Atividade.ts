import { Livro } from "./primeira2Atividade";
import * as ask from "readline-sync"

const titulo: string = ask.question("Digite o titulo do livro")
const autor: string = ask.question("Digite o nome do autor")
const anoPublicacao: number = ask.questionInt("digite o ano de publicacao")

const livro = new Livro (titulo,autor,anoPublicacao)

livro.obterDetalhes()