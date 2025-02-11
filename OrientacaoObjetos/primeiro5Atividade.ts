export class Circulo{
    //(A = pi.r (ao quadrado))
    raio:number;

    constructor (raio: number){
        this.raio = raio;
    }

    calcularArea(): number{
        return Math.PI * (this.raio * this.raio);

    }
}

export class Triangulo{
    //A = (b.h)/2
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;

    }

    calcularArea(): number{
        return (this.base * this.altura)/2
    }
}

export class Retangulo{
    //A = comprimento x largura
    comprimento: number;
    largura: number;

    constructor (comprimento: number, largura: number){
        this.comprimento = comprimento;
        this.largura =largura;
    }

    calcularArea():number{
        return this.comprimento * this.largura;
    }
}