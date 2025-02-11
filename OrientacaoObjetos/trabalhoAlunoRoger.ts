class Aluno {
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;
    mediaAluno: number;
    notaFinal: number;


    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
        this.mediaAluno = 0
        this.notaFinal = 0;
    }

    media(): number {
        this.mediaAluno = (this.notaProva1 + this.notaProva2) / 2
        return this.mediaAluno;
    }

    final(): number {
        this.notaFinal = this.mediaAluno + this.notaTrabalho / 2
        return this.notaFinal
    }
}


const aluno1 = new Aluno(12345, "João Silva", 8.5, 9.0, 7.5);

console.log(aluno1.nome);
console.log(aluno1.media());
console.log(aluno1.final());



class Data {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dia: number, mes: number, ano: number) {
        if (dia > 1 && dia <= 31) {
            this.dia = dia;
        } else {
            console.log("dia inválido")
        }
        if (mes > 0 && mes <= 12) {
            this.mes = mes;
        } else {
            console.log("Mes inválido");
        }
        if (ano >= 1) {
            this.ano = ano;
        } else {
            console.log("Ano inválido")
        }
    }

    compara(outraData: Data): number {
        if (this.ano !== outraData.getAno()) {
            return this.ano - outraData.getAno();
        }
        if (this.mes !== outraData.getMes()) {
            return this.mes - outraData.getMes();
        }
        return this.dia - outraData.getDia();
    }

    getDia(): number {
        return this.dia;
    }

    getMes(): number {
        return this.mes;
    }

    getMesExtenso(): string {
        const meses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        return meses[this.mes - 1];
    }

    getAno(): number {
        return this.ano;
    }

    isBissexto(): boolean {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    }

    clone(): Data {
        return new Data(this.dia, this.mes, this.ano);
    }
}

const minhaData = new Data(11, 8, 2023);
console.log("Dia:", minhaData.getDia());
console.log("Mês:", minhaData.getMes());
console.log("Mês por extenso:", minhaData.getMesExtenso());
console.log("Ano:", minhaData.getAno());
console.log("É bissexto?", minhaData.isBissexto());

const outraData = new Data(15, 8, 2023);
console.log("Comparação:", minhaData.compara(outraData));
console.log("Clone:", minhaData.clone().getDia());

class Voo {
    private numeroVoo: string;
    private data: Date;
    private ocupacao: boolean[];

    constructor(numeroVoo: string, data: Date) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.ocupacao = Array(100).fill(false);
    }

    public proximoLivre(): number {
        const index = this.ocupacao.findIndex(ocupado => !ocupado);
        return index === -1 ? -1 : index + 1;
    }

    public verifica(cadeira: number): boolean {
        if (cadeira < 1 || cadeira > 100) {
            throw new Error("Número de cadeira inválido.");
        }
        return !this.ocupacao[cadeira - 1];
    }

    public ocupa(cadeira: number): boolean {
        if (this.verifica(cadeira)) {
            this.ocupacao[cadeira - 1] = true;
            return true;
        }
        return false;
    }

    public vagas(): number {
        return this.ocupacao.filter(ocupado => !ocupado).length;
    }

    public getVoo(): string {
        return this.numeroVoo;
    }

    public getData(): Date {
        return this.data;
    }

    public clone(): Voo {
        const clonedVoo = new Voo(this.numeroVoo, new Date(this.data));
        clonedVoo.ocupacao = [...this.ocupacao];
        return clonedVoo;
    }
}

// Exemplo de uso:
const dataVoo = new Date(2023, 7, 15, 10, 0); // Ano, mês (0-11), dia, hora, minuto
const vooMagico = new Voo("VM123", dataVoo);

console.log("Próxima cadeira livre:", vooMagico.proximoLivre());
console.log("Vagas disponíveis:", vooMagico.vagas());

console.log("Cadeira 5 disponível?", vooMagico.verifica(5));
console.log("Cadeira 3 disponível?", vooMagico.verifica(3));

console.log("Ocupou cadeira 5?", vooMagico.ocupa(5));
console.log("Vagas disponíveis após ocupar:", vooMagico.vagas());

const cloneVoo = vooMagico.clone();
console.log(`Clone do voo: ${cloneVoo.getVoo()}`);

class Prova {
    private gabarito: string[];
    private respostasAluno: string[];

    constructor(gabarito: string[]) {
        this.gabarito = gabarito;
        this.respostasAluno = [];
    }

    respostaAluno(resposta: string): void {
        if (this.respostasAluno.length < 15) {
            this.respostasAluno.push(resposta.toUpperCase());
        } else {
            console.log('A prova já foi totalmente respondida.');
        }
    }

    acertos(): number {
        let pontos = 0;
        for (let i = 0; i < this.respostasAluno.length; i++) {
            if (this.respostasAluno[i] === this.gabarito[i]) {
                pontos += (i < 10) ? 0.5 : 1;
            }
        }
        return pontos;
    }

    nota(): number {
        return this.acertos();
    }

    maior(outraProva: Prova): number {
        const minhaPontuacao = this.acertos();
        const outraPontuacao = outraProva.acertos();

        if (minhaPontuacao > outraPontuacao) {
            return 1;
        } else if (minhaPontuacao < outraPontuacao) {
            return -1;
        } else {
            return 0;
        }
    }
}

const gabarito: string[] = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
const prova1 = new Prova(gabarito);
const prova2 = new Prova(gabarito);

prova1.respostaAluno('A');
prova1.respostaAluno('B');
prova1.respostaAluno('C');
prova1.respostaAluno('D');
prova1.respostaAluno('E');
prova1.respostaAluno('A');
prova1.respostaAluno('B');
prova1.respostaAluno('C');
prova1.respostaAluno('D');
prova1.respostaAluno('E');
prova1.respostaAluno('A');
prova1.respostaAluno('B');
prova1.respostaAluno('C');
prova1.respostaAluno('D');
prova1.respostaAluno('E');

prova2.respostaAluno('A');
prova2.respostaAluno('B');
prova2.respostaAluno('C');
prova2.respostaAluno('D');
prova2.respostaAluno('E');
prova2.respostaAluno('E');
prova2.respostaAluno('D');
prova2.respostaAluno('C');
prova2.respostaAluno('B');
prova2.respostaAluno('A');
prova2.respostaAluno('A');
prova2.respostaAluno('B');
prova2.respostaAluno('C');
prova2.respostaAluno('D');
prova2.respostaAluno('E');

console.log('Prova 1 - Acertos:', prova1.acertos());
console.log('Prova 1 - Nota:', prova1.nota());
console.log('Prova 2 - Acertos:', prova2.acertos());
console.log('Prova 2 - Nota:', prova2.nota());

const resultado = prova1.maior(prova2);
if (resultado === 1) {
    console.log('Prova 1 tem maior pontuação.');
} else if (resultado === -1) {
    console.log('Prova 2 tem maior pontuação.');
} else {
    console.log('As provas têm a mesma pontuação.');
}