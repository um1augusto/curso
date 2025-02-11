// Missão 1: Os Encapsulamentos da Floresta
export class Guerreiro {
    private nome: string
    private nivel: number
    private vida: number
    private dano: number
  
    constructor(nome: string, nivel: number, vida: number, dano: number) {
        this.nome = nome
        this.nivel = nivel
        this.vida = vida
        this.dano = dano
    }
  
    public getNome(): string {
        return this.nome
    }
  
    public getNivel(): number {
        return this.nivel
    }
  
    public getVida(): number {
        return this.vida
    }
  
    public getDano(): number {
        return this.dano
    }
  
    public setDano(dano: number): void {
        this.dano = dano
    }
  }
  // Habilidades Mágicas para as criaturas
  interface HabilidadeMagica {
    usarMagia(): void
    conjurarFeitico(): void
  }
  
  export class CriaturaMagica {
    public nome: string
    public nivel: number
    public vida: number
    public dano: number
  
    constructor(nome: string, nivel: number, vida: number, dano: number) {
        this.nome = nome
        this.nivel = nivel
        this.vida = vida
        this.dano = dano
    }
  
    public atacar(alvo: CriaturaMagica): void {
        console.log(`${this.nome} ataca ${alvo.nome} e causa ${this.dano} de dano!`)
        alvo.receberDano(this.dano)
    }
  
    public receberDano(dano: number): void {
        this.vida = this.vida - dano
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`)
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`)
        }
    }
  
    public usarMagia(): void {
        console.log(`${this.nome} usa sua habilidade mágica!`)
    }
  
    public conjurarFeitico(): void {
        console.log(`${this.nome} conjura um feitiço poderoso!`)
    }
  }
  
  // Guardião Ancião
  export class GuardiaoAnciao extends CriaturaMagica implements HabilidadeMagica {
    constructor(nome: string, nivel: number, vida: number, dano: number) {
        super(nome, nivel, vida, dano)
    }
  
    public usarMagia(): void {
        console.log(`${this.nome} usa sua habilidade mágica: Escudo Antigo e ameniza o dano recebido!`)
    }
  
    public conjurarFeitico(): void {
        console.log(`${this.nome} conjura seu feitiço e lança uma esfera de energia em sua direção!`)
    }
  }
  
  // Dragão Milenar
  export class DragaoMilenar extends CriaturaMagica implements HabilidadeMagica {
    constructor(nome: string, nivel: number, vida: number, dano: number) {
        super(nome, nivel, vida, dano)
    }
  
    public usarMagia(): void {
        console.log(`${this.nome} usa sua habilidade mágica: Barreira de chamas e ameniza o dano recebido!`)
    }
  
    public conjurarFeitico(): void {
        console.log(`${this.nome} conjura uma chama ardente e a lança em sua direção!`)
    }
  }
  
  // Sereia Encantada
  export class SereiaEncantada extends CriaturaMagica implements HabilidadeMagica {
    constructor(nome: string, nivel: number, vida: number, dano: number) {
        super(nome, nivel, vida, dano)
    }
  
    public usarMagia(): void {
        console.log(`${this.nome} usa sua habilidade mágica: Aura Ancestral dos Sete Mares e ameniza o dano recebido!`)
    }
  
    public conjurarFeitico(): void {
        console.log(`${this.nome} conjura um feitiço hipnótico fazendo com que você ataque a si mesmo!`)
    }
  }