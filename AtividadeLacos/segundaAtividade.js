//2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números.
//Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
//a) Escreva um programa que **imprime** cada um dos valores do array original.

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`".
//Depois, **imprima** este novo array.
    
//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


arrayOriginal = [1, 2, 3, 4, 5, 6, 7 ,8 ,9]

//BASICAMENTE O ARRAY QUE ESTA DENTRO DAS FUNCTION EU ESTOU TRAZENDO A FUNCTION PRA CA E MUDANDO PRA ARRAYORIGINAL

//EX: imprimirArray(arrayOriginal) é a mesma coisa que imprimirArray(array) so que se eu colocasse isso estaria errado pq nao tem como declarar ela global
//e ao mesmo tempo em function expecifica

imprimirArray(arrayOriginal);
imprimirArrayDividido(arrayOriginal)
criacaoArrayPares(arrayOriginal)
criacaoArrayStrings(arrayOriginal)
arrayMaiorMenor(arrayOriginal)

//a) Escreva um programa que **imprime** cada um dos valores do array original.

function imprimirArray(array) {
    for (let i = 0 ; i < array.length ; i++) {
        console.log (array[i])
    }
}

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

function imprimirArrayDividido(array) {
    console.log ('Divisao do Array por 10')
    for (let i = 0 ; i < array.length ; i++) {
        console.log (array[i] / 10)
    }
}

//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

function criacaoArrayPares (array){
    const novoArray = []
    let indefinidoArrayI = 0
    console.log ('Arrays que sao pares')
    for (let i = 0 ; i < array.length ; i++){
    if (array [i] % 2 === 0){
       novoArray[indefinidoArrayI] = array[i]
       indefinidoArrayI++
    }
}  
console.log (novoArray)
}

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`".
//Depois, **imprima** este novo array.

function criacaoArrayStrings(array){
    const novoArray = []
    for (let i = 0 ; i < array.length ; i++){
         novoArray[i] = `O elemento do índex ${i} é: ${array[i]}`
    }
    console.log (novoArray)
}

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

function arrayMaiorMenor(array){
    let maior = array[0] 
    let menor = array[0]

    for (let i = 0 ; i < array.length ; i++){

    if (array[i]> maior){
    maior = array[i]
    }
    if (array[i]< menor){
    menor = array[i]
}
}
console.log(`Maior número: ${maior}`)
console.log(`Menor número: ${menor}`)
}