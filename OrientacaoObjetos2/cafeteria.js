"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
console.log("1 - Cafe com canela (R$ 2,00)");
console.log("2 - Cafe com leite (R$ 2,00)");
console.log("3 - Capuccino (R$ 3,00)");
console.log("4 - Mocaccino (R$ 3,00");
const opcao = readlineSync.questionInt("Digite o cafe que voce quer");
let valorPagar = 0;
let valorCafe;
while (true) {
    if (opcao == 1 || opcao == 2) {
        valorCafe = 2;
        valorPagar = readlineSync.questionInt("Insira o valor de 2 Reais");
        if (valorCafe < valorPagar) {
            console.log("Voce inseriu um valor acima (MAQUINA NAO OFERECE TROCO");
            break;
        }
    }
    else if (opcao == 3 || opcao == 4) {
        valorCafe = 3;
        console.log("insira 3 reais");
    }
    else {
        console.log("Opcao invalida");
    }
}
