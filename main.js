

//aporte energetico de las verduras, la ideas es ir haciendo una calculadora de Kcal de verduras y del ser humano.
// nos pregunta que verdura queremos buscar y nos tira la info en una tabla.

const Verdura = function(nombre,Kcal,gramos){

    this.nombre = nombre
    this.Kcal = Kcal
    this.gramos = gramos

}

let verdura1 = new Verdura("pepino", 12, 100)
let verdura2 = new Verdura("berenjena", 20, 100)
let verdura3 = new Verdura("lechuga", 16, 100)
let verdura4 = new Verdura("espinaca", 22, 100)
let verdura5 = new Verdura("acelga", 29, 100)
let verdura6 = new Verdura("calabaza", 12, 100)
let verdura7 = new Verdura("alcachofa", 23, 100)
let verdura8 = new Verdura("zanahoria", 34, 100)
let verdura9 = new Verdura("calabacin", 17, 100)
let verdura10 = new Verdura("cebolla", 26, 100)
let verdura11 = new Verdura("ajo", 117, 100)
let verdura12 = new Verdura("coliflor", 18, 100)
let verdura13 = new Verdura("pimiento", 29, 100)
let verdura14 = new Verdura("repollo", 26, 100)
let verdura15 = new Verdura("puerro", 24, 100)



let lista = [verdura1,verdura2,verdura3,verdura4,verdura5,verdura6,verdura7,verdura8,verdura9,verdura10,verdura11,verdura12,verdura13,verdura14,verdura15]


if(localStorage.getItem("verduras")){
    lista = JSON.parse(localStorage.getItem("verduras"))
}else{
    lista = lista
}


function filtrarVerduras(){
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarV").value 
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter(  (verdura)=> verdura.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length  > 0){


        const container = document.createElement("div")
        container.classList.add("container")

        resultado.forEach( (verdura)=>{

            const card = document.createElement("div")


        const nombre = document.createElement("h2")
        nombre.textContent = `Nombre: ${verdura.nombre}`
        card.appendChild(nombre)

        const Kcal = document.createElement("p")
        Kcal.textContent = `Kcal: ${verdura.Kcal}`
        card.appendChild(Kcal)

        const gramos = document.createElement("p")
        gramos.textContent = `Gramos: ${verdura.gramos}`
        card.appendChild(gramos)

        container.appendChild(card)

        } )

        body.appendChild(container)



    }else{
        alert("no hay coincidencia")
    }
}


function agregarVerdura(){

    const form = document.createElement("form")  
    form.innerHTML=`
    <label for="nombre-input">Nombre:</label>
    <input id= "nombre-input" type="text" step="0.01" required>
    
    <label for="Kcal-input">Kcal:</label>
    <input id= "Kcal-input" type="number" step="0.01" required>

    <label for="gramos-input">gramos:</label>
    <input id= "gramos-input" type="number" step="0.01" required>

    <button type="submit">Agregar</button>
    `

    form.addEventListener("submit", function (e){ 
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const KcalInput = parseFloat(document.getElementById("Kcal-input").value)
        const gramosInput = parseInt(document.getElementById("gramos-input").value)

        if(isNaN(KcalInput) || isNaN(gramosInput) || nombreInput === ""){
            alert("por favor ingresa valores validos.")
            return
        }

        const verdura = new Verdura (nombreInput, KcalInput, gramosInput)

        if (lista.some( (elemento)=> elemento.nombre === verdura.nombre)){ 
            alert("Ya tenemos la verdura")
            return
        }

        lista.push(verdura) 

        localStorage.setItem("verduras", JSON.stringify(lista))
        alert(`se agrego la verdura ${verdura.nombre} a la lista`)  

gramos

        const container =  document.createElement("div")
        
        lista.forEach((verdura)=>{
            const card = document.createElement("div")

            const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${verdura.nombre}`
        card.appendChild(nombre)

        const Kcal = document.createElement("p")
        Kcal.textContent = `Kcal: ${verdura.Kcal}`
        card.appendChild(Kcal)

        const gramos = document.createElement("p")
        gramos.textContent = `cantidad: ${verdura.gramos}`
        card.appendChild(gramos)
        container.appendChild(card)
        })

        const body = document.querySelector("body")
        body.appendChild(container) 

        form.reset()   

    })

    const body = document.querySelector("body")
    body.appendChild(form)

}



const filtrarBoton = document.getElementById("boton")
filtrarBoton.classList.add("button")
filtrarBoton.addEventListener("click",filtrarVerduras)


const agregarBoton = document.getElementById("agregarVerdura")
agregarBoton.addEventListener("click",agregarVerdura)

// function filtrarVerduras(){ //lo usamos en el console para wue nos salte el prompt

//     let palabraClave = prompt("ingresa la Verdura que buscas").toUpperCase().trim()
//     let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))



//     if(resultado.length >0){
//         console.table(resultado)
//     }else{
//         alert("no se encontro verdura " + palabraClave)
//     }


// }


// function agregarVerdura(){

//     let nombre = prompt("ingresa el nombre de la verdura")
//     let Kcal = parseFloat(prompt("ingresa las Kcal de la verdura")) 
//     let gramos = parseInt(prompt("ingresa los gramos de la verdura"))


//     if(isNaN(Kcal) || isNaN(gramos) || nombre===""){
//         alert("por favor ingresa valores validos")
//         return
//     }

//     let verdura = new Verdura(nombre,Kcal,gramos)

//     lista.push(verdura) 
//     console.table(lista)


// }