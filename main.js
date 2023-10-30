
function reconocer() {

//sistema de reserva de cancha con usuario

let identificar = true // lo que me valida todo en while


do{ 
    let deportista = prompt ( "ingresa Deportista" )
    if(deportista === null){//si es null se salta al sig paso
        break
    }

    if(deportista === "lionel messi" ){
        alert("futbolista " + deportista + " el mas grande")
        

    }else if(deportista === "novak djocovick"){
        alert("tenista " + deportista + " numero 1 del mundo")

    }else if(deportista === "tiger woods"){
        alert("golfista " + deportista + " crack")
        break
    }else{
        alert("no se reconoce deportista, intenta de nuevo")
    }

} while(identificar)


}

reconocer()