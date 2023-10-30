
function loguear() {

//sistema de reserva de cancha con usuario

let identificar = true // lo que me valida todo en while
let intentos = 1

do{
    let usuario = prompt("ingresa tu usuario (solo 3 intentos)")
    if(usuario ===null){//si es null se salta al sig paso
        break
    }

    if(usuario === "rodrigo valdivieso" && intentos <=3){
        alert("Bienvenido " + usuario)
        identificar = false //para que no se vuelva a ejecutar
    }else{
        alert("no se reconoce usuario " + usuario)
        intentos++
        if(intentos > 3){
            alert("supero los 3 intentos, intente mas tarde")
            console.error("user is not define")
            break
        }
    }


} while(identificar)


}