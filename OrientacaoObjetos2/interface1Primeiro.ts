interface Passaro {
    voarRapido(): void;
}
interface Mamifero {
    nadarProfundo(): void;
}
interface Reptil {
    mudarDeCor(): void;
}
interface AnimalAquatico {
    nadar(): void;
}
interface RebanhoDasIguana {
    nadarEmGrpo(): void;
    adicionarIguana(iguana: Iguana): void
}

export class Aguia implements Passaro {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
    voarRapido(): void {
        return console.log('EU SOU A AGUIA MAIS VELOZ DE TODYTALY')
    }
}

export class Baleia implements Mamifero,AnimalAquatico {
    nome: string;

    constructor(nome: string) {
        this.nome = nome
    }
    nadarProfundo(): void {
        return console.log('EU SOU A BALEIA QUE NADA MAIS PROFUNDO DE TODYTALY');
    }
    nadar(): void {
        return console.log('A baleia esta nadando');   
    }
}

export class Iguana implements Reptil,AnimalAquatico {
    nome: string;

    constructor(nome: string) {
        this.nome = nome
    }
    mudarDeCor(): void {
        return console.log('EU SOU A IGUANA MAIS ARCOIRIS DE TODY ITALY');
    }
    nadar(): void {
        return console.log('A iguana esta nadando');
        
    }
}

export class RebanhoDeIguana implements RebanhoDasIguana {
    iguanas: Iguana[] = [];

    constructor(iguanas: Iguana[] = []){
        this.iguanas = iguanas;
    }

    adicionarIguana(iguana: Iguana): void {
        this.iguanas.push(iguana);
    }

    nadarEmGrpo(): void {
        for (const iguana of this.iguanas){
            iguana.nadar();
        }
    }
}
