




const Verduras = function(nombre,calorias,gramos){

    this.nombre = nombre
    this.calorias = calorias
    this.gramos = gramos

}

let Verdura1 = new Verduras("tomate", 1500, 20)
let Verdura2 = new Verduras("brocoli", 1500, 20)
let Verdura3 = new Verduras("lechuga", 1500, 20)
let Verdura4 = new Verduras("espinaca", 1500, 20)
let Verdura5 = new Verduras("acelga", 1500, 20)
let Verdura6 = new Verduras("calabaza", 1500, 20)
let Verdura7 = new Verduras("zanahoria", 1500, 20)


let lista = [Verdura1,Verdura2,Verdura3,Verdura4,Verdura5,Verdura6,Verdura7]


function filtrarVerduras(){

    let palabraClave = prompt("ingresa la Verdura que buscas").toUpperCase()
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))
}