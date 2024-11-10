/*
//acessa o elemento pelo o seletor ID
const guest = document.querySelector("#guest-1")
console.log(guest)

//acessa o elemento pela classe
const guestClass = document.querySelector(".guest")
console.log(guestClass)

//acessa todos os elementos da classe 
const guestAllSelector = document.querySelectorAll(".guest")

const guest = document.querySelector("#guest-1 span")

//retorna o conteúdo como texto
console.log(guest.textContent)

//escreve dentro do conteúdo
guest.textContent = "Alberto"

const guest = document.querySelector("#guest-1")

console.log(guest.textContent) //Retorna o conteúdo visível e oculto
console.log(guest.innerText) //Retorna somente o conteúdo visível
console.log(guest.innerHTML) //Retorna o HTML como texto

const input = document.getElementById("name")
//por meio do js adiciona uma nova classe no elemento
input.classList.add("input-error")

//se não tiver a classe adiciona. Se tem, remove
input.classList.toggle("input-error")

const button = document.querySelector("button")
//Modificar as propriedades CSS do elemento
button.style.backgroundColor = "blue"

//seleciona o ul
const guests = document.querySelector("ul")
//seleciona o li
const newGuest = document.createElement("li")
//adiciona uma class
newGuest.classList.add("guest")
//criar um elemento span
const guestName = document.createElement("span")
//adiciona um texto
guestName.textContent = "cristina"

//adiciona apos o ultimo filho
newGuest.append(guestName)

//adiciona  antes do primeiro filho
//newGuest.prepend(guestName)

//adiciona no HTML
guests.append(newGuest)

//sempre que carrega a pagina ele aparece
window.addEventListener("load",()=>{
    console.log("A página foi carregada")
})
addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(e)
})
*/
const btn = document.querySelector("button")
const body = document.querySelector("body")
btn.addEventListener("click",(e) =>{
    e.preventDefault()
    body.style.backgroundColor = "red"
})