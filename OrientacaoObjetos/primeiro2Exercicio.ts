//*Crie um classe 'contaBancaria' com propriedades como numero da conta, saldo e metodos para depositar,sacar
//e verificar o saldo.

export class ContaBancaria{
    nomeUsuario: string;
    numeroConta: string;
    saldo: number;

    constructor(nomeUsuario: string, numeroConta: string){
        this.nomeUsuario = nomeUsuario;
        this.numeroConta = numeroConta;
        this.saldo = 0;
    }

    deposito(valor:number):void{
        if(valor>0){
            this.saldo += valor;
            console.log ('Novo saldo', this.saldo)
        }else{
            console.log ('O valor de deposito ha ser maior que 0')
        }
    }

    sacar(valor:number):void{
        if(valor<=this.saldo){
            this.saldo -=valor;
            console.log('O valor', valor, 'foi retirado');
            console.log('Novo saldo:' ,this.saldo);

        }else{
            console.log('saldo', this.saldo);
            console.log('o valor de saque ha de ser menor que saldo');
            
        }

    }
    verificarSaldo(): void{
        console.log('o seu saldo é', this.saldo)
    }
} 
const conta = new ContaBancaria ('Honda','Civic');
conta.deposito(100);
conta.sacar(50);
conta.verificarSaldo();