"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RebanhoDeIguana = exports.Iguana = exports.Baleia = exports.Aguia = void 0;
class Aguia {
    constructor(nome) {
        this.nome = nome;
    }
    voarRapido() {
        return console.log('EU SOU A AGUIA MAIS VELOZ DE TODYTALY');
    }
}
exports.Aguia = Aguia;
class Baleia {
    constructor(nome) {
        this.nome = nome;
    }
    nadarProfundo() {
        return console.log('EU SOU A BALEIA QUE NADA MAIS PROFUNDO DE TODYTALY');
    }
    nadar() {
        return console.log('A baleia esta nadando');
    }
}
exports.Baleia = Baleia;
class Iguana {
    constructor(nome) {
        this.nome = nome;
    }
    mudarDeCor() {
        return console.log('EU SOU A IGUANA MAIS ARCOIRIS DE TODY ITALY');
    }
    nadar() {
        return console.log('A iguana esta nadando');
    }
}
exports.Iguana = Iguana;
class RebanhoDeIguana {
    constructor(iguanas = []) {
        this.iguanas = [];
        this.iguanas = iguanas;
    }
    adicionarIguana(iguana) {
        this.iguanas.push(iguana);
    }
    nadarEmGrpo() {
        for (const iguana of this.iguanas) {
            iguana.nadar();
        }
    }
}
exports.RebanhoDeIguana = RebanhoDeIguana;
