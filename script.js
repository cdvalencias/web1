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

        contadorDos+=1
        const pi = 3.1416;
	    let area,radio;

	    radio = parseFloat(prompt("Ingresar el radio"));
	    area = pi*radio*radio;

        document.write(`el area del circulo es: ${area} `)
        document.write("<br>")

        menuInicio()
        
    } else if (menu==3) {
        contadorTres+=1
        let ladoUno=parseFloat(prompt("ingrese el valor del lado uno"))
        let ladoDos=parseFloat(prompt("ingrese el valor del lado dos"))
        let ladoTres=parseFloat(prompt("ingrese el valor del lado tres"))

        if (ladoUno==ladoDos && ladoDos==ladoTres) {

            document.write(`el tiangulo de lados  ${ladoUno}, ${ladoDos}, ${ladoTres} es equilatero `)
            document.write("<br>")

            menuInicio()}

        else if((ladoUno==ladoDos && ladoDos!=ladoTres)||(ladoDos==ladoTres && ladoTres!=ladoUno)||(ladoUno==ladoTres && ladoTres!=ladoDos)) {

            document.write(`el tiangulo de lados  ${ladoUno}, ${ladoDos}, ${ladoTres} es isosceles `)
            document.write("<br>")

            menuInicio()}
        
        else if(ladoUno!=ladoDos && ladoDos!=ladoTres && ladoUno!=ladoTres){

            document.write(`el tiangulo de lados  ${ladoUno}, ${ladoDos}, ${ladoTres} es escaleno `)
            document.write("<br>")

            menuInicio()}       
        
    } else if (menu==4) {
        contadorCuatro+=1
        let numeroUno=parseInt(prompt("ingrese primer numero"))
        let numeroDos=parseInt(prompt("ingrese segundo numero")) 
        let i = 1
        let suma1 = 0
        let j = 1
        let suma2 = 0

        while (i < numeroUno) {
           if(numeroUno % i==0){
                suma1 = suma1 + i
           }
           
           i = i + 1
        }

        while (j < numeroDos) {
            if(numeroDos % j==0){
                 suma2 = suma2 + j
            }

            j = j + 1
        }

        if (suma1 == numeroDos && suma2 == numeroUno){

            document.write(`los numeros  ${numeroUno} y  ${numeroDos} son amigos `)
            document.write("<br>")

            menuInicio()

        } else {

            document.write(`los numeros  ${numeroUno} y  ${numeroDos} no son amigos `)
            document.write("<br>")

            menuInicio()}

    } else if (menu==5) {
        contadorCinco+=1
        let cantidadProducto=parseInt(prompt("ingrese la cantidad de productos comprados"))
        let valorProducto=parseFloat(prompt("ingrese el valor unitario del producto"))
        let iva=(cantidadProducto*valorProducto*0.19)
        let valorCompra=(cantidadProducto*valorProducto)+iva
        let valorAPagar

        if(valorCompra>500000 && valorCompra<=1000000){
            valorAPagar=(cantidadProducto*valorProducto)

            console.log(`el valor de su compra es :${valorCompra}`)
            console.log(`el valor de su iva es :${iva}`)
            console.log("el iva se retorna a usted por que su compra fue superior a 500.000")
            console.log(`el valor a pagar es :${valorAPagar}`)

            menuInicio()

        }else if(valorCompra>1000000){

            valorAPagar=(cantidadProducto*valorProducto)-(cantidadProducto*valorProducto*0.10)
            
            console.log(`el valor de su compra es :${valorCompra}`)
            console.log(`el valor de su iva es :${iva}`)
            console.log("el iva se retorna a usted por que su compra fue superior a 500.000 y ademas se le hace un 10% de descuento sobre su compra por comprar mas de 1.000.000 ")
            console.log(`el valor a pagar es :${valorAPagar}`)

            menuInicio()

        }else{
            console.log(`el valor de su iva es :${iva}`)
            console.log(`el valor de su compra es :${valorCompra}`)
            

            menuInicio()

        }
        
    } else if (menu==6) {
        contadorSeis+=1
        let notaUno = parseFloat(prompt("ingrese nota uno "))
        let notaDos = parseFloat(prompt("ingrese nota dos "))
        let notaTres = parseFloat(prompt("ingrese nota tres "))
        let notaCuatro = parseFloat(prompt("ingrese nota cuatro "))

        let notaUnoIncremento
        let notaDosIncremento
        let notaTresIncremento

        let porcentajeNotaUno=notaUno*0.10
        let porcentajeNotaDos=notaDos*0.20
        let porcentajeNotaTres=notaTres*0.30
        let porcentajeNotaCuatro=notaCuatro*0.40

        let notaDefinitiva=0

        if (notaCuatro==5) {
            if (notaUno<=4) {
                notaUnoIncremento=Number(notaUno+1)
            }else{
                notaUnoIncremento=5
            }
            if (notaDos<=4) {
                notaDosIncremento=Number(notaDos+1)
            }else{
                notaDosIncremento=5
            }
            if (notaTres<=4) {
                notaTresIncremento=Number(notaTres+1)                
            }else{
                notaTresIncremento=5;
            }
            notaDefinitiva=(notaUnoIncremento*.10)+(notaDosIncremento*.20)+(notaTresIncremento*.30)+(notaCuatro*.40)

            console.log(`el valor nota definitiva :${notaDefinitiva}`)
            
                if (notaDefinitiva>3.5) {
                    console.log("aprobo la asignatura")
                }else{
                    console.log("no aprobo la asignatura")
                } 

                menuInicio()   

        }
        else{
            notaDefinitiva=porcentajeNotaUno+porcentajeNotaDos+porcentajeNotaCuatro+porcentajeNotaTres

            if (notaDefinitiva>3.5) {
                console.log("aprobo la asignatura")
            }else{
                console.log("no aprobo la asignatura")
            }
            menuInicio()
        }

    } else { 
        num=8   
    }   
}