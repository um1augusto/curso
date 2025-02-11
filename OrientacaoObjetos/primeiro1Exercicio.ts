export class Carro{
    marca:string;
    modelo: string;
    ano: number;
    ligado: boolean;
    velocidade: number;

    constructor(marca: string, modelo:string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
        this.velocidade = 0;
    }

    ligar(): void{
        if(!this.ligado){
            this.ligado = true;
            console.log('O carro foi ligado!:');

        }else{
            console.log('O carro ja esta desligado!:');
        }
    }
    desligar():void{
        if(this.ligado){
            this.ligado = false;
            console.log('O carro foi desligado!')
        
        }else{
            console.log('o carro ja estadesligado')
        }
    }
    acelerar(velocidade:number):void{
        if(this.ligado){
            this.velocidade += velocidade;
            console.log('o carro acelerou para: ',this.velocidade,'km/h');
        }else[
            console.log('nao foi possivel acelerar o carro pois esta desligado')
        ]
    }
}

const civic = new Carro ('Honda','Civic', 2022);
civic.ligar();
civic.acelerar(50);
civic.desligar();