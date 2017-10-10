var isValidCard = Function(array) ; {

      var isValidCard = parseInt(prompt('Ingresa tu numero de tarjeta')) //numero en string
         for(var i = 0; i<15; i++) {  // limite de espacios e inico e 0
            while(isValidCard(i)==' '){ //para prohibir espacios vacios(tab)
       result = prompt('Por favor ingresa el numero de su tarjeta sin espacio')
     }
                                   //volver a ingresar mi numero sin errores
       var array = isValidCard.split(' '); //pasando de string a array
          for(var j=0; j<array.length;j++){
       var item = array.reverse(j); {  //invertir el array

   for (var j=0; j<item.length; j+2){ //recorrer mi array en posiciones pares
        if(j*2); //multiplicando mis elementos pares x2

       var number1 = parseInt((item.length(j)>=10)/10) { //la base de mis numeros resultantes de la division entre 10
       var number2 = (j%10) { //el residuo de mis numeros de la resultante (al aplicarle modulo a mi numeros pares X2)
       var result2 = (number1+inumber2); // suma de mis numeros base y resudio, ejem: 3,5 3+5=8
}
       var result3 = ((add=item.length)%10===0)   //el residuo de 'la suma' de todos los elementos de mi array:item, divididos entre 10, debe ser 0, indicando la vaidacion de mi tarjeta de credito.
    }
       }
      return (isValidCard)
}
}
}
 isValidCard(1234567891234567)
     //console.log(isValidCard
