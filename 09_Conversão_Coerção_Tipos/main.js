/*
Conversão de tipos - ocorre quando voce explicitamente trasforma um 
valor de um tipo para outro. Isso é feito de forma consciente, usando
funçoes ou metodos especificos para realizar a conversão
*/

console.log(typeof Number("9"))

let value = "2000"
console.log(typeof Number(value))


let age = 25

console.log(typeof age.toString())
console.log(typeof String(age))


/* 
    Cortção de tipos:
    acontece de forma automatica (implicitamente). O js
    tenta automaticamente converter um dos valores para um tipo compatível antes de realizar a opereção
*/

console.log(typeof("10" + 5))
