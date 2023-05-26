let menu
let contadorUno=0
let contadorDos=0
let contadorTres=0
let contadorCuatro=0
let contadorCinco=0
let contadorSeis=0

function menuInicio() {

    menu=parseInt(prompt("ingrese 1 para ordenar numeros , 2 para calcular area de un circulo , 3 para hallar el tipo de triangulo, 4 para saber si dos numeros son amigos , 5 para conocer el valor de una compra , 6 para saber si un estudiante gano una asignatura y 7 para finalizar")) 
    return menu   
}

menuInicio()

while (menu < 7) {
    if (menu==1) {

        contadorUno+=1
        let numUno=parseFloat(prompt("ingrese primero numero"))
        let numDos=parseFloat(prompt("ingrese segundo numero"))
        let numTres=parseFloat(prompt("ingrese tercer numero"))

        if (numUno>numDos && numUno>numTres && numDos>numTres){
            document.write( `el orden los numeros de mayor a menos es :${numUno},${numDos},${numTres} `)

            document.write( `el orden los numeros de menor a mayor es :${numTres},${numDos},${numUno} `)

            document.write("<br>")

            menuInicio()}

        else if  (numUno>numDos && numUno>numTres && numDos<numTres){
            document.write( `el orden los numeros de mayor a menos es :${numUno},${numTres},${numDos} `)

            document.write( `el orden los numeros de menor a mayor es :${numDos},${numTres},${numUno} `)

            document.write("<br>")
            
            menuInicio()}

        else if(numDos>numUno && numDos>numTres && numUno>numTres) {
            document.write( `el orden los numeros de mayor a menos es :${numDos},${numUno},${numTres} `)

            document.write( `el orden los numeros de menor a mayor es :${numTres},${numUno},${numDos} `)

            document.write("<br>")

            menuInicio()}

        else if(numDos>numUno && numDos>numTres && numUno<numTres) {
            document.write( `el orden los numeros de mayor a menos es :${numDos},${numTres},${numUno} `)

            document.write( `el orden los numeros de menor a mayor es :${numUno},${numTres},${numDos} `)

            document.write("<br>")

            menuInicio()}
        
        else if(numTres>numDos && numTres>numUno && numUno>numDos){
            document.write( `el orden los numeros de mayor a menos es :${numTres},${numUno},${numDos} `)

            document.write( `el orden los numeros de menor a mayor es :${numDos},${numUno},${numTres} `)

            document.write("<br>")

            menuInicio()}
        
        else if(numTres>numDos && numTres>numUno && numUno<numDos){
            document.write( `el orden los numeros de mayor a menos es :${numTres},${numDos},${numUno} `)

            document.write( `el orden los numeros de menor a mayor es :${numUno},${numDos},${numTres} `)

            document.write("<br>")
    
            menuInicio()}       
           
    } else if (menu==2) {

        
    } else if (menu==3) {
               
        
    } else if (menu==4) {

    } else if (menu==5) {
        
    } else if (menu==6) {

    } else { 
        
    }   
}