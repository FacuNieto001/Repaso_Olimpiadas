/*
Consigna:
Armar un programa que imprima una piramide de Mario Bros. El programa debe:
- Tomar como entrada la altura de la piramide  (int entre 2 y 8 inclusive).
- Imprimir dos semi piramides de la altura especificada con # que esten separadas por dos espacios.

     #  #
    ##  ##
   ###  ###
  ####  ####
 #####  #####
######  ######

*/

function Piramide(){

    const simbolo = "#";
    const espacio = "  ";
    const esp = "       ";
    let altura = 6;
    let contador = 0;

    for (i=0; i<=altura; i++) {
        contador = contador + 1;
        console.log(esp.slice(contador, -1) + simbolo.repeat(contador) + espacio + simbolo.repeat(contador))
        i = contador;
    }
}

Piramide();