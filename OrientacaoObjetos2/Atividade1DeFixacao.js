"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carro = void 0;
class carro {
    constructor(consumoCombustivel) {
        this.consumoCombustivel = consumoCombustivel;
        this.quantidadeDeCombustivel = 0;
    }
    adicionarGasolina(litros) {
        if (litros > 0) {
            this.quantidadeDeCombustivel += litros;
        }
    }
    andar(km) {
        const gastoDeCombustivel = km / this.consumoCombustivel;
        if (gastoDeCombustivel <= this.consumoCombustivel) {
            this.quantidadeDeCombustivel -= gastoDeCombustivel;
            console.log(`Voce andou ${km}`);
        }
        else {
            console.log(`Não há combustível suficiente para a viagem.`);
        }
    }
    obterGasolina() {
        return this.quantidadeDeCombustivel;
    }
}
exports.carro = carro;
