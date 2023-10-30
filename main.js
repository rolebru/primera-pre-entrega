// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero en Pesos"));
// En cada repetición, calculamos el número ingresado x el número de
for (let i = 1040; i <= 1050; i++) {
    let resultado = ingresarNumero / i ;
    alert(ingresarNumero +" Pesos a "+ i +" = "+ resultado +" Dolares ");
}