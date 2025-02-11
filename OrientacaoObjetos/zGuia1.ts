export class Aluno{
    private matricula: number;
    private nome: string;
    private nota1: number;
    private nota2: number;
    private notaTrabalho: number;

    constructor(matricula: number, nome: string, nota1: number, nota2: number, notaTrabalho: number){
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.notaTrabalho = notaTrabalho;
    };

    media(): number{
        return (this.nota1 + this.nota2) / 2;
    };
    final(): number{
        return (this.nota1 + this.nota2 + this.notaTrabalho) / 3;
    };
}

export class Data {
    public dia: number;
    public mes: number;
    public ano: number;

    constructor(dia: number, mes: number, ano: number){
        if (dia > 1 || dia < 31 || mes > 1 || mes < 12 || ano > 1){
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        } else {
            throw new Error("Data inválida")
        }
    };

    compara(outraData: Data): string{
        if (this.ano === outraData.ano && this.mes === outraData.mes && this.ano === outraData.ano){
            return "Datas iguais";
        } else {
            return "Datas diferentes";
        }
    };

    getDia(): number{
        return this.dia;
    };

    getMes(): number{
        return this.mes;
    };
    
    getMesExtenso(): string{
        switch(this.mes){
            case 1: return "Janeiro";
            case 2: return "Fevereiro";
            case 3: return "Março";
            case 4: return "Abril";
            case 5: return "Maio";
            case 6: return "Junho";
            case 7: return "Julho";
            case 8: return "Agosto";
            case 9: return "Setembro";
            case 10: return "Outubro";
            case 11: return "Novembro";
            case 12: return "Dezembro";
        }
        return ""
    };

    getAno(): number{
        return this.ano;
    };

    isBissexto(): string{
        let retorno;
        const bissexto = (this.ano % 4 === 0 && this.ano % 100 != 0) || this.ano % 400 ===0;
        if(bissexto){
            retorno = "O ano é bissexto"
        } else {
            retorno = "O ano não é bissexto"
        }
        return retorno;
    };

    clone(): Data{
        return new Data(this.dia, this.mes, this.ano)
    };
}

export class Voo {
    private passageiros: boolean[] = []
    public numeroVoo: string;
    public data: string;
    constructor(numeroVoo: string, data: string) {
        this.passageiros = new Array(100).fill(false);
        this.numeroVoo = numeroVoo;
        this.data = data;
    };

    proximoLivre(): number {
        for (let i = 0; i < this.passageiros.length; i++) {
            if (!this.passageiros[i]) {
                return i + 1;
            }
        }
        return -1;
    };

    verifica(cadeira: number): boolean {
        return this.passageiros[cadeira - 1];
    };

    ocupa(cadeira: number): boolean {
        if (!this.verifica(cadeira)) {
            this.passageiros[cadeira - 1] = true;
            return true;
        }

        return false;
    };


    vagas(): number{
        return this.passageiros.filter((ocupada) => !ocupada).length;
    };

    getVoo(): string{
        return this.numeroVoo;
    };

    getData(): string{
        return this.data;
    };
    clone(): Voo{
        return new Voo(this.numeroVoo, this.data);
    };
}

export class Prova {
    private respostas: string[] = [];
    private gabarito: string[] = [];

    constructor(){
        this.gabarito = ["A", "B", "C", "A", "B", "D", "B", "C", "A", "B", "C", "D", "A", "C", "D"];
    };

    respostaAluno(resposta: string): void{
        this.respostas.push(resposta)
    };

    acertos(): number{
        return this.respostas.filter((resposta, indice) => resposta === this.gabarito[indice]).length;
    };

    nota(): number{
        const acertos = this.acertos();
        return acertos * 0.5 + (15 - acertos);
    };

    maior(outraProva: Prova): number{
        const notaAtual = this.nota();
        const notaOutra = outraProva.nota();

        if(notaAtual > notaOutra){
            return notaAtual;
        } else {
            return notaOutra;
        }
    };
    }