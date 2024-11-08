/*
FALSY quando um valor é consederado falso*
Truthy quando é considerado verdadeiro em 
contextos onde um boolean pe onrigatório (condição e loops
*/


//todos abaixos são falso
console.log( false ? "v" : "f")// falso é falso
console.log( 0 ? "v" : "f") //0 e consederado falso
console.log( -0 ? "v" : "f")//-0 tambem é considerado falso
console.log( "" ? "v" : "f")//um texto vazio é consederado falso
console.log( null ? "v" : "f")// valor nulo é falso
console.log( undefined ? "v" : "f")// valor indefinido é falso

//todos abaixo e consederado verdadeiro
console.log( true ? "v" : "f")
console.log( {} ? "v" : "f")//objeto vazio é considerado verdadeiro
console.log( [] ? "v" : "f")//array vazio é considerado verdadeiro



