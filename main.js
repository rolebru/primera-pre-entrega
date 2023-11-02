
function reconocer() {


let identificar = true // lo que me valida todo en while
// informacion sobre los mejores de cada deporte

do{ 

    let deportista = prompt( "ingresa deportistas ( Lionel Messi, Tiger woods, Novak djokovic y Usain Bolt" ).toLocaleLowerCase()


    if(deportista === null){//si es null se salta al sig paso

        break
    }

    if(deportista === "lionel messi" ){

        alert("futbolista " + deportista + " Considerado con frecuencia el mejor jugador del mundo y uno de los mejores de todos los tiempos, es el único futbolista en la historia que ha ganado, entre otras distinciones, ocho veces el Balón de Oro, siete premios de la FIFA al mejor jugador del mundo, seis Botas de Oro y dos Balones de Oro de la Copa Mundial de Fútbol")
        

    }else if(deportista === "novak djokovic"){


        alert("tenista " + deportista + " Es considerado el tenista con mejor palmarés de todos los tiempos, principalmente por sus logros en todos los torneos más importantes del circuito profesional masculino y registros históricos en la clasificación de la ATP")

    }else if(deportista === "tiger woods"){


        alert("golfista " + deportista + " Es considerado uno de los golfistas más importantes de todos los tiempos, junto a Jack Nicklaus y Arnold Palmer. Actualmente cuenta con 15 majors, convirtiéndose así en el segundo jugador con más majors ganados en la historia del golf")


    }else if(deportista === "usain bolt"){

        alert("velocista " + deportista + " es un ex atleta profesional jamaicano. Ostenta once títulos mundiales y ocho olímpicos como velocista")

    }else{

    alert("no se reconoce deportista, intenta de nuevo")

    }

} while(identificar)


}

reconocer()