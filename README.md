*PSEUDOCODIGO
-->Pedir ingresar numero de tarjeta
-->Corregir numero de tarjeta con nuevo ingreso de numero correcto
-->Pasar de un string a un array (split)
-->Invertir el array (revere)
-->Multiplicar por dos (x2), solo las posiciones pares(index impares).
-->Sumar de elementos: de resultantes de la multiplicacion mayor o igual que 10 (Aplicar parseInt para obtener los primeros elementos del valor y modulo(%) para obtener los segundo elementos de la resultantes).
-->newArray= elemetos resultantes y almacenados
-->Validacion: suma de elementos %10 == 0
-->

README
*Ingresar los datos de la tarjeta mediante un prompt (Ingrese por favor su numero de tarjeta de credito),
*Condicionar que el ingreso de los numeros de la tarjeta de credito no tenga espacios vacios y que sea de tipo numerico, de modo contrario el programa lanzara otro prompt que pida un numero de tarjeta valido sin espacios.
*El ingreso del dato mediante en prompt es de tipo string o cadena de texto, este debera ser convertido a tipo array (arreglo), para luego poder invertir sus valores.(invertir valores mediante un reverse o un splice)
*Una vez invertido los valores, se multiplican por dos (x2) las posiciones pares o de index impares.
*El nuevo valor del elemento debera ser menor de 10, si cumple lo contrario (>=10), se sumará los elementos del valor, resultando un nuevo valor.
*Se reordenan los nuevos elementos del array, para aplicarle una suma a todos los elementos, el resultado de esta suma se debera dividir entre 10, y tendra como residuo igual a 0 para ser considerado TARJETA VALIDA.
