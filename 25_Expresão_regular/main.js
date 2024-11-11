/*
******************
/\D+/g
******************
/ =inicio do projeto
\D =Representa qualquer caractere que não seja um digito (0-9)
+ =indica que o padra \D pode aparecer
uma ou mais vezes consecutivas
g = o modificador global e usado em expressões regulares para
indicar que a correspondência deve ser feita em toda a string.Não
apenas na primeira ocorrência
/fim do projeto
*/
const input = document.querySelector("input")
input.addEventListener("input",(e)=>{
const value = input.value
const regex = /\D+/g
console.log(value.match(regex))
})